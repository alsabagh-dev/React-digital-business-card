import MailIcon from "../icons/MailIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

const Main = function (props) {
    return (
        <div className="main">
            <h1 className="main--name">{props.name}</h1>
            <h2 className="main--title">{props.title}</h2>
            <a className="main--site" href={props.site}>{
                props.site.replace('https://', '')}
            </a>
            <div className="main--btn-container">
                <a  href={`mailto:${props.email}`}>
                    <button className="main--btn">
                        <MailIcon className="main--btn-icon"/>
                        Email
                    </button>
                </a>
                <a  href={props.linkedIn}>
                    <button className="main--btn main--btn-linkedIn">
                        <LinkedInIcon className="main--btn-icon"/>
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Main;