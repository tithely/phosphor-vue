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
            <g v-if="displayWeight === 'bold'"><circle
cx="128"
cy="128"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M115,103.2a28,28,0,0,1,26,0h0c7.3-15.4,15-34.6,15-47.2a28,28,0,0,0-56,0c0,12.6,7.7,31.8,15,47.2Z"
opacity="0.2"/><path
d="M100,126.8a27.8,27.8,0,0,1,3.8-12.8,26.5,26.5,0,0,1,9.2-9.6h0C103.3,90.3,90.5,74,79.6,67.8a28,28,0,0,0-28,48.4c10.9,6.3,31.4,9.3,48.4,10.6Z"
opacity="0.2"/><path
d="M113,151.6a26.5,26.5,0,0,1-9.2-9.6,27.8,27.8,0,0,1-3.8-12.8h0c-17,1.3-37.5,4.3-48.4,10.6a28,28,0,1,0,28,48.4c10.9-6.2,23.7-22.5,33.4-36.6Z"
opacity="0.2"/><path
d="M141,152.8a28,28,0,0,1-26,0h0c-7.3,15.4-15,34.6-15,47.2a28,28,0,0,0,56,0c0-12.6-7.7-31.8-15-47.2Z"
opacity="0.2"/><path
d="M156,129.2a27.8,27.8,0,0,1-3.8,12.8,26.5,26.5,0,0,1-9.2,9.6h0c9.7,14.1,22.5,30.4,33.4,36.6a28,28,0,0,0,28-48.4c-10.9-6.3-31.4-9.3-48.4-10.6Z"
opacity="0.2"/><path
d="M143,104.4a26.5,26.5,0,0,1,9.2,9.6,27.8,27.8,0,0,1,3.8,12.8h0c17-1.3,37.5-4.3,48.4-10.6a28,28,0,0,0-28-48.4C165.5,74,152.7,90.3,143,104.4Z"
opacity="0.2"/><circle
cx="128"
cy="128"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M208.4,132.8a56.9,56.9,0,0,0-11.5-4.8,56.9,56.9,0,0,0,11.5-4.8,36,36,0,0,0-36-62.4,58.7,58.7,0,0,0-9.9,7.5A58.6,58.6,0,0,0,164,56a36,36,0,0,0-72,0,58.6,58.6,0,0,0,1.5,12.3,58.7,58.7,0,0,0-9.9-7.5,36,36,0,0,0-36,62.4A56.9,56.9,0,0,0,59.1,128a56.9,56.9,0,0,0-11.5,4.8,36,36,0,0,0,36,62.4,58.7,58.7,0,0,0,9.9-7.5A58.6,58.6,0,0,0,92,200a36,36,0,0,0,72,0,58.6,58.6,0,0,0-1.5-12.3,58.7,58.7,0,0,0,9.9,7.5,36,36,0,0,0,36-62.4ZM128,152a24,24,0,1,1,24-24A24.1,24.1,0,0,1,128,152Z"/></g>
            <g v-else-if="displayWeight === 'light'"><circle
cx="128"
cy="128"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><circle
cx="128"
cy="128"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><circle
cx="128"
cy="128"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
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
    name: `PhFlower`,
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
