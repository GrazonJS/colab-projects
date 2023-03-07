import React from 'react'
import {feedData} from '../Data/feedData'

export default function Feed(){


    return(
        <>

        {feedData.map((data) => (
            <div>
                <div className='bg-blue-500 flex flex-col mx-80 my-2 rounded-md p-2 text-white'>
                    <h3 className='font-semibold text-xl'>{data.title}</h3>
                    <p>{data.description}</p> 
                </div>
            </div>
        ))}


    
        </>
    )
}