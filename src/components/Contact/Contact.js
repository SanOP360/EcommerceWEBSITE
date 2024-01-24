import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [error, setError] = useState(null);

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Validation: Check if any field is empty
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.number.trim() === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://contact-f3ed6-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const data = await response.json();
      console.log("Data successfully submitted:", data);

      // Clear the form and error after successful submission
      setFormData({
        name: "",
        email: "",
        number: "",
      });
      setError(null);
    } catch (error) {
      setError("Error submitting data");
      console.error("Error submitting data:", error.message);
    }
  };

  return (
    <>
      <h1 className="ContactHead">
        For Contacting us, Submit the following form
      </h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="contactForm">
        <label htmlFor="Name"
        className="label">Name</label>
        <input
        className="input"
          type="text"
          name="name"
          onChange={inputHandler}
          value={formData.name}
        />

        <label htmlFor="Email"
        className="label">Email</label>
        <input
        className="input"
          type="email"
          name="email"
          onChange={inputHandler}
          value={formData.email}
        />

        <label htmlFor="Number"
        className="label">Number</label>
        <input
        className="input"
          type="number"
          name="number"
          onChange={inputHandler}
          value={formData.number}
        />

        <button type="submit" className='btnContact' onClick={submitHandler}>
          Contact Now
        </button>
      </form>
    </>
  );
};

export default Contact;
