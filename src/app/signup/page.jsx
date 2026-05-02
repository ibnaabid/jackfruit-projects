"use client";
import { authClient } from "../lib/auth-client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-toastify/unstyled";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const RegisterHandler = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: "https://example.com/image.png",
      callbackURL: "/"
    });

    if (error) {
      toast.error(error.message || "sign up failed");
      
    }
    if(res){
      toast.success("Sign up successfully!")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0b] px-6">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(RegisterHandler)} className="space-y-6">
          <fieldset className="fieldset bg-white dark:bg-[#111113] border-gray-100 dark:border-white/5 rounded-[2.5rem] border p-8 shadow-2xl shadow-indigo-500/5">
            <legend className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Create Account
            </legend>

       
            <div className="form-control w-full mb-4">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                className={`input input-bordered w-full rounded-2xl dark:bg-white/5 ${
                  errors.name ? "border-red-500" : "border-gray-200 dark:border-white/10"
                }`}
                placeholder="John Doe"
                {...register("name", { required: "Name is required!" })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-2 ml-1">
                  {errors.name.message}
                </span>
              )}
            </div>

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

            <div className="form-control w-full mb-2">
              <label className="label font-bold text-xs uppercase tracking-widest text-black">
                Password
              </label>
              <input
                type="password"
                className={`input input-bordered w-full rounded-2xl dark:bg-white ${
                  errors.password ? "border-red-500" : "border-gray-200 dark:border-white/10"
                }`}
                placeholder="••••••••"
                {...register("password", { 
                  required: "Password is required!",
                  minLength: { value: 6, message: "Minimum 6 characters" }
                })}
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
              className="btn btn-neutral w-full mt-6 rounded-2xl bg-indigo-600 border-none text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
            >
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-6 font-medium">
              Already have an account?{" "}
              <Link href="/signin" className="text-indigo-500 font-bold hover:underline">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;