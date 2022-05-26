import React from 'react';

const Bulkorder = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 py-3 bg-slate-100'>
            <div>
            <div className='flex justify-center  items-center'>
                <div className='card lg:w-96 border border-lime-300 bg-base-100 shadow-xl'>
                    <div className="card-body">
               
                <div className="col-sm-12 col-md-6 ">
                    <div className='loginContainer mt-sm-3 w-75'>
                        <form className='d-flex flex-column'>
                            <input   type="email" name="" id="" placeholder='Your Email' className='border border-lime-400 p-3 mb-3' required />
                            <input   type="email" name="" id="" placeholder='Your Name' className='border border-lime-400 p-3 mb-3' required />
                            <input   type="email" name="" id="" placeholder='Your Phone No' className='border border-lime-400 p-3 mb-3' required />
                            <textarea placeholder='Your Product requirement' className='border border-lime-400 p-3 mb-3' name="" id="" cols="30" rows="7"></textarea>
                        <input type="submit" value="Send Messege"className='btn btn-primary shadow  mb-3'/>
                        </form>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div className='flex justify-center  items-center'> <p className='text-2xl font-bold'>
            For Our customers we Provide some serious service.If  you need more than we have in our stock or need .No worry we got you coverd. Or need a tool we dont have just fill these form and we will we get to you to talk serious business.Cheers!</p> </div>
        </div>
    );
};

export default Bulkorder;