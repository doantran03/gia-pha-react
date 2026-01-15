import { Link } from "react-router-dom";
import ImageFamilyFoundation1 from '@/assets/images/family-foundation-1.jpg'
import ImageFamilyFoundation2 from '@/assets/images/family-foundation-2.jpg'
import ImageFamilyFoundation3 from '@/assets/images/family-foundation-3.jpg'
import "./style.scss";

function FamilyFoundation() {
    return (
        <section className="family-foundation">
            <div className="container">
                <h2 className="family-foundation__heading">
                    Công cha như núi Thái Sơn, <br/>Nghĩa mẹ như nước trong nguồn chảy ra
                </h2>
                <div className="family-foundation__list">
                    <div className="family-foundation__item">
                        <div className="family-foundation__item-thumb">
                            <Link to="/pha-do">
                                <img src={ImageFamilyFoundation1} alt="Phả Đồ" loading="lazy" />
                            </Link>
                        </div>
                        <div className="family-foundation__item-content">
                            <h3 className="family-foundation__item-title">
                                <Link to="/pha-do">
                                    Phả Đồ
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className="family-foundation__item">
                        <div className="family-foundation__item-thumb">
                            <Link to="/tu-duong">
                                <img src={ImageFamilyFoundation2} alt="Từ Đường" loading="lazy" />
                            </Link>
                        </div>
                        <div className="family-foundation__item-content">
                            <h3 className="family-foundation__item-title">
                                <Link to="/tu-duong">
                                    Từ Đường
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className="family-foundation__item">
                        <div className="family-foundation__item-thumb">
                            <Link to="/toc-uoc">
                                <img src={ImageFamilyFoundation3} alt="Tộc Ước" loading="lazy" />
                            </Link>
                        </div>
                        <div className="family-foundation__item-content">
                            <h3 className="family-foundation__item-title">
                                <Link to="/toc-uoc">
                                    Tộc Uớc
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FamilyFoundation;