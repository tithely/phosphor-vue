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
d="M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M88,104V72a40,40,0,0,1,80,0v32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z"
opacity="0.2"/><path
d="M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M88,104V72a40,40,0,0,1,80,0v32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M235,69.3A15.9,15.9,0,0,0,223.1,64H175.3a48,48,0,0,0-94.6,0H32.9A15.9,15.9,0,0,0,21,69.3a16.2,16.2,0,0,0-4,12.5l14.3,128A15.9,15.9,0,0,0,47.2,224H208.8a15.9,15.9,0,0,0,15.9-14.2L239,81.8A16.2,16.2,0,0,0,235,69.3ZM96,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm1-40a32,32,0,0,1,62,0Zm79,40a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M88,104V72a40,40,0,0,1,80,0v32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M88,104V72a40,40,0,0,1,80,0v32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M208.8,216H47.2a8.1,8.1,0,0,1-8-7.1L25,80.9A8,8,0,0,1,32.9,72H223.1a8,8,0,0,1,7.9,8.9l-14.2,128A8.1,8.1,0,0,1,208.8,216Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M88,104V72a40,40,0,0,1,80,0v32"
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
    name: `PhTote`,
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
