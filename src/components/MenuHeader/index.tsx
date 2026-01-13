import { NavLink } from "react-router-dom";
import "./style.scss";

function MenuHeader() {
    return (
        <ul className="menu__list">
            <li className="menu__item">
                <NavLink to="/" className="menu__link">Trang chủ</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/tin-tuc" className="menu__link">Tin tức</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/pha-do" className="menu__link">Phả đồ</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/tu-duong" className="menu__link">Từ đường</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to="/toc-uoc" className="menu__link">Tộc ước</NavLink>
            </li>
        </ul>
    );
}

export default MenuHeader;