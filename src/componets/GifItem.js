import React from 'react'

const GifItem = ({ url, title, key }) => {
    return (
        <div className='m-4 flex flex-col items-center border-2'>
            <img
                className='object-cover object-center h-48 w-96 '
                src={url}
                alt={title}
            />
            <p>{title}</p>

        </div>
    )
}

export default GifItem