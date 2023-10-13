import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "./navbar-Routes";

export default function Navbar() {
  return (
    <>
      <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
    </div>
    </>
  );
}
