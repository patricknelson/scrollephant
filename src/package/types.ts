export type Props = {
    movement: "scroll" | "fade"
    direction: "vertical" | "horizontal"
    loopUp: boolean
    loopDown: boolean
    restrictMovement: boolean
    scrollableSubSections: boolean
}

export type Section = {
    id: number
    ref: HTMLElement
    label?: string
    autoHeight: boolean
    subSections: SubSections
    translateY: number
    translateX: number
    activeSubSectionNumber: number
}

export type Sections = Section[]

export type SubSection = {
    id: number
    ref: HTMLElement
    label: string
    autoHeight: boolean
}

export type SubSections = SubSection[]
