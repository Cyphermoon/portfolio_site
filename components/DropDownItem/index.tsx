import React, { forwardRef } from 'react'

interface Props {
    active?: boolean
    text: string
}

const DropDownItem = forwardRef((props: Props, ref: any) => {
    let { active, text, ...rest } = props

    return (
        <button ref={ref} {...rest} className={`text-slate-300  w-full p-1 rounded-md text-left ${active ? "bg-slate-400 text-slate-600" : ""}`}>
            {text}
        </button>
    )
})

DropDownItem.displayName = "DropDowItem"


export default DropDownItem