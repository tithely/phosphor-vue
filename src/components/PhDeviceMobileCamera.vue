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
x="24"
y="64"
width="208"
height="128"
rx="16"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="128"
cy="68"
r="16"/></g>
            <g v-else-if="displayWeight === 'duotone'"><rect
x="24"
y="64"
width="208"
height="128"
rx="16"
transform="translate(256) rotate(90)"
opacity="0.2"/><rect
x="24"
y="64"
width="208"
height="128"
rx="16"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="128"
cy="60"
r="12"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M176,16H80A24.1,24.1,0,0,0,56,40V216a24.1,24.1,0,0,0,24,24h96a24.1,24.1,0,0,0,24-24V40A24.1,24.1,0,0,0,176,16ZM128,72a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z"/></g>
            <g v-else-if="displayWeight === 'light'"><rect
x="24"
y="64"
width="208"
height="128"
rx="16"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="128"
cy="60"
r="10"/></g>
            <g v-else-if="displayWeight === 'thin'"><rect
x="24"
y="64"
width="208"
height="128"
rx="16"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="128"
cy="60"
r="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><rect
x="24"
y="64"
width="208"
height="128"
rx="16"
transform="translate(256) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="128"
cy="60"
r="12"/></g>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator, ContextGetter } from '@/lib/helpers'
import { IconComputed, IconProps, IconContext } from '@/lib/types'

export default Vue.extend<{}, {}, IconComputed, IconProps>({
    name: `PhDeviceMobileCamera`,
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
