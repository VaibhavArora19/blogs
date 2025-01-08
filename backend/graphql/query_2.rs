#![allow(clippy::all, warnings)]
pub struct PostBySlug;
pub mod post_by_slug {
    #![allow(dead_code)]
    use std::result::Result;
    pub const OPERATION_NAME: &str = "PostBySlug";
    pub const QUERY : & str = "query PostBySlug($host: String!, $slug: String!) {\r\n  publication(host: $host) {\r\n    post(slug: $slug) {\r\n      title\r\n      readTimeInMinutes\r\n      coverImage {\r\n        url\r\n      }\r\n      content {\r\n        markdown\r\n      }\r\n      publishedAt\r\n      updatedAt\r\n    }\r\n  }\r\n}\r\n" ;
    use super::*;
    use serde::{Deserialize, Serialize};
    #[allow(dead_code)]
    type Boolean = bool;
    #[allow(dead_code)]
    type Float = f64;
    #[allow(dead_code)]
    type Int = i64;
    #[allow(dead_code)]
    type ID = String;
    type DateTime = super::DateTime;
    #[derive(Serialize)]
    pub struct Variables {
        pub host: String,
        pub slug: String,
    }
    impl Variables {}
    #[derive(Deserialize)]
    pub struct ResponseData {
        pub publication: Option<PostBySlugPublication>,
    }
    #[derive(Deserialize)]
    pub struct PostBySlugPublication {
        pub post: Option<PostBySlugPublicationPost>,
    }
    #[derive(Deserialize)]
    pub struct PostBySlugPublicationPost {
        pub title: String,
        #[serde(rename = "readTimeInMinutes")]
        pub read_time_in_minutes: Int,
        #[serde(rename = "coverImage")]
        pub cover_image: Option<PostBySlugPublicationPostCoverImage>,
        pub content: PostBySlugPublicationPostContent,
        #[serde(rename = "publishedAt")]
        pub published_at: DateTime,
        #[serde(rename = "updatedAt")]
        pub updated_at: Option<DateTime>,
    }
    #[derive(Deserialize)]
    pub struct PostBySlugPublicationPostCoverImage {
        pub url: String,
    }
    #[derive(Deserialize)]
    pub struct PostBySlugPublicationPostContent {
        pub markdown: String,
    }
}
impl graphql_client::GraphQLQuery for PostBySlug {
    type Variables = post_by_slug::Variables;
    type ResponseData = post_by_slug::ResponseData;
    fn build_query(variables: Self::Variables) -> ::graphql_client::QueryBody<Self::Variables> {
        graphql_client::QueryBody {
            variables,
            query: post_by_slug::QUERY,
            operation_name: post_by_slug::OPERATION_NAME,
        }
    }
}
