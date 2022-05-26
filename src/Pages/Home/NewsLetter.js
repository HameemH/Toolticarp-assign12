import React from 'react';

const NewsLetter = () => {
    return (
        <div>
             <div className=' py-5 '>
            <div className='grid lg:grid-cols-2 grid-cols-1 '>
            <div className="">
                    <img src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" className='' alt="" />
                </div>
                <div className='flex justify-center  items-center'>
                <div className='card lg:w-96 border border-lime-300 bg-base-100 shadow-xl'>
                    <div className="card-body">
               
                <div className="col-sm-12 col-md-6 ">
                    <div className='loginContainer mt-sm-3 w-75'>
                        <h6 className='text-2xl font-bold'>For getting New Product Update and amazing Offer .You can subscribe to our newsletter.</h6>
                        <form className='d-flex flex-column'>
                            <input   type="email" name="" id="" placeholder='Your Email' className='border border-lime-400 p-3 mb-3' required />
                        <input type="submit" value="Subscribe"className='btn btn-primary shadow  mb-3'/>
                        </form>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default NewsLetter;