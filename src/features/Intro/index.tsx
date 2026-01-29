import { Link } from "react-router-dom";
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
                        Họ Trần khai canh làng Hà Thanh có nguồn gốc do ngài Trần Văn Nước, con của ngài Trần Văn Gạt, là hậu duệ đời thứ 13 của Đức vua Trần Hưng Đạo. Ngài gốc là người Hiền Lương, huyện Hậu Lộc, tỉnh Thanh Hoá.
                    </p>
                    <p className="intro__desc">Đầu năm Mậu Ngọ 1558, theo lời kêu gọi của chúa Nguyễn Hoàng, lúc đó ông đang giữ chức vụ Thái Bảo Tước Đoan Quốc Công thời Lê – Trịnh. Ông là em của ông Nguyễn Vông, con của ông Nguyễn Kim lúc bấy giờ ông là cái gai trong mắt của Trịnh Kiểm, vì sợ hậu hoạ về sau, biết rõ việc ấy nên ông muốn lánh khỏi kinh đô để bảo toàn tính mạng và ông đã xin chúa Trịnh vua Lê được vào trấn thủ vùng Thuận Hoá, bởi vì vùng này lúc bấy giờ còn heo lành, núi rừng lam chướng và là nơi quân Mạc đang ẩn náu, chúa Trịnh đã đề nghị và được vua Lê đồng ý.</p>
                    <Link to="/toc-uoc" className="intro__cta button button--outline">
                        TÌM HIỂU THÊM
                    </Link>
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
