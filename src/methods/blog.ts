import http from '@/utils/request';
export const addBlog = (param: Record<string, any>) => http.post("beans/Blogs/addBlog", param)
export const getTags = () => http.get("beans/tags/queryTags")
export const addTags = (param: Record<string, any>) => http.post("beans/tags/addTags", param)
