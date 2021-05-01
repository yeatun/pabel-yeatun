import React from 'react';
import Typical from 'react-typical'

const Blog = () => {
    return (
        <div className="py-5 my-4">
     
        <h1 className="title-name text-center">
        <Typical
        steps={['Coming Soon.....',500 ]}
        loop={Infinity}
        wrapper="p"
      />
        </h1>
       
  
    </div>
    );
};

export default Blog;