"use client"
import 'animate.css';
import Image from "next/image";
import Link from "next/link";
import avtar from "../../../assets/images.png"
import logo from "../../../assets/3263.jpg"
import { authClient } from "../lib/auth-client"
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const person = session?.user.name;

  const GoogleHandler = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="border-b px-2 bg-white sticky top-0 z-50">
      <nav className="flex px-3 mx-auto items-center justify-between max-w-7xl h-16">
        
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="object-cover rounded-2xl animate__animated animate__rotateIn"
          />
          <Link href="/" className="animate__animated animate__jello font-bold text-lg text-shadow-amber-400">
            Summer.
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-2 text-sm font-bold">
          <li>
            <Link className="px-3 py-1.5 rounded-full text-gray-600 hover:bg-green-400 hover:text-white transition-all duration-200 animate__animated animate__fadeInDown" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="px-3 py-1.5 rounded-full text-gray-600 hover:bg-violet-700 hover:text-white transition-all duration-200 animate__animated animate__fadeInDown animate__delay-1s" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-400 hover:text-white transition-all duration-200 animate__animated animate__fadeInDown animate__delay-2s" href="/profile">
              My Profile
            </Link>
          </li>
        </ul>

        {/* User & Auth Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {person && (
              <h2 className="hidden sm:block font-bold text-violet-900 animate__animated animate__fadeIn">
                Hello, <span className="text-[#85420c]">{person}</span>
              </h2>
            )}
            <Image
              src={session?.user.image || avtar}
              alt="avatar"
              width={35}
              height={35}
              className="rounded-full border-2 border-amber-300 object-cover"
            />
          </div>

          {person ? (
            <button
              onClick={async () => await authClient.signOut()}
              className="btn btn-error btn-soft btn-sm font-bold rounded-xl"
            >
              Log Out
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/signin" className="btn btn-ghost btn-soft btn-sm font-bold">LogIn</Link>
              <Link href="/signup" className='btn btn-success btn-soft font-bold'>Sign Up</Link>
              <button 
                onClick={GoogleHandler} 
                className="btn px-3 btn-outline btn-sm gap-2 border-sky-300 hover:bg-amber-50 font-bold"
              >
                <FcGoogle /> Login With Google
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;