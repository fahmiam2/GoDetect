import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <Navbar shouldHideOnScroll className="bg-indigo-500">
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl text-white">GoDetect</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-5" justify="center">
        <NavbarItem>
          <NavLink to="/" className="text-md font-medium text-white">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/apis" className="text-md font-medium text-white">
            APIs
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/faqs" className="text-md font-medium text-white">
            FAQs
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-indigo-400 text-white"
            href="#"
            variant="flat"
          >
            Support Me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
