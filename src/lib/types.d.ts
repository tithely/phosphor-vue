type Weight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'

type Size = string | number

interface IconProps {
    weight: Weight
    size: Size
    color: string
    mirrored: boolean
}

interface IconComputed {
    displayWeight: Weight
    displaySize: Size
    displayColor: string
    displayMirrored?: string
}

interface IconContext {
    contextWeight?: Weight
    contextSize?: Size
    contextColor?: string
    contextMirrored?: boolean
}

export {
    Weight,
    Size,
    IconProps,
    IconComputed,
    IconContext
}
