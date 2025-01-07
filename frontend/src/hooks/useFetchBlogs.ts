import { BLOGS } from "@/constants";
import { TBlog, TBlogsResponse } from "@/types/blogs";
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
