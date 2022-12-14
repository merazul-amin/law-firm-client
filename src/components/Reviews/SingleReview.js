import { format } from 'date-fns';
import React from 'react';

const SingleReview = ({ review, children }) => {

    const { img, email, name, reviewText, time } = review;
    const entryTime = new Date(time).toLocaleTimeString();
    const date = new Date(time).toDateString();
    console.log(entryTime, typeof entryTime, date);
    return (
        <div className='w-[90%] mx-auto'>

            <div className="mb-2 shadow-lg border rounded-lg rounded-b-5xl overflow-hidden">
                <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                    <div className="flex flex-wrap items-center">
                        <img className="mr-6 rounded-full h-[40px] cursor-pointer" src={img} alt="" />
                        <h4 className="w-full md:w-auto text-xl font-heading font-medium">{name}</h4>
                        <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                        <span className="mr-4 text-xl font-heading font-medium">5.0</span>
                        <div className="inline-flex">
                            <a className="inline-block mr-1" href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                </svg>
                            </a>
                            <a className="inline-block mr-1" href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                </svg>
                            </a>
                            <a className="inline-block mr-1" href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                </svg>
                            </a>
                            <a className="inline-block mr-1" href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                </svg>
                            </a>
                            <a className="inline-block text-gray-200" href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3 mb-6 md:mb-0">
                            <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">{reviewText}</p>
                            <div className="-mb-2">
                                <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                                    <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                                        <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <span className="text-green-500 font-heading font-medium">Good</span>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="w-full md:w-1/3 text-right">
                            <p className="mb-8 text-sm text-black text-center">Time of Review <br /> {entryTime} , {date} </p>
                            {/* {format(time, 'Pp')} */}

                        </div>
                    </div>
                </div>
                <div className='text-center mb-3'>
                    {
                        children && children
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleReview;