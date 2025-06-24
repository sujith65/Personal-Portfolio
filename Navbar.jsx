import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function Navbar(){
    return(
       <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home"></a>
        </div>
               <div className="m-8 flex place-content-center gap-4 text-2xl">
                <a href="www.linkedin.com/in/sujithcontact" target="blank" rel="nooperner" aria-label="LinkedIn"></a> <FaLinkedin /> 
                <a href="sujith65" target="blank" rel="nooperner" aria-label="GitHub"></a> <FaGithub />
                <a href="https://www.instagram.com/accounts/login/?hl=en" target="blank" rel="nooperner" aria-label="Instagram"></a> <FaInstagram />
                <a href="https://twitter.com/i/flow/signup" target="blank" rel="nooperner" aria-label="LinkedIn"></a> <FaTwitter />
              
               </div>
       </nav>
    )
}