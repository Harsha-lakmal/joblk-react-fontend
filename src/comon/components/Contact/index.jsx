import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

// // Define types if necessary (optional)
// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

const InputField= ({ label, id, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-8">
    <label htmlFor={id} className="mb-3 block text-sm font-medium text-dark dark:text-white">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
    />
  </div>
);

const TextAreaField = ({ label, id, value, onChange, placeholder }) => (
  <div className="mb-8">
    <label htmlFor={id} className="mb-3 block text-sm font-medium text-dark dark:text-white">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send the data to a server)
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <InputField
                      label="Your Name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <InputField
                      label="Your Email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="w-full px-4">
                    <TextAreaField
                      label="Your Message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
