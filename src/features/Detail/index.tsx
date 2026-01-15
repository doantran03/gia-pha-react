import { useParams } from "react-router-dom";
import './style.scss';
import { useEffect, useState } from "react";
import type { NewsType } from "@/types/news";
import axios from "axios";

function Detail() {
    const { slug } = useParams<{ slug: string }>();
    const [news, setNews] = useState<NewsType>();

    useEffect(() => {
        const fetchNew = async () => {
            try {
                const response = await axios.get(
                    `https://api-giapha.py-media.com/wp-json/gia-pha/v1/news/${slug}`
                );

                console.log(response.data);

                setNews(response.data.data);
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