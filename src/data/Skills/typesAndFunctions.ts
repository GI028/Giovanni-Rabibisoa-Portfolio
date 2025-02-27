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

export type ImageIcon = BaseInfo & {
  image: string
}

export function imageIcon(
  image: string,
  title: string,
  description?: string
): ImageIcon {
  return { image, title, description }
}

export interface AISkill extends BaseInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}