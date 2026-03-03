"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./contexts/toastContext";

const Form = () => {
  const formRef = useRef();
  const { showSuccess, showError } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcxr0fv",
        "template_c49p4xv",
        formRef.current,
        "45XdCBbWdANckPyy-",
      )
      .then(
        () => {
          showSuccess("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          showError("Failed to send message.");
          console.log(error);
        },
      );
  };

  return (
    <div>
      <div className="w-full bg-white rounded-lg shadow-md px-6 pt-6 pb-6 md:pb-36">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Send us a message
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 p-2 rounded-lg h-24"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-full w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
