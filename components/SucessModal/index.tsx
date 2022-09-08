import Image from 'next/image'
import React from 'react'
import { successModalType } from '../../types'

const SuccessModal = ({ onClose, message, icon_url }: successModalType) => {
    return (
        <>
            <div className='fixed z-20 bg-black opacity-25 backdrop-blur-sm inset-0 w-screen h-screen'>

            </div>
            <div className='fixed flex flex-col z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 w-full max-w-md bg-slate-100 rounded-lg p-6'>
                <button className=' text-right' onClick={onClose}>
                    <Image width={20} height={20} src={"/icons/times.svg"} alt={`cancel icon`} />
                </button>
                <Image width={10} height={220} src={icon_url} alt={`${message} icon illustration`} />
                <p className='justify-self-center self-center'>{message}</p>
            </div>

        </>

    )
}

export default SuccessModal