import Logo from "@/components/logo";
import NavbarRoutes from "./navbar-Routes";

export default function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-4">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <NavbarRoutes />
      </div>
    </div>
  );
}
