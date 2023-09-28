import { useState } from "react"
import { signInWithGooglePopUp, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss'
import Button from "../button/button.component";

const defaultformFields = {
    email: '',
    password: '',
  }

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const {email, password} = formFields;

  console.log(formFields)

  const resetFormField = () => {
    setFormFields(defaultformFields)
  }
  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      // Handle any errors that may occur during the sign-in process
      console.error('Error during popup sign-in:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormField()
    } catch(error) {
      console.log(error)
      if(error.code === "auth/invalid-login-credentials"){
        alert('incorrect password or email')
      }
    }
  } 

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button type="button"buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>

    </div>
  )
}

export default SignInForm