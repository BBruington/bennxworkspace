import SignInForm from "../components/auth/signInForm";
import SignUpForm from "../components/auth/signUpForm";

export default function LoginPage() {


  return (
    <div className="flex lg:justify-evenly">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}