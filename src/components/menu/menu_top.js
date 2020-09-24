import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faAngleLeft,
    faShoppingCart,
    faBookOpen,
    faCog,
    faHamburger,
    faListAlt,
    faTh
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
//css
// import './style.css';
import '../../styles/menu/menu_top.css';
import logo from '../../logo_instafood.png'; 

const MenuTop = () => {
    let switchMenuInit = true;
    const [switchMenu, setSwitchMenu] = useState(switchMenuInit);

    const switchHandler = () => {
        return setSwitchMenu(!switchMenu);
    }

    const fas = [
        faTh,
        faShoppingCart,
        faListAlt,
        faBookOpen,
        faHamburger,
        faCog
    ];

    const menuStore = useSelector(state => state.menuBaseTop);

    return (
        <div className="menu">
            <div className={switchMenu ? "menu-blank" : ""}>
                <article>
                    <FontAwesomeIcon icon={faAngleLeft} className="f-gray" />
                </article>
            </div>
            <div className="menu-top">
                <article className="menu-top__left">
                    <span onClick={switchHandler}>
                        <FontAwesomeIcon icon={faBars} className="f-blue" />
                        <img src={logo}/>
                    </span>
                </article>
                <article className="menu-top__right"> <span>profile</span></article>
            </div>
            <nav className={switchMenu ? "menu-side" : ""}>
                <ul>
                    {
                        menuStore.map((option, i) => {
                            return (
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={fas[i]} className="f-blue" />
                                        <span>{option.item}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className={switchMenu ? "menu-content" : ""}>

            </div>
        </div>

    );
};

export default MenuTop;
