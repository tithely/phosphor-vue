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
            <g v-if="displayWeight === 'bold'"><line
x1="88"
y1="168"
x2="48"
y2="208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M93.7,90.3,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c7.6-10.1,19.1-29.9,12.7-50.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M190.6,137.4l35.7-35.7a8,8,0,0,0,0-11.4L165.7,29.7a8,8,0,0,0-11.4,0L122,62"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M154.3,29.7,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c8.4-11.1,21.6-34.1,10.1-57l62.3-62.3a8,8,0,0,0,0-11.4L165.7,29.7A8,8,0,0,0,154.3,29.7Z"
opacity="0.2"/><line
x1="88"
y1="168"
x2="48"
y2="208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M93.7,90.3,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c7.6-10.1,19.1-29.9,12.7-50.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M184.9,143.1l41.4-41.4a8,8,0,0,0,0-11.4L165.7,29.7a8,8,0,0,0-11.4,0L116.4,67.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M213.9,210.6a7.9,7.9,0,0,1-.5,11.3A8.2,8.2,0,0,1,208,224a8,8,0,0,1-5.9-2.6l-26.4-29.1c-2.5,14.2-9.9,26.2-15.4,33.5a16.3,16.3,0,0,1-11.7,6.4h-1.1a16.1,16.1,0,0,1-11.3-4.7L88,179.3,53.7,213.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L76.7,168,28.3,119.6a15.9,15.9,0,0,1,1.3-23.8C45.8,82.8,61.5,79.7,73.5,80L42.1,45.4A8,8,0,0,1,53.9,34.6ZM232,84.7,171.3,24a16.1,16.1,0,0,0-22.6,0l-38,38a8,8,0,0,0-.3,11L179,148.4a8.1,8.1,0,0,0,5.7,2.7h.2a8,8,0,0,0,5.7-2.4L232,107.3a15.9,15.9,0,0,0,0-22.6Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="88"
y1="168"
x2="48"
y2="208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M93.7,90.3,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c7.6-10.1,19.1-29.9,12.7-50.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M184.9,143.1l41.4-41.4a8,8,0,0,0,0-11.4L165.7,29.7a8,8,0,0,0-11.4,0L116.4,67.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="88"
y1="168"
x2="48"
y2="208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M93.7,90.3,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c7.6-10.1,19.1-29.9,12.7-50.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M184.9,143.1l41.4-41.4a8,8,0,0,0,0-11.4L165.7,29.7a8,8,0,0,0-11.4,0L116.4,67.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><line
x1="88"
y1="168"
x2="48"
y2="208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M93.7,90.3,92,92S64.3,78.1,34.6,102.1A8,8,0,0,0,34,114L141.8,221.8a8,8,0,0,0,12.1-.8c7.6-10.1,19.1-29.9,12.7-50.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M184.9,143.1l41.4-41.4a8,8,0,0,0,0-11.4L165.7,29.7a8,8,0,0,0-11.4,0L116.4,67.6"
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
    name: `PhPushPinSlash`,
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
