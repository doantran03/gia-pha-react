export interface NewsType {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string;
}

export interface NewsPagination {
  current_page: number;
  per_page: number;
  total_posts: number;
  total_pages: number;
}

export interface NewsListResponse {
  data: NewsType[];
  pagination: NewsPagination;
}
