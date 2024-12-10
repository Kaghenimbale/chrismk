import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <form className="bg-red-700" action="" method="post">
          <div>
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              id=""
            />
            <input type="text" name="Last Name" placeholder="Last Name" id="" />
            <input type="email" name="Email" placeholder="Email" id="" />
            <input type="tel" name="Phone" placeholder="Phone" id="" />
            <input type="text" name="Company" placeholder="Company" id="" />
            <input type="text" name="Address" placeholder="Address" id="" />
          </div>

          <input type="range" name="Range" id="" />

          <textarea name="Message" placeholder="Message" id=""></textarea>

          <button type="submit">SUBMIT</button>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
