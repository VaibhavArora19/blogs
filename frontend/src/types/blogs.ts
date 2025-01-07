export type TBlog = {
  node: {
    id: string;
    title: string;
    url: string;
    coverImage: {
      url: string | undefined;
    };
    publishedAt: string;
    slug: string;
    brief: string;
    readTimeInMinutes: number;
    tags: Array<{
      name: string;
    }>;
  };
};

export type TBlogsResponse = {
  id: string;
  posts: {
    edges: Array<TBlog>;
  };
};
