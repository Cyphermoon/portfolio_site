import React from "react"

export type toggleButtonType = {
    children: React.ReactNode,
    active?: boolean,
    handleClick: function
}