/**
 * Created by Administrator on 2017/8/13.
 */
//import greeter from "./Greeter.js"
//const greeter = require('./Greeter.js');
//document.querySelector("#root").appendChild( greeter() );   //方法？
//import CommentBox from "./CommentBox/CommentBox";
//import AddTest from  "./addTest/AddTest"
import Vote from "./Vote/Vote"

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute, hashHistory,browserHistory } from 'react-router';
import Tap from "./Taps/Taps"

class RootView extends React.Component{
    render(){
        return(
            <div>
                <div style={{borderBottom:'1px solid red'}}>
                    <button onClick={()=>{
                        browserHistory.push("/tap");
                    }}>切换页面</button>
                    <button onClick={()=>{
                        browserHistory.push("/vote");
                    }}>投票页面</button>
                </div>
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
                </Route>
            </Router>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"));