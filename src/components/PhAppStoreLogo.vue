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
x1="104"
y1="40"
x2="128"
y2="80.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="152"
y1="40"
x2="76.4"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="179.6"
y1="168"
x2="232"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="151.2"
y1="119.9"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="24"
y1="168"
x2="133.2"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="52.7"
y1="208"
x2="48"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><line
x1="146.6"
y1="112.1"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="40"
x2="128"
y2="80.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="57.5"
y1="200"
x2="48"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="152"
y1="40"
x2="76.4"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="179.6"
y1="168"
x2="232"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="24"
y1="168"
x2="142.5"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M64.3,204.1l-9.4,16A8.1,8.1,0,0,1,48,224a8.7,8.7,0,0,1-4.1-1.1,8.1,8.1,0,0,1-2.8-11l9.5-16a8,8,0,1,1,13.7,8.2ZM232,160H184.2l-30.7-52a8,8,0,0,0-11-2.8,7.9,7.9,0,0,0-2.8,10.9l61.4,104A8.1,8.1,0,0,0,208,224a8.7,8.7,0,0,0,4.1-1.1,8.1,8.1,0,0,0,2.8-11L193.7,176H232a8,8,0,0,0,0-16Zm-89.5,0H90.4l44.4-75.2h.1l24-40.6a8,8,0,0,0-13.8-8.2L128,64.9l-17.1-29a8,8,0,1,0-13.8,8.2l21.6,36.5L71.8,160H24a8,8,0,0,0,0,16H142.5a8,8,0,0,0,0-16Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="146.6"
y1="112.1"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="104"
y1="40"
x2="128"
y2="80.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="57.5"
y1="200"
x2="48"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="152"
y1="40"
x2="76.4"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="179.6"
y1="168"
x2="232"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="24"
y1="168"
x2="142.5"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="146.6"
y1="112.1"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="104"
y1="40"
x2="128"
y2="80.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="57.5"
y1="200"
x2="48"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="152"
y1="40"
x2="76.4"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="179.6"
y1="168"
x2="232"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="24"
y1="168"
x2="142.5"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><line
x1="146.6"
y1="112.1"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="104"
y1="40"
x2="128"
y2="80.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="57.5"
y1="200"
x2="48"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="152"
y1="40"
x2="76.4"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="179.6"
y1="168"
x2="232"
y2="168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="24"
y1="168"
x2="142.5"
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
    name: `PhAppStoreLogo`,
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
