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
            <g v-if="displayWeight === 'bold'"><rect
x="32"
y="56"
width="192"
height="144"
rx="16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M32,100H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224V72a16,16,0,0,0-16-16H48A16,16,0,0,0,32,72Z"
opacity="0.2"/><rect
x="32"
y="56"
width="192"
height="144"
rx="16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="32"
y1="88"
x2="224"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M208,48H48A24.1,24.1,0,0,0,24,72V184a24.1,24.1,0,0,0,24,24H208a24.1,24.1,0,0,0,24-24V72A24.1,24.1,0,0,0,208,48Zm-56.5,76.8a24,24,0,0,1-47,0A16.1,16.1,0,0,0,88.8,112H40V96H216v16H167.2A16.1,16.1,0,0,0,151.5,124.8ZM48,64H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64Z"/></g>
            <g v-else-if="displayWeight === 'light'"><rect
x="32"
y="56"
width="192"
height="144"
rx="16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="32"
y1="88"
x2="224"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><rect
x="32"
y="56"
width="192"
height="144"
rx="16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="32"
y1="88"
x2="224"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><rect
x="32"
y="56"
width="192"
height="144"
rx="16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="32"
y1="88"
x2="224"
y2="88"
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
    name: `PhCardholder`,
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
