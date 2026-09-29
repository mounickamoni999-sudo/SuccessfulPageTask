import React from "react";
import "./SuccessfulPage.css";

import FrameImage from "../assets/SuccessfulPage/frame.jpg";
import Background2 from "../assets/SuccessfulPage/Background2.jpg";

const SuccessfulPage = () => {
  const handleBackToLogin = () => {
    window.history.back();
  };

  return (
    <div className="SuccessfulPage-container">

      {/* LEFT SECTION */}
      <section className="SuccessfulPage-left">

        {/* BRAND */}
        <div className="SuccessfulPage-brand">
          <img
            src={Background2}
            alt="Placement and Recruitment Platform"
            className="SuccessfulPage-brand-icon"
          />

          <div className="SuccessfulPage-brand-text">
            <h2>Placement &amp; Recruitment Platform</h2>
            <p>Connect • Discover • Succeed</p>
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div className="SuccessfulPage-left-content">

          <p className="SuccessfulPage-small-title">
            NEW BEGINNING AWAIT
          </p>

          <h1 className="SuccessfulPage-left-title">
            Your Password Has
            <br />
            Been Reset Successfully!
          </h1>

          <p className="SuccessfulPage-left-description">
            You're all set. Your account is now secure.
            <br />
            Log in and continue your journey towards a brighter future.
          </p>

          {/* MAIN IMAGE */}
          <div className="SuccessfulPage-main-image">
            <img
              src={FrameImage}
              alt="Password reset illustration"
            />
          </div>

        </div>

        {/* TESTIMONIAL */}
        <div className="SuccessfulPage-testimonial">

          <div className="SuccessfulPage-testimonial-icon">
            <span>✓</span>
          </div>

          <div className="SuccessfulPage-testimonial-content">

            <p className="SuccessfulPage-testimonial-quote">
              “A unified platform that simplifies training, placements,
              and recruitment management.”
            </p>

            <p className="SuccessfulPage-testimonial-author">
              Dr. Elena Vance — Dean of Experiential Education,
              Northeastern Consortium
            </p>

          </div>

        </div>

      </section>

      {/* RIGHT SECTION */}
      <section className="SuccessfulPage-right">

        <div className="SuccessfulPage-right-content">

          {/* SUCCESS ICON */}
          <div className="SuccessfulPage-success-icon">

            <span className="SuccessfulPage-ray SuccessfulPage-ray-one"></span>
            <span className="SuccessfulPage-ray SuccessfulPage-ray-two"></span>
            <span className="SuccessfulPage-ray SuccessfulPage-ray-three"></span>
            <span className="SuccessfulPage-ray SuccessfulPage-ray-four"></span>
            <span className="SuccessfulPage-ray SuccessfulPage-ray-five"></span>
            <span className="SuccessfulPage-ray SuccessfulPage-ray-six"></span>

            <div className="SuccessfulPage-success-outer">

              <div className="SuccessfulPage-success-circle">
                <span>✓</span>
              </div>

            </div>

          </div>

          {/* RIGHT TITLE */}
          <h1 className="SuccessfulPage-right-title">
            Password Reset Successfully!
          </h1>

          {/* RIGHT DESCRIPTION */}
          <p className="SuccessfulPage-right-description">
            Your password has been reset. You can now log in with your new
            password and continue exploring all the opportunities on EduHire.
          </p>

          {/* LOGIN BUTTON */}
          <button
            type="button"
            className="SuccessfulPage-login-button"
            onClick={handleBackToLogin}
          >
            <span>Back to Login</span>
            <span className="SuccessfulPage-login-arrow">
              →
            </span>
          </button>

          {/* SUPPORT */}
          <div className="SuccessfulPage-support">

            <span className="SuccessfulPage-support-line"></span>

            <p>
              Need help?{" "}
              <span>Contact Support</span>
            </p>

            <span className="SuccessfulPage-support-line"></span>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SuccessfulPage;