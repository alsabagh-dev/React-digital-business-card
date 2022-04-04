import TwitterIcon from "../icons/TwitterIcon";
import StackoverflowIcon from "../icons/StackoverflowIcon";
import GithubIcon from "../icons/GithubIcon";

const Footer = function (props) {
    return (
        <div className="footer">
            <a href={props.twitter} >
                <TwitterIcon className="icon" />
            </a>

            <a href={props.stackoverflow} >
                <StackoverflowIcon className="icon stack-icon" />
            </a>

            <a href={props.github} >
                <GithubIcon className="icon" />
            </a>

        </div>
    );
}

export default Footer;