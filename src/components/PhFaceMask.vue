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
d="M208,136c0,51-66.2,68.8-78.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,204.8,48,187,48,136V77.4A7.9,7.9,0,0,1,53,70l72-28.8a7.8,7.8,0,0,1,6,0L203,70a7.9,7.9,0,0,1,5,7.4Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="88"
y1="108"
x2="168"
y2="108"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="88"
y1="144"
x2="168"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M205.4,152H220a23.9,23.9,0,0,0,24-24V104a23.9,23.9,0,0,0-24-24H208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M50.6,152H36a23.9,23.9,0,0,1-24-24V104A23.9,23.9,0,0,1,36,80H48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M216,136c0,51.5-74.4,69.2-86.4,71.7a8.6,8.6,0,0,1-3.2,0C114.4,205.2,40,187.5,40,136V77.6a7.9,7.9,0,0,1,5.3-7.5l80-29.1a8.3,8.3,0,0,1,5.4,0l80,29.1a7.9,7.9,0,0,1,5.3,7.5Z"
opacity="0.2"/><path
d="M216,136c0,51.5-74.4,69.2-86.4,71.7a8.6,8.6,0,0,1-3.2,0C114.4,205.2,40,187.5,40,136V77.6a7.9,7.9,0,0,1,5.3-7.5l80-29.1a8.3,8.3,0,0,1,5.4,0l80,29.1a7.9,7.9,0,0,1,5.3,7.5Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="112"
x2="168"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="144"
x2="168"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M213.4,152H224a23.9,23.9,0,0,0,24-24V104a23.9,23.9,0,0,0-24-24h-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M42.6,152H32A23.9,23.9,0,0,1,8,128V104A23.9,23.9,0,0,1,32,80h8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M224,72h-1a16,16,0,0,0-9.5-9.4l-80-29.1a16,16,0,0,0-11,0l-80,29.1A16,16,0,0,0,33,72H32A32.1,32.1,0,0,0,0,104v24a32.1,32.1,0,0,0,32,32h5.2c6.6,14.4,19.3,27,37.6,37.2,21.1,11.7,43.6,17,49.9,18.3l3.3.3,3.3-.3c6.3-1.3,28.8-6.6,49.9-18.3,18.3-10.2,31-22.8,37.6-37.2H224a32.1,32.1,0,0,0,32-32V104A32.1,32.1,0,0,0,224,72ZM32,144a16,16,0,0,1-16-16V104A16,16,0,0,1,32,88v48a52.9,52.9,0,0,0,.6,8Zm136,8H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm72,8a16,16,0,0,1-16,16h-.6a52.9,52.9,0,0,0,.6-8V88a16,16,0,0,1,16,16Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M216,136c0,51.5-74.4,69.2-86.4,71.7a8.6,8.6,0,0,1-3.2,0C114.4,205.2,40,187.5,40,136V77.6a7.9,7.9,0,0,1,5.3-7.5l80-29.1a8.3,8.3,0,0,1,5.4,0l80,29.1a7.9,7.9,0,0,1,5.3,7.5Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="88"
y1="112"
x2="168"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="88"
y1="144"
x2="168"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M213.4,152H224a23.9,23.9,0,0,0,24-24V104a23.9,23.9,0,0,0-24-24h-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M42.6,152H32A23.9,23.9,0,0,1,8,128V104A23.9,23.9,0,0,1,32,80h8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M216,136c0,51.5-74.4,69.2-86.4,71.7a8.6,8.6,0,0,1-3.2,0C114.4,205.2,40,187.5,40,136V77.6a7.9,7.9,0,0,1,5.3-7.5l80-29.1a8.3,8.3,0,0,1,5.4,0l80,29.1a7.9,7.9,0,0,1,5.3,7.5Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="88"
y1="112"
x2="168"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="88"
y1="144"
x2="168"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M213.4,152H224a23.9,23.9,0,0,0,24-24V104a23.9,23.9,0,0,0-24-24h-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M42.6,152H32A23.9,23.9,0,0,1,8,128V104A23.9,23.9,0,0,1,32,80h8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M216,136c0,51.5-74.4,69.2-86.4,71.7a8.6,8.6,0,0,1-3.2,0C114.4,205.2,40,187.5,40,136V77.6a7.9,7.9,0,0,1,5.3-7.5l80-29.1a8.3,8.3,0,0,1,5.4,0l80,29.1a7.9,7.9,0,0,1,5.3,7.5Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="112"
x2="168"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="144"
x2="168"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M213.4,152H224a23.9,23.9,0,0,0,24-24V104a23.9,23.9,0,0,0-24-24h-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M42.6,152H32A23.9,23.9,0,0,1,8,128V104A23.9,23.9,0,0,1,32,80h8"
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
    name: `PhFaceMask`,
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
