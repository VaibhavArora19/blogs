use graphql_client::{GraphQLQuery, Response};
use reqwest::Error;

static HASHNODE_URL: &str = "https://gql.hashnode.com";

type DateTime = String;

#[derive(serde::Serialize, serde::Deserialize, GraphQLQuery)]
#[graphql(
    schema_path = "graphql/schema.json",
    query_path = "graphql/query_1.graphql",
    response_derives = "Serialize, Debug"
)]
struct PostsByPublication;

pub async fn get_blogs() -> Result<posts_by_publication::ResponseData, Error> {
    let request_body = PostsByPublication::build_query(posts_by_publication::Variables {
        host: String::from("vaibhavarora.hashnode.dev"),
    });

    let client = reqwest::Client::new();

    let res = client.post(HASHNODE_URL).json(&request_body).send().await;

    let response: Response<posts_by_publication::ResponseData> = match res {
        Ok(ok_response) => ok_response,
        Err(error) => {
            println!("Error: {}", error);
            return Err(error);
        }
    }
    .json()
    .await?;

    let response_body = response.data.unwrap();

    Ok(response_body)
}

pub async fn get_blog(id: String) {}
