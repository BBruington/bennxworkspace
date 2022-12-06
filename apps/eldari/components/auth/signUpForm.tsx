import { signUpWithEmail } from "../../../../libs/firebase/firebase";
import { useState } from "react";

const defaultFormFields = {
  signUpEmail: '',
  signUpPassword: '',
  confirmPassword: ''
}

export default function SignUpForm() {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {confirmPassword, signUpPassword, signUpEmail} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signUpPassword !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    await signUpWithEmail(signUpEmail, signUpPassword);
    resetFormFields();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };



  return (
    <>        
      <div className="flex min-h-full flex-col mt-11 justify-center py-12 sm:px-6 lg:px-14 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">          
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>          
        </div>
        
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="signUpEmail" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="signUpEmail"
                    name="signUpEmail"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={signUpEmail}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signUpPassword" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="signUpPassword"
                    name="signUpPassword"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    value={signUpPassword}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    value={confirmPassword}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div> */}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign up
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </>
  )
}