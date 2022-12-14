import React from 'react';
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';

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
            time: date
        }


        // set the service in db by post method.

        fetch('https://assignment-11-server-khaki.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added.');
                    form.reset();
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Add Service- Law Firm</title>
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