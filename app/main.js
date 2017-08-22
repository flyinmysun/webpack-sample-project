/**
 * Created by Administrator on 2017/8/13.
 */
//import greeter from "./Greeter.js"
//const greeter = require('./Greeter.js');
//document.querySelector("#root").appendChild( greeter() );   //方法？
import CommentBox from "./CommentBox/CommentBox";
import AddTest from  "./addTest/AddTest"
import Vote from "./Vote/Vote"
import Tap from "./Taps/Taps"
import  "./main.css"

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute, hashHistory,browserHistory } from 'react-router';


class RootView extends React.Component{
    render(){
        return(
            <div>
                <div className="tapWrapTitle">
                    <button  onClick={()=>{
                        browserHistory.push("/tap");
                    }}>切换页面</button>
                    <button onClick={()=>{
                        browserHistory.push("/vote");
                    }}>投票页面</button>
                    <button onClick={()=>{
                        browserHistory.push("/add-test");
                    }}>增删改页面</button>
                    <button onClick={()=>{
                        browserHistory.push("/comment-box");
                    }}>评论框页面</button>
                </div>
                <div style={{height:"20px"}}></div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={RootView}>
                    <IndexRoute component={Tap}/>
                    <Route path="/tap" component={Tap}/>
                    <Route path="/vote" component={Vote}/>
                    <Route path="/add-test" component={AddTest}/>
                    <Route path="/comment-box" component={CommentBox}/>
                </Route>
            </Router>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"));