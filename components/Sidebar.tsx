"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  MapPin,
  Medal,
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
  { name: "Activities", href: "/activities",icon: Medal },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

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
        shadow-2xl
      "
    >
      <div className="flex flex-col items-center px-6 py-8">

        <Image
          src="/dinesh.jpg"
          alt="Dr. Dineshkumar Loganathan"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-500 object-cover shadow-xl"
        />

        <h2 className="mt-5 text-center text-xl font-bold leading-tight">
          Dr. Dineshkumar Loganathan
        </h2>

        <p className="mt-2 text-center text-blue-300 font-medium">
          Research Scientist
        </p>

        <p className="text-center text-sm text-gray-400">
          Ph.D. in Mechanical Engineering
        </p>

        <p className="mt-1 text-center text-sm text-gray-400">
          National Cheng Kung University
        </p>

        <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
          <MapPin size={16} />
          <span>Tainan, Taiwan</span>
        </div>

        <a
          href="/Dineshkumar_Loganathan_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>

      <hr className="mx-6 border-slate-700" />

      <nav className="px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${active
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
                }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mx-6 mt-6 border-t border-slate-700 pt-6">

        <h3 className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Connect
        </h3>

        <div className="space-y-3">

          <a
            href="https://scholar.google.com/citations?user=CKIxD_wAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
          >
            <span className="font-medium">Google Scholar</span>
            <span>→</span>
          </a>
          <a
            href="https://linkedin.com/in/YOUR_PROFILE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
          >
            <span className="font-medium">LinkedIn</span>
            <span>→</span>
          </a>

        </div>

      </div>
    </aside>
  );
}