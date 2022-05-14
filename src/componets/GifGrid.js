import React, { useEffect } from 'react'
import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import Skeleton from '@mui/material/Skeleton';


const GifGrid = ({ category }) => {

    const { data: gifs, loading } = useFetchGifs(category);

    return (
        <div>
            <h3 className='mx-36 text-2xl font-bold'>{category}</h3>
            <h3 className='mx-36 text-2xl font-bold'>{loading &&

                <div className='flex flex-wrap justify-center' >

                    <Skeleton className='m-4 items-center border-2' variant="rectangular" width={384} height={192} />
                    <Skeleton className='m-4 items-center border-2' variant="rectangular" width={384} height={192} />
                    <Skeleton className='m-4 items-center border-2' variant="rectangular" width={384} height={192} />
                </div>
            }</h3>

            <ol >
                <li className='flex flex-wrap justify-center'>
                    {gifs.map(gif => <GifItem url={gif.url} title={gif.title} />)}
                </li>
            </ol>

        </div>
    )
}

export default GifGrid