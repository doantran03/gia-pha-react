import { NavLink } from "react-router-dom";
import "./style.scss";

function MenuFooter() {
    return (
        <ul className="menu__list">
            <li className="menu__item">
                <NavLink to="/" className="menu__link">Trang chủ</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/gioi-thieu" className="menu__link">Giới thiệu</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/tin-tuc" className="menu__link">Tin tức</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/thu-vien-anh" className="menu__link">Thư viện ảnh</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/lien-he" className="menu__link">Liên hệ</NavLink>
            </li>
        </ul>
    );
}

export default MenuFooter;