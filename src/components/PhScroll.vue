<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        :width="displaySize"
        :height="displaySize"
        :fill="displayColor"
        :transform="displayMirrored"
        v-bind="$attrs"
        v-on="$listeners">
        <slot/>
            <g v-if="displayWeight === 'bold'"><path
d="M200,176V64a23.9,23.9,0,0,0-24-24H40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="104"
y1="100"
x2="168"
y2="100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="104"
y1="140"
x2="168"
y2="140"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M22.1,80A24,24,0,1,1,64,64V192a24,24,0,1,0,41.9-16h112A24,24,0,0,1,200,216H88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M88,216a24,24,0,0,0,17.9-40h112A24,24,0,0,1,200,216Z"
opacity="0.2"/><path
d="M200,176V64a23.9,23.9,0,0,0-24-24H40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="104"
x2="168"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="136"
x2="168"
y2="136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M22.1,80A24,24,0,1,1,64,64V192a24,24,0,1,0,41.9-16h112A24,24,0,0,1,200,216H88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M223.8,170.7a7.8,7.8,0,0,0-5.9-2.7H208V64a32.1,32.1,0,0,0-32-32H40A32.1,32.1,0,0,0,8,64a31.5,31.5,0,0,0,8.2,21.3,7.9,7.9,0,0,0,11.2.7,8,8,0,0,0,.7-11.3A16,16,0,1,1,56,64V192a32.1,32.1,0,0,0,32,32H200a32.1,32.1,0,0,0,32-32A31.5,31.5,0,0,0,223.8,170.7ZM104,96h64a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Zm-8,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Zm104,72H115.7a32.2,32.2,0,0,0,4.3-16,30.8,30.8,0,0,0-1-8h94.9A16.1,16.1,0,0,1,200,208Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M200,176V64a23.9,23.9,0,0,0-24-24H40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="104"
y1="104"
x2="168"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="104"
y1="136"
x2="168"
y2="136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M22.1,80A24,24,0,1,1,64,64V192a24,24,0,1,0,41.9-16h112A24,24,0,0,1,200,216H88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M200,176V64a23.9,23.9,0,0,0-24-24H40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="104"
y1="104"
x2="168"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="104"
y1="136"
x2="168"
y2="136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M22.1,80A24,24,0,1,1,64,64V192a24,24,0,1,0,41.9-16h112A24,24,0,0,1,200,216H88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M200,176V64a23.9,23.9,0,0,0-24-24H40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="104"
x2="168"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="136"
x2="168"
y2="136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M22.1,80A24,24,0,1,1,64,64V192a24,24,0,1,0,41.9-16h112A24,24,0,0,1,200,216H88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator, ContextGetter } from '@/lib/helpers'
import { IconComputed, IconProps, IconContext } from '@/lib/types'

export default Vue.extend<{}, {}, IconComputed, IconProps>({
    name: `PhScroll`,
    inject: ContextGetter,
    props: PropValidator,
    computed: {
        displayWeight() {
            const { weight, contextWeight } = this as IconProps & IconContext
            return weight ?? contextWeight
        },
        displaySize() {
            const { size, contextSize } = this as IconProps & IconContext
            return size ?? contextSize
        },
        displayColor() {
            const { color, contextColor } = this as IconProps & IconContext
            return color ?? contextColor
        },
        displayMirrored() {
            const { mirrored, contextMirrored } = this as IconProps & IconContext
            return mirrored !== undefined
                ? (mirrored ? `scale(-1, 1)` : undefined)
                : (contextMirrored ? `scale(-1, 1)` : undefined)
        }
    }
})
</script>
