import React from 'react'
import {Layout} from "antd/lib/index";
//
const {Content} = Layout;


class Page extends React.Component {


    render() {
        return (
            <Content style={{margin: '24px 16px', padding: 24, background: '#fff'}}>
                {this.props.children?this.props.children:'没有子元素'}
            </Content>
        )
    }
}

export default Page
