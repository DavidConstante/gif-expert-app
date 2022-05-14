import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer'])

    return (
        <div className='flex flex-col   m-6'>
            <h2 className=' m-2 text-center text-4xl' >Gift Expert App</h2>
            <hr className='my-4' />

            <AddCategory
                categories={categories}
                setCategories={setCategories}
            />

            <div className=''>
                <ol>
                    {categories.map((cat, index) => <li><GifGrid category={cat} key={cat} /></li>)}
                </ol>

            </div>



        </div>
    )
}

export default GifExpertApp