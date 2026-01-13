import ImageNew from '@/assets/images/events-1.jpg';
import "./style.scss";

function News() {
    return (
        <section className="news">
            <div className="container">
                <h2 className="news__heading section-heading">
                    TIN TỨC DÒNG HỌ
                </h2>
                <div className="news__list">
                    <div className="news__item">
                        <div className="news__item-thumb">
                            <img src={ImageNew} alt="thumb" />
                        </div>
                        <div className="news__item-content">
                            <h3 className="news__item-title">
                                Phả ký
                            </h3>
                            <p className="news__item-desc">
                                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this 
                            </p>
                            <a href="#" className="news__item-cta button button--outline button--small">
                                TÌM HIỂU THÊM
                            </a>
                        </div>
                    </div>
                    <div className="news__item">
                        <div className="news__item-thumb">
                            <img src={ImageNew} alt="thumb" />
                        </div>
                        <div className="news__item-content">
                            <h3 className="news__item-title">
                                Phả ký
                            </h3>
                            <p className="news__item-desc">
                                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this 
                            </p>
                            <a href="#" className="news__item-cta button button--outline button--small">
                                TÌM HIỂU THÊM
                            </a>
                        </div>
                    </div>
                    <div className="news__item">
                        <div className="news__item-thumb">
                            <img src={ImageNew} alt="thumb" />
                        </div>
                        <div className="news__item-content">
                            <h3 className="news__item-title">
                                Phả ký
                            </h3>
                            <p className="news__item-desc">
                                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this 
                            </p>
                            <a href="#" className="news__item-cta button button--outline button--small">
                                TÌM HIỂU THÊM
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;