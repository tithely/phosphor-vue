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
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="40"
y1="80"
x2="88"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><rect
x="88"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="88"
y1="176"
x2="136"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><rect
x="158"
y="38.6"
width="48"
height="176"
rx="8"
transform="translate(-26.6 51.4) rotate(-15)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="171.2"
y1="179.2"
x2="217.6"
y2="166.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="146.4"
y1="86.4"
x2="192.8"
y2="74"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M40,80H88V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z"
opacity="0.2"/><path
d="M88,176h48V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8Z"
opacity="0.2"/><path
d="M171.2,179.2l46.4-12.5,8.3,30.9a8,8,0,0,1-5.7,9.8l-30.9,8.3a8,8,0,0,1-9.8-5.6Z"
opacity="0.2"/><path
d="M146.4,86.4,192.8,74l-8.3-30.9a8.1,8.1,0,0,0-9.8-5.7l-30.9,8.3a8.1,8.1,0,0,0-5.7,9.8Z"
opacity="0.2"/><rect
x="40"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="40"
y1="80"
x2="88"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="88"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="176"
x2="136"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="158"
y="38.6"
width="48"
height="176"
rx="8"
transform="translate(-26.6 51.4) rotate(-15)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="171.2"
y1="179.2"
x2="217.6"
y2="166.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="146.4"
y1="86.4"
x2="192.8"
y2="74"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M233.6,195.6,192.2,41a16,16,0,0,0-19.6-11.3L141.7,38l-1,.3A16,16,0,0,0,128,32H96a15.8,15.8,0,0,0-8,2.2A15.8,15.8,0,0,0,80,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H80a15.8,15.8,0,0,0,8-2.2,15.8,15.8,0,0,0,8,2.2h32a16,16,0,0,0,16-16V108.4l27.8,103.7A16,16,0,0,0,187.3,224a19.9,19.9,0,0,0,4.1-.5l30.9-8.3A16,16,0,0,0,233.6,195.6ZM176.7,45.2,183,68.3l-30.9,8.3-6.3-23.1ZM128,48V168H96V48ZM80,48V72H48V48Zm48,160H96V184h32v24Zm90.2-8.3L187.3,208,181,184.8l31-8.3,6.2,23.2Z"/></g>
            <g v-else-if="displayWeight === 'light'"><rect
x="40"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="40"
y1="80"
x2="88"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><rect
x="88"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="88"
y1="176"
x2="136"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><rect
x="158"
y="38.6"
width="48"
height="176"
rx="8"
transform="matrix(0.97, -0.26, 0.26, 0.97, -26.56, 51.42)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="171.2"
y1="179.2"
x2="217.6"
y2="166.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="146.4"
y1="86.4"
x2="192.8"
y2="74"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><rect
x="40"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="40"
y1="80"
x2="88"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><rect
x="88"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="88"
y1="176"
x2="136"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><rect
x="158"
y="38.6"
width="48"
height="176"
rx="8"
transform="translate(-26.6 51.4) rotate(-15)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="171.2"
y1="179.2"
x2="217.6"
y2="166.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="146.4"
y1="86.4"
x2="192.8"
y2="74"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><rect
x="40"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="40"
y1="80"
x2="88"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="88"
y="40"
width="48"
height="176"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="176"
x2="136"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="158"
y="38.6"
width="48"
height="176"
rx="8"
transform="matrix(0.97, -0.26, 0.26, 0.97, -26.56, 51.42)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="171.2"
y1="179.2"
x2="217.6"
y2="166.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="146.4"
y1="86.4"
x2="192.8"
y2="74"
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
    name: `PhBooks`,
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
