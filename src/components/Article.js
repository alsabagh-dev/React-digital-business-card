const Article = function(props){

    return(
        <div className="article">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Article;