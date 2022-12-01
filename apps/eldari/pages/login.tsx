import SignInForm from "../components/signInForm";
import SignUpForm from "../components/signUpForm";

export default function LoginPage() {


  return (
    <div className="flex lg:justify-evenly">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}