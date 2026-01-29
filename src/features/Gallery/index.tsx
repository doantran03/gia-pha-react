import type { GalleryType } from "@/types/gallery";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newsApi from "@/api/newsApi";
import "./style.scss";

function Gallery() {
    const [gallery, setGallery] = useState<GalleryType[]>([]);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await newsApi.getGallery();

                setGallery(response.data);
            } catch (err) {
                console.error(err);
            } 
        };

        fetchGallery();
    }, []);

    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery__heading section-heading">THƯ VIỆN ẢNH</h2>
                <div className="gallery__masonry">
                    {gallery.map((item) => (
                        <div className="gallery__item" key={item.id}>
                            <Link to={`/posts/${item.slug}`}>
                                <img src={item.featured_image} alt={item.title} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
