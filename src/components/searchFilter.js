import React from 'react';



const Search=({
    searchTem,
    setSearchTerm,
    category,
    setCategory,
    categories,
}) => {
    return ( 
<div className='row my-4'>
    <div className='col-md-6 mb-2'>
        <input type='text ' className='form-control' 
        placeholder='Rechercher un livre'
        value={searchTem}
        onChange={(e) => setSearchTerm(e.target.value)}

        />
        
    </div>
    <div className='col md-4'>
        <select className='form-select' value={category} onChange={(e) => setCategory(e.target.value)}
        >
            <option value =''>Toutes les categories</option>
            {categories.map((cat, index)=>(
                <option key={index}value={cat}>
                    {cat}
                </option>

            ))}

        </select>

    </div>

</div>
     );
};

export default Search;