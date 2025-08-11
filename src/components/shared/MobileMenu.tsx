import { Menu } from "lucide-react";
import { useState } from "react";
import Navitems from "./Navitems";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "../ui/sheet";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button onClick={() => setIsOpen(true)}>
          <Menu className="text-white font-bold"/>
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="pt-20">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
        <Navitems closeMenu={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
