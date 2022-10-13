import React from 'react'
import { inputType } from '../../types'

const Input = ({ labelText, inputType, placeholder, inputValue, setInputValue, inputName }: inputType) => {
    return (
        <div className='space-y-2'>
            <label className='text-title_md text-slate-700 dark:text-slate-400 font-medium block'>{labelText}</label>
            <input
                className='w-full border outline-none focus:border-2  focus:border-slate-500 border-slate-800 text-base py-3 px-4 rounded-lg
                 bg-slate-200 dark:bg-slate-700'
                type={inputType}
                placeholder={placeholder}
                value={inputValue}
                name={inputName}
                required={true}
                onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}

export default Input