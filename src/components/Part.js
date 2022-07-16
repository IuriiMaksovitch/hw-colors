import React from 'react'

const Part = ({ backgroundColor, handleColors}) => {
    return (
        <div className='part' onClick={() => handleColors(backgroundColor)} style={{ backgroundColor }}></div>
    )
}

export default Part