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
points="176 104 224 152 176 200"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M32,56a96,96,0,0,0,96,96h96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><polyline
points="176 104 224 152 176 200"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M32,56a96,96,0,0,0,96,96h96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M229.7,157.7l-48,48A8.3,8.3,0,0,1,176,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,168,200V160H128A104.2,104.2,0,0,1,24,56a8,8,0,0,1,16,0,88.1,88.1,0,0,0,88,88h40V104a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l48,48A8.1,8.1,0,0,1,229.7,157.7Z"/></g>
            <g v-else-if="displayWeight === 'light'"><polyline
points="176 104 224 152 176 200"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M32,56a96,96,0,0,0,96,96h96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><polyline
points="176 104 224 152 176 200"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M32,56a96,96,0,0,0,96,96h96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><polyline
points="176 104 224 152 176 200"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M32,56a96,96,0,0,0,96,96h96"
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
    name: `PhArrowBendDownRight`,
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
