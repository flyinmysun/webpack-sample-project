/**
 * Created by Administrator on 2017/8/14.
 */
import React from "react"
import "./Footer.css"

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[
                {id:1,name:"长沙"},
                {id:2,name:"怀化"},
                {id:3,name:"上海"}
            ],
            selectId:props.selectId
        }
    }

    change =(index)=>{
        this.props.tip(index);
        this.setState({selectId:index});
    }
    /*change(index){
        this.setState({selectId:index})
    }*/

    render(){
        const {arr} = this.state;
        //const arr = this.state.arr;
        return <div className="footer">
            {
                arr.map((item,index)=>{
                    return <span key={index} className={`itemName itemGap ${this.state.selectId == item.id?'active':''}`} onClick={()=>{
                        this.change(item.id);
                    }}>
                        {item.name}
                    </span>
                })
            }

            {
                /*
                 <h1 className={this.state.selectId ==1?'active':''} onClick={()=>{
                 this.change(1);
                 }}> A</h1>
                 <h1 className={this.state.selectId ==2?'active':''} onClick={()=>{
                 this.change(2);
                 }}>B</h1>
                 */
            }

        </div>
    }
}
