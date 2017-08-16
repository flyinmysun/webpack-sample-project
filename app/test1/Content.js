/**
 * Created by Administrator on 2017/8/14.
 */
import React from "react"
import "./Content.css"

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};

    }

    updateCount(){
        this.setState({
            count: ++this.state.count
        });
    }

    render(){
        return <div className="content">
            <p style={{fontSize:"26px"}}>count</p>
            <p>{this.state.count}</p>
            <button onClick={()=>{
                this.updateCount();
            }}>点我加1</button>
        </div>
    }
}
