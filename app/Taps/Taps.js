/**
 * Created by Administrator on 2017/8/20.
 */
import React from "react"
import "./Taps.css"

export default class Tap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:"news",

        }
    }
    tapEvent(type){

        this.setState({...this.state,type:type})

    }



    render(){
        return(
            <div>
              <div className="contentWrap">
                  <ul className="tapTitle">
                      <li onClick={()=>{
                            this.tapEvent("news")
                      }} className={this.state.type == "news"&&"activeLi"}>新闻</li>
                      <li onClick={()=>{
                          this.tapEvent("funs")
                      }} className={this.state.type == "funs"?"activeLi":""}>娱乐</li>
                      <li onClick={()=>{
                          this.tapEvent("wars")
                      }} className={this.state.type == "wars"?"activeLi":""}>军事</li>
                  </ul>
                  <ul className="tapContent">
                      <li className={this.state.type == "news"?"show":"hide"}>我是新闻页面</li>
                      <li className={this.state.type == "funs"?"show":"hide"}>我是娱乐页面</li>
                      <li className={this.state.type == "wars"?"show":"hide"}>我是军事页面</li>
                  </ul>
              </div>
            </div>
        )
    }
}