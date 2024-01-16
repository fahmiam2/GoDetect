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
        <p className="text-xl font-bold text-inherit text-white">GoDetect</p>
      </NavbarBrand>
      <NavbarContent className="gap-5 sm:flex" justify="center">
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
            className="bg-pictonBlue text-white"
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
