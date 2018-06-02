import React from 'react'
import {Upload, Icon, message} from 'antd';
import {urlPre} from '../../../common'

const Dragger = Upload.Dragger;



class PictureUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.uploadPicture=this.uploadPicture.bind(this);
    }

    uploadPicture = (info) => {

        let data = new FormData();
        data.append('file', info.file);
        data.append('name', 'file');
        const then_GetPicture_List = this.props.then_GetPicture_List;
        const option = {
            method: 'POST',
            mode: 'cors',
            body: data
        };

        fetch(`${urlPre}/uploadPicture`, option)
            .then((res) => {
                if (res.status === 200 && res.statusText === 'OK') {
                    message.success('上传成功');
                    then_GetPicture_List();
                }
                return res.text()
            }, (err) => {
                message.error('上传出现错误');
            }).then((data) => {

        })
    };
    Dragger_props = {
        name: 'file',
        multiple: true,
        beforeUpload: () => false,
        // onChange(info) {
        //     this.uploadPicture(info);
        // },
    };
    render() {
        return <Dragger {...this.Dragger_props} onChange={(info)=>this.uploadPicture(info)} >
            <p className="ant-upload-drag-icon">
                <Icon type="inbox"/>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company
                data or other band files</p>
        </Dragger>
    }
}

export default PictureUpload
