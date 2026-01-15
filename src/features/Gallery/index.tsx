import img1 from "@/assets/images/gallery-1.jpg";
import img2 from "@/assets/images/gallery-2.jpg";
import img3 from "@/assets/images/gallery-3.jpg";
import img4 from "@/assets/images/gallery-4.jpg";
import img5 from "@/assets/images/gallery-5.jpg";
import "./style.scss";

const images = [img1, img2, img3, img4, img5];

function Gallery() {
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery__heading section-heading">THƯ VIỆN ẢNH</h2>
                <div className="gallery__masonry">
                    {images.map((src, index) => (
                        <div className="gallery__item" key={index}>
                            <img src={src} alt={`gallery-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
