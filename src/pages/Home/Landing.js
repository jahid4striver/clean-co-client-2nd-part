import React from 'react';
// import bucketgirl from '../../assets/image/bucketgirl.png'

const Landing = () => {
    return (
        <>
        <div class="hero h-screen lg:h-[60vh] bg-accent">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <p>Best Quality</p>
                    <h1 class="text-3xl font-bold">Professional Cleaning Services</h1>
                    <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div data-aos="fade-left" className='h-[60vh] shrink-0'>
                <img src='https://www.clearchoiceuk.com/storage/2018/08/qualities-and-skills-of-a-commercial-cleaner.jpg' class="h-full z-10" alt='' />
                </div>
            </div>
        </div>
        <div className='shadow-2xl mt-[-50px] mx-auto bg-base-300 relative z-20  w-[90vw] p-10'>
                <h2 className='text-2xl mb-5 text-primary'>Get Free Estimate</h2>
                <div className='grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </>
    );
};

export default Landing;