// import React, { useState } from "react";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     comment: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted Successfully!");
    
//   };

//   return (
//     <div className="page">
//       <h2>Contact Us</h2>

//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" onChange={handleChange} />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <input name="phone" placeholder="Phone" onChange={handleChange} />

 //<textarea
//           name="comment"
//           placeholder="Feedback"
//           onChange={handleChange}
//         ></textarea>
//        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 Validation: agar sab blank hain
    if (
      form.name === "" &&
      form.email === "" &&
      form.phone === "" &&
      form.comment === ""
    ) {
      alert("Please fill the form before submitting!");
      return;
    }

    // ✅ Data filled → alert show
    alert(`
Form Submitted Successfully!

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Comment: ${form.comment}
    `);

    // Optional: form reset
    setForm({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <div className="page">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="comment"
          placeholder="Feedback"
          value={form.comment}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
