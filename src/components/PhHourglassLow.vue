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
d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="192"
y1="180.4"
x2="64"
y2="180"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4Z"
opacity="0.2"/><path
d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="192"
y1="180.4"
x2="64"
y2="180"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M200,75.6V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.1,16.1,0,0,0,6.4,12.8L114.7,128,62.4,167.2a15.6,15.6,0,0,0-6.3,11.9,2.8,2.8,0,0,0-.1.9v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.4a2.8,2.8,0,0,0-.1-.9,15.6,15.6,0,0,0-6.3-11.9L141.3,128l52.3-39.6A16.1,16.1,0,0,0,200,75.6ZM82.6,172.1,128,138l45.3,34.3ZM184,75.6,128,118,72,76V40H184Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="192"
y1="180.4"
x2="64"
y2="180"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="192"
y1="180.4"
x2="64"
y2="180"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="192"
y1="180.4"
x2="64"
y2="180"
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
    name: `PhHourglassLow`,
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
