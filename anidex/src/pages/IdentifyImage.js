import React, { useState } from 'react';
import axios from 'axios';

function IdentifyImage() {
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/api/snake/identify-image', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Identify Snake by Image</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default IdentifyImage;
