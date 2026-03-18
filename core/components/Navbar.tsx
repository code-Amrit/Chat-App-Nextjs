import Link from "next/link";
import { cookies } from "next/headers";
import AvatarSmall from "./AvatarSmall";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Categories", href: "/categories" },
];

export default async function Navbar() {
  const cookieStore = await cookies();

  const session = cookieStore.get("session");

    const user = session ? JSON.parse(session.value) : null;

  return (
    <nav className="w-full border-b bg-black text-body-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Chat with :{")"}
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-black"
            >
              {link.name}
            </Link>
          ))}

          {/* Auth Section */}
          {user ? (

              <AvatarSmall session={user} />

          ) : (
            <Link
              href="/auth/login"
              className="px-4 py-2 rounded-md bg-black text-white"
            >
              Login
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}
