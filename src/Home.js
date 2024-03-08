import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section class="links-container">
      <Link href="login">LOGIN</Link>
      <br />
      <br />
      <Link href="registration">REGISTER</Link>
    </section>
  );
}
