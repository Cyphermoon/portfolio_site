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