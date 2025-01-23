mod routes;
mod services;

extern crate dotenv;

use actix_web::{App, HttpServer};
use dotenv::dotenv;
use routes::blogs_route::{get_blog, get_blogs};
use std::env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    let port = match env::var("PORT") {
        Ok(val) => val.parse::<u16>().unwrap(),
        Err(_) => 8000,
    };

    return HttpServer::new(|| App::new().service(get_blog).service(get_blogs))
        .bind(("localhost", port))?
        .run()
        .await;
}

// cargo watch -c -w src -x run
