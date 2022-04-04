import Article from "./Article";
import Main from "./Main";

const Card = function(props){
    const info = props.info;
    return(
        <div className="card">
            <img className="card-img" src={info.Avatar} alt={info.Name}/>
            <Main 
                name={info.Name} 
                title={info.Title}
                site={info.Website}
                linkedIn={info.LinkedIn}
                email={info.Email}
                />
            <Article/>
            <Article/>
        </div>
    );
}

export default Card;