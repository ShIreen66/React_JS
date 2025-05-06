import React from 'react'

const SignUp = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-800 text-white flex items-center justify-center p-4 overflow-auto">
      <form
        action=""
        className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
          Sign Up
        </button>

        {/* Switch to Sign In */}
        <small className="block text-center mt-4">
          Already have an account?{' '}
          <button
            type="button"
            className="text-blue-400 hover:underline focus:outline-none"
          >
            Sign In
          </button>
        </small>
      </form>
    </div>
  )
}

export default SignUp