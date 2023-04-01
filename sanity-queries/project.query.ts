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

  if(isAllCategory){
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