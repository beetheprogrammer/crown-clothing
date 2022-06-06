import React, {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../Form-Input/Form-Input.component';
import "./Sign-up.styles.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = ({target: {name, value}}) => {
    setFormFields({ ...formFields , [name]: value});
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(password !== confirmPassword){
      alert("Your passwords do not match")
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields()
      console.log("response", user);
    } catch (error) {
      if(error.code == "auth/email-already-in-use"){
        alert("Email already in use")
      }else{
        console.log("Error while creating user", error)
      }
    }
  }

  return (
		<div>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					required
					type="text"
					name="displayName"
					onChange={handleChange}
					value={displayName}
				/>

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

				<FormInput
					label="Confirm Password"
					required
					type="password"
					name="confirmPassword"
					onChange={handleChange}
					value={confirmPassword}
				/>

				<button type="submit">Sign up</button>
			</form>
		</div>
	);
}

export default SignUp