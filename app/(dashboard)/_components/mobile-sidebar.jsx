import { Menu } from "lucide-react";
import Sidebar from "./sidebar";
import {
  Sheet,
  sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/logo";
export default function MobileSidebar() {
  return (
    <div className="">
      <Sheet>
      <SheetTrigger className="md:hidden pr-6 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
    </div>
  );
}
