/**
 * Created by Administrator on 2017/8/13.
 */
//import greeter from "./Greeter.js"
//const greeter = require('./Greeter.js');
//document.querySelector("#root").appendChild( greeter() );   //方法？

import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from "./CommentBox/CommentBox";


class App extends React.Component{


    render(){

        return <div>
            <CommentBox/>
        </div>
    }
}

ReactDom.render(<App/>,document.getElementById("root"));