import MenuHeader from "@/components/MenuHeader";
import Rong1 from "@/assets/images/rong-1.png";
import DongHo from "@/assets/images/dong-ho.png";
import Rong2 from "@/assets/images/rong-2.png";

function Header() {
    return (
        <header id="header">
            <section className="header__top">
                <div className="container">
                    <div className="header__banner">
                        <img className="header__banner-dragon" src={Rong1} alt="Rong 1" />
                        <img className="header__banner-main" src={DongHo} alt="Dong Ho" />
                        <img className="header__banner-dragon" src={Rong2} alt="Rong 2" />
                    </div>
                </div>
            </section>
            <section className="header__bottom">
                <div className="container">
                    <MenuHeader />                    
                </div>
            </section>
        </header>
    );
}

export default Header;