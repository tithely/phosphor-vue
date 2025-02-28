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
d="M48,144a64,64,0,0,1,64,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M48,96A112,112,0,0,1,160,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="52"
cy="204"
r="16"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M48,144a64,64,0,0,1,64,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M48,96A112,112,0,0,1,160,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="52"
cy="204"
r="12"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M98.9,157.1A71.6,71.6,0,0,1,120,208a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.6,71.6,0,0,1,98.9,157.1ZM48,88a8,8,0,0,0,0,16,102.9,102.9,0,0,1,73.5,30.5A102.9,102.9,0,0,1,152,208a8,8,0,0,0,16,0,119.2,119.2,0,0,0-35.2-84.9A119.3,119.3,0,0,0,48,88Zm118.8,1.2A166.9,166.9,0,0,0,48,40a8,8,0,0,0,0,16,151.1,151.1,0,0,1,107.5,44.5A151.1,151.1,0,0,1,200,208a8,8,0,0,0,16,0A166.9,166.9,0,0,0,166.8,89.2ZM52,192a12,12,0,1,0,12,12A12,12,0,0,0,52,192Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M48,144a64,64,0,0,1,64,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M48,96A112,112,0,0,1,160,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="52"
cy="204"
r="10"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M48,144a64,64,0,0,1,64,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M48,96A112,112,0,0,1,160,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="52"
cy="204"
r="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M48,144a63.8,63.8,0,0,1,64,64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M48,96A112,112,0,0,1,160,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="52"
cy="204"
r="12"/></g>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator, ContextGetter } from '@/lib/helpers'
import { IconComputed, IconProps, IconContext } from '@/lib/types'

export default Vue.extend<{}, {}, IconComputed, IconProps>({
    name: `PhRss`,
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
