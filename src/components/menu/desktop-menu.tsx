import * as React from "react";

type MenuProps = {
    menuItems: MenuItem[]
}

type MenuItem = {
    title: string,
    href: string
}

const DesktopMenu = ({ menuItems }: MenuProps) => {
    return (
        <nav className="hidden md:flex w-full justify-end items-center flex-row gap-y-2 gap-x-4 p-8">
            { menuItems.map(menu => {
                return (
                    <a href={menu.href}>{menu.title}</a>
                )
            }) }
        </nav>
    )
}

export default DesktopMenu