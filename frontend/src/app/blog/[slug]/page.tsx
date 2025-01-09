import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "./mdx-components";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";
import { Text } from "@chakra-ui/react";
import Image from "next/image";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${slug}`, { cache: "no-cache" }); //!change this to force-cache in prod

  const data = JSON.parse(await res.json());

  const updatedContent = data.post.content.markdown.replace(/\s*align="center"/g, "") as string;

  return (
    <div className="mt-20">
      <div className="text-center">
        <Text className="font-bold" textStyle={"5xl"}>
          {data.post.title}
        </Text>
        <Text className="my-8 text-gray-400 font-medium" textStyle={"2xl"}>
          {new Date(data.post.publishedAt).toDateString() + " . " + data.post.readTimeInMinutes + " mins"}
        </Text>
        {data.post.coverImage?.url && (
          <Image src={data.post.coverImage?.url} alt={data.post.title} width={1000} height={100} className="flex justify-center my-8" unoptimized />
        )}
      </div>
      <div className="w-[85%] m-auto">
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
    </div>
  );
};

export default BlogPage;
