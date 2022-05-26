import * as React from "react";
import '../../styles/main-navbar.css'
import { slide as Menu } from 'react-burger-menu'

type MenuProps = {
    menuItems: MenuItem[]
}

type MenuItem = {
    title: string,
    href: string
}

const MobileMenu = ({
    menuItems
}: MenuProps) => {
    return (
        <div className="block md:hidden">
            <Menu right>
                {menuItems.map(menu => {
                    return (
                        <a className="menu-item" href={menu.href}>{menu.title}</a>
                    )
                })}
            </Menu>
        </div>
    )
}

export default MobileMenu