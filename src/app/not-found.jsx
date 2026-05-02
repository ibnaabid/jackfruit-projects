import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0b] overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-bounce opacity-20" />
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-20" />

      <div className="relative z-10 text-center px-6">
        
        {/* BIG 404 Backdrop */}
        <div className="relative">
          <h1 className="text-[12rem] md:text-[20rem] font-black leading-none select-none tracking-tighter opacity-[0.03] dark:opacity-[0.05] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            404
          </h1>
          
          {/* Main Illustration Area */}
          <div className="relative mb-8 flex justify-center">
             <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl rotate-12 animate-pulse shadow-2xl shadow-indigo-500/40 flex items-center justify-center">
                <span className="text-white text-4xl md:text-5xl font-bold -rotate-12">?</span>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            The digital canvas you're looking for is empty. Either the link is broken 
            or the page has moved to a new dimension.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/"
              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Go Back Home</span>
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-100 dark:border-white/5 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0a0a0b] bg-indigo-100 dark:bg-indigo-900/30" />
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0a0a0b] bg-purple-100 dark:bg-purple-900/30" />
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0a0a0b] bg-pink-100 dark:bg-pink-900/30" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Pixgen AI Core: <span className="text-green-500 animate-pulse">Online</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;