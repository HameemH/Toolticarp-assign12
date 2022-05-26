import React from 'react';

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 py-10'>
            <div className="card lg:w-96  mx-auto border border-lime-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> How will you improve the performance of a React Application?</h2>
                    <p>We can improve React Application by code spliting and use import to bring that code to another component.We can also Memoizing React component.Image can be heavy at a react app we can use lazy loading for images to improve performance.</p>
                </div>
            </div>
            <div className="card lg:w-96  mx-auto border border-lime-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>React State is where we can store information temporarily as js don't have that ability.We can manage state by react hooks and application state.Hooks are function that can manage a state.useState is a great example how we manage a state . And an advanced level management of state is context api.</p>
                </div>
            </div>
            <div className="card lg:w-96  mx-auto border border-lime-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>Prototypical Inheritence is the ability to get tther objects method and property.All JavaScript objects inherit properties and methods from a prototype.lets think of it as a non coding example how it works.We all know that dog is a animal.It mean all dogs are animal but not all animals are dog.So dogs have that animal property usually all animals have with adding dogs own unique but not all animals have the dog property.</p>
                </div>
            </div>
            <div className="card lg:w-96  mx-auto border border-lime-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Why you do not set the state directly in React?</h2>
                    <p>We dont set state directly because of how react works.We know that React creates a virtual dom and also we know that react re renders when a state or component changes and compares it with previous dom. So if we set a state directly it  will change the reference of the state in the previous virtual DOM .As a result virtual dom cant detect a state has been changed.Thats  why we dont set the state directly.</p>
                </div>
            </div>
            <div className="card lg:w-96  mx-auto border border-lime-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>If i have an array of products with name and other information i will use either filter method/includes method or some method.lets say we have a array of object named products. So, const Products = [...], using filter -- "(Products.filter((p)=p.name ==='name'))"</p>
                </div>
            </div>
            <div className="card lg:w-96  mx-auto border border-lime-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;