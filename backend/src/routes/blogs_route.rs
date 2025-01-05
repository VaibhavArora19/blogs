use actix_web::{get, web::Json};

#[get("/blogs")]
async fn get_blogs() {}

#[get("/blogs/{id}")]
async fn get_blog() {}
