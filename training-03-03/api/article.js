import { request } from "@/plugins/request.js"

export const getArticles = (params) => {
  return request({
    url: "/api/articles",
    method: "Get",
    params,
  })
}

export const getFeedArticles = (params) => {
  return request({
    url: "/api/articles/feed",
    method: "Get",
    params,
  })
}

export const addFavorite = (slug) => {
  return request({
    method: "POST",
    url: `/api/articles/${slug}/favorite`,
  })
}

export const deleteFavorite = (slug) => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`,
  })
}

export const getArticle = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}`,
  })
}

export const createArticle = (data) => {
  return request({
    method: "POST",
    url: "/api/articles",
    data,
  })
}

export const getComments = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}/comments`,
  })
}

export const addComment = (data, slug) => {
  return request({
    method: "POST",
    url: `/api/articles/${slug}/comments`,
    data,
  })
}
