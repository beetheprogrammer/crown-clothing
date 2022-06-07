import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import SignIn from "../../components/Sign-in/Sign-in.component";
import SignUp from "../../components/Sign-up/Sign-up.component";
import "./Authentication.styles.scss"

const Authentication = () => {
	return (
		<div className="authentication-container">
			<SignIn/>
			<SignUp />
		</div>
	);
};

export default Authentication;
