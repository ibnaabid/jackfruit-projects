"use client";

import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";
import { HiOutlineUserCircle, HiOutlinePhotograph } from "react-icons/hi";
import { toast } from "react-toastify";
import { MdOutlineCelebration } from "react-icons/md";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onUpdate = async (data) => {
  
    const { data: res, error } = await authClient.updateUser({
      image: data.image,
      name: data.name,
    });

    if (error) {
      toast.error(error.message || "Profile not Updated!");
    } else {
      toast.success(
        <div className="flex items-center gap-2">
          Profile Updated! <MdOutlineCelebration />
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffdf0] dark:bg-[#0a0a0b] px-6 py-12">
      <div className="w-full max-w-lg">
        <form
          onSubmit={handleSubmit(onUpdate)}
          className="bg-white dark:bg-[#111113] border border-gray-100 dark:border-white/5 rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-500/5 space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              Edit Profile
            </h2>
            <p className="text-gray-500 mt-2 font-medium">Update your personal information</p>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">
                Display Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <HiOutlineUserCircle size={20} />
                </span>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-12 rounded-2xl dark:bg-white/5 focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.name ? "border-red-500" : "border-gray-200 dark:border-white/10"
                  }`}
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required!" })}
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-[10px] mt-2 ml-1 font-bold uppercase tracking-wider">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">
                Profile Image URL
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <HiOutlinePhotograph size={20} />
                </span>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-12 rounded-2xl dark:bg-white/5 focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.image ? "border-red-500" : "border-gray-200 dark:border-white/10"
                  }`}
                  placeholder="https://example.com/photo.jpg"
                  {...register("image", { required: "Image URL is required!" })}
                />
              </div>
              {errors.image && (
                <span className="text-red-500 text-[10px] mt-2 ml-1 font-bold uppercase tracking-wider">
                  {errors.image.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
         
            className="group relative w-full overflow-hidden rounded-2xl btn btn-success btn-soft py-4 font-bold hover:bg-indigo-500 active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? "Saving..." : "Update Profile"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;