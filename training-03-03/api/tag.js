import { request } from "@/plugins/request.js"

export const getTags = (params) => {
  return request({
    url: "/api/tags",
    method: "Get",
    params,
  })
}
