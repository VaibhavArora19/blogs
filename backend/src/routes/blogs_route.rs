use actix_web::{get, web, HttpResponse};

use crate::services;

#[get("/blogs")]
async fn get_blogs() -> HttpResponse {
    let data = services::blogs_service::get_blogs().await;

    match data {
        Ok(data) => HttpResponse::Ok().json(serde_json::to_string(&data).unwrap()),
        Err(error) => HttpResponse::InternalServerError().body(error),
    }
}

#[get("/blogs/{slug}")]
async fn get_blog(slug: web::Path<String>) -> HttpResponse {
    let data = services::blogs_service::get_blog(slug.to_string()).await;

    match data {
        Ok(data) => HttpResponse::Ok().json(serde_json::to_string(&data).unwrap()),
        Err(error) => HttpResponse::InternalServerError().body(error),
    }
}
