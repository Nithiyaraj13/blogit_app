import React from "react";

import "./footer.css";

import x from "../logos/x.png";

import insta from "../logos/insta.png";

import fb from "../logos/fb.png";

import linkedin from "../logos/linkedin.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_section">
        <div className="Footer_links">
          <div className="Footer_links_headings">
            <h4 style={{ fontFamily: "montserrat" }}>For Bussiness</h4>

            <a href="/employer">
              <p style={{ fontFamily: "montserrat" }}>Employer</p>
            </a>

            <a href="/healthplan">
              <p style={{ fontFamily: "montserrat" }}>healthplan</p>
            </a>

            <a href="/induvidual">
              <p style={{ fontFamily: "montserrat" }}>Induvidual</p>
            </a>
          </div>

          <div className="Footer_links_headings">
            <h4 style={{ fontFamily: "montserrat" }}>The Project</h4>

            <a href="/employer">
              <p style={{ fontFamily: "montserrat" }}>About</p>
            </a>

            <a href="/healthplan">
              <p style={{ fontFamily: "montserrat" }}>Blog</p>
            </a>

            <a href="/induvidual">
              <p style={{ fontFamily: "montserrat" }}>Jobs</p>
            </a>
          </div>

          <div className="Footer_links_headings">
            <h4 style={{ fontFamily: "montserrat" }}>Learn More</h4>

            <a href="/employer">
              <p style={{ fontFamily: "montserrat" }}>Pricing</p>
            </a>

            <a href="/healthplan">
              <p style={{ fontFamily: "montserrat" }}>Teams</p>
            </a>

            <a href="/induvidual">
              <p style={{ fontFamily: "montserrat" }}>Creaters</p>
            </a>
          </div>

          <div className="Footer_links_headings">
            <h4 style={{ fontFamily: "montserrat" }}>Social Media</h4>

            <div className="socialmedia">
              <p>
                <a href="https://www.facebook.com/perficient/">
                  <img src={fb} alt=""></img>
                </a>
              </p>

              <p>
                <a href="https://www.instagram.com/perficient/">
                  <img src={insta} alt=""></img>
                </a>
              </p>

              <p>
                <a href="https://twitter.com/Perficient/status/1646897190038634496">
                  <img src={x} alt=""></img>
                </a>
              </p>

              <p>
                <a href="https://in.linkedin.com/company/perficient">
                  <img src={linkedin} alt=""></img>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* <b>
          <hr></hr>
        </b> */}
        <hr></hr>

        <div className="Footer_below">
          <div className="Footer_copyright">
            <p style={{ fontFamily: "montserrat" }}>
              @{new Date().getFullYear} Blogit. All right reserved.
            </p>
          </div>

          <div className="Footer_below_links">
            <a href="/terms">
              <div>
                <p style={{ fontFamily: "montserrat" }}>Terms & Conditions</p>
              </div>
            </a>

            <a href="/FAQ">
              <div>
                <p style={{ fontFamily: "montserrat" }}>FAQ</p>
              </div>
            </a>

            <a href="/contact">
              <div>
                <p style={{ fontFamily: "montserrat" }}>Contact</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
