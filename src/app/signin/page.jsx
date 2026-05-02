"use client";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
// import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onLogin = async (data) => {

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

   if(error){
    toast.error(error.message || "login failed")
   }
  if(res){
    toast.success("login successfully")
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0b] px-6">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
          <fieldset className="fieldset bg-white dark:bg-[#111113] border-gray-100 dark:border-white/5 rounded-2xl border p-8 shadow-2xl shadow-indigo-500/5">
            <legend className="text-2xl font-black text-gray-900 dark:text-white mb-6">
              Welcome Back
            </legend>

            {/* Email Field */}
            <div className="form-control w-full mb-4">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                className={`input input-bordered w-full rounded-2xl dark:bg-white/5 ${
                  errors.email ? "border-red-500" : "border-gray-200 dark:border-white/10"
                }`}
                placeholder="name@example.com"
                {...register("email", { required: "Email is required!" })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-2 ml-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control w-full mb-2">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-500">
                Password
              </label>
              <input
                type="password"
                className={`input input-bordered w-full rounded-2xl dark:bg-white/5 ${
                  errors.password ? "border-red-500" : "border-gray-200 dark:border-white/10"
                }`}
                placeholder="....."
                {...register("password", { required: "Password is required!" })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-2 ml-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit"
              disabled={isSubmitting}
              className="btn btn-neutral w-full mt-6 rounded-2xl bg-indigo-600 border-none text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-6">
              Dont have an account? <Link href="/signup" className="text-indigo-500 font-bold cursor-pointer">Sign Up</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;