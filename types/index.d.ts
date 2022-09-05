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
    navState?: boolean
}

export type headerType = {
    children: React.ReactNode
}

export type projectCardType={
    title: string,
    description: string,
    imageURL: string,
    projectId: number
}

export type skillCardType={
    title: string,
    imageURL: string,
    altContent: string,
    width?:string,
    height?:string
}

export type inputType = {
    labelText: string,
    inputType: string,
    inputValue: string,
    setInputValue: function,
    placeholder?: string
}

export type socialCardType = {
    title: string,
    imageURL: string,
    href:string
}

export type carouselType = {
    carouselItems:{imageURL:string}[]
}

export type featureContentType = {
    children: React.ReactNode,
    reversed: boolean
}

export type featureContentImageType = {
    altContent: string,
    imageURL: string,
}
export type OtherProjectType = {
    altContent: string,
    imageURL: string,
    projectName: string,
    description: string
}

export type successModalType = {
    onClose: function
}

export type aboutSectionType = {
    about_data:any
}

export type socialMediaDisplayType = {
    social_medias:any[]
}

export type contactSectionType = {
    social_medias:any[]
}

export type skillDisplaySectionType = {
    skill_list:any[]
}
export type projectDisplaySectionType = {
    projects:any[]
}
export type techStackDisplayType = {
    tech_stacks:{
        backend:any[]
        frontend:any[]
    }
}