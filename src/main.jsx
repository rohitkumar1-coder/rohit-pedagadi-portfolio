import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function CopyEmail(){
 const [status,setStatus]=useState('');
 async function copy(){try{await navigator.clipboard.writeText('rohitkumarpedagadi@gmail.com');setStatus('Email copied');}catch{setStatus('Please use the email link above.');}}
 return <><button type="button" onClick={copy}>Copy email ⧉</button><span role="status" aria-live="polite">{status}</span></>;
}

function ApiDemo(){
 const [selected,setSelected]=useState(0);
 const panel=useRef(null);
 const topics=[
  {name:'API development',tag:'CONNECTING THE EXPERIENCE',title:'A clear path from request to response.',description:'Building Node.js APIs for enterprise OTT workflows, with business requirements at the centre.',skills:['Node.js','Express.js','REST APIs'],symbol:'↗'},
  {name:'Business logic',tag:'MAKING THE DETAILS WORK',title:'Requirements, translated into behaviour.',description:'Implementing the rules and application flows that support backend features.',skills:['JavaScript','Application flows','Backend features'],symbol:'⌘'},
  {name:'Debugging',tag:'FOLLOWING THE EVIDENCE',title:'Find the cause. Improve the flow.',description:'Investigating application issues and checking API behaviour with Chrome DevTools and Postman.',skills:['Chrome DevTools','Postman','API validation'],symbol:'◎'}
 ];
 const topic=topics[selected];
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const ctx=gsap.context(()=>{gsap.from('.focus-detail > *',{y:15,opacity:0,duration:.4,stagger:.055,ease:'power2.out'});},panel);return()=>ctx.revert();},[selected]);
 function navigate(e){if(!['ArrowDown','ArrowUp','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?2:(selected+(e.key==='ArrowDown'?1:2))%3;setSelected(next);panel.current.querySelectorAll('[role=tab]')[next].focus();}
 return <div className="focus-console" ref={panel}>
 <div className="focus-console-top"><span>WHERE I ADD VALUE</span><span className="focus-counter">0{selected+1} / 03</span></div>
 <div className="focus-layout"><div className="focus-tabs" role="tablist" aria-label="Explore my focus" aria-orientation="vertical" onKeyDown={navigate}>{topics.map((item,i)=><button key={item.name} id={`focus-tab-${i}`} role="tab" aria-selected={selected===i} aria-controls="focus-panel" tabIndex={selected===i?0:-1} onClick={()=>setSelected(i)}><span className="focus-tab-number">0{i+1}</span><span>{item.name}</span><span className="focus-tab-arrow">↗</span></button>)}</div>
 <div className="focus-detail" id="focus-panel" role="tabpanel" aria-labelledby={`focus-tab-${selected}`} tabIndex={0} key={selected}>
 <div className={`focus-art focus-art-${selected}`} aria-hidden="true"><div className="focus-art-ring"/><div className="focus-art-ring second"/><span>{topic.symbol}</span><i/><i/><i/></div>
 <p className="focus-tag">{topic.tag}</p><h3>{topic.title}</h3><p className="focus-body">{topic.description}</p><div className="focus-pills">{topic.skills.map(skill=><span key={skill}>{skill}</span>)}</div>
 </div></div><div className="focus-console-foot"><span>BACKEND DEVELOPMENT</span><span>SELECT A FOCUS ↑</span></div></div>;
}
function Hero() { return (<section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="dot"></span> ROHIT KUMAR PEDAGADI <span className="hero-index">PORTFOLIO / 2026</span></p><div className="role-kicker">BACKEND SOFTWARE ENGINEER</div><h1><span className="hero-line">Ideas to APIs.</span><br/><em className="hero-line">Built to work.</em></h1><p className="intro">I’m <strong>Rohit Kumar Pedagadi.</strong> I develop APIs and business logic for enterprise OTT platforms at Accenture, with a focus on Node.js and practical problem solving.</p><div className="actions"><a className="button" href="resume.pdf" download="Rohit_Kumar_Pedagadi_Resume.pdf">Download resume <span>↓</span></a><a className="text-link" href="#experience">Explore my experience <span>↗</span></a></div><div className="hero-foot"><span>Currently at <strong>Accenture</strong></span><span>Previously at <strong>Cognizant</strong></span></div></div>
<ApiDemo /></section>); }
function About() { return (<section className="about section"><div className="section-label">01 / A LITTLE CONTEXT</div><div className="about-content"><h2>I like working where<br/>the details matter.</h2><p>My work spans backend feature development, API validation, and debugging application issues. I enjoy turning business requirements into working application flows and investigating what happens when those flows break.</p><p>Alongside Node.js development, I have experience with Python automation and Jenkins deployment pipelines, plus a foundation in React from my time at Cognizant.</p></div></section>); }
function Experience() { return (<section id="experience" className="section experience"><div className="section-head"><div><p className="section-label">02 / EXPERIENCE</p><h2>Learning by building.</h2></div><span className="muted">From interfaces to APIs.</span></div><article className="job"><div className="job-date">APR 2024 — PRESENT<span className="current">CURRENT ROLE</span></div><div className="job-details"><div className="job-title"><h3>Associate Software Engineer</h3><span className="company">Accenture</span></div><p className="location">Hyderabad, India · Hybrid</p><p>Backend development for enterprise OTT platform workflows.</p><details open><summary>Explore responsibilities <span>+</span></summary><ul><li>Develop backend APIs and implement business logic using Node.js.</li><li>Debug application issues and investigate backend behaviour with Chrome DevTools.</li><li>Validate API behaviour with Postman during development and troubleshooting.</li></ul></details><div className="tags"><span>Node.js</span><span>REST APIs</span><span>Postman</span><span>Debugging</span></div></div></article><article className="job"><div className="job-date">OCT 2023 — MAR 2024</div><div className="job-details"><div className="job-title"><h3>Programmer Analyst Trainee</h3><span className="company">Cognizant</span></div><p className="location">Hyderabad, India · Internship</p><p>Built a foundation in frontend development and application workflows.</p><details><summary>Explore responsibilities <span>+</span></summary><ul><li>Trained in React.js and frontend development concepts.</li><li>Worked on component-based interfaces and application workflows.</li></ul></details><div className="tags"><span>React.js</span><span>JavaScript</span><span>Frontend development</span></div></div></article></section>); }
function Toolkit() { return (<section id="toolkit" className="section toolkit"><div><p className="section-label">03 / TOOLKIT</p><h2>The tools <br/>behind the work.</h2><p className="toolkit-note">A backend focus, with an understanding of the experience on the other side of the API.</p></div><div className="skill-list"><div><span className="skill-number">01</span><div><h3>Backend & APIs</h3><p>Node.js · Express.js · REST APIs · Postman</p></div></div><div><span className="skill-number">02</span><div><h3>Languages & interfaces</h3><p>JavaScript · Python · React.js · HTML · CSS</p></div></div><div><span className="skill-number">03</span><div><h3>Development workflow</h3><p>GitHub · GitLab · Jenkins · Jira · Chrome DevTools</p></div></div><div><span className="skill-number">04</span><div><h3>Foundational knowledge</h3><p>Java · Spring Boot · Microservices concepts</p></div></div></div></section>); }
function Education() { return (<section className="education"><p className="section-label">EDUCATION</p><h3>B.Tech in Computer Science and Engineering</h3><p>Lovely Professional University <span>2019 — 2023</span></p></section>); }
function Contact() { return (<section id="contact" className="contact"><div className="section-label">04 / WHAT’S NEXT</div><h2>Let’s build<br/>something <em>useful.</em></h2><p>Have a backend opportunity or a project in mind?<br/>I’d be happy to connect.</p><a className="email" href="mailto:rohitkumarpedagadi@gmail.com">rohitkumarpedagadi@gmail.com <span>↗</span></a><div className="contact-links"><a href="https://www.linkedin.com/in/rohit-kumar-pedagadi-346570192/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="resume.pdf" download="Rohit_Kumar_Pedagadi_Resume.pdf">Resume ↓</a><CopyEmail /></div></section>); }
function App(){
 const [active,setActive]=useState('');
 useEffect(()=>{
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const intro=gsap.timeline({defaults:{ease:'power3.out'}});
   intro.from('.hero-copy > *',{y:38,opacity:0,duration:.85,stagger:.1}).from('.focus-console',{y:60,rotation:4,opacity:0,duration:1},.2);
   gsap.utils.toArray('.section, .education, .contact').forEach(section=>{
    gsap.from(section.children,{y:40,opacity:0,duration:.85,stagger:.12,scrollTrigger:{trigger:section,start:'top 88%',once:true}});
   });
   gsap.to('.ticker-track',{xPercent:-50,duration:25,ease:'none',repeat:-1});
   gsap.to('.orbit-one',{rotation:360,duration:45,repeat:-1,ease:'none'});
  });
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting&&entry.target.id)setActive(entry.target.id)}),{threshold:.2});
  document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
  return ()=>{mm.revert();observer.disconnect()};
 },[]);
 return (<><a className="skip" href="#main">Skip to content</a><header><a className="brand" href="#" aria-label="Rohit Pedagadi home">rp<span>.</span></a><nav aria-label="Main navigation"><a href="#experience" aria-current={active==='experience'?'location':undefined}>Experience</a><a href="#toolkit" aria-current={active==='toolkit'?'location':undefined}>Toolkit</a><a href="#contact" className="nav-contact">Let’s talk <span>↗</span></a></nav></header>
<main id="main"><Hero />
<div className="ticker" aria-hidden="true"><div className="ticker-track">NODE.JS <span>✳</span> REST APIs <span>✳</span> PYTHON <span>✳</span> REACT <span>✳</span> NODE.JS <span>✳</span> REST APIs <span>✳</span> PYTHON <span>✳</span> REACT <span>✳</span></div></div><About />
<Experience />
<Toolkit />
<Education />
<Contact /></main><footer><a className="brand" href="#" aria-label="Rohit Pedagadi home">rp<span>.</span></a><p>Rohit Kumar Pedagadi <span>·</span> Hyderabad, India</p><a href="#">Back to top ↑</a></footer></>);}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);

