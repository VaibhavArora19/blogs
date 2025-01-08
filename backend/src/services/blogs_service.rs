use graphql_client::{GraphQLQuery, Response};
use post_by_slug::PostBySlugPublication;
use posts_by_publication::PostsByPublicationPublication;

static HASHNODE_URL: &str = "https://gql.hashnode.com";

type DateTime = String;

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "graphql/schema.json",
    query_path = "graphql/query_1.graphql",
    response_derives = "Serialize, Debug"
)]
struct PostsByPublication;

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "graphql/schema.json",
    query_path = "graphql/query_2.graphql",
    response_derives = "Serialize, Debug"
)]
struct PostBySlug;

pub async fn get_blogs() -> Result<PostsByPublicationPublication, String> {
    let request_body = PostsByPublication::build_query(posts_by_publication::Variables {
        host: String::from("vaibhavarora.hashnode.dev"),
    });

    let client = reqwest::Client::new();

    let res = client.post(HASHNODE_URL).json(&request_body).send().await;

    let response: Response<posts_by_publication::ResponseData> = match res {
        Ok(ok_response) => ok_response,
        Err(error) => {
            println!("Error: {}", error);
            return Err(String::from("Failed to fetch response"));
        }
    }
    .json()
    .await
    .expect("Failed to parse response");

    let response_body = match response.data {
        Some(data) => data,
        None => {
            println!("Error: No data in response");
            return Err(String::from("No data in response!"));
        }
    };

    let publications = match response_body.publication {
        Some(publication) => publication,
        None => {
            println!("Error: No publication in response");
            return Err(String::from("No publication found in response!"));
        }
    };

    Ok(publications)
}

pub async fn get_blog(slug: String) -> Result<PostBySlugPublication, String> {
    let request_body = PostBySlug::build_query(post_by_slug::Variables {
        host: String::from("vaibhavarora.hashnode.dev"),
        slug,
    });

    let client = reqwest::Client::new();

    let res = client.post(HASHNODE_URL).json(&request_body).send().await;

    let response: Response<post_by_slug::ResponseData> = match res {
        Ok(ok_response) => ok_response,
        Err(error) => {
            println!("Error: {}", error);
            return Err(String::from("Failed to fetch response"));
        }
    }
    .json()
    .await
    .expect("Failed to parse response");

    let response_body = match response.data {
        Some(data) => data,
        None => {
            println!("Error: No data in response");
            return Err(String::from("No data in response!"));
        }
    };

    let publication = match response_body.publication {
        Some(publication) => publication,
        None => {
            println!("Error: No publication in response");
            return Err(String::from("No publication found in response!"));
        }
    };

    // let p = &publication.post.unwrap().cover_image.unwrap().url;

    Ok(publication)
}
