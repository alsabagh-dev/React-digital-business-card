import Article from "./Article";
import Main from "./Main";

const Card = function(props){
    return(
        <div className="card">
            <h1>Image</h1>
            <Main/>
            <Article/>
            <Article/>
        </div>
    );
}

export default Card;