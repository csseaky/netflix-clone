import React from "react";

export const Hero = () => {
  return (
    <div>
      <img
        className="object-cover w-full border-gray-400 border-b-8 absolute h-4/5"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/5e9bab46-3910-452b-90eb-9819e6fcc126/TR-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/5e9bab46-3910-452b-90eb-9819e6fcc126/TR-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/5e9bab46-3910-452b-90eb-9819e6fcc126/TR-en-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/5e9bab46-3910-452b-90eb-9819e6fcc126/TR-en-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        alt=""
      ></img>
      <div
        className="absolute w-full h-4/5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      ></div>
    </div>
  );
};
