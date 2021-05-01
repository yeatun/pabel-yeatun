import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className="project-section-padding row m-5">
            <div className="col-md-6 offset-md-3 form-box">
                <form className="py-4 px-3 text-white" action="https://formspree.io/f/myylkjql" method="post">
                    <h2 className="projects-title mb-4"><span className="mono-color">Get In Touch</span></h2>
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" class="form-control" name="name" id="name" aria-describedby="name" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea rows="5" name="message" class="form-control" id="message" aria-describedby="message" placeholder="Shoutout!"></textarea>
                    </div>
                    {/* <input type="hidden" name="_next" value="//alrabbi.netlify.app" /> */}
                    <button type="submit" class="btn hero-btn touch-btn py-2 w-100 mt-3">Submit</button>

                </form>
            </div>

        </div>
    );
};

export default ContactPage;