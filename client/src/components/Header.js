import React, { useState } from 'react'
import { Menu } from 'antd'
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    OrderedListOutlined,
    UserAddOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { SubMenu, Item } = Menu

const Header = () => {

    const [home, setHome] = useState('')
    const handleClick = (e) => {
        setHome(e.key)
    }
    return (
        <Menu onClick={handleClick} selectedKeys={[home]} mode="horizontal">
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to="/">Home</Link>
            </Item>


            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username" className="mr-auto">
                <Item key="setting:1">Option 1</Item>
                <Item key="setting:2">Option 2</Item>

            </SubMenu>

            <Item key="register" icon={<OrderedListOutlined />}>
                <Link to="/register">Registros</Link>
            </Item>

        </Menu>
    )

}

export default Header