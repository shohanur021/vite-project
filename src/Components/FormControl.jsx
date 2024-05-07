import React from 'react';

const FormControl = () => {
    
    const PostFromData = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    };

    return (
        <div>
            <form onSubmit={PostFromData}>
                <input placeholder='Yuor name' />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default FormControl;