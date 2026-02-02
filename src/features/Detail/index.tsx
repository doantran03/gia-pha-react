import type { NewsType } from "@/types/news";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newsApi from "@/api/newsApi";
import './style.scss';

function Detail() {
    const { slug } = useParams<{ slug: string }>();
    const [news, setNews] = useState<NewsType>();

    useEffect(() => {
        const fetchNew = async () => {
            try {
                const response = await newsApi.getNewsDetail(slug);

                setNews(response.data);
            } catch (err) {
                console.error(err);
            } 
        }

        fetchNew()
    }, [slug])

    return (
        <section className="page-detail">
            <div className="container">
                <h1 className="page-detail__heading section-heading">{news?.title}</h1>
                <div className="page-detail__content"
                    dangerouslySetInnerHTML={{ __html: news?.content || "" }}
                />
            </div>
        </section>
    );
}

export default Detail;