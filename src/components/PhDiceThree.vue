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
width="176"
height="176"
rx="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="88"
cy="88"
r="16"/><circle
cx="128"
cy="128"
r="16"/><circle
cx="168"
cy="168"
r="16"/></g>
            <g v-else-if="displayWeight === 'duotone'"><rect
x="40"
y="40"
width="176"
height="176"
rx="24"
opacity="0.2"/><rect
x="40"
y="40"
width="176"
height="176"
rx="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="92"
cy="92"
r="12"/><circle
cx="128"
cy="128"
r="12"/><circle
cx="164"
cy="164"
r="12"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32ZM92,104a12,12,0,1,1,12-12A12,12,0,0,1,92,104Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,164,176Z"/></g>
            <g v-else-if="displayWeight === 'light'"><rect
x="40"
y="40"
width="176"
height="176"
rx="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="92"
cy="92"
r="10"/><circle
cx="128"
cy="128"
r="10"/><circle
cx="164"
cy="164"
r="10"/></g>
            <g v-else-if="displayWeight === 'thin'"><rect
x="40"
y="40"
width="176"
height="176"
rx="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="92"
cy="92"
r="8"/><circle
cx="128"
cy="128"
r="8"/><circle
cx="164"
cy="164"
r="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><rect
x="40"
y="40"
width="176"
height="176"
rx="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="92"
cy="92"
r="12"/><circle
cx="128"
cy="128"
r="12"/><circle
cx="164"
cy="164"
r="12"/></g>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator, ContextGetter } from '@/lib/helpers'
import { IconComputed, IconProps, IconContext } from '@/lib/types'

export default Vue.extend<{}, {}, IconComputed, IconProps>({
    name: `PhDiceThree`,
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
