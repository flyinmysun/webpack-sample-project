import React from "react"
import "./CommentBox.css"

export default class CommentBox extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            commentArr:[
                {author:"Lion",body:"this is Lion's comment"},
                {author:"John",body:"this is John's comment"},
                {author:"cy",body:"this is John's comment"},
                {author:"zww",body:"this is John's comment"},
            ]
        }
    }

    render(){
        return(
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList commentListContent = {this.state.commentArr}/>
                <CommentForm />
            </div>
        )
    }
}
//评论列表
class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentListContent:props.commentListContent
        }
    };
    render(){
        let data = this.state.commentListContent.map((item,index) => {
            return(
                <Comment key={index} author={item.author} body={item.body}/>
            )
        })
        return(
            <div className="comment-list">
                {data}
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

    render(){
        return(
            <div className="comment-form">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your comment"/>
                <input type="submit" value='submit'/>
            </div>
        )
    }

}

