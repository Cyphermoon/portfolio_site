import { StaticImageData } from "next/image"
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
    imageURL?: string,
}
export type OtherProjectType = {
    id: string,
    altContent: string,
    imageURL: string,
    projectName: string,
    description: string
}

export type successModalType = {
    onClose: function,
    message: string,
    icon_url: string | StaticImageData,
}

export type aboutSectionType = {
    about_data:any
}


type socialMedia = {
    displayText: string,
    social_media_logo: string,
    url: string
    altText:string
}[]

export type socialMediaDisplayType = {
    social_medias:socialMedia
}

export type contactSectionType = {
    social_medias: socialMedia
}

export type skillDisplaySectionType = {
    skill_list:skillDisplayType
}

type skillDisplayType = {
    url: string,
    name: string,
    altText: string
}[]

 
  type projectDisplayType =  {
        title: string,
        description: string,
        cover_image: string,
        _id: number,
        altText: string
    }[]

export type projectDisplaySectionType = {
    projects:projectDisplayType
}

type techStack = {
        backend:{
            icon_url: string,
            name: string, 
            altText: string
        }[],
        frontend:{
            icon_url: string,
            name: string, 
            altText: string
        }[]
        others:{
            icon_url: string,
            name: string, 
            altText: string
        }[]
    
}

export type techStackDisplayType = {
    tech_stacks:techStack
}

export type projectPageType = {
    project: {
        slideshow_images:{imageURL: string}[],
        tech_stack:techStack,

        functionality:{
            header: string,
            description: string,
            image_url: string,
            altText: string
        }[],

        title:string,
        description: string
        link:sanityLink
    },

    otherProjects: otherProjectType
}

type otherProjectType = projectCardType

export type otherProjectDisplayType = {
    other_projects: otherProjectType
}

type sanityLink = {
    display_text:string,
    href: string
}

export type homePageType = {
    landing_section: {
        introductory_text:string,
        role: string,
        elongated_text: string,
        contact_btn:sanityLink,
        get_resume_btn:sanityLink
    },
    about_data: any,
    social_medias: socialMedia,
    skill_list: skillDisplayType,
    projects: projectDisplayType
}