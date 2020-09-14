import React from 'react';
import './Pages.css';

function Contact() {
   return (
      <div className="pagesGrid contact" id="contact">
         <h1>My name is Jeuel Viveros</h1>
         <h2>Let's create good things together.</h2>
         <h3>I am a Boot Camp graduate at SMU, Dallas, TX.</h3>
         {links.map((data) => {
            return (
               <h3>
                  Got a few projects in my{' '}
                  <a href={data.github} rel="noopener noreferrer">
                     GitHub
                  </a>
               </h3>
            );
         })}
      </div>
   );
}

const links = [
   {
      github: 'https://github.com/vjeuel',
      linkedin: 'https://www.linkedin.com/in/vjeuel/',
      email: 'mailto:vjeuel@gmail.com',
      phone: 'tel:2147837757',
      // resume: Resume,
   },
];

export default Contact;
