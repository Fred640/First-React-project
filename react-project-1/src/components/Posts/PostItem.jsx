import React from "react"
import Btn from "../UI/button/Btn"

const PostItem = (props) => {

    return(
    <div className="post">
        <div className="post__content">
            <h5>{props.number} {props.post.title}</h5>
            <div>
                {props.post.body}
            </div>
        </div>
        <Btn onClick={() => props.remove(props.post)}>Delete</Btn>
    </div>
    )
}

export default PostItem