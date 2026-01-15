import type { NewsType } from "@/types/news";
import { Link } from "react-router-dom";

interface NewsItemProps {
    item: NewsType;
}

function NewsItem({ item }: NewsItemProps) {
    return (
        <div className="news__item">
            <div className="news__item-thumb">
                <Link to={`/tin-tuc/${item.slug}`}>
                    <img src={item.thumbnail} alt={item.title} loading="lazy" />
                </Link>
            </div>
            <div className="news__item-content">
                <h3 className="news__item-title">
                    <Link to={`/tin-tuc/${item.slug}`}>
                        {item.title}
                    </Link>
                </h3>
                <p className="news__item-desc">{item.excerpt}</p>
                <Link to={`/tin-tuc/${item.slug}`} className="news__item-cta button button--outline button--small">
                    TÌM HIỂU THÊM
                </Link>
            </div>
        </div>
    );
}

export default NewsItem;