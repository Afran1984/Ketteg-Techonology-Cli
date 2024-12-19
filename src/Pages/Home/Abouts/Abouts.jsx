import React from 'react';

const Abouts = () => {
    return (
        <div className='p-5'>
            <h1>About for Ketteg techonology</h1>
            <ul className="steps w-full">
                <li data-content="2023" className="step step-neutral">Idea generate</li>
                <li data-content="" className="step step-neutral">Step 2</li>
                <li data-content="✓" className="step step-neutral">Step 3</li>
                <li data-content="✕" className="step step-neutral">Step 4</li>
                <li data-content="★" className="step step-neutral">Step 5</li>
                <li data-content="" className="step step-neutral">Step 6</li>
                <li data-content="●" className="step step-neutral">Step 7</li>
            </ul>
        </div>
    );
};

export default Abouts;