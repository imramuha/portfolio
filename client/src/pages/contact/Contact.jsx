import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="contactContainer">
        <div className="contactData">
          <p>
            Contact me at <span>imranmuha@outlook.com</span> <br />OR through the form
          </p>
        </div>
        <div className="contactForm">
          <div class="contact-form">
            <div>
              <form>
                <div>
                  <input type="hidden" value="31" />
                  <input type="hidden" value="5.1.1" />
                  <input type="hidden" value="en_US" />
                  <input type="hidden" />
                  <input type="hidden" value="0" />
                  <input type="hidden" value="" />
                </div>
                <p>
                  <label>
                    <br />
                    <span>
                      <input
                        type="text"
                        name="your-name"
                        value=""
                        size="40"
                        id="your-name"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name*"
                      />
                    </span>{" "}
                  </label>
                </p>
                <p>
                  <label>
                    <br />
                    <span>
                      <input
                        type="email"
                        name="your-email"
                        value=""
                        size="40"
                        id="your-email"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Email*"
                      />
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <br />
                    <span>
                      <input
                        type="text"
                        name="subject"
                        value=""
                        size="40"
                        id="subject"
                        aria-invalid="false"
                        placeholder="Subject"
                      />
                    </span>{" "}
                  </label>
                </p>
                <p>
                  <label>
                    <br />
                    <span>
                      <textarea
                        name="your-message"
                        cols="40"
                        rows="10"
                        id="your-message"
                        aria-invalid="false"
                        placeholder="Question"
                      ></textarea>
                    </span>{" "}
                  </label>
                </p>
                <p>
                  <input type="submit" value="CONTACT US" />
                  <span class="ajax-loader"></span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
