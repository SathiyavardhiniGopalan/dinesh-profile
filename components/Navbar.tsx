"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, Download } from "lucide-react";
import { navigationItems } from "@/data/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        backdrop-blur-xl

        ${
          scrolled
            ? "bg-white/90 shadow-lg border-b border-slate-200"
            : "bg-white/70"
        }
      `}
    >
      <div className="max-w-7xl mx-auto">

        <div
          className="
          h-20
          px-6
          flex
          items-center
          justify-between
        "
        >

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div
              className="
              h-11
              w-11
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              "
            >
              <GraduationCap size={22} />
            </div>

            <div>

              <h1
                className="
                text-lg
                font-bold
                leading-none
                "
              >
                Dineshkumar Loganathan
              </h1>

              <p
                className="
                text-xs
                text-slate-500
                mt-1
                "
              >
                Ph.D. Researcher
              </p>

            </div>
          </Link>

          {/* Desktop Menu */}

          <nav
            className="
            hidden
            lg:flex
            items-center
            gap-7
            "
          >

            {navigationItems.map((item) => (

              <Link
                key={item.label}
                href={item.href}
                className={`
                  transition-colors
                  duration-200
                  text-sm
                  font-medium

                  ${
                    activeSection === item.href.replace("#", "")
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }
                `}
              >
                {item.label}
              </Link>

            ))}

          </nav>

          {/* Right Side */}

          <div
            className="
            hidden
            lg:flex
            items-center
            gap-3
            "
          >

            <Link
              href="https://scholar.google.com/citations?user=CKIxD_wAAAAJ&hl=en"
              target="_blank"
              className="
              rounded-lg
              border
              border-blue-600
              px-4
              py-2
              text-sm
              font-medium
              text-blue-600
              hover:bg-blue-50
              transition
              "
            >
              Google Scholar
            </Link>

            <Link
              href="/cv/Dineshkumar_Loganathan_CV.pdf"
              target="_blank"
              className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-sm
              font-medium
              text-white
              hover:bg-blue-700
              transition
              "
            >
              <Download size={16} />

              Download CV
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
            lg:hidden
            rounded-md
            p-2
            hover:bg-slate-100
            "
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
                {/* Mobile Menu */}

        {mobileOpen && (
          <div
            className="
            lg:hidden
            border-t
            border-slate-200
            bg-white/95
            backdrop-blur-xl
            shadow-lg
            "
          >
            <nav
              className="
              flex
              flex-col
              py-4
              "
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    px-6
                    py-3
                    text-sm
                    font-medium
                    transition-colors

                    ${
                      activeSection === item.href.replace("#", "")
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}

              <div
                className="
                mt-4
                border-t
                border-slate-200
                pt-4
                px-6
                space-y-3
                "
              >
                <Link
                  href="https://scholar.google.com/citations?user=CKIxD_wAAAAJ&hl=en"
                  target="_blank"
                  onClick={closeMobileMenu}
                  className="
                  block
                  rounded-lg
                  border
                  border-blue-600
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-blue-600
                  hover:bg-blue-50
                  transition
                  "
                >
                  Google Scholar
                </Link>

                <Link
                  href="/cv/Dineshkumar_Loganathan_CV.pdf"
                  target="_blank"
                  onClick={closeMobileMenu}
                  className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-white
                  hover:bg-blue-700
                  transition
                  "
                >
                  <Download size={16} />
                  Download CV
                </Link>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}