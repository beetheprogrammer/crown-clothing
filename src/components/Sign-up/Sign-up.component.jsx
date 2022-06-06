import React, {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
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
				<label>Display Name</label>
				<input
					required
					type="text"
					name="displayName"
					onChange={handleChange}
					value={displayName}
				/>

				<label>Email</label>
				<input
					required
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
				/>

				<label>Password</label>
				<input
					required
					type="password"
					name="password"
					onChange={handleChange}
					value={password}
				/>

				<label>Confirm Password</label>
				<input
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