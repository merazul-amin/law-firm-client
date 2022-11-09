import React from 'react';
import { Helmet } from "react-helmet";
import swal from 'sweetalert';

const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const info = form.info.value;
        const date = new Date();
        const service = {
            name,
            price: `$${price}`,
            img,
            info,
            time: date.toLocaleString()
        }


        // set the service in db by post method.

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    swal("Service Added!", "!", "success");
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Add Service</title>
            </Helmet>

            <form onSubmit={handleSubmit} className='w-[95%] md:w-[50%] mx-auto border text-center my-10 shadow-lg p-4 rounded-xl'>
                <h1>Service Name</h1>
                <input name='name' required type="text" placeholder="Service Name" className="input input-bordered input-primary w-full " /><br />
                <h1>Service Price</h1>
                <input name='price' required type="text" placeholder="Service Price" className="input input-bordered input-primary w-full" /><br />
                <h1>Service Image Url</h1>
                <input name='img' required type="text" placeholder="Service Image Url" className="input input-bordered input-primary w-full" /><br />
                <h1>About the Service</h1>
                <textarea name='info' required className="textarea textarea-primary w-full" placeholder="Some Info About the Service"></textarea><br />
                <button className='btn btn-info' type="submit">Add Service</button>
            </form>


        </div>
    );
};

export default AddService;