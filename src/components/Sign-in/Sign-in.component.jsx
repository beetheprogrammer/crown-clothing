import React, { useState } from "react";
import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button.component";
import FormInput from "../Form-Input/Form-Input.component";
import "./Sign-in.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignIn = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;


	const handleChange = ({ target: { name, value } }) => {
		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password");
					break;

				case "auth/user-not-found":
					alert("No user associated with this email");
					break;
				default:
					console.log("Error while signing in", error);
					break;
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account ?</h2>
			<span>Sign in with your email and password.</span>
			<form>
				<FormInput
					label="Email"
					required
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
				/>

				<FormInput
					label="Password"
					required
					type="password"
					name="password"
					onChange={handleChange}
					value={password}
				/>
				<div className="buttons-container">
					<Button type="submit" onClick={handleSubmit}>
						Sign in
					</Button>
					<Button type="button" onClick={signInWithGoogle} buttonType="google">
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
