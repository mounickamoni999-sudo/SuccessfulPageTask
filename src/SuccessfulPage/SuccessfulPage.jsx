import React from "react";
import "./Successfulpage.css";

import logo from "../assets/SuccessfulPage/eduhire-brand-icon.png";
import illustration from "../assets/SuccessfulPage/password-reset-illustration.png";
import shield from "../assets/SuccessfulPage/security-shield-icon.png";
import successMark from "../assets/SuccessfulPage/success-confirmation-icon.png";

function Successfulpage() {

  const handleBackToLogin = () => {
    window.history.back();
  };

 return (
     <main className="reset-page">
       <section className="reset-page__story" aria-labelledby="success-heading">
         <header className="brand">
           <span className="brand__logo-frame">
             <img src={logo} alt="" className="brand__logo" />
           </span>
           <div>
             <h2>Placement &amp; Recruitment Platform</h2>
             <p>Connect <span>•</span> Discover <span>•</span> Succeed</p>
           </div>
         </header>
 
         <div className="story-content">
           <p className="eyebrow">New beginning awaits</p>
           <h1 id="success-heading">
             Your Password Has
             <br />
             Been Reset Successfully!
           </h1>
           <p className="story-copy">
             You&apos;re all set! Your account is now secure.<br />
             Log in and continue your journey towards a brighter future.
           </p>
 
           <div className="story-illustration-stage">
             <img
               src={illustration}
               alt="A person celebrating a successful account update"
               className="story-illustration"
             />
           </div>
         </div>
 
         <blockquote className="testimonial">
           <span className="testimonial__icon">
             <img src={shield} alt="" />
           </span>
           <div>
             <p>
               “A unified platform that simplifies training, placements, and
               recruitment management.”
             </p>
             <cite>
               Dr. Elena Vance — Dean of Experiential Education, Northeastern Consortium
             </cite>
           </div>
         </blockquote>
       </section>
 
       <section className="reset-page__action" aria-labelledby="confirmation-title">
         <div className="confirmation-card">
           <img src={successMark} alt="" className="confirmation-card__icon" />
           <h2 id="confirmation-title">Password Reset Successfully!</h2>
           <p>
             Your password has been reset. You can now log in with your new password
             and continue exploring all the opportunities on EduHire.
           </p>
           <button type="button" onClick={handleBackToLogin}>
             Back to Login <span aria-hidden="true">→</span>
           </button>
 
           <div className="help-row">
             <span className="help-row__line" />
             <p>
               Need help? <a href="mailto:support@eduhire.example">Contact Support</a>
             </p>
             <span className="help-row__line" />
           </div>
         </div>
       </section>
     </main>
   );
}

export default Successfulpage;