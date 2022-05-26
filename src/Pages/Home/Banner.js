import React from 'react';

const Banner = () => {
    return (
       <div className="hero min-h-screen" style={{backgroundImage: "url(https://i.ibb.co/cypX5jN/set-tools-tool-kit-isolated-1.jpg?w=1000&h=800)"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
      <p className="mb-5">We make carpantry tools for professional , newbies and for personal home works for the last 30 Years</p>
      <button className="btn btn-primary text-white">See Collection</button>
    </div>
  </div>
</div>
    );
};

export default Banner;