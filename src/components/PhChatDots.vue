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
d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="100"
cy="128"
r="16"/><circle
cx="156"
cy="128"
r="16"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M78,201.3,45.1,228.9A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H81.7Z"
opacity="0.2"/><path
d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="128"
cy="128"
r="12"/><circle
cx="80"
cy="128"
r="12"/><circle
cx="176"
cy="128"
r="12"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M216,48H40A16,16,0,0,0,24,64V222.8a15.7,15.7,0,0,0,9.3,14.5,14.7,14.7,0,0,0,6.7,1.6,16,16,0,0,0,10.3-3.8l31.8-26.7L216,208a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM80,140a12,12,0,1,1,12-12A12,12,0,0,1,80,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176,140Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="128"
cy="128"
r="10"/><circle
cx="176"
cy="128"
r="10"/><circle
cx="80"
cy="128"
r="10"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="128"
cy="128"
r="8"/><circle
cx="80"
cy="128"
r="8"/><circle
cx="176"
cy="128"
r="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="128"
cy="128"
r="12"/><circle
cx="80"
cy="128"
r="12"/><circle
cx="176"
cy="128"
r="12"/></g>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator, ContextGetter } from '@/lib/helpers'
import { IconComputed, IconProps, IconContext } from '@/lib/types'

export default Vue.extend<{}, {}, IconComputed, IconProps>({
    name: `PhChatDots`,
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
