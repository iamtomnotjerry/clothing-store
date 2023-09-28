import { auth, signInWithGooglePopUp, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      // Handle any errors that may occur during the sign-in process
      console.error('Error during popup sign-in:', error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
