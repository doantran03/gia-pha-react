import "./style.scss";

function Intro() {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__info">
                    <h2 className="intro__heading section-heading">
                        Giới Thiệu Họ Trần
                    </h2>
                    <p className="intro__desc">
                        Your content goes here. Edit or remove this text inline or in the module Content settings. Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings. Your content goes here. Edit or remove this text inline or in the module Content settings.
                    </p>
                    <a href="#" className="intro__cta button button--outline">
                        TÌM HIỂU THÊM
                    </a>
                </div>

                <div className="intro__counters">
                    <div className="intro__counter-list">
                        <div className="counter-item">
                            <div className="counter-item__value">
                                <h3 className="counter-item__number">300</h3>
                                <span className="counter-item__suffix">+</span>
                            </div>
                            <p className="counter-item__label">NĂM LỊCH SỬ</p>
                        </div>

                        <div className="counter-item">
                            <div className="counter-item__value">
                                <h3 className="counter-item__number">12</h3>
                            </div>
                            <p className="counter-item__label">THẾ HỆ</p>
                        </div>

                        <div className="counter-item">
                            <div className="counter-item__value">
                                <h3 className="counter-item__number">500</h3>
                                <span className="counter-item__suffix">+</span>
                            </div>
                            <p className="counter-item__label">THÀNH VIÊN</p>
                        </div>

                        <div className="counter-item">
                            <div className="counter-item__value">
                                <h3 className="counter-item__number">10</h3>
                            </div>
                            <p className="counter-item__label">CHI NHÁNH</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
