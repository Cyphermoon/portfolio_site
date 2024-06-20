const bestProjectId = "802bec6d-de6a-473b-b3b6-24e6ba64bffb"


export const BestProjectQuery = `
  *[_type=='project' && references("${bestProjectId}")] |
  score(title match "Connect") | order(title asc)
  {
    _id, 
    title, 
    description, 
    'altText':cover_image->alt_text, 
    'cover_image':cover_image->image.asset->url
  }
  `

export const CategoriesQuery = `
  *[_type=='project_category']{
    _id,
    name
  }
`

export const getCategoryProjectsQuery = (id: string) => {
  const isAllCategory = id === "all"

  if (isAllCategory) {
    return `
    *[_type=='project_category']{
      _id,
      name, 
      "projects": *[_type=="project" && references(^._id)]{
      _id,
      title,
      description,
      'altText':cover_image->alt_text,
      'cover_image':cover_image->image.asset->url
    }
    }
    `
  }

  return `
    *[_type=='project_category' && _id=='${id}']{
      _id,
      name, 
      "projects": *[_type=="project" && references(^._id)]{
      _id,
      title,
      description,
      'altText':cover_image->alt_text,
      'cover_image':cover_image->image.asset->url
    }
    }
  `
}

export const LandingPageQuery = `
*[_type=='landing_page' && _id=='ec5a94fb-569d-45b0-b630-9068e80453ff']{
    role, 
    elongated_text, 
    introductory_text, 
    contact_btn, 
    get_resume_btn
  }
`


export const AboutMeQuery = `
  *[_type=='about_me' && _id=='0ccfd969-350e-4fe0-ab13-e3ef1770ebbc']{
    'texts': content[].children[].text,
  'profilePhoto':{
    'url': profile_photo -> image.asset -> url,
    'alt': profile_photo -> alt_text
  }

  }
`;

export const ProjectQuery = `
*[_type=='project']{
    _id, 
    title, 
    description, 
    'altText':cover_image->alt_text, 
    'cover_image':cover_image->image.asset->url
  }
`;

export const SocialContactQuery = `
*[_type=='social_media']{
    'displayText':link.display_text, 
    'url':link.href, 
    'altText':logo->alt_text, 
    'social_media_logo':logo->image.asset->url
  }
`;

export const ProgrammingLanguageQuery = `
*[_type=='programming_language' && isVisible == true]{
  'altText':icon->alt_text,
  'name':name,
  'url':icon->image.asset->url,
  'category': category -> field
}
`;


export const otherProjectsQuery = (currentProjectId: string) => `
  *[_type=='project' && _id != '${currentProjectId}'][0...6]{
    _id,
    title,
    description,
    'altText':cover_image->alt_text, 
    'cover_image':cover_image->image.asset->url
  }
`;

export const SchoolHistoryQuery = `
  *[_type=='school_history'] | order(start_date asc){
      'grade':grade,
    'schoolLogo':{
      'url': school_image -> image.asset -> url,
      'alt': school_image -> alt_text
    },
    'schoolName': school_name,
    'courseName': course_name,
    'startDate': start_date,
    'endDate': end_date,
    'abbr': school_abbr,
    'slug': slug.current,
    'certificate': certificate
}
`
