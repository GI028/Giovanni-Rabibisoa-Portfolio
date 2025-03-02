// export type ImageIcon = {
//     image: string
//     title: string
//     description?:string
//   }

//   export function imageIcon(image: string, title: string, description?:string): ImageIcon {
//     return {
//       image,
//       title,
//       description,
//     }
//   }

//   export interface AISkill {
//     name: string;
//     info: string;
//     icon: React.ComponentType;
//   }

export type BaseInfo = {
  title: string
  description?: string
}

export type ImageInfo = BaseInfo & {
  image: string
}

export function imageIcon(
  image: string,
  title: string,
  description?: string
): ImageInfo {
  return { image, title, description }
}


export interface Section<T> { 
  title: string
  data: T[]
}

export interface IconInfo extends BaseInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}