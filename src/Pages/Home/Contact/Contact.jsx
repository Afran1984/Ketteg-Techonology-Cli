import React from 'react';

const Contact = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl text-center mt-10'>Tell us how we can help</h1>
                <div className="divider"></div>
                <div className='grid grid-cols-2 mt-3 gap-10 p-5'>
                    <div>
                        <h1 className='text-3xl'>Just drop us a line with some description of what you are looking for and we will take it from there.</h1>
                        <p className='mt-10'>btw, if you want to join us then please follow the instructions on Company & Culture page and email your CV to hrkettegtech@gmail.com</p>
                    </div>
                    <div>
                        <div>
                        <label className='-mt-3' htmlFor="Email">Email Address</label> <br />
                        {/* <input type="text" placeholder="Type here" className="mt-2 input input-bordered w-full max-w-xs" /> */}
                        <input type="text" placeholder='Enter Your Email' className='w-full p-3 border border-indigo-600' required />
                        </div>
                        <div className='mt-10'>
                            <label className='-mt-3' htmlFor="">Message</label> <br />
                            {/* <textarea className="textarea textarea-primary" placeholder="Bio"></textarea> */}
                            <textarea className='w-full p-3 h-32 border border-indigo-600 ' name="" placeholder='Enter your Message' id=""></textarea>
                        </div>
                        <button className='border border-indigo-600 p-2 mt-4'>Submit</button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='grid grid-cols-2 p-5'>
                    <div>
                        <h1 className='text-3xl uppercase'>Chittagong</h1>
                        <h1 className='text-2xl mt-2'>Mozaffer Nagar Residential Area</h1>
                        <h1 className='text-2xl mt-2'>Polytechnic</h1>
                        <h1 className='text-2xl mt-2'>Bayejid Bostami</h1>
                        <h1 className='text-2xl mt-2'>Chittagong 4209</h1>
                        <h1 className='text-2xl mt-2'>+8801717663447</h1>
                        <p className='text-2xl mt-2'>kettegtech@gmail.com</p>

                    </div>
                    <div>
                        <p>Google Map</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;