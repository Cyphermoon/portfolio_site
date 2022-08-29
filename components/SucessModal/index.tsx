import React from 'react'
import { successModalType } from '../../types'

const SuccessModal = ({ onClose }: successModalType) => {
    return (
        <>
            <div className='fixed z-20 bg-black opacity-25 backdrop-blur-sm inset-0 w-screen h-screen'>

            </div>
            <div className='fixed flex flex-col z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 w-full max-w-md bg-slate-100 rounded-lg p-6'>
                <button className=' text-right' onClick={onClose}>X</button>
                <p className=' justify-self-center self-center'>Message Sent Successfully</p>
            </div>

        </>

    )
}

export default SuccessModal