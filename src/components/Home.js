import React from "react";

import { Typography, Container } from '@material-ui/core';

import "../assets/css/styles.css";
import homeImage from '../assets/images/home.png';

export default function Home(){
  return(
    <div className="home">
      <section className="homeBlock">
        <img alt="Home" src={homeImage} width="100%" height="100%" />      
      </section>
      <section className="aboutBlock">
        <Container maxWidth="md">
          <AboutBlock />
        </Container>
      </section>
    </div>
  )
}

function AboutBlock(){
  let aboutArr = [
    {align:"center", variant:"h6", className:"aboutHeader", content:"Who we are?"},
    {align:"justify", variant:"body1", className:"aboutContent", content:"STEM Champ is an international Science, Technology, Engineering and Math (STEM) education improvement body that provides highly effective professional development, hands-on curriculum materials and consulting services, thus impacting a student's life from preschool through career. All of its programs are result oriented, research and inquiry based and align with National and International Standards."},
    {align:"justify", variant:"body1", className:"aboutContent", content:"We ingeniously develop customised STEM curriculum using real life situations and problem solving to increase the impact of learning and customised STEM products for schools, preschools and educators.Our aim is to create bespoke offerings in the ‘education’ and ‘edutainment’ space by equipping educators with effective tools & strategies to create innovative and relevant learning environments so students acquire the knowledge and skills needed to work, live and contribute in a global community."},
    {align:"center", variant:"h6", className:"aboutHeader", content:"What are we trying to achieve?"},
    {align:"justify", variant:"body1", className:"aboutContent", content:"Our current Indian education system has adapted less as compared to the fast changes in the global education arena. Indian education system is very specific to age groups, focuses more on text book learning and function on prebuilt versions of limited experiential learning. Education here is primarily seen as a mechanism to reach to the end goal, i.e. crafting a career & getting a job. This is more so due to lack of a holistic STEM curriculum which focuses on development through learning & fun. This is the gap that STEM Champ tries to fill-in by enhancing STEM learning."},
  ]
  return(
    aboutArr.map((about, id)=>{
      return <Typography key={id} variant={about.variant} align={about.align} className={about.className}>{about.content}</Typography>   
    })
  )
}
