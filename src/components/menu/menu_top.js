import React from 'react';
import { useSelector } from 'react-redux';
//css
import '../../styles/menu/menu_top.css';


const MenuTop = () => {
    const menuStore = useSelector(state => state.menuBaseTop);

    return (
        <nav>
            <article className="menu-top">
                <input type="checkbox" id="btn_menu" />
                <label for="btn_menu"><i className="fas fa-bars"></i> [+]</label>
                {/* <div className="menu-top--main">
                    <div className="menu-top--main-left">
                        <span>instafood</span>
                    </div>
                    <div className="menu-top--main-right">
                        <div>
                            <span>sarawak spice</span>
                            <span>open</span>
                        </div>
                    </div>
                </div> */}
                <div className="menu-top--left">
                    <ul>
                        {
                            menuStore.map((option, i) => {
                                return (
                                    <li key={i}><i></i> <span><a href={option.url}>{option.item}</a></span></li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* <div className="menu-top--right">
                    <span>instafood</span>
                </div> */}
            </article>
        </nav>
    );
};

export default MenuTop;
