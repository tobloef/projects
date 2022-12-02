import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classNames(classes.navbar)}>
      <h1>Projects by Tobias Løfgren</h1>
      <a href="https://tobloef.com/">
        <FontAwesomeIcon icon={faPenNib} />
        Blog
      </a>
      <a href="https://github.com/tobloef">
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/tobloef/">
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </a>
    </nav>
  )
}

export default Navbar;
