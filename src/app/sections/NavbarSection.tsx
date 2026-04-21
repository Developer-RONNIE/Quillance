"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { programsData } from "@/data/programs";
import { motion } from "motion/react";


export function NavbarSection() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileActiveDomain, setMobileActiveDomain] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Reset menu when route changes
  useEffect(() => {
    setActive(null);
    setMobileMenuOpen(false);
    setMobileProgramsOpen(false);
    setMobileActiveDomain(null);
  }, [pathname]);

  // Click outside to close info box
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActive(null);
      }
    }

    const handleOpenPrograms = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActive("Programs");
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("quillance-open-programs", handleOpenPrograms);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("quillance-open-programs", handleOpenPrograms);
    };
  }, []);

  const staticLinkClass = "cursor-pointer text-neutral-600 hover:text-blue-600 font-medium text-[15px]";

  const closeMenu = () => {
    setActive(null);
    setMobileMenuOpen(false);
  };

  return (
    <div ref={navRef} className="w-full bg-white z-50 py-4 shadow-sm sticky top-0" onMouseLeave={closeMenu}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center shrink-0 mr-4 sm:mr-8">
          <Link href="/" onClick={closeMenu} className="flex items-center outline-none border-none group">
            {/* The Q Vector Icon */}
            <div className="relative flex items-center justify-center">
              <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                {/* Black Ring */}
                <circle cx="18" cy="18" r="11" stroke="#0f172a" strokeWidth="5.5" />
                {/* White stroke outline to cut the ring behind the blue tail */}
                <rect x="21" y="21" width="14" height="8" rx="4" transform="rotate(45 21 21)" fill="white" />
                {/* Cyan/Blue Pill Tail */}
                <rect x="22" y="22" width="14" height="6" rx="3" transform="rotate(45 22 22)" fill="#0ea5e9" />
              </svg>
            </div>
            {/* The Typography */}
            <span className="text-xl sm:text-2xl md:text-[28px] font-light tracking-[0.18em] text-[#0f172a] ml-[-4px] mt-[1px]">
              UILLANCE
            </span>
          </Link>
        </div>

        {/* Desktop Links Section */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Menu setActive={setActive}>
            {/* MEGA MENU: Programs */}
            <MenuItem setActive={setActive} active={active} item="Programs" megaMenu={true}>
              <ProgramsMegaMenu closeMenu={closeMenu} />
            </MenuItem>

            <Link href="/ambassador" onMouseEnter={() => setActive(null)} className={staticLinkClass}>Campus Ambassador</Link>
            <Link href="/about" onMouseEnter={() => setActive(null)} className={staticLinkClass}>About</Link>
            <Link href="/careers" onMouseEnter={() => setActive(null)} className={staticLinkClass}>Careers</Link>
            <Link href="/jobs" onMouseEnter={() => setActive(null)} className={staticLinkClass}>Job Portal</Link>
          </Menu>
        </div>

        {/* Button & Mobile Toggle Section */}
        <div className="flex items-center gap-2">
          <button className="hidden lg:flex bg-[#0b5cd5] hover:bg-[#0047b3] text-white px-5 py-2.5 rounded-md font-semibold text-sm items-center gap-1.5 transition-colors">
            Sign In
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>

          <button
            className="lg:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-white border-t border-neutral-100 shadow-xl z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col px-6 py-4 space-y-4">

            {/* Mobile Programs Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="flex items-center justify-between font-semibold text-neutral-800 border-b border-neutral-100 pb-3 mt-2"
              >
                Programs
                <svg className={`transform transition-transform ${mobileProgramsOpen ? "rotate-180 text-blue-600" : "text-neutral-400"}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>

              {mobileProgramsOpen && (
                <div className="flex flex-col mt-4 border-l-2 border-neutral-100 space-y-2 mb-4">
                  {Object.keys(programsData).map((domain) => (
                    <div key={domain} className="flex flex-col">
                      <button
                        onClick={() => setMobileActiveDomain(mobileActiveDomain === domain ? null : domain)}
                        className="flex items-center justify-between py-3 pl-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 rounded-r-md transition-colors"
                      >
                        <span className={mobileActiveDomain === domain ? "text-blue-600" : ""}>{domain}</span>
                        <svg className={`transform transition-transform mr-2 ${mobileActiveDomain === domain ? "rotate-180 text-blue-600" : "text-neutral-400"}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </button>

                      {mobileActiveDomain === domain && (
                        <div className="flex flex-col space-y-1 pl-4 pb-2 bg-neutral-50/50">
                          {programsData[domain].map((prog, i) => (
                            <Link onClick={closeMenu} href={`/programs/${prog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={i} className="flex gap-3 items-center hover:bg-white p-2 rounded-md transition-colors border border-transparent hover:border-neutral-200">
                              <span className="text-[16px] leading-none opacity-80">{prog.icon}</span>
                              <span className="text-[13px] font-medium text-neutral-700">{prog.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Added onClick handlers to static links to guarantee closure */}
            <Link href="/ambassador" onClick={closeMenu} className={staticLinkClass}>Campus Ambassador</Link>
            <Link href="/about" onClick={closeMenu} className={staticLinkClass}>About</Link>
            <Link href="/careers" onClick={closeMenu} className={staticLinkClass}>Careers</Link>
            <Link href="/jobs" onClick={closeMenu} className={staticLinkClass}>Job Portal</Link>

            <button className="w-full mt-6 bg-[#0b5cd5] hover:bg-[#0047b3] text-white px-5 py-3 rounded-md font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors">
              Sign In
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProgramsMegaMenu({ closeMenu }: { closeMenu: () => void }) {
  const categories = Object.keys(programsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const searchPlaceholders = [
    "Search 'Data Science'...",
    "Search 'Web Development'...",
    "Search 'Cloud Computing'...",
    "Search 'Digital Marketing'...",
    "Search 'AutoCAD'..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Flatten all courses map to arrays with category for search context
  const allCourses = categories.flatMap(cat =>
    programsData[cat].map(prog => ({ ...prog, category: cat }))
  );

  const filteredCourses = searchQuery.trim() !== ""
    ? allCourses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    : programsData[activeCategory];

  return (
    <div className="flex flex-col bg-white w-full shadow-2xl rounded-b-xl overflow-hidden border border-neutral-200 h-full max-h-[85vh]">
      {/* Header top bar */}
      <div className="flex items-center justify-between p-6 border-b border-neutral-100 shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-neutral-800 border-l-4 border-blue-600 pl-3 leading-tight">Explore Programs</span>
          <span className="text-sm font-medium text-neutral-400">Evaluated Curriculum - Skill based learnings - Real projects</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

            <div className="relative overflow-hidden w-64 h-9">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="absolute inset-0 pl-9 pr-4 w-full h-full border border-neutral-200 rounded-md text-sm outline-none focus:border-blue-500 transition-colors pointer-events-auto z-10 bg-transparent"
              />
              {!searchQuery && (
                <div className="absolute inset-0 left-9 flex items-center pointer-events-none">
                  <span
                    key={placeholderIndex}
                    className="text-neutral-400 text-sm animate-in fade-in slide-in-from-bottom-2 duration-500"
                  >
                    {searchPlaceholders[placeholderIndex]}
                  </span>
                </div>
              )}
            </div>
          </div>
          <button className="group bg-[#0b5cd5] text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#0047b3] transition-colors shadow-sm pointer-events-auto">
            <svg className="group-hover:animate-wiggle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Talk to Career Expert
          </button>
        </div>
      </div>

      <div className="flex h-full overflow-hidden">
        {/* Sidebar - Categories */}
        {searchQuery.trim() === "" && (
          <div className="w-72 bg-neutral-50/50 border-r border-neutral-100 flex flex-col p-4 space-y-1 shrink-0">
            <h5 className="text-[11px] font-black uppercase tracking-widest text-neutral-400 px-3 mb-4">Domains</h5>
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count = programsData[category].length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl flex items-center justify-between transition-all group pointer-events-auto ${isActive
                    ? "bg-white text-blue-600 shadow-sm border border-neutral-100"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
                    }`}
                >
                  <span>{category}</span>
                  <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded-md ${isActive ? "bg-blue-50 text-blue-500" : "bg-neutral-200 text-neutral-500 group-hover:bg-neutral-300"}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {/* Content Area - Course Grid */}
        <div className="flex-1 overflow-y-auto bg-white pointer-events-auto custom-scrollbar">
          {/* Search Header Context */}
          {searchQuery.trim() !== "" && (
            <div className="px-8 py-4 border-b border-neutral-100 bg-blue-50/30 text-blue-800 text-sm font-medium flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
              <span>Found {filteredCourses.length} results for "{searchQuery}"</span>
              <button onClick={() => setSearchQuery("")} className="text-blue-600 hover:underline">Clear search</button>
            </div>
          )}

          <div className={`grid grid-cols-1 xl:grid-cols-2 gap-4 p-8 ${filteredCourses.length > 0 ? '' : 'flex items-center justify-center min-h-[300px]'}`}>
            {filteredCourses.length > 0 ? filteredCourses.map((prog, i) => (
              <Link onClick={closeMenu} href={`/programs/${prog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={i} className="p-5 flex gap-4 hover:bg-neutral-50/80 cursor-pointer border border-neutral-100 relative group transition-all rounded-2xl hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/[0.05] perspective-1000">
                <motion.div
                  whileHover={{ rotateY: 20, rotateX: -10, z: 50, scale: 1.1 }}
                  className="w-14 h-14 bg-white rounded-xl border border-neutral-100 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <span className="text-2xl drop-shadow-sm">{prog.icon}</span>
                </motion.div>

                <div className="flex flex-col gap-1 w-full relative pr-6">
                  {searchQuery !== "" && 'category' in prog && (
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{prog.category as string}</span>
                  )}

                  <h4 className="font-bold text-neutral-800 text-[15px] group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">{prog.title}</h4>
                  {prog.desc && <p className="text-[13px] text-neutral-500 leading-snug line-clamp-2 mt-1">{prog.desc}</p>}

                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    {prog.b1 && <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-[10px] font-bold">{prog.b1}</span>}
                    {prog.b2 && <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-bold">{prog.b2}</span>}
                  </div>
                </div>

                <div className="absolute top-6 right-6 text-neutral-300 opacity-0 group-hover:opacity-100 group-hover:text-blue-500 transition-all group-hover:translate-x-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            )) : (
              <div className="col-span-2 text-center text-neutral-500 py-10">No programs match your search query. Try another term!</div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}
