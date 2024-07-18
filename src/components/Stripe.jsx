import React from 'react';

function Stripe({image, number, index}) {
    

    return (
        <div style={index==0 ? {borderLeft: 'none'} : {}} className={`w-[22.5%] flex inline justify-between mt-8 py-5 px-10 border  border-zinc-600 text-white shrink-0`}>
            <img src={image} alt="" />
            <h1 className='font-semibold text-xl font-[Satoshi_Variable]'>{number}</h1>
        </div>
    )
}

export default Stripe;