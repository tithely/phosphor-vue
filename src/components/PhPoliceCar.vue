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
x1="12"
y1="124"
x2="244"
y2="124"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M228,124,194.4,71.7a8.1,8.1,0,0,0-6.8-3.7H68.4a8.1,8.1,0,0,0-6.8,3.7L28,124v48H228Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="104"
y1="28"
x2="152"
y2="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M228,172v32a8,8,0,0,1-8,8H196a8,8,0,0,1-8-8V172"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M68,172v32a8,8,0,0,1-8,8H36a8,8,0,0,1-8-8V172"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184Z"
opacity="0.2"/><path
d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184Z"
opacity="0.2"/><path
d="M224,120,194.3,68a7.9,7.9,0,0,0-6.9-4H68.6a7.9,7.9,0,0,0-6.9,4L32,120Z"
opacity="0.2"/><line
x1="16"
y1="120"
x2="240"
y2="120"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="152"
x2="80"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="176"
y1="152"
x2="192"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M224,120,194.3,68a7.9,7.9,0,0,0-6.9-4H68.6a7.9,7.9,0,0,0-6.9,4L32,120v64H224Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="32"
x2="152"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M96,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,32Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16V192H80v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V128H16a8,8,0,0,1,0-16H27.4L54.8,64.1A15.9,15.9,0,0,1,68.6,56H187.4a15.9,15.9,0,0,1,13.8,8.1L228.6,112H240A8,8,0,0,1,248,120ZM88,152a8,8,0,0,0-8-8H64a8,8,0,0,0,0,16H80A8,8,0,0,0,88,152Zm112,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h16A8,8,0,0,0,200,152Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="16"
y1="120"
x2="240"
y2="120"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="64"
y1="152"
x2="80"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="176"
y1="152"
x2="192"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M224,120,194.3,68a7.9,7.9,0,0,0-6.9-4H68.6a7.9,7.9,0,0,0-6.9,4L32,120v64H224Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="104"
y1="32"
x2="152"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="16"
y1="120"
x2="240"
y2="120"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="64"
y1="152"
x2="80"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="176"
y1="152"
x2="192"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M224,120,194.3,68a7.9,7.9,0,0,0-6.9-4H68.6a7.9,7.9,0,0,0-6.9,4L32,120v64H224Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="104"
y1="32"
x2="152"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><line
x1="16"
y1="120"
x2="240"
y2="120"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="152"
x2="80"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="176"
y1="152"
x2="192"
y2="152"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M224,120,194.3,68a7.9,7.9,0,0,0-6.9-4H68.6a7.9,7.9,0,0,0-6.9,4L32,120v64H224Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="32"
x2="152"
y2="32"
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
    name: `PhPoliceCar`,
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
