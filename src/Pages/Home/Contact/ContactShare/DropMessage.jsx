import { useState } from 'react';
import Swal from 'sweetalert2';

const DropMessage = () => {
    const [inputData, setInputData] = useState({ email: "", message: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleDropMessageSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        Swal.fire({
            title: "Message Sent Successfully ",
            icon: "success",
            draggable: true,
        });
        setInputData({ email: "", message: "" }); // Clear the inputs
    };
    

    return (
        <div>
            <h1 className='text-5xl text-center mt-10'>Tell us how we can help</h1>
            <div className="divider"></div>
            <div className='grid grid-cols-2 mt-3 gap-10 p-5'>
                <div>
                    <h1 className='text-3xl'>Just drop us a line with some description of what you are looking for and we will take it from there.</h1>
                    <p className='mt-10'>
                        btw, if you want to join us then please follow the instructions on the Company & Culture page and email your CV to hrkettegtech@gmail.com
                    </p>
                </div>
                <form onSubmit={handleDropMessageSubmit}>
                    <div>
                        <label className='-mt-3' htmlFor="email">Email Address</label> <br />
                        <input
                            type="text"
                            name='email'
                            placeholder='Enter Your Email'
                            className='w-full p-3 border border-indigo-600'
                            value={inputData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='mt-10'>
                        <label className='-mt-3' htmlFor="message">Message</label> <br />
                        <textarea
                            className='w-full p-3 h-32 border border-indigo-600'
                            name='message'
                            placeholder='Enter your Message'
                            value={inputData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className='border border-indigo-600 p-2 mt-4'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DropMessage;
