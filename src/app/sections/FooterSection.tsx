import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function FooterSection() {
  return (
    <footer className="bg-[#104382] text-neutral-300 pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col font-sans rounded-t-[2rem] sm:rounded-t-[3rem] mt-10 group/footer">
      <BackgroundGradientAnimation 
        containerClassName="absolute inset-0 z-0 opacity-0 group-hover/footer:opacity-100 transition-opacity duration-1000"
        gradientBackgroundStart="#104382"
        gradientBackgroundEnd="#0d366a"
        firstColor="14, 165, 233"    
        secondColor="30, 58, 138"    
        thirdColor="56, 189, 248"    
        fourthColor="3, 105, 161"    
        fifthColor="2, 132, 199"     
      />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 z-10 mb-20">
        
        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-1 group w-max outline-none">
            {/* White variant of the logo for dark background */}
            <div className="relative flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <circle cx="18" cy="18" r="11" stroke="white" strokeWidth="5.5" />
                <rect x="21" y="21" width="14" height="8" rx="4" transform="rotate(45 21 21)" fill="#104382" />
                <rect x="22" y="22" width="14" height="6" rx="3" transform="rotate(45 22 22)" fill="#0ea5e9" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-light tracking-[0.18em] text-white ml-[-2px] mt-[1px]">
              UILLANCE
            </span>
          </Link>
          <p className="text-[13px] text-neutral-400 leading-relaxed">
            © Quillance 2026.<br />
            All rights reserved.
          </p>
          <div className="flex items-center gap-5 mt-2 text-neutral-400">
            <a href="https://www.linkedin.com/company/quillance" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/quillance_info" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572301201834" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/quillance.infotech/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white tracking-wide mb-2">Explore</h3>
          <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Home</Link>
          <Link href="/programs" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Our Programs</Link>
          <Link href="/about" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">About Us</Link>
          <Link href="/ambassador" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Campus Amb.</Link>
          <Link href="/careers" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Careers</Link>
          <Link href="/jobs" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Job Portal</Link>
          <div className="text-sm text-neutral-300/80 cursor-default w-max mt-1">Need Support</div>
          <div className="text-sm text-neutral-300/80 cursor-default w-max">LMS</div>
        </div>

        {/* Column 3: Legal */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white tracking-wide mb-2">Legal</h3>
          <Link href="/legal/terms-and-conditions" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Terms & Conditions</Link>
          <Link href="/legal/privacy-policy" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Privacy Policy</Link>
          <Link href="/legal/refund-policy" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Refund Policy</Link>
          <Link href="/legal/certification-policy" className="text-sm text-neutral-400 hover:text-white transition-colors w-max">Certification Policy</Link>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-white tracking-wide mb-0">Contact Info</h3>
          
          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutral-300 font-medium">Phone:</span>
            <a href="tel:+9163605" className="text-sm text-neutral-400 hover:text-white transition-colors">+91 63605 XXXXX</a>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutral-300 font-medium">Email:</span>
            <a href="mailto:info@quillance.com" className="text-sm text-neutral-400 hover:text-white transition-colors">info@quillance.com</a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-neutral-300 font-medium">Address:</span>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {/* Address kept blank as requested */}
            </p>
          </div>
        </div>
      </div>

      {/* Massive Glassy Background Text with Hover Shine Effect */}
      <div className="w-full relative flex justify-center items-center pointer-events-none select-none overflow-hidden px-4">
        <h1 className="relative z-10 text-[14vw] sm:text-[15.5vw] font-bold leading-none tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-white/5 via-blue-400/60 via-sky-300/40 to-white/5 bg-[length:200%_auto] bg-[position:-100%_center] group-hover/footer:bg-[position:100%_center] font-black transition-all duration-1000 ease-in-out opacity-80">
          Quillance
        </h1>
      </div>
      
    </footer>
  );
}
