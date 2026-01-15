import axiosClient from "@/api/axiosClient";
import type { NewsType, NewsListResponse } from "@/types/news";

const newsApi = {
  getNews(params: { page: number; per_page: number }): Promise<NewsListResponse> {
    const url = "wp-json/gia-pha/v1/news";
    return axiosClient.get(url, { params });
  },

  getNewsHome() {
    const url = "wp-json/gia-pha/v1/news/home";
    return axiosClient.get<NewsType[]>(url);
  },

  getNewsDetail(slug: string) {
    const url = `wp-json/gia-pha/v1/news/${slug}`;
    return axiosClient.get<NewsType>(url);
  },
};

export default newsApi;
