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
            <g v-if="displayWeight === 'bold'"><line
x1="40"
y1="56"
x2="40"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="144"
y1="116"
x2="40"
y2="116"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="144"
y1="56"
x2="144"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="191.8"
y1="154"
x2="224"
y2="100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="216"
cy="168"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><line
x1="40"
y1="56"
x2="40"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="116"
x2="40"
y2="116"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="56"
x2="144"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="191.8"
y1="154"
x2="224"
y2="100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="216"
cy="168"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0ZM252,168a36,36,0,1,1-67.4-17.5l.3-.6,32.2-54a8,8,0,0,1,13.8,8.2L214.2,132H216A36,36,0,0,1,252,168Zm-16,0a20,20,0,1,0-20,20A20.1,20.1,0,0,0,236,168Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="40"
y1="56"
x2="40"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="144"
y1="116"
x2="40"
y2="116"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="144"
y1="56"
x2="144"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="191.8"
y1="154"
x2="224"
y2="100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="216"
cy="168"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="40"
y1="56"
x2="40"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="144"
y1="116"
x2="40"
y2="116"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="144"
y1="56"
x2="144"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="191.8"
y1="154"
x2="224"
y2="100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="216"
cy="168"
r="28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><line
x1="40"
y1="56"
x2="40"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="116"
x2="40"
y2="116"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="56"
x2="144"
y2="176"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="191.8"
y1="154"
x2="224"
y2="100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="216"
cy="168"
r="28"
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
    name: `PhTextHSix`,
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
