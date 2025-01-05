mod routes;
mod services;

use actix_web::{App, HttpServer};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    return HttpServer::new(|| App::new())
        .bind(("localhost", 8000))?
        .run()
        .await;
}
