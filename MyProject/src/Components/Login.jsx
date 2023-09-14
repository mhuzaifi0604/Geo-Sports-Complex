import { useState } from "react";
import * as Yup from 'yup';
const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    pass: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?:(?!([a-zA-Z])\1{7,}).)*$/,
        "Password cannot have 8 consecutive identical characters"
      ),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ email, pass }, { abortEarly: false });
        setErrors({});
        
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-4/5 border-2 border-[#486730] bg-[#150f2b] shadow-lg shadow-black rounded-md p-4"
      >
        <div className="flex justify-center items-center">
          <h2 className="text-3xl mb-2 font-serif text-justify italic font-semibold text-[#486730]">
            Nice To See You Again!
          </h2>
        </div>
        <label
          htmlFor="email"
          className="flex flex-col text-[#486730] font-serif font-bold italic"
        >
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
            className="p-1 mb-10 border-b-2 border-white text-white font-serif bg-transparent w-[90%] focus:outline-none focus:border-[#486730] focus:transition-all focus:duration-200 placeholder:text-gray-500 "
            autoComplete="off"
          />
        </label>
        {/* Input field for password of the user */}
        <label
          htmlFor="password"
          className="flex flex-col text-[#486730] font-serif font-bold italic"
        >
          Password
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter your password"
            className="p-1 mb-10 border-b-2 border-white text-white font-serif bg-transparent w-[90%] focus:outline-none focus:border-[#486730] focus:transition-all focus:duration-200 placeholder:text-gray-500 "
            autoComplete="off"
          />
        </label>

        {errors.pass && <p className="text-red-500">{errors.pass}</p>}

        <div className="flex items-center justify-between mb-5">
          <label
            htmlFor="check-box"
            className="appearance-none w-32 h16 rounded-md cursor-pointer text-[#486730] font-bold text-sm"
          >
            <input
              type="checkbox"
              id="check-box"
              className="text-white mr-2 font-serif"
            />
            Remember Me
          </label>

          <a
            href="#!"
            className="text-[#486730] text-sm underline italic font-bold font-serif"
          >
            Forgot Password?
          </a>
        </div>
        {/* Sign In Button */}
        <button
          type="submit"
          className="bg-[#486730] text-black py-2 px-4 rounded-md font-serif font-extrabold"
        >
          Sign in
        </button>
        <p className="text-center">
          <a
            href="#!"
            className="text-[#486730] text-sm hover:underline italic"
          >
            Don't have an account? Sign up
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
