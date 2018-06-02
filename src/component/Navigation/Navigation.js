import React from 'react'
import {Menu, Icon,} from 'antd';
import {Link} from 'react-router'

class Navigation extends React.Component {

    render() {
        return (
            <Menu mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/picture'>
                        <Icon type="picture" />
                        <span>Pictures</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/any'>
                        <Icon type="video-camera"/>
                        <span>any</span>
                    </Link>

                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload"/>
                    <span>nav 3</span>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navigation
