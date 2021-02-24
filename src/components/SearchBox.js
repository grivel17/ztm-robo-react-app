import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2 b'>
            <input 
                className="pa2 bg-gold"
                type="search" 
                placeholder="search robot" 
                onChange={ searchChange }    
                />
        </div>
    )
}


export default SearchBox;