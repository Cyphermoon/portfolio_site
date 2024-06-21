import { StaticImageData } from "next/image"
import React from "react"
import { SchoolCardProps } from "../components/SchoolHistorySection/components/SchoolCard"


export type containerType = {
    children: React.ReactNode
    className?: string
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
    addAnimation?: function
    children?: React.ReactNode
}

export type navPropType = {
    addAnimation?: function
}

export type cursorTrackerPropType = {
    addAnimation?: function
}

export type backgroundType = {
    children: React.ReactNode,
    addAnimation?: function
}

export type projectCardType = {
    title: string,
    description: string,
    imageURL: string,
    projectId: number
}

export type skillCardType = {
    title: string,
    imageURL: string,
    altContent: string,
    width?: string,
    height?: string,
}

export type inputType = {
    inputName: string
    labelText: string,
    inputType: string,
    inputValue: string,
    setInputValue: function,
    placeholder?: string
}

export type socialCardType = {
    title: string,
    imageURL: string,
    href: string
}

export type carouselType = {
    carouselItems: { imageURL: string }[]
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
    id: number,
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
    about_data: {
        texts: string[],
        profilePhoto: {
            url: string,
            alt: string
        }
    }
    addAnimation: function
}


type socialMedia = {
    displayText: string,
    social_media_logo: string,
    url: string
    altText: string
}[]

export type socialMediaDisplayType = {
    social_medias: socialMedia,
    addAnimation: function
}

export type contactFormPropType = {
    addAnimation: function;
}

export type contactSectionType = {
    social_medias: socialMedia
    addAnimation: function
}

export type skillDisplaySectionType = {
    skill_list: skillDisplayType,
    addAnimation: function,
}

type skillDisplayType = {
    url: string,
    name: string,
    altText: string,
    category: string,
}[]


type projectDisplayType = {
    title: string,
    description: string,
    cover_image: string,
    _id: number,
    altText: string
}[]

export type projectDisplaySectionType = {
    projects: projectDisplayType
    addAnimation: function
}

type techStack = {
    backend: {
        icon_url: string,
        name: string,
        altText: string
    }[],
    frontend: {
        icon_url: string,
        name: string,
        altText: string
    }[]
    others: {
        icon_url: string,
        name: string,
        altText: string
    }[]

}

export type techStackDisplayType = {
    tech_stacks: techStack
    github_link: string | null
}

export type projectPageType = {
    project: {
        slideshow_images: { imageURL: string }[],
        tech_stack: techStack,
        status?: string,
        video_id: string,
        functionality: {
            header: string,
            description: string,
            image_url: string,
            altText: string
        }[],

        title: string,
        description: string
        link: sanityLink,
        github_link: string | null
    },

    otherProjects: otherProjectType
}

type otherProjectType = projectDisplayType

export type otherProjectDisplayType = {
    other_projects: otherProjectType
}

type sanityLink = {
    display_text: string,
    href: string
}

export type homePageType = {
    landing_section: {
        introductory_text: string,
        role: string,
        elongated_text: string,
        contact_btn: sanityLink,
        get_resume_btn: sanityLink
    },
    about_data: any,
    social_medias: socialMedia,
    skill_list: skillDisplayType,
    projects: projectDisplayType,
    school_history: SchoolCardProps[]
}