import Article from "./Article";
import Footer from "./Footer";
import Main from "./Main";
import Avatar from "../alsabagh.png";

const Card = function (props) {
    const info = props.info;

    return (
        <div className="card">
            <img className="card-img" src={Avatar} alt={info.Name} />
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
            <Footer
                twitter={info.Twitter}
                stackoverflow={info.StackOverflow}
                github={info.Github}
            />
        </div>
    );
}

export default Card;