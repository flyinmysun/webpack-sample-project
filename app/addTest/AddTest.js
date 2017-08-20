import React from "react"
import Icon from "react-fontawesome"
import '../../node_modules/font-awesome/css/font-awesome.css'
import "./AddTest.css"


export default class AddTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedItem:{},
            fundList:[

            ]
        }
    }
    addItemData(){
        let inputVal = this.refs.fundName.value;
        //console.log(inputVal);
        let addData = {id:(new Date()).getTime(),fundName:inputVal}
        let newArr = [...this.state.fundList,addData]
        this.setState({...this.state,fundList:newArr});
        //document.getElementById("fundInput").reset();    //只有form表单具有reset方法，input 没有
        document.getElementById("fundInput").value = "";
    }
    deleteBtn(index){
        //let {fundList} = this.state;
        //console.log(index);   直接获取下标，不用再循环遍历去找小标
        //let fundList = [...this.state.fundList];
        let fundList = this.state.fundList;
        fundList.splice(index,1)

        //let newFundList = [...this.state.fundList,fundList];
        this.setState({...this.state,fundList:fundList})
    }
    selectedName(item,index){
        //let selectedItem ={...this.state.selectedItem,name:item.fundName}
        //console.log(selectedItem);

        //item.name = item.fundName;
        let newItem = {...item,fundName:item.fundName}
        //console.log(newItem);
        this.setState({...this.state,selectedItem:newItem})
    }
    changeVal(evt){
        let val = evt.target.value;
        //console.log(...this.state.selectedItem)
        this.setState({...this.state,selectedItem:{...this.state.selectedItem,fundName:val}})
        //this.setState({...this.state.selectedItem,fundName:val})
        //console.log(val)
    }

    sureModify(){
        let modifyItem = this.state.selectedItem;
        //console.log(modifyItem);
        let fundList = this.state.fundList;
        for(let i=0;i<fundList.length;i++){
            let item = fundList[i];
            if(modifyItem.id ==item.id){
                //fundList[index].fundName = modifyItem.fundName
                //let newItem = {...item,fundName:modifyItem.fundName}
                fundList[i] = {...modifyItem};

                //let newList = [...fundList,fundList[i]:newItem]
                //console.log(newItem)
            }
        }

        this.setState({...this.state,fundList:[...fundList]})

        //this.setState({...this.state,fundList:modifyName});


        var ar = [{id:1,name:"2"},{id:2,name:"22"}];
        var r = {id:1,name:"qqq"};

        ar[0] = {...r};

    }

    render(){
        const {fundList} = this.state;
        const {selectedItem} = this.state;
        //const fundList = this.state.fundList
        return(
            <div>
                <div style={{paddingLeft:"20px"}} className="clearfix" >
                    <div style={{float:"left",marginRight:"30px"}}>
                        <input type="text" id="fundInput" placeholder="请输入需要增加的基金" ref="fundName"/>
                        <button onClick={()=>{
                            this.addItemData()
                        }}>增加</button>
                    </div>
                    <div style={{float:"left"}}>
                        <input type="text" placeholder="请修改基金" ref="inputText" value={selectedItem.fundName}
                        onChange={(evt)=>{
                            //console.log(evt.target.value);
                            this.changeVal(evt)
                        }}/>
                        <button onClick={()=>{
                            this.sureModify()
                        }}>修改</button>
                    </div>

                </div>
                <div className="addList">
                    <h2>新增列表</h2>
                    {
                        fundList.map((item,index)=>{
                            return(
                                <div key={index} className="clearfix">
                                    <div className="fundName">
                                        <span className="num">{index+1}</span>
                                        <span onClick={()=>{
                                            this.selectedName(item,index);
                                        }}>{item.fundName}</span>
                                        <Icon className='fa fa-minus-square deleteBtn' name="minus" onClick={() =>{
                                            this.deleteBtn(index)  //直接获取下标
                                        }}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


}