import React from 'react';

const Banner = () => {
    return (
       <div class="hero min-h-screen" style={{backgroundImage: "url(https://i.ibb.co/cypX5jN/set-tools-tool-kit-isolated-1.jpg?w=1000&h=800)"}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello There</h1>
      <p class="mb-5">We make carpantry tools for professional , newbies and for personal home works for the last 30 Years</p>
      <button class="btn btn-primary text-white">See Collection</button>
    </div>
  </div>
</div>
    );
};

export default Banner;