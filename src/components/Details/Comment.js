const Comment = ({ comment }) => {

    return (
        <li className="comment">{comment.email}: {comment.comment}</li>
    );
}

export default Comment;