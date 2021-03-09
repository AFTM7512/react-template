import React,{ FC } from "react";
import { Link } from "react-router-dom";

const About : FC = () => (
  <div>
    About Page
    <div><Link to="/home">To Home</Link></div>
    <div><Link to="/home/header">To Home/Header</Link></div>
  </div>
);

export default About;