import PropTypes from  "prop-types";
import styles from "./MButton.module.css";

function MButton({text, onclick})
{
    console.log(styles)
    return <button onClick={onclick} className={styles.btn}> {text} </button>;
}

MButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default MButton;