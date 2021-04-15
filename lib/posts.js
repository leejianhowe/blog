import MarkdownIt from "markdown-it";
import { API } from "./api";
import remark from "remark";
import html from "remark-html";

export async function getSortedPostsData() {
  const result = await API("articles")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
  const filterResult = result.map((ele) => {
    const md = new MarkdownIt();
    const content = md.render(ele.content);
    // Combine the data with the id
    return {
      ...ele,
      content,
    };
  });
  return filterResult.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );
}

export async function getAllPostId() {
  const result = await API("articles")
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
  return result.map((ele) => ({ params: { id: ele.id } }));
}

export async function getPostContent(id) {
  const result = await API(`articles/${id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
  const processedContent = await remark().use(html).process(result.content);
  const contentHtml = processedContent.toString();
  return {
    ...result,
    content: contentHtml,
  };
}
