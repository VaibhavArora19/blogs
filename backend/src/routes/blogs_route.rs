use actix_web::{get, web, HttpResponse};

use crate::services;

#[get("/blogs")]
async fn get_blogs() -> HttpResponse {
    let data = services::blogs_service::get_blogs()
        .await
        .unwrap()
        .publication
        .unwrap();

    HttpResponse::Ok().json(serde_json::to_string(&data).unwrap())
}

#[get("/blogs/{id}")]
async fn get_blog(id: web::Path<u32>) -> HttpResponse {
    services::blogs_service::get_blog(id.to_string()).await;

    HttpResponse::Ok().body("Hello, world!")
}
