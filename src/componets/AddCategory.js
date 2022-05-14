import React, { useState } from 'react'

const AddCategory = ({ categories, setCategories }) => {

    const [searchValue, setSearchValue] = useState('')

    const addCategory = () => {
        const cat = [searchValue, ...categories]
        setCategories(cat)
        setSearchValue('')
    }

    const deleteCategories = () => {
        setCategories([])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory();
    }

    const handleSearchValue = (searchValue) => {
        setSearchValue(searchValue)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center mx-12' >
                <input
                    type="text"
                    value={searchValue}
                    placeholder='Busca un gif'
                    className='border-2 rounded-md mx-2 px-2 w-2/4 text-center'
                    onChange={e => handleSearchValue(e.target.value)}
                />

                <button
                    className='mx-6 p-2 px-4 rounded-md bg-green-500'
                    onClick={addCategory}
                >
                    Buscar
                </button>

                <button
                    className=' p-2 px-4 rounded-md bg-rose-400'
                    onClick={deleteCategories}
                >
                    Borrar
                </button>

            </div>
        </form>

    )
}

export default AddCategory