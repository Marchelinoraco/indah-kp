import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-[#ffff] border-gray-200 border-b">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        <Link href="/">
          <div className="flex justify-between items-center">
            {" "}
            <Image
              src="/logo-msm.png"
              alt="logo"
              width={120}
              height={100}
              priority
              className="h-[120px]"
            />
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold text-gray-600 hover:text-gray-800">
            {session && (
              <>
                {session.user.role === "user" ? (
                  <ul className="flex gap-4">
                    <li>
                      <Link href="/dashboard">Beranda</Link>
                    </li>
                    <li>
                      <Link href="/masuk-data">Masuk Data</Link>
                    </li>
                  </ul>
                ) : null}
              </>
            )}
          </ul>

          {session && (
            <div className="flex gap-3 items-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-600 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="font-xs text-gray-400 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button
                type="button"
                className="text-sm ring-2 bg-gray-100 rounded-full"
              >
                <Image
                  src={session.user.image || "/avatar.svg"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          )}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Sign Out
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
