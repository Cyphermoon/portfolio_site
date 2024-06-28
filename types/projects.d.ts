interface CategoryItemProps {
  _id: string;
  name: string;
}


interface ProjectsProp {
  _id: string;
  altText: string;
  cover_image: string;
  description: string;
  title: string;
}

interface CategoryProjectsProps {
  _id: string;
  name: string;
  isGhost: boolean;
  projects: Project[];
}
