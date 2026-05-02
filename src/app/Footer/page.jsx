import Link from "next/link";
import Image from "next/image";
import foot from "../../../assets/3263.jpg"

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={foot}
                alt="pixgen logo"
                width={32}
                height={32}
                className="rounded-lg shadow-sm"
              />
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
               Summer.
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Create production-ready AI visuals in seconds. Built for speed and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-row gap-16 md:justify-center">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-5">
                Platform
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <li><Link href="/generate" className="hover:text-indigo-500 transition-colors">Generate</Link></li>
                <li><Link href="/all-photos" className="hover:text-indigo-500 transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <li><Link href="/about" className="hover:text-indigo-500 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Legal Links (Desktop: Right aligned) */}
          <div className="flex flex-col md:items-end gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-2">
              Legal
            </h3>
            <div className="flex flex-col md:items-end gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
              <Link href="/privacy" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-indigo-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-gray-100 dark:bg-white/5 mb-8" />

        {/* Bottom Section - Clean & Centered */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            Built by Creators <span className="h-1 w-1 rounded-full bg-indigo-500" />
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-400">
            @2026 Summer. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;