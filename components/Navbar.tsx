"use client";

import Link from "next/link";

export default function Navbar() {
 const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Education", link: "/education" },
  { name: "Experience", link: "/experience" },
  { name: "Publications", link: "/publications" },
  { name: "Projects", link: "/projects" },
  { name: "Skills", link: "/skills" },
  { name: "Awards", link: "/awards" },
  { name: "Contact", link: "/contact" },
];
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
  href="/"
  className="text-xl font-bold text-blue-700"
>
  Dinesh Kumar
</Link>


        {/* Menu */}
        <div className="flex gap-8">

          {menuItems.map((item) => (
    <Link
      key={item.name}
      href={item.link}
      className="text-gray-700 hover:text-blue-600 transition"
    >
      {item.name}
    </Link>
  ))}

        </div>

      </div>

    </nav>
  );
}