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
d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="32"
y1="80"
x2="192"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="160"
cy="144"
r="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="72"
y1="124"
x2="96"
y2="124"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="72"
y1="164"
x2="96"
y2="164"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M216,80H32V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V88A8,8,0,0,0,216,80Zm-56,96a32,32,0,1,1,32-32A32,32,0,0,1,160,176Z"
opacity="0.2"/><path
d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="32"
y1="80"
x2="192"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="160"
cy="144"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="112"
x2="96"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="144"
x2="96"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="176"
x2="96"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M216,72H86.5L194.3,39.7a8,8,0,1,0-4.6-15.4l-160,48h0l-.7.3h-.1l-.5.3H28a6.8,6.8,0,0,0-2.1,1.7.1.1,0,0,1-.1.1c-.1.1-.1.2-.2.4l-.2.2a.3.3,0,0,0-.1.2,6.7,6.7,0,0,0-1,2.3c-.1.1-.1.2-.1.4h-.1a2,2,0,0,1-.1.7h0V80h0V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM96,184H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm72,52a28,28,0,1,1,28-28A28.1,28.1,0,0,1,168,172Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="32"
y1="80"
x2="192"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="160"
cy="144"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="64"
y1="112"
x2="96"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="64"
y1="144"
x2="96"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="64"
y1="176"
x2="96"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="32"
y1="80"
x2="192"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="160"
cy="144"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="64"
y1="112"
x2="96"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="64"
y1="144"
x2="96"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="64"
y1="176"
x2="96"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M32,80H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80A0,0,0,0,1,32,80Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="32"
y1="80"
x2="192"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="160"
cy="144"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="112"
x2="96"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="144"
x2="96"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="176"
x2="96"
y2="176"
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
    name: `PhRadio`,
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
