import React from "react";

const SignIn = (props) => {
  const {toggler, settoggler} = props
  // console.log(props)
  return (
    <div className="w-screen min-h-screen bg-gray-800 text-white flex items-center justify-center p-4 overflow-auto">
      <form
        action=""
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-5xl font-semibold text-center">Get back to the journey</h2>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="John@doe.example.com"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="*****"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
        >
          Sign In
        </button>

        {/* Switch to Sign Up */}
        <small className="block text-center mt-4">
          Don't have an account?{" "}
          <button
              // onClick={() => settoggler(true)}
              onClick={() => settoggler(!toggler)}
            type="button"
            className="text-blue-400 hover:underline focus:outline-none"
          >
            Sign Up
          </button>
        </small>
      </form>
    </div>
  );
};

export default SignIn;
