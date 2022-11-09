import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center ">
      <h1 className="text-9xl font-extrabold text-black tracking-widest">
        404
      </h1>
      <div className="bg-red-600 px-2 text-sm rounded rotate-12 absolute text-white">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-red-600 group active:text-red-600 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 text-white transition-transform translate-x-0.5 translate-y-0.5 bg-red-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-red-600 border border-current">
            <Link to="/" className="text-white text-xl">
              Go Home
            </Link>
          </span>
        </Link>
      </button>
    </main>
  );
};
export default Error;
