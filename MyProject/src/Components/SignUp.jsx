import { useState } from "react";
import validationSchema from "./Validation Schema";
import axios from 'axios'

const SignUp = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [user, setuser] = useState("");
  const [vendor, setvendor] = useState("Select Here...");
  //const [check, setcheck] = useState(false);
  const [errors, seterror] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data= {
        email: email,
        password: pass,
        username: user,
        cpassword: cpass,
        vendor: vendor
      }
      await validationSchema.validate(
        {
          email,
          pass,
          user,
          cpass,
          vendor,
        },
        { abortEarly: false }
      );
      try {
        const response = await axios.post('http://127.0.0.1:5000/register', {
          data: data
        });
        console.log('response: ', response.data)
      } catch (error) {
        console.error('Error: ', error)
      }
      console.log("Form Submitted");
      setemail("");
      setpass("")
      setcpass("")
      setuser("")
      setvendor("Select Here...")
      // Clear any previous errors if validation succeeded
      setErrors({});
    } catch (error) {
      if (error.inner) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        seterror(errors); // Update the errors state
      }
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-4/5 border-2 border-[#486730] bg-[#150f2b] shadow-lg shadow-black rounded-md p-4"
      >
        <div className="flex justify-center items-center">
          <h2 className="text-3xl mb-2 font-serif text-justify italic font-semibold text-[#486730]">
            Let's Get You Signed Up!
          </h2>
        </div>
        <label
          htmlFor="email"
          className="flex flex-col text-[#486730] font-serif font-bold italic mb-6"
        >
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
            className="p-1 mb-1 border-b-2 border-white text-white font-serif bg-transparent w-[90%] focus:outline-none focus:border-[#486730] focus:transition-all focus:duration-200 placeholder:text-gray-500 "
            autoComplete="off"
          />
          {errors.email && <p className="text-red-500 font-serif text-sm">{errors.email}</p>}
        </label>
        
        <label
          htmlFor="user"
          className="flex flex-col text-[#486730] font-serif font-bold italic mb-6"
        >
          Username
          <input
            type="text"
            id="text"
            name="user"
            value={user}
            onChange={(e) => setuser(e.target.value)}
            placeholder="Your Username..."
            className="p-1 mb-1 border-b-2 border-white text-white font-serif bg-transparent w-[90%] focus:outline-none focus:border-[#486730] focus:transition-all focus:duration-200 placeholder:text-gray-500 "
            autoComplete="off"
          />
          {errors.user && <p className="text-red-500 font-serif text-sm">{errors.user}</p>}
        </label>
        
        {/* Input field for password of the user */}
        <label
          htmlFor="password"
          className="flex flex-col text-[#486730] font-serif font-bold italic mb-6"
        >
          Password
          <input
            type="password"
            id="password"
            name="pass"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter your password"
            className="p-1 mb-1 border-b-2 border-white text-white font-serif bg-transparent w-[90%] focus:outline-none focus:border-[#486730] focus:transition-all focus:duration-200 placeholder:text-gray-500 "
            autoComplete="off"
          />
          {errors.pass && <p className="text-red-500 font-serif text-sm">{errors.pass}</p>}
        </label>
        <label
          htmlFor="confirm password"
          className="flex flex-col text-[#486730] font-serif font-bold italic mb-6"
        >
          Confirm Password
          <input
            type="password"
            id="cpassword"
            name="cpass"
            value={cpass}
            onChange={(e) => setcpass(e.target.value)}
            placeholder="Confirm your password"
            className="p-1 mb-1 border-b-2 border-white text-white font-serif bg-transparent w-[90%] focus:outline-none focus:border-[#486730] focus:transition-all focus:duration-200 placeholder:text-gray-500 "
            autoComplete="off"
          />
          {errors.cpass && <p className="text-red-500 font-serif text-sm">{errors.cpass}</p>}
        </label>
        
        <label
          htmlFor="Vendor"
          className="flex flex-col text-[#486730] font-serif font-bold italic mb-6"
        >
          Joining Purpose
          <button
            type="button"
            name="vendor"
            onClick={toggleDropdown}
            className="flex justify-normal p-1 mb-4 border-b-2 border-white text-white font-serif bg-transparent w-[90%] focus:outline-none focus:border-[#486730] focus:transition-all focus:duration-200 placeholder:text-gray-500 "
          >
            {vendor}
          </button>
          {errors.vendor && <p className="text-red-500 font-serif text-sm">{errors.vendor}</p>}
        </label>
        {isOpen && (
          <div className=" w-[90%] rounded-md bg-[#1b1b1e] mb-4">
            <div className="py-1">
              <li
                onClick={() => {
                  setvendor("Customer");
                  setIsOpen(!isOpen);
                }}
                className="block px-4 py-2 text-sm text-white hover:bg-[#486730] hover:text-black hover:font-xl hover:font-bold"
              >
                Customer
              </li>
              <li
                onClick={() => {
                  setvendor("Client");
                  setIsOpen(!isOpen);
                }}
                className="block px-4 py-2 text-sm text-white hover:bg-[#486730] hover:text-black hover:font-xl hover:font-bold"
              >
                Client
              </li>
            </div>
          </div>
        )}
        

        {/* Sign In Button */}
        <button
          type="submit"
          className="bg-[#486730] text-black py-2 px-4 rounded-md font-serif font-extrabold"
        >
          Sign Up
        </button>
        <p className="text-center">
          <a
            href="#!"
            className="text-[#486730] text-sm hover:underline italic"
          >
            Already have an account? Sign In
          </a>
        </p>
      </form>
    </>
  );
};

export default SignUp;
