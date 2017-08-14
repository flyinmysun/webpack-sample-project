/**
 * Created by Administrator on 2017/8/13.
 */
//import greeter from "./Greeter.js"
//const greeter = require('./Greeter.js');
//document.querySelector("#root").appendChild( greeter() );   //方法？

import React from 'react';
import ReactDom from 'react-dom';
import Header from "./Header";
import Content from "./Content"

class App extends React.Component{
    render(){
        let name = "zww";
        let obj = {name:"changyang",age:18,address:"changsha"}
        return <div>
           <Header {...obj}/>
           <Content/>
        </div>
    }
}

ReactDom.render(<App/>,document.getElementById("root"));