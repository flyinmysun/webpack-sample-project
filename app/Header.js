/**
 * Created by Administrator on 2017/8/14.
 */
import React from 'react';

import "./Header.css"

export default class Header extends React.Component{
    /*static propTypes = {
        name: React.PropTypes.string.isRequired,
        attach: React.PropTypes.object.isRequired,
    };*/

    constructor(props){
        super(props)

        this.state = {
            name:props.name
        }
    }

    updateName(){
        this.setState({name:"2222"});
    }

    render(){
        const {name} = this.props;
        //const name = this.props.name;
        return <div className="header" style={{height:'50px'}}>
            {this.state.name}<br/>
            {this.props.age}
            <button onClick={()=>{
                this.updateName();
            }}>
                修改名字
            </button>
        </div>
    }
}
