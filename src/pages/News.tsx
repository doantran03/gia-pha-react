import newsApi from "@/api/newsApi";
import NewsList from "@/features/News/components/NewsList";
import type { NewsType } from "@/types/news";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 9;

function News() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsApi.getNews({ page, per_page: PER_PAGE });

        setNews(response.data);
        setTotalPages(response.pagination.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [page]);

  return (
    <section className="page-news">
      <div className="container">
        <h2 className="news__heading section-heading">
          TIN TỨC DÒNG HỌ
        </h2>

        <NewsList items={news} />

        {totalPages > 1 && (
            <ReactPaginate
                pageCount={totalPages}
                forcePage={page - 1}
                onPageChange={(event) =>
                setPage(event.selected + 1)
                }
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                previousLabel="←"
                nextLabel="→"
                breakLabel="..."
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                activeClassName="active"
                disabledClassName="disabled"
            />
        )}
      </div>
    </section>
  );
}

export default News;
