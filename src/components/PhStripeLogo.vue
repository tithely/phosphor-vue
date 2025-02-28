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
d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
opacity="0.2"/><path
d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184c-24.7,0-44.1-14.1-44.1-32a8,8,0,0,1,16,0c0,7.6,11.6,16,28.1,16,13.3,0,28.1-6.6,28.1-16s-12.2-13.4-30.8-18.2c-8.7-2.2-17.7-4.5-24.8-8.2-9.7-5.2-14.6-12.4-14.6-21.6,0-18.2,18.1-32,42.1-32,17.2,0,31.9,7.2,38.5,18.7a8,8,0,0,1-3,10.9,7.9,7.9,0,0,1-10.9-3C148.9,92.2,139.3,88,128,88c-14.6,0-26.1,7-26.1,16,0,6.8,10.8,10.1,27.3,14.3,19.1,4.9,42.9,11,42.9,33.7C172.1,169.9,152.7,184,128,184Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M91.9,152c0,13.3,16.2,24,36.1,24s36.1-10.7,36.1-24c0-32-70.2-20-70.2-48,0-13.3,14.2-24,34.1-24,14.9,0,26.6,6,31.5,14.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
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
    name: `PhStripeLogo`,
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
