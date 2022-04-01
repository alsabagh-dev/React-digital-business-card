import Article from "./Article";
import Main from "./Main";

const Card = function(props){
    return(
        <div className="card">
            <img className="card-img" src="/alsabagh.png" alt="Alsabagh Pic"/>
            <Main/>
            <Article/>
            <Article/>
        </div>
    );
}

export default Card;