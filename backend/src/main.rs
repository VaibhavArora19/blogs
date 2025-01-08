mod routes;
mod services;

use actix_web::{App, HttpServer};
use routes::blogs_route::{get_blog, get_blogs};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    return HttpServer::new(|| App::new().service(get_blog).service(get_blogs))
        .bind(("localhost", 8000))?
        .run()
        .await;
}

// cargo watch -c -w src -x run