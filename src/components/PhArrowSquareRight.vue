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
x="40"
y="40"
width="176"
height="176"
rx="8"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><polyline
points="134.1 94.1 168 128 134.1 161.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="88"
y1="128"
x2="168"
y2="128"
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
transform="translate(256) rotate(90)"
opacity="0.2"/><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="134.1 94.1 168 128 134.1 161.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="128"
x2="168"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M48,224H208a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H48A16,16,0,0,0,32,48V208A16,16,0,0,0,48,224Zm80.4-56.4a8,8,0,0,1,0-11.3L148.7,136H88a8,8,0,0,1,0-16h60.7L128.4,99.7a8,8,0,0,1,11.3-11.3l33.9,33.9a8.7,8.7,0,0,1,1.8,2.6,8.5,8.5,0,0,1,.6,3.1,7.7,7.7,0,0,1-.6,3,8,8,0,0,1-1.8,2.7l-33.9,33.9A8,8,0,0,1,128.4,167.6Z"/></g>
            <g v-else-if="displayWeight === 'light'"><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="134.1 94.1 168 128 134.1 161.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="88"
y1="128"
x2="168"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><polyline
points="134.1 94.1 168 128 134.1 161.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="88"
y1="128"
x2="168"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><rect
x="40"
y="40"
width="176"
height="176"
rx="8"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="134.1 94.1 168 128 134.1 161.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="128"
x2="168"
y2="128"
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
    name: `PhArrowSquareRight`,
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
