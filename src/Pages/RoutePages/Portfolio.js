import React from 'react';

const Portfolio = () => {
    return (
        <div className='h-screen flex justify-center bg-slate-200 items-center'>
            <div class="card lg:w-96 bg-slate-500 border border-lime-300 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hameem Hossain</h2>
                    <h2 class="card-title">hamimhossain670@gmail.com</h2>
                    <h2 class="card-title">Education: HSC</h2>
                    <h2 class="card-title">Skills: HTML| CSS | JavaScript | REACT JS | NODE | MONGO DB | Express JS | Bootstrap | Tailwind CSS</h2>
                    <h2 className="card-title"> <a href="https://assignment11-3ec5e.web.app/" className='text-primary link-hover'>1st project</a></h2>
                    <h2 className="card-title"> <a href="https://assignment-x-68d60.web.app/home" className='text-primary link-hover'>2nd project</a></h2>
                    <h2 className="card-title"> <a href="https://assignment-0009.netlify.app/" className='text-primary link-hover'>3rd project</a></h2>

                    
                </div>
            </div>
        </div>
    );
};

export default Portfolio;