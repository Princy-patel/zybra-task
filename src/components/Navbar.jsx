"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-xl font-bold">User Management</h1>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`
                  ${activeLink === "home" ? "text-blue-500" : "text-gray-400"}
                hover:text-gray-400`}
                onClick={() => setActiveLink("home")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/Princy-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <Github size={20} />
            <span>Princy Patel</span>
          </Link>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
