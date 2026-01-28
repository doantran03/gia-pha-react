import axiosClient from "@/api/axiosClient";
import type { NewsType, NewsListResponse } from "@/types/news";

const newsApi = {
  getNews(params: { page: number; per_page: number }): Promise<NewsListResponse> {
    const url = "api/v1/posts";
    return axiosClient.get(url, { params });
  },

  getNewsHome() {
    const url = "api/v1/posts/home";
    return axiosClient.get<NewsType[]>(url);
  },

  getNewsDetail(slug: string) {
    const url = `api/v1/posts/${slug}`;
    return axiosClient.get<NewsType>(url);
  },
};

export default newsApi;
