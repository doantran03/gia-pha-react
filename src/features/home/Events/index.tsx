import ImageEvent1 from '@/assets/images/events-1.jpg';
import ImageEvent2 from '@/assets/images/events-2.jpg';
import ImageEvent3 from '@/assets/images/events-3.jpg';
import "./style.scss";

function Events() {
    return (
        <section className="events">
            <div className="container">
                <h2 className="events__heading">
                    Công cha như núi Thái Sơn, <br/>Nghĩa mẹ như nước trong nguồn chảy ra
                </h2>
                <div className="events__list">
                    <div className="events__item">
                        <div className="events__item-thumb">
                            <img src={ImageEvent1} alt="thumb" />
                        </div>
                        <div className="events__item-content">
                            <h3 className="events__item-title">
                                Phả ký
                            </h3>
                            <p className="events__item-desc">
                                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this 
                            </p>
                            <a href="#" className="events__item-cta button button--outline button--small">TÌM HIỂU THÊM</a>
                        </div>
                    </div>
                    <div className="events__item">
                        <div className="events__item-thumb">
                            <img src={ImageEvent2} alt="thumb" />
                        </div>
                        <div className="events__item-content">
                            <h3 className="events__item-title">
                                Phả ký
                            </h3>
                            <p className="events__item-desc">
                                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this 
                            </p>
                            <a href="#" className="events__item-cta button button--outline button--small">TÌM HIỂU THÊM</a>
                        </div>
                    </div>
                    <div className="events__item">
                        <div className="events__item-thumb">
                            <img src={ImageEvent3} alt="thumb" />
                        </div>
                        <div className="events__item-content">
                            <h3 className="events__item-title">
                                Phả ký
                            </h3>
                            <p className="events__item-desc">
                                Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this 
                            </p>
                            <a href="#" className="events__item-cta button button--outline button--small">TÌM HIỂU THÊM</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;