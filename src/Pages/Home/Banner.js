import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">


                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-7xl font-bold">Find the Best <br></br>Products For Your<br></br><span className='text-red-500'>Vehicle Now!!</span></h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn border-none px-10 rounded-full bg-red-500">Shop Now</button>
                        </div>


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
                            <div className="card-body">
                                <div className="form-control">

                                    <input type="text" placeholder="Product Type" className="input input-bordered rounded-full" />
                                </div>

                                <div className="form-control mt-4">

                                    <input type="text" placeholder="Category" className="input input-bordered rounded-full" />

                                </div>
                                <div className='flex mt-4'>
                                    <div className='lg:mr-8'>

                                        <input type="number" placeholder="Year" className="w-36 input input-bordered rounded-full" />

                                    </div>
                                    <div>

                                        <input type="number" placeholder="Brand" className="w-36 input input-bordered rounded-full" />

                                    </div>
                                </div>

                                <div className="form-control mt-4">
                                    <button className="btn bg-red-600 rounded-full">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Banner;