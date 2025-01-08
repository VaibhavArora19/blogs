import { BLOGS } from "@/constants";
import { TBlog, TBlogResponse, TBlogsResponse } from "@/types/blogs";
import axios from "axios";
import { useQuery } from "react-query";

export const useFetchBlogs = () => {
  const fetchBlogs = async () => {
    const { data } = await axios.get<string>("/blogs");

    const response: TBlogsResponse = JSON.parse(data);

    const blogs = response.posts.edges.map((blog: TBlog) => blog.node);

    return blogs;
  };

  return useQuery({
    queryKey: [BLOGS.GET_BLOGS],
    queryFn: fetchBlogs,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useFetchBlog = (slug: string) => {
  const fetchBlog = async () => {
    if (!slug) return;

    const { data } = await axios.get<string>("/blogs/" + slug);

    const response: TBlogResponse = JSON.parse(data);

    console.log("response: ", response);
    return response.post;
  };

  return useQuery({
    enabled: !!slug,
    queryKey: [BLOGS.GET_BLOG, slug],
    queryFn: fetchBlog,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
