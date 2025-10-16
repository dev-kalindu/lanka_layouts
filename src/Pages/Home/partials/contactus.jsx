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
    <div className="">
      <section id="contact" className="py-5 contact-us-background">
        <div className="container">
          <div className="row contact-us align-items-center">
            <div className="col-md-6">
              <div className="row justify-content-center ">
                <div className="col-md-7 px-4 px-md-2 mb-5 mb-md-2">
                  <div className="mb-3">
                    <p className="fs-1 mb-3">Contact Us</p>
                    <p className="mb-4">
                      Let us handle your technical documentation so you can
                      focus on the bigger picture.
                    </p>
                  </div>
                  <div>
                    <div className="mail mb-2">
                      <i class="fa-solid fa-envelope pe-2"></i>
                      <a className="text-black text-decoration-none" href="mailto:infolankalayouts@gmail.com">infolankalayouts@gmail.com</a>
                    </div>
                    <div className="tel mb-2">
                      <i class="fa-solid fa-phone pe-2"></i>
                      <a className="text-black text-decoration-none" href="tel:0712345678">(+94) 71 234 5678</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white p-4 p-md-5 rounded rounded-4 shadow-sm">
                <p className="mb-5 text-black fs-4">
                  We'd love to hear from you! <br />
                  Let's get in touch
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        for="name"
                        className="form-label text-black custom-lable"
                      >
                        Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        for="email"
                        className="form-label text-black custom-lable"
                      >
                        Email
                      </label>
                      <div className="input-group">
                        <span class="input-group-text bg-white" id="email">
                          <i class="fa-regular fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="form-control email-input"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        for="reason"
                        className="form-label text-black custom-lable"
                      >
                        Reason
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="subject"
                        id="reason"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        for="name"
                        className="form-label text-black custom-lable"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={4}
                        required
                      />
                    </div>
                    <div style={{ margin: "10px 0" }} className="pb-2">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfoV-srAAAAALxitVlNaqAmuwBwUdiSvUx8P3jl"
                        onChange={() => setCaptchaValid(true)}
                        onExpired={() => setCaptchaValid(false)}
                      />
                    </div>
                    <div className="mb-3 text-center">
                      <button
                        className="btn btn-primary custom-btn-2 mt-4 px-5 py-2 jost"
                        type="submit"
                        disabled={!captchaValid}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // Lankalayouts@1234
  );
}

export default contactus;
