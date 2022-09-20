export interface IButton {
   sign: string | number,
   type: 'small' | 'big_width' | 'big_height',
   cname?: string
}

export type Ref = React.RefObject<HTMLDivElement>
export type HE = HTMLCollectionOf<HTMLElement>