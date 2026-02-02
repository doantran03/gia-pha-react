import axiosClient from "@/api/axiosClient";
import type { GalleryType } from "@/types/gallery";
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

  getGallery() {
    const url = "api/v1/posts/gallery";
    return axiosClient.get<GalleryType[]>(url);
  },

  getNewsDetail(slug: string | undefined) {
    const url = `api/v1/posts/${slug}`;
    return axiosClient.get<NewsType>(url);
  },
};

export default newsApi;
