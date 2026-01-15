import newsApi from "@/api/newsApi";
import NewsList from "@/features/News/components/NewsList";
import type { NewsType } from "@/types/news";
import { useEffect, useState } from "react";
import './style.scss';

function News() {
    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await newsApi.getNewsHome();

                setNews(response.data);
            } catch (err) {
                console.error(err);
            } 
        };

        fetchNews();
    }, []);

    return (
        <section className="news">
            <div className="container">
                <h1 className="news__heading section-heading">
                    TIN TỨC DÒNG HỌ
                </h1>
                <NewsList items={news} />
            </div>
        </section>
    );
}

export default News;