import React from 'react'
import {Table} from 'antd';
import {urlPre} from '../../../common'


const columns = [{
    title: 'Picture',
    dataIndex: 'path',
    render:(record)=>{
        console.log(record);
        return (<img src={`${urlPre}/${record}`} alt="" style={{width:40,height:40}}/>)
    }
}, {
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Created',
    dataIndex: 'created',
},];

// const data = [];
// for (let i = 0; i < 20; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }

class PictureList extends React.Component {

    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.props.data }/>
            </div>
        );
    }
}

export default PictureList
