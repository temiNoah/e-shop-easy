import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/submenu.css";

const Dropdown = ({ submenus, title, toggleMenu }) => {
    // const [show, setShow] = useState(false)
    const ref = useRef();

    const addClass = () => { ref.current.classList.toggle("showOnSmallScreen") }

    return (
        <div className="menuItem">
            <span>{title}</span> <i class="ri-arrow-drop-down-line" style={{ marginLeft: "0px", position: 'absolute', top: '9%' }} onClick={addClass}></i>
            <ul className="dropdownMenus" ref={ref}>
                {submenus.map((submenu, index) => (
                    <li>
                        <NavLink
                            to={submenu.path}
                            className={(navClass) => {
                                //console.log(navClass)
                                return navClass.isActive ? "nav__active  nav__item" : "nav__item"
                            }
                            }
                            key={index}
                            onClick={() => { toggleMenu(); addClass() }}
                        >
                            {submenu.title}

                        </NavLink>
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default Dropdown;