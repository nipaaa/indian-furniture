import React, { useState } from 'react';



const About = () => {

  const [time,setTime] = useState(5);
  const decrease = () => {
      if (time>0) {
        const newTime = time - 1;
        setTime(newTime);
      }
  }
   
    return (
        <div className='text-center my-5 '>
            
            <button onClick={decrease}  type="button" className="btn btn-warning my-2">Decrease</button>
            
        </div>
    );
};

export default About;