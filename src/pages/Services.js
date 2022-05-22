import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../api';

const Services = () => {
    const [services, setServices]= useState([]);
    console.log(services);

    useEffect(()=>{
    //    axios.get('http://localhost:5000/services'.then(res=> setServices(res.data)));

       (async()=>{
        const res= await fetcher.get('/services')
        setServices(res.data);
       })();

    },[])
    return (
        <div>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
            <h2>This is Services</h2>
        </div>
    );
};

export default Services;