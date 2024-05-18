'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button} from "@nextui-org/react";


import Link from "next/link";


const Header=(props)=> {

  return (
    <Navbar>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


export default Header