import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "./mdx-components";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${slug}`);

  const data = JSON.parse(await res.json());

  const updatedContent = data.post.content.markdown.replace(/\s*align="center"/g, "") as string;

  return (
    <div>
      <MDXRemote
        source={updatedContent}
        components={MDXComponents}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            rehypePlugins: [
              [
                //@ts-expect-error - ignore missing
                rehypeHighlight,
                {
                  detect: false,
                  ignoreMissing: true,
                },
              ],
            ],
            remarkPlugins: [remarkBreaks],
          },
        }}
      />
    </div>
  );
};

export default BlogPage;
