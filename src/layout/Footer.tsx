import MenuFooter from "@/components/MenuFooter";
import mapImage from "@/assets/images/map.png";

function Footer() {
    return (
        <footer id="footer">
            <section className="footer__top">
                <div className="container">
                    <div className="footer__left">
                        <div className="footer__contact">
                            <h3 className="footer__title">Thông tin liên hệ</h3>

                            <ul className="footer__contact-list">
                                <li className="footer__contact-item">
                                    <div className="footer__contact-icon">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.1783 23.9788V28.2304C31.18 28.625 31.0991 29.0157 30.941 29.3774C30.7829 29.739 30.551 30.0636 30.2601 30.3304C29.9693 30.5973 29.6259 30.8004 29.252 30.9269C28.8781 31.0533 28.482 31.1003 28.0889 31.0647C23.728 30.5909 19.539 29.1007 15.8586 26.714C12.4344 24.5381 9.53129 21.635 7.35543 18.2108C4.96035 14.5137 3.46985 10.3044 3.00467 5.92383C2.96925 5.53193 3.01583 5.13696 3.14143 4.76404C3.26702 4.39113 3.4689 4.04845 3.73419 3.75784C3.99948 3.46722 4.32237 3.23502 4.68232 3.07603C5.04227 2.91704 5.43137 2.83474 5.82487 2.83437H10.0764C10.7642 2.8276 11.431 3.07115 11.9524 3.51962C12.4739 3.9681 12.8145 4.59089 12.9108 5.27193C13.0903 6.63252 13.423 7.96845 13.9028 9.25422C14.0935 9.76147 14.1348 10.3127 14.0217 10.8427C13.9087 11.3727 13.6461 11.8592 13.2651 12.2445L11.4653 14.0443C13.4827 17.5923 16.4204 20.53 19.9684 22.5474L21.7682 20.7476C22.1535 20.3666 22.64 20.104 23.17 19.991C23.7 19.8779 24.2512 19.9192 24.7585 20.1099C26.0443 20.5897 27.3802 20.9225 28.7408 21.1019C29.4292 21.199 30.0579 21.5458 30.5074 22.0762C30.9568 22.6067 31.1956 23.2838 31.1783 23.9788Z" stroke="white" stroke-width="2.83437" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="footer__contact-content">
                                        <h4 className="footer__contact-label">Điện thoại</h4>
                                        <p className="footer__contact-text">012 3456 789</p>
                                    </div>
                                </li>

                                <li className="footer__contact-item">
                                    <div className="footer__contact-icon">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.66836 5.6687H28.3434C29.9023 5.6687 31.1777 6.94417 31.1777 8.50308V25.5093C31.1777 27.0682 29.9023 28.3437 28.3434 28.3437H5.66836C4.10945 28.3437 2.83398 27.0682 2.83398 25.5093V8.50308C2.83398 6.94417 4.10945 5.6687 5.66836 5.6687Z" stroke="white" stroke-width="2.83437" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M31.1777 8.50317L17.0059 18.4235L2.83398 8.50317" stroke="white" stroke-width="2.83437" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="footer__contact-content">
                                        <h4 className="footer__contact-label">Email</h4>
                                        <p className="footer__contact-text">
                                            phongtran225@gmail.com
                                        </p>
                                    </div>
                                </li>

                                <li className="footer__contact-item">
                                    <div className="footer__contact-icon">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1012_929)">
                                                <path d="M29.7613 14.1719C29.7613 24.0922 17.0066 32.5954 17.0066 32.5954C17.0066 32.5954 4.25195 24.0922 4.25195 14.1719C4.25195 10.7892 5.59575 7.54496 7.98771 5.153C10.3797 2.76103 13.6239 1.41724 17.0066 1.41724C20.3894 1.41724 23.6336 2.76103 26.0256 5.153C28.4175 7.54496 29.7613 10.7892 29.7613 14.1719Z" stroke="white" stroke-width="2.83437" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M17.0064 18.4235C19.3545 18.4235 21.258 16.52 21.258 14.172C21.258 11.8239 19.3545 9.92041 17.0064 9.92041C14.6584 9.92041 12.7549 11.8239 12.7549 14.172C12.7549 16.52 14.6584 18.4235 17.0064 18.4235Z" stroke="white" stroke-width="2.83437" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1012_929">
                                                    <rect width="34.0125" height="34.0125" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="footer__contact-content">
                                        <h4 className="footer__contact-label">Địa chỉ từ đường</h4>
                                        <p className="footer__contact-text">
                                            Thôn 1, Xã Phú Vinh, Thành phố Huế
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__map">
                            <img src={mapImage} alt="Map" />
                        </div>
                    </div>

                    <div className="footer__right">
                        <div className="footer__register">
                            <h3 className="footer__title">
                                ĐĂNG KÝ Ở ĐÂY
                            </h3>
                            <div className="footer__form">
                                <div className="footer__form">
                                    <form className="form-base">
                                        <div className="form-base__group">
                                            <label className="form-base__label">Họ và tên</label>
                                            <input
                                                className="form-base__input"
                                                type="text"
                                                placeholder="Nhập Họ và tên"
                                            />
                                        </div>

                                        <div className="form-base__group">
                                            <label className="form-base__label">Số điện thoại</label>
                                            <input
                                                className="form-base__input"
                                                type="tel"
                                                placeholder="Nhập Số điện thoại"
                                            />
                                        </div>

                                        <div className="form-base__group">
                                            <label className="form-base__label">Email</label>
                                            <input
                                                className="form-base__input"
                                                type="email"
                                                placeholder="Nhập Email"
                                            />
                                        </div>

                                        <div className="form-base__group">
                                            <label className="form-base__label">Nội dung</label>
                                            <textarea
                                                className="form-base__textarea"
                                                placeholder="Nhập Nội dung"
                                                rows={3}
                                            />
                                        </div>

                                        <div className="form-base__actions">
                                            <button className="form-base__button button--primary">
                                                Gửi tin nhắn
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer__bottom">
                <div className="container">
                    <div className="footer__menu">
                        <MenuFooter />
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;