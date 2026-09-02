import CtaBtn from './components/CtaBtn'
import './App.css'
import ProjList from './components/ProjList'


function App() {
  return (
    <>
      <div id="hero-section">
        <div id="hero-text">
          <div id="circle">
            <h1 id="header">JI Labs</h1>
            <h2>Let me build you a website that converts your visitors to clients!</h2>
            <p>
              I build fast, beautiful websites that turn visitors into customers. 
              Freelance web developer helping small businesses and startups launch products people <em>actually</em> want to use.
            </p>
          </div>
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
        I build clean, fast websites that turn visitors into paying customers, with the design sense and technical knowledge 
        to back it up.
      </p>
      <p>
        I'm a Computer Science graduate (Loughborough University), and outside of tech I've spent 14+ years as a 
        musician and producer. That background means I don't just write code, I understand what creative brands and artists actually need to look credible online, and I bring an eye for design that a lot of developers miss.
      </p>
      <p>
        Right now I split my time between building for clients and producing music, which keeps me sharp on both the 
        technical and creative sides of a project.
      </p>
      <h2>Recent Designs</h2>
      <ProjList />
      <CtaBtn />
      <h2>Pricing</h2>
      <p>Every project's different, so pricing depends on scope — but as a guide, sites start from £350. <a href="mailto:joshuairuobe@gmail.com" target="_blank">Get in touch for a free quote</a>, and I'll give you a clear number after our first call.</p>
      <h2>The Process</h2>
      <ol>
        <li>Contact me by <a href="mailto:joshuairuobe@gmail.com" target="_blank">email</a>, or any of the other contact options listed below</li>
        <li>We'll agree on a time we're both free for an initial call, allowing me to understand your vision fully</li>
        <li>Agree on price</li>
        <li>I'll do a mockup</li>
        <li>Sort out any revisions of your site depending on what you paid for</li>
        <li>If you want to pay for maintenance I'll help take care of it without you needing to worry about it</li>
      </ol>

      {/* <h2>Testimonials</h2> */}
      <h2>Contact</h2>
      <ul>
        <li><a href="mailto:joshuairuobe@gmail.com" target="_blank">Email</a></li>
        <li><a href="https://www.linkedin.com/in/joshua-iruobe/" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/ji.labs/" target="_blank">Instagram</a></li>
        <li><a href="http://x.com/JILabsWebDev">X</a></li>
      </ul>
    </>
  )
}

export default App
