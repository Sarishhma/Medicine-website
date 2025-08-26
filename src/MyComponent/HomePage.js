// HomePage.jsx
import React from "react";
import Silk from "./Silk";
import CardNav from "./CardNav";

export default function HomePage() {
  const items = [
    {
      label: "Login",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [{ label: "Login", ariaLabel: "About Company", href: "/login" }],
    },
    {
      label: "Home page",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [{ label: "Home", ariaLabel: "About Company", href: "/" }],
    },
    {
      label: "Register",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Register", ariaLabel: "About Careers", href: "/register" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" },
      ],
    },
  ];

  return (
    <>
 
      <CardNav
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      <div className="silk-bg">
        <Silk
          speed={5}
          scale={1}
          color="#e7e2ecff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

    
    </>
  );
}
