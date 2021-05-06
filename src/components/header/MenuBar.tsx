import React, { useState } from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'
import LogoHeader from '../../assets/img/logoMenu.svg';

enum MenuItems {
    Home = 'Home',
    Product = 'Product',
    Faq = 'Faq',
    Contact = 'Contact'
}

export const MenuBar = () => {

    const [activeItem, setActiveItem] = useState<MenuItems | any>(MenuItems.Home);

    const handleMenuItemChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }:MenuItemProps) => {
        setActiveItem(name)
    }
    return (
        <>
            <Menu text >
                <img src={LogoHeader} height="100px" style={{marginLeft: 80, paddingLeft:10}}  alt="LogoHeader"/>
                <Menu.Menu position="right" className="pr-4" >
                    <Menu.Item 
                        name={MenuItems.Home}
                        onClick={handleMenuItemChange}
                        color="orange"
                        active={ activeItem === MenuItems.Home }
                        className="mx-5"
                    />
                    <Menu.Item 
                        color="orange"
                        name={ MenuItems.Product }
                        onClick={handleMenuItemChange}
                        active={ activeItem === MenuItems.Product }
                        className="mx-5"
                    />
                    <Menu.Item 
                        name={ MenuItems.Faq }
                        onClick={handleMenuItemChange}
                        active={ activeItem === MenuItems.Faq }
                        color="orange"
                        className="mx-5"
                    />
                    <Menu.Item 
                        name={ MenuItems.Contact }
                        onClick={handleMenuItemChange}
                        active={ activeItem === MenuItems.Contact }
                        color="orange"
                        className="mx-5"
                    />
                </Menu.Menu>
            </Menu>
        </>
    )
}
