import React from 'react'
import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google_sign_in",
  inverted: "inverted"
}

const Button = ({children, buttonType, ...otherProps}) => {
  return (
		<div
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export default Button