use graphql_client::GraphQLQuery;

static HASHNODE_URL: &str = "https://gql.hashnode.com";

type DateTime = String;

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "graphql/schema.json",
    query_path = "graphql/query_1.graphql",
    response_derives = "Debug"
)]
struct PostsByPublication;

pub async fn get_blogs() {}

pub async fn get_blog(id: String) {}
