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
stroke-width="24"/><polyline
points="100 108 100 156 148 156"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="156"
y1="100"
x2="100"
y2="156"
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
stroke-width="16"/><polyline
points="100 108 100 156 148 156"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="156"
y1="100"
x2="100"
y2="156"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm33.7,81.7L119.3,148H148a8,8,0,0,1,0,16H100a8.5,8.5,0,0,1-3.1-.6,8.2,8.2,0,0,1-4.3-4.3A8.5,8.5,0,0,1,92,156V108a8,8,0,0,1,16,0v28.7l42.3-42.4a8.1,8.1,0,0,1,11.4,11.4Z"/></g>
            <g v-else-if="displayWeight === 'light'"><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="100 108 100 156 148 156"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="156"
y1="100"
x2="100"
y2="156"
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
stroke-width="8"/><polyline
points="100 108 100 156 148 156"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="156"
y1="100"
x2="100"
y2="156"
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
stroke-width="16"/><polyline
points="100 108 100 156 148 156"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="156"
y1="100"
x2="100"
y2="156"
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
    name: `PhArrowCircleDownLeft`,
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
