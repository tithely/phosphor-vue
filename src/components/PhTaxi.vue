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
d="M160,68,146,33a7.9,7.9,0,0,0-7.4-5H117.4a7.9,7.9,0,0,0-7.4,5L96,68"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="12"
y1="124"
x2="244"
y2="124"
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
stroke-width="24"/><path
d="M228,124,194.4,71.7a8.1,8.1,0,0,0-6.8-3.7H68.4a8.1,8.1,0,0,0-6.8,3.7L28,124v48H228Z"
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
opacity="0.2"/><path
d="M160,64,146,29a7.9,7.9,0,0,0-7.4-5H117.4a7.9,7.9,0,0,0-7.4,5L96,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
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
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M240,112H228.6L201.2,64.1A15.9,15.9,0,0,0,187.4,56h-22l-12-29.9A15.7,15.7,0,0,0,138.6,16H117.4a15.7,15.7,0,0,0-14.8,10.1L90.6,56h-22a15.9,15.9,0,0,0-13.8,8.1L27.4,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM117.4,32h21.2l9.6,24H107.8ZM80,160H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm112,0H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M160,64,146,29a7.9,7.9,0,0,0-7.4-5H117.4a7.9,7.9,0,0,0-7.4,5L96,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
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
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M160,64,146,29a7.9,7.9,0,0,0-7.4-5H117.4a7.9,7.9,0,0,0-7.4,5L96,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
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
stroke-width="16"/><path
d="M160,64,146,29a7.9,7.9,0,0,0-7.4-5H117.4a7.9,7.9,0,0,0-7.4,5L96,64"
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
    name: `PhTaxi`,
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
