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
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="92"
cy="108"
r="16"/><circle
cx="164"
cy="108"
r="16"/><path
d="M165.3,169.8a48,48,0,0,0-74.6,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><circle
cx="128"
cy="128"
r="96"
opacity="0.2"/><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-miterlimit="10"
stroke-width="16"/><circle
cx="92"
cy="108"
r="12"/><circle
cx="164"
cy="108"
r="12"/><circle
cx="92"
cy="108"
r="12"/><circle
cx="164"
cy="108"
r="12"/><path
d="M169.6,176a48.1,48.1,0,0,0-83.2,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm81.6,86.9a7.6,7.6,0,0,1-4,1.1,7.7,7.7,0,0,1-6.9-4,40.1,40.1,0,0,0-69.4,0,8,8,0,1,1-13.8-8,56,56,0,0,1,97,0A8,8,0,0,1,173.6,182.9Z"/></g>
            <g v-else-if="displayWeight === 'light'"><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="92"
cy="108"
r="10"/><circle
cx="164"
cy="108"
r="10"/><path
d="M169.6,176a48.1,48.1,0,0,0-83.2,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="92"
cy="108"
r="8"/><circle
cx="164"
cy="108"
r="8"/><path
d="M169.6,176a48.1,48.1,0,0,0-83.2,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-miterlimit="10"
stroke-width="16"/><circle
cx="92"
cy="108"
r="12"/><circle
cx="164"
cy="108"
r="12"/><circle
cx="92"
cy="108"
r="12"/><circle
cx="164"
cy="108"
r="12"/><path
d="M169.6,176a48.1,48.1,0,0,0-83.2,0"
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
    name: `PhSmileySad`,
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
