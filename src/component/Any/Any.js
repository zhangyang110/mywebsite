import React from 'react'
import {connect} from 'react-redux'

class Any extends React.Component {


    render() {
        return (
            <div>
                Any
                <br/>
                <br/>

                {this.props.num}
                <br/>

                {console.log(this.props)}
                <br/>
                <button onClick={this.props.addClick}>++++++</button>
                <br/>
                <button onClick={this.props.subClick}>------</button>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {num: state.countReducer.num}
};
const mapDispatchToProps = (dispatch) => {
    return {
        addClick: () => {
            dispatch({
                type: 'ADD',
                text:1
            })
        },
        subClick:()=>{
            dispatch({
                type:'SUB',
                text:1
            })
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Any)
