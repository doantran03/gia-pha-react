import NewsItem from "@/features/News/components/NewsItem";
import type { NewsType } from "@/types/news";

interface NewsListProps {
    items: NewsType[];
}

function NewsList({ items }: NewsListProps) {
    return (
        <div className="news__list">
            {items.map((item) => (
                <NewsItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default NewsList;
