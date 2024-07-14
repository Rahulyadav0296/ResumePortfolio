import React, { lazy, Suspense } from "react";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));

function Home() {
  return (
    <>
      <section
        id="home"
        className="relative h-screen bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h3 className="custom-h3">HELLO I'M</h3>
          <h1 className="custom-h1">RAHUL KUMAR YADAV</h1>
          <h2 className="custom-h2">A PASSIONATE REACT FRONT END DEVELOPER</h2>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen bg-gradient-to-r from-gray-600 to-gray-800 text-white flex items-center justify-center p-4 md:p-8"
      >
        <Suspense fallback={<div>Projects are Loading please wait.....</div>}>
          <About />
        </Suspense>
      </section>

      <section
        id="skills"
        className="min-h-screen bg-gradient-to-r from-gray-600 to-gray-800 textwhi flex items-center justify-center p-4 md:p-8"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-screen bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center p-4 md:p-8"
      >
        <Suspense fallback={<div>Projects are Loading please wait.....</div>}>
          <Projects />
        </Suspense>
      </section>

      <section
        id="testimonials"
        className="min-h-[50vh] bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center p-4 md:p-8"
      >
        {/* Testimonials content here */}
        <Testimonials />
      </section>

      <section
        id="contact"
        className="min-h-screen bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center p-4 md:p-4"
      >
        {/* Contact content here */}
        <Suspense fallback={<div>Contacts are Loading please wait.....</div>}>
          <Contact />
        </Suspense>
      </section>
    </>
  );
}

export default Home;
