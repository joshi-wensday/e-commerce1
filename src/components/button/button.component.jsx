import './button.styles.scss';

/*
3 types of buttons
- default
- inverted
- googleSignIn

otherProps = type and such
children = Text/button filling content (could be a <span>)

*/

const BUTTON_TYPE_CLASSES = {
    default: 'default',
    inverted: 'inverted',
    google: 'google-sign-in',
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} { ...otherProps}>
            { children }
        </button>
    );
}

export default Button;