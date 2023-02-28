import Head from "next/head";
import Layout from "../Layout";
import Intro from "./Intro";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Project";
export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
