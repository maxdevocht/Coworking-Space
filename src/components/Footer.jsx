import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--adress">
                <div className="logo2">
                    <i class="ai-location"></i>
                    <h1 className="logo--name2">WeBarelyWork</h1>
                </div>
                <p className="adress">
                    Rozengracht 21A<br />
                    Amsterdam, 1012 RJ<br />
                    T: +31 20 746 27 85
                </p>
            </div>
            <div className="footer--socials">
                <h2 className="social--title">Join Our Social Community</h2>
                <div className="social--logo">
                    <i class="ai-facebook-fill"></i>
                    <i class="ai-twitter-fill"></i>
                    <i class="ai-instagram-fill"></i>
                    <i class="ai-linkedin-box-fill"></i>
                </div>
            </div>
            <div className="footer--contact">
                <h2 className="contact--title">Let's Discuss What's Next</h2>
                <p className="contact--p">
                    Want to reach out?<br />
                    Contact us.
                </p>
                <button className="contact--btn">Contact us</button>
            </div>
        </div>
    )
}