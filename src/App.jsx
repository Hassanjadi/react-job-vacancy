function App() {
  return (
    <div className="container mx-auto my-10 lg:my-24">
      <div className="flex flex-col lg:flex-row mx-6 lg:mx-24 gap-6 lg:gap-16">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="flex-col gap-2">
            <h1 className="text-3xl font-bold">Welcome back, Minca 👋</h1>
            <p className="text-base">Welcome back! Please enter your details</p>
          </div>
          <button className="flex justify-center p-2 rounded-lg text-black w-full lg:w-72 text-sm border-2 gap-2 ">
            <img
              className="h-6 w-6"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="Google logo"
            />
            Login with Google
          </button>
          <form className="flex flex-col gap-2">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border px-4 py-2 w-full lg:w-72 rounded-lg"
            />
            <input
              type="password"
              name="password"
              className="border px-4 py-2 w-full lg:w-72 rounded-lg"
              placeholder="Password"
            />
            <div className="flex gap-24">
              <div className="flex items-center gap-1">
                <input
                  className="border"
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  required
                />
                <label className="text-xs" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <p className="underline text-xs">Forgot password?</p>
            </div>
            <div className="flex-col">
              <button
                type="submit"
                className="flex justify-center bg-indigo-600 text-white font-semibold p-2 rounded-lg w-full lg:w-72 text-sm gap-2"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center w-72 mt-2">
              <p className="text-xs">
                Don’t have an account?
                <button className="font-semibold ml-1">Sign up for free</button>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden lg:block w-1/2">
          <img
            className="undraw-mobile-login w-full h-auto"
            alt="Undraw mobile login"
            src="https://anima-uploads.s3.amazonaws.com/projects/64e6cf9db6adb5ab939b94fa/releases/64e6d016a07e2737999b40c5/img/undraw-mobile-login-re-9ntv-2-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
