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
x="168"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><rect
x="40"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><rect
x="168"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><rect
x="40"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="64"
y1="168"
x2="64"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="168"
y1="192"
x2="88"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="192"
y1="88"
x2="192"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="88"
y1="64"
x2="168"
y2="64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><rect
x="168"
y="40"
width="48"
height="48"
rx="8"
opacity="0.2"/><rect
x="40"
y="40"
width="48"
height="48"
rx="8"
opacity="0.2"/><rect
x="168"
y="168"
width="48"
height="48"
rx="8"
opacity="0.2"/><rect
x="40"
y="168"
width="48"
height="48"
rx="8"
opacity="0.2"/><rect
x="168"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="40"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="168"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="40"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="168"
x2="64"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="168"
y1="192"
x2="88"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="192"
y1="88"
x2="192"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="64"
x2="168"
y2="64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M208,96a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96V48A16,16,0,0,0,80,32H48A16,16,0,0,0,32,48V80A16,16,0,0,0,48,96h8v64H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16v-8h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V96Zm-24,64h-8a16,16,0,0,0-16,16v8H96v-8a16,16,0,0,0-16-16H72V96h8A16,16,0,0,0,96,80V72h64v8a16,16,0,0,0,16,16h8Z"/></g>
            <g v-else-if="displayWeight === 'light'"><rect
x="168"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><rect
x="40"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><rect
x="168"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><rect
x="40"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="64"
y1="168"
x2="64"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="168"
y1="192"
x2="88"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="192"
y1="88"
x2="192"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="88"
y1="64"
x2="168"
y2="64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><rect
x="168"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><rect
x="40"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><rect
x="168"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><rect
x="40"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="64"
y1="168"
x2="64"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="168"
y1="192"
x2="88"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="192"
y1="88"
x2="192"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="88"
y1="64"
x2="168"
y2="64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><rect
x="168"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="40"
y="40"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="168"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="40"
y="168"
width="48"
height="48"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="168"
x2="64"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="168"
y1="192"
x2="88"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="192"
y1="88"
x2="192"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="64"
x2="168"
y2="64"
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
    name: `PhBoundingBox`,
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
