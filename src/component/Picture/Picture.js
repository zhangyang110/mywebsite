import React from 'react'
import {connect} from 'react-redux'
import {Tabs} from 'antd';
import PictureList from './PictureList'
import PictureUpload from "./PictureUpload";
import {urlPre} from "../../common";
import {message} from "antd";

const TabPane = Tabs.TabPane;


class Picture extends React.Component {

    GetPicture_List = () => {
        const that = this;
        const option = {
            method: 'GET',
            mode: 'cors',
        };

        fetch(`${urlPre}/getAllPictures`, option)
            .then((res) => {
                return res.text()
            })
            .then(data => {
                that.props.dispatch({type: 'UPDATE_PICTURELIST', payload: data})
            })
    };

    componentDidMount() {
        this.GetPicture_List();
    }


    render() {
        return (
            <div>
                {this.props.num}
                <Tabs>
                    <TabPane tab="Picture List" key="1">
                        <PictureList data={eval(this.props.pictureList)}/>
                    </TabPane>

                    <TabPane tab="Picture Upload" key="2">
                        <PictureUpload then_GetPicture_List={this.GetPicture_List}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        num: state.countReducer.num,
        pictureList: state.pictureListReducer.allPictures
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: ({payload}) => {
            dispatch({
                type: 'UPDATE_PICTURELIST',
                payload,
            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Picture)
