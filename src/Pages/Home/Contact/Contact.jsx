import React from 'react';
import DropMessage from './ContactShare/DropMessage';

const Contact = () => {
    return (
        <div>
            <div>
                <DropMessage></DropMessage>
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