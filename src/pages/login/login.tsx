import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {};
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#ffa1b0] to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Purple Mango Shop
            </h1>
            <p className="text-white mt-1">The most popular blah blah</p>
            {/* <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button> */}
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

          <div className="absolute -top-32 -right-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-32 -right-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-mainBrown font-bold text-2xl mb-1">
              Hello Admin!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="mb-4">
              <div className="flex items-center border-2 border-mainBrown py-2 px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-mainBrown"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  {...register("email", { required: true })}
                  className="pl-2 outline-none border-none sm:w-[300px] max-w-[95%]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="username"
                />
              </div>
              {errors?.email && (
                <span className="text-red-500 text-xs">
                  username is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center border-2 border-mainBrown py-2 px-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-mainBrown"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  {...register("password", { required: true })}
                  className="pl-2 outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              {errors?.password && (
                <span className="text-red-500 text-xs">
                  Password is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="block w-full bg-[#FF6090] hover:bg-deepPink transition duration-200 mt-4 py-2 shadow-md text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm text-center w-full mx-auto hover:text-deepPink cursor-pointer">
              Forgot Password ?
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
