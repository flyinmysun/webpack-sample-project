import React from "react"
import "./CommentBox.css"

export default class CommentBox extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            commentArr:[
                {author:"Lion",body:"this is Lion's comment"},
                {author:"John",body:"this is John's comment"},
            ]
        }
    }

    getNewList(addData){
        console.log(addData)
        const  oldArr = this.state.commentArr;
        let newArr = [...oldArr,addData];
        //let newArr = oldArr.concat([addData]);
        //const  newArr = Object.assign([],oldArr,[addData]);

        //console.log(newArr)

        //this.setState(Object.assign({},this.state,{commentArr:newArr}));
        this.setState({...this.state,commentArr:newArr});

        //this.setState({oldArr:newArr})

    }

    render(){
        return(
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentForm getNewData = {(addData)=>{
                    this.getNewList(addData)
                }} />
                <CommentList commentListContent = {this.state.commentArr}/>
            </div>
        )
    }
}
//评论列表
class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //commentListContent:props.commentListContent
        }
    };

    render(){
        let commentData = this.props.commentListContent.map((item,index) => {
            return(
                <Comment key={index} author={item.author} body={item.body}/>
            )
        })
        return(
            <div className="comment-list">
                {commentData}
            </div>
        )
    }
}

//评论列表内的具体内容  作者和评论内容
class Comment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="comment-body">{this.props.body}</div>
                <div className="comment-author">{this.props.author}</div>
            </div>
        )
    }
}


//评论撰写
class CommentForm extends React.Component{
    constructor(props){
        super(props)
    }
    getInpVal(){
        //e.preventDefault();
        const author = this.refs.author.value;
        const body = this.refs.body.value;
        console.log(author,body);

        this.props.getNewData({author: author, body: body});

        document.getElementById("myForm").reset()
    }

    componentDidMount(){
        this.getInpVal();
    }


    render(){
        return(
            <form className="comment-form" id="myForm">
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Your comment" ref="body"/>
                <input type="button" value='提交'onClick={(e) =>{
                    this.getInpVal(e);
                }}/>
            </form>
        )
    }

}

