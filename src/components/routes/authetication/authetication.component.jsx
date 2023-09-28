import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import './authetication.style.scss'
const Authentication = () => {
  return (
    <div className='authetication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
