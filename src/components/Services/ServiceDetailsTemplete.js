import React from 'react';
import { HiArrowNarrowRight, HiStar } from "react-icons/hi";

const ServiceDetailsTemplete = ({ service }) => {
    console.log(service);
    return (
        <div className='my-10 w-[90%] mx-auto'>
            <div className='lg:flex shadow-xl rounded-md p-4'>
                {/* left side */}
                <div className='lg:w-[40%] '>
                    <img className='h-[400px] w-[90%] mx-auto rounded-lg shadow-2xl' src={service.img} alt="" />
                </div>

                {/* right side */}
                <div className='lg:w-[60%] shadow-2xl mt-6 lg:mt-0 bg-purple-200 p-4 rounded-lg'>
                    <h1 className='text-4xl'>{service.name}</h1>
                    <p className='font-bold my-2'>Hiring Cost Starts From: {service.price} </p>
                    <div className='text-red-500 text-xl flex'>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                        <HiStar></HiStar>
                    </div>
                    <p className='my-5'>
                        {service?.info}
                    </p>

                    {/* Payment Options */}
                    <div className='flex justify-around'>
                        <div className='flex align-middle h-[100px]'>
                            <div>
                                <input className='h-6 mx-1 w-[100%]' type="radio" name="" id="" />
                            </div>
                            <div className='mx-3'>
                                <p>Full Payment now.</p>
                                <p><small>Get 10% discount.</small></p>
                            </div>
                        </div>
                        <div className='flex align-middle h-[100px]'>
                            <div>
                                <input className='h-6 mx-1 w-[100%]' type="radio" name="" id="" />
                            </div>
                            <div className='mx-3'>
                                <p>Payment with Emi.</p>
                                <p><small>Cost 10% extra.</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn'>Hire Me</button>

                    </div>
                </div>
            </div>
            <div className='text-center my-10'>
                {service.duties?.length > 0 ?
                    <>
                        <h1 className='text-3xl text-pink-600 font-bold my-3'>My goal for a my client.</h1>
                        <ul className='w-[100%] md:w-[50%] mx-auto text-justify'>
                            {
                                service.duties.map(duty => <li> <HiArrowNarrowRight className='inline text-xl'></HiArrowNarrowRight>  {duty}</li>)
                            }
                        </ul>
                    </>

                    :
                    <></>
                }

            </div>
        </div>
    );
};

export default ServiceDetailsTemplete;