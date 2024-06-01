export const Homepage = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex justify-between shadow bg-white p-4 items-center md:px-20 ">
        <a href="/" className="text-xl font-semibold">
          Medium
        </a>
        <a
          href="/signin"
          className="px-4 py-2 bg-blue-700 text-white rounded shadow hover:scale-110 hover:transition hover:duration-200 hover:ease-in-out"
        >
          Login
        </a>
      </div>
      <div>
        <div className="flex justify-center items-center py-20 px-10 ">
          <div className="text-center ">
            <h1 className="text-6xl font-semibold mb-8">Welcome to Medium</h1>
            <p className="text-xl text-gray-500 font-light">
              A place to share knowledge and better understand the world
            </p>
            <div className="mt-8"></div>
            <p className="text-lg text-gray-500 font-light">
              Sign up or login to continue
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="/signup"
                className="px-4 py-2 bg-blue-700 text-white rounded shadow hover:scale-110 hover:transition hover:duration-200 hover:ease-in-out mr-4"
              >
                Sign Up
              </a>
              <a
                href="/login"
                className="px-4 py-2 bg-blue-700 text-white rounded shadow hover:scale-110 hover:transition hover:duration-200 hover:ease-in-out"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 py-4 flex justify-center">
            Made By priyanshu with ❤️
      </div>
    </div>
  );
};
