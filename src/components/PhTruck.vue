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
d="M176,80h42.6a7.9,7.9,0,0,1,7.4,5l14,35"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="16"
y1="144"
x2="176"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="180"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="76"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="156"
y1="192"
x2="100"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M52,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V168.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M176,120h64v64a8,8,0,0,1-8,8H204"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M176,144H16v40a8,8,0,0,0,8,8H44a24,24,0,0,1,48,0h72a24,24,0,0,1,12-20.8Z"
opacity="0.2"/><path
d="M212,192a24,24,0,0,0-36-20.8V120h64v64a8,8,0,0,1-8,8H212"
opacity="0.2"/><path
d="M176,80h42.6a7.9,7.9,0,0,1,7.4,5l14,35"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="16"
y1="144"
x2="176"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="188"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-miterlimit="10"
stroke-width="16"/><circle
cx="68"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-miterlimit="10"
stroke-width="16"/><line
x1="164"
y1="192"
x2="92"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,120h64v64a8,8,0,0,1-8,8H212"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M248,119.9v-.2a1.7,1.7,0,0,0-.1-.7v-.3c0-.2-.1-.4-.1-.6v-.2l-.2-.8h-.1l-14-34.8A15.7,15.7,0,0,0,218.6,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H37a32,32,0,0,0,62,0h58a32,32,0,0,0,62,0h13a16,16,0,0,0,16-16V120ZM184,88h34.6l9.6,24H184ZM24,72H168v64H24ZM68,208a16,16,0,1,1,16-16A16,16,0,0,1,68,208Zm120,0a16,16,0,1,1,16-16A16,16,0,0,1,188,208Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M176,80h42.6a7.9,7.9,0,0,1,7.4,5l14,35"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="16"
y1="144"
x2="176"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="188"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="68"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="164"
y1="192"
x2="92"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M176,120h64v64a8,8,0,0,1-8,8H212"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M176,80h42.6a7.9,7.9,0,0,1,7.4,5l14,35"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="16"
y1="144"
x2="176"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="188"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="68"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="164"
y1="192"
x2="92"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M176,120h64v64a8,8,0,0,1-8,8H212"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M176,80h42.6a7.9,7.9,0,0,1,7.4,5l14,35"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="16"
y1="144"
x2="176"
y2="144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="188"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-miterlimit="10"
stroke-width="16"/><circle
cx="68"
cy="192"
r="24"
fill="none"
:stroke="displayColor"
stroke-miterlimit="10"
stroke-width="16"/><line
x1="164"
y1="192"
x2="92"
y2="192"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,120h64v64a8,8,0,0,1-8,8H212"
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
    name: `PhTruck`,
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
