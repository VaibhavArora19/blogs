use actix_web::{get, web, HttpResponse};

use crate::services;

#[get("/blogs")]
async fn get_blogs() -> HttpResponse {
    HttpResponse::Ok().json("data")
}

#[get("/blogs/{id}")]
async fn get_blog(id: web::Path<u32>) -> HttpResponse {
    services::blogs_service::get_blog(id.to_string()).await;

    HttpResponse::Ok().body("Hello, world!")
}
