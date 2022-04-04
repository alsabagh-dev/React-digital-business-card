import Article from "./Article";
import Main from "./Main";

const Card = function (props) {
    const info = props.info;

    return (
        <div className="card">
            <img className="card-img" src={info.Avatar} alt={info.Name} />
            <div className="container">
                <Main
                    name={info.Name}
                    title={info.Title}
                    site={info.Website}
                    linkedIn={info.LinkedIn}
                    email={info.Email}
                />
                {info.Sections.map(section => {
                    const title = Object.keys(section)[0]
                    return (
                        <Article
                            title={title}
                            content={section[title]}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Card;