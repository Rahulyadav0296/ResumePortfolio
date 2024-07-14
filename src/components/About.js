import { Button } from "@mui/material";
import React from "react";

function About() {
  return (
    <>
      <div className="w-full ">
        <h1 className="text-4xl mb-16 md:text-5xl lg:text-6xl font-bold text-center mt-8 md:mb-12 text-white">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center p-8 rounded-md">
            <img
              src="/photoRahul.jpeg"
              alt="Rahul Kumar Yadav"
              className="w-64 md:w-96 h-auto rounded-[10px] shadow-3xl"
            />
          </div>

          <div className="md:w-1/2 p-8  md:p-12 flex flex-col justify-center items-center md:items-start">
            <h3 className="text-2xl  md:text-4xl font-bold mb-8 md:mb-8 underline-offset-8 text-white text-center underline">
              Professional Summary
            </h3>
            <p className="text-base md:text-xl text-white leading-relaxed font-mono  mb-8 md:mb-8 text-left">
              Exemplary Front-End Developer with 2.5 years of mastery in HTML,
              CSS, and JavaScript, specializing in ReactJs. Proficient in C/C++
              and Python, mastering data structures and algorithms with 50+
              challenges conquered. Artfully crafts visually stunning,
              responsive web apps, contributing to the success of 10+ projects
              using ReactJs. Enhanced campaign performance by 25% with Adobe
              Campaign Classic and bolstered email engagement by 30% with
              STENSUL templates.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                className="custom-button"
                variant="contained"
                color="secondary"
                style={{ maxWidth: "100%", width: "fit-content" }}
              >
                <a
                  href="https://drive.google.com/file/d/1rUsd2skDlctEHeBvs4taqgj0I2Bo4T0k/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold shadow-pink-500 shadow-3xl text-lg md:text-[25px] no-underline"
                  style={{ display: "block", padding: "12px 24px" }}
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
