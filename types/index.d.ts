import React from "react"

export type headType = {
    title: string,
}

export type containerType = {
    children :React.ReactNode
}

export type navItemType = {
    title: string,
    href: string,
    active?: boolean,
}

export type hamburgerType = {
    hamburgerClicked: function,
    navState: boolean
}

export type headerType = {
    children: React.ReactNode
}

export type projectCardType={
    title: string,
    description: string,
    imageURL: string
}

export type skillCardType={
    title: string,
    imageURL: string,
    altContent: string
}

export type inputType = {
    labelText: string
    inputType: string
    placeholder?: string
}

export type socialCardType = {
    title: string,
    imageURL: string,
}

export type carouselType = {
    carouselItems:{imageURL:string}[]
}