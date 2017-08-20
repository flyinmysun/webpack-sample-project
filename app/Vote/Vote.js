/**
 * Created by Administrator on 2017/8/20.
 */
import React from "react"
import  "./Vote.css"
import Png1 from"./Imgs/1.png"
import Png2 from"./Imgs/2.png"
import Png3 from"./Imgs/3.png"
import Png4 from"./Imgs/4.png"
import Png5 from"./Imgs/5.png"
import Png6 from"./Imgs/6.png"

export default  class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: [
                {id: 1,name:"zdy",url: Png1, total: 0},
                {id: 2,name:"Lio",url: Png2, total: 0},
                {id: 3,name:"lgx",url: Png3, total: 0},
                {id: 4,name:"hah",url: Png4, total: 0},
                {id: 5,name:"cyx",url: Png5, total: 0},
                {id: 6,name:"xzq",url: Png6, total: 0},
            ]
        }
    }

    vote(item){
        //console.log(item)
        let voteArr = this.state.votes
        item.total=item.total+1;
        for(let i=0;i<voteArr.length;i++){
            let data = voteArr[i]
            if(item.id == data.id){
                voteArr[i] = {...item}   //展开原有的对象，{} 之后变成一个新的对象，赋值给原有的state里面的数据
            }
        }
        this.setState({...this.state,votes:[...voteArr]})
    }

    render(){
        const infoList = this.state.votes;
        return(
            <div>
                {
                    infoList.map((item,index)=>{
                        return(
                            <div style={{float:"left"}} key={index}>
                                <div>
                                    <img src={item.url}/>
                                </div>
                                <div className="clearfix infoWrap">
                                    <span className="num">{item.id}</span>
                                    <span className="name">{item.name}</span>
                                    <span className="total">{item.total}票</span>
                                </div>
                                <button className="voteBtn" onClick={()=>{
                                    this.vote(item)
                                }}>投票</button>
                            </div>
                        )
                    })
                }
            </div>



        )
    }
}