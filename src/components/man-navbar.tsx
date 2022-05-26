import * as React from 'react'
import { PageProps } from 'gatsby'
import DesktopMenu from "./menu/desktop-menu";
import MobileMenu from "./menu/mobile-menu";

const menuItems = [
    {
        title: 'Let Hello James',
        href: '#'
    },
    {
        title: 'Experience & Work',
        href: '#'
    },
    {
        title: 'Project',
        href: '#'
    },
    {
        title: 'Connect',
        href: '#'
    }
]



const MainNavbar: React.FC<PageProps<any>> = () => {
    return (
        <>
            <DesktopMenu menuItems={menuItems} />
            <MobileMenu menuItems={menuItems} />
        </>
    )
}

export default MainNavbar