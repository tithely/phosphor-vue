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
            <g v-if="displayWeight === 'bold'"><polyline
points="180 52 220 52 220 92"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><polyline
points="76 204 36 204 36 164"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><polyline
points="220 164 220 204 180 204"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><polyline
points="36 92 36 52 76 52"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="88"
y1="92"
x2="88"
y2="164"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="168"
y1="92"
x2="168"
y2="164"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="128"
y1="92"
x2="128"
y2="164"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><polyline
points="184 48 224 48 224 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="72 208 32 208 32 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="224 168 224 208 184 208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="32 88 32 48 72 48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="80"
y1="88"
x2="80"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="176"
y1="88"
x2="176"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="88"
x2="144"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="112"
y1="88"
x2="112"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M224,40H184a8,8,0,0,0,0,16h32V88a8,8,0,0,0,16,0V48A8,8,0,0,0,224,40Z"/><path d="M72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Z"/><path d="M224,160a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Z"/><path d="M32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96Z"/><path d="M80,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Z"/><path d="M184,168V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0Z"/><path d="M144,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,144,80Z"/><path d="M112,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,112,80Z"/></g>
            <g v-else-if="displayWeight === 'light'"><polyline
points="184 48 224 48 224 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="72 208 32 208 32 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="224 168 224 208 184 208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="32 88 32 48 72 48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="80"
y1="88"
x2="80"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="176"
y1="88"
x2="176"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="144"
y1="88"
x2="144"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="112"
y1="88"
x2="112"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><polyline
points="184 48 224 48 224 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><polyline
points="72 208 32 208 32 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><polyline
points="224 168 224 208 184 208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><polyline
points="32 88 32 48 72 48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="80"
y1="88"
x2="80"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="176"
y1="88"
x2="176"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="144"
y1="88"
x2="144"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="112"
y1="88"
x2="112"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><polyline
points="184 48 224 48 224 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="72 208 32 208 32 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="224 168 224 208 184 208"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="32 88 32 48 72 48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="80"
y1="88"
x2="80"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="176"
y1="88"
x2="176"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="88"
x2="144"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="112"
y1="88"
x2="112"
y2="168"
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
    name: `PhBarcode`,
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
