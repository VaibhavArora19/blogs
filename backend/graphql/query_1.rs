#![allow(clippy::all, warnings)]
pub struct PostsByPublication;
pub mod posts_by_publication {
    #![allow(dead_code)]
    use std::result::Result;
    pub const OPERATION_NAME: &str = "PostsByPublication";
    pub const QUERY : & str = "query PostsByPublication($host: String!) {\r\n  publication(host: $host) {\r\n    id\r\n    posts(first: 50) {\r\n      edges {\r\n        node {\r\n          id\r\n          title\r\n          url\r\n          readTimeInMinutes\r\n          coverImage {\r\n            url\r\n          }\r\n          tags {\r\n            name\r\n          }\r\n          publishedAt\r\n          slug\r\n          brief\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n" ;
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
    }
    impl Variables {}
    #[derive(Deserialize)]
    pub struct ResponseData {
        pub publication: Option<PostsByPublicationPublication>,
    }
    #[derive(Deserialize)]
    pub struct PostsByPublicationPublication {
        pub id: ID,
        pub posts: PostsByPublicationPublicationPosts,
    }
    #[derive(Deserialize)]
    pub struct PostsByPublicationPublicationPosts {
        pub edges: Vec<PostsByPublicationPublicationPostsEdges>,
    }
    #[derive(Deserialize)]
    pub struct PostsByPublicationPublicationPostsEdges {
        pub node: PostsByPublicationPublicationPostsEdgesNode,
    }
    #[derive(Deserialize)]
    pub struct PostsByPublicationPublicationPostsEdgesNode {
        pub id: ID,
        pub title: String,
        pub url: String,
        #[serde(rename = "readTimeInMinutes")]
        pub read_time_in_minutes: Int,
        #[serde(rename = "coverImage")]
        pub cover_image: Option<PostsByPublicationPublicationPostsEdgesNodeCoverImage>,
        pub tags: Option<Vec<PostsByPublicationPublicationPostsEdgesNodeTags>>,
        #[serde(rename = "publishedAt")]
        pub published_at: DateTime,
        pub slug: String,
        pub brief: String,
    }
    #[derive(Deserialize)]
    pub struct PostsByPublicationPublicationPostsEdgesNodeCoverImage {
        pub url: String,
    }
    #[derive(Deserialize)]
    pub struct PostsByPublicationPublicationPostsEdgesNodeTags {
        pub name: String,
    }
}
impl graphql_client::GraphQLQuery for PostsByPublication {
    type Variables = posts_by_publication::Variables;
    type ResponseData = posts_by_publication::ResponseData;
    fn build_query(variables: Self::Variables) -> ::graphql_client::QueryBody<Self::Variables> {
        graphql_client::QueryBody {
            variables,
            query: posts_by_publication::QUERY,
            operation_name: posts_by_publication::OPERATION_NAME,
        }
    }
}
