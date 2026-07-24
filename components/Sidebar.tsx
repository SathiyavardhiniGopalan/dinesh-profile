"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  BookOpen,
  FolderKanban,
  Award,
  Code2,
  Mail,
  Download,
} from "lucide-react";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Publications", href: "/publications", icon: BookOpen },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Skills", href: "/skills", icon: Code2 },
  { name: "Awards", href: "/awards", icon: Award },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Sidebar() {
  return (
    <aside
      className="
        sidebar-scroll
        fixed
        left-0
        top-0
        h-screen
        w-72
        overflow-y-auto
        bg-slate-900
        text-white
        shadow-xl
      "
    >

      <div className="flex flex-col items-center p-6">

        <Image
          src="/profile.jpg"
          alt="Profile"
          width={140}
          height={140}
          className="rounded-full border-4 border-white object-cover"
        />

        <h2 className="mt-5 text-2xl font-bold text-center">
          Dineshkumar Loganathan
        </h2>

        <p className="text-gray-300 mt-2 text-center">
          Ph.D. Researcher
        </p>

        <p className="text-sm text-gray-400 text-center">
          National Cheng Kung University
        </p>

        <a
          href="/Dineshkumar_Loganathan_CV.pdf"
          target="_blank"
          className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          <Download size={18} />
          Download CV
        </a>

      </div>
{/* Add divider here */}
<hr className="border-slate-700 mx-6" />

      <nav className="mt-3 pb-10">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-8 py-4 hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}