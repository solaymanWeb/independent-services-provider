import { useEffect, useState } from 'react';

const useGym = () => {

    const [gyms, setGyms]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setGyms(data))
    } ,[])


    return [gyms, setGyms];
};

export default useGym;