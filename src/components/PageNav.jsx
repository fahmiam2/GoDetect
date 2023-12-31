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
    <Navbar shouldHideOnScroll className="bg-teal-300">
      <NavbarBrand>
        <p className="font-bold text-inherit">GoDetect</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/">Home</NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink to="/apis">APIs</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/faqs">FAQs</NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Support Me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
