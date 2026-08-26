import { useState } from 'react'
import CtaBtn from './components/CtaBtn'
import './App.css'

function App() {
  return (
    <>
      <div id="hero-section">
        <div id="hero-text">
          <h1 id="header">JI Labs</h1>
          <h2>Let me build you a website that converts your visitors to clients!</h2>
          <p>
            I build fast, beautiful websites that turn visitors into customers. 
            Freelance web developer helping small businesses and startups launch products people actually want to use.
          </p>
          <CtaBtn />
        </div>
      </div>
      <h2>Here's how I can help</h2>
      <ul>
        <li>Save yourself time</li>
        <li>Avoid tech headaches</li>
        <li>Attract dream clients</li>
        <li>Have your website's maintenance handled</li>
      </ul>
      <h2>About Me</h2>
      <p>
        I'm a Computer Science graduate (Loughborough University) who builds fast, polished websites that turn visitors into 
        paying customers. Since graduating, I've focused on sharpening my design and development skills to deliver exactly 
        that for clients — clean code, thoughtful UX, and results that matter to your business.

        Outside of tech, I've been a musician for 14+ years, which gives me a genuine edge working with music, arts, and 
        creative clients — I understand both the technical and creative sides of what you're trying to build.
      </p>
      {/* <h2>Projects</h2> */}
      <h2>Pricing</h2>
      <p>I'll help you create a website for $250</p>
      <h2>The Process</h2>
      <ul>
        <li>Fill in the Contact form near the bottom of the page</li>
        <li>Choose what time you are free for an initial call, allowing me to understand your vision fully</li>
        <li>Agree on price</li>
        <li>I'll do a mockup</li>
        <li>Do a few revisions depending on what you paid for</li>
        <li>If you want to pay for maintenance I'll help take care of it without you needing to worry about it</li>
      </ul>
      {/* <h2>Testimonials</h2> */}
      <h2>Contact</h2>
      <ul>
        <li>Email: joshuairuobe@gmail.com</li>
        <li>Instagram: @ji.labs_</li>
        <li>X @JILabsWebDev</li>
      </ul>
    </>
  )
}

export default App
