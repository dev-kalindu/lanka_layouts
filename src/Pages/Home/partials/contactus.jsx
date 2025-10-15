import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function contactus() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const captchaValue = recaptchaRef.current.getValue();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    emailjs
      .sendForm(
        "service_6mx8oaq",
        "template_8vvnp43",
        form.current,
        "itxDt64nW4YCYr1sI"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
          recaptchaRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <div>
      <section
        id="contact"
        className="py-5 bg-secondary text-white text-center"
      >
        <div className="container">
          <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
          <p className="mb-4">
            Let us handle your technical documentation so you can focus on the
            bigger picture.
          </p>

          <div className="row">
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                  />
                </div>
                <div style={{ margin: "10px 0" }}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LfoV-srAAAAALxitVlNaqAmuwBwUdiSvUx8P3jl"
                    onChange={() => setCaptchaValid(true)}
                    onExpired={() => setCaptchaValid(false)}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" disabled={!captchaValid}>Send</button>
                </div>
              </form>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </div>
    // Lankalayouts@1234
  );
}

export default contactus;
