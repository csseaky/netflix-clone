import React, { useRef, useState, useEffect } from "react";

export const HeroText = () => {
  const handleClick = (e) => {
    if (!e.target.className.includes("email-address-input")) {
      setAbsoluteEmailAddressTextIsHidden(true);
      emailInput.current.placeholder = "Email address";
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  const [
    absoluteEmailAddressTextIsHidden,
    setAbsoluteEmailAddressTextIsHidden,
  ] = useState(true);
  const [emailInputText, setEmailInputText] = useState("");
  const emailInput = useRef("");
  return (
    <div className="absolute left-1/3 top-56 z-20 w-5/6 text-white text-center max-w-3xl flex gap-4 flex-col ">
      <h1 className="text-7xl tracking-tighter">
        Unlimited movies, TV shows, and more.
      </h1>
      <h2 className="text-3xl">Watch anywhere. Cancel anytime.</h2>
      <h5 className="text-xl mt-8">
        Ready to watch? Enter your email to create or restart your membership.
      </h5>
      <div className="flex relative">
        <p
          className={`whitespace-nowrap absolute left-2 top-1 text-sm text-gray-500 ${
            absoluteEmailAddressTextIsHidden ? "hidden" : null
          }`}
        >
          Email address
        </p>
        <input
          className="py-5 px-30 w-4/6 text-black email-address-input border-black border-r-2"
          style={{ textIndent: 15 }}
          ref={emailInput}
          value={emailInput.current.value}
          type="text"
          onClick={() => {
            emailInput.current.placeholder = "";
            setAbsoluteEmailAddressTextIsHidden(false);
          }}
          onChange={(e) => {
            setEmailInputText(e.target.value);
          }}
          placeholder="Email address"
        />
        <div className="inline-flex flex-row justify-start relative">
          <button className="px-10 py-4 bg-red-600 whitespace-nowrap text-2xl">
            Get Started
          </button>
          <svg
            viewBox="0 0 6 12"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current absolute right-3 top-1/3"
          >
            <desc>chevron</desc>
            <path
              d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
