import React, {Component} from 'react';
import {Layout,Icon} from 'antd';
import './App.less';
import {Navigation,Page} from './component'
const {Header, Sider} = Layout;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
        // this.fetchDorm = this.fetchDorm.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    // fetchDorm = () => {
    //     console.log('执行点击事件');
    //     fetch("http://localhost:3000/health/fetchdorm")
    //         .then((result) => {
    //             console.log('result 返回');
    //             return result.text()
    //         }, (err) => {
    //             console.log(err);
    //         }).then((data) => {
    //         console.log(data);
    //     })
    // };

    toggle(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }


    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className='mypic'>
                        <img
                            src='http://r.photo.store.qq.com/psb?/V135abap30HmVS/apPjxrd0YmYstqTcEyhTTxDxf0.PshpmjdU3d.xfu2U!/r/dCEBAAAAAAAA'
                            alt="sdfsfsf"
                            className={!this.state.collapsed ? 'weimg' : 'collapsedImg'}
                        />
                    </div>
                    <Navigation />
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={ this.toggle }
                        />
                    </Header>
                    <Page >
                        {this.props.children}
                    </Page>
                </Layout>
            </Layout>
        );
    }
}

export default App;
