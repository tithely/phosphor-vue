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
x1="96"
y1="124"
x2="160"
y2="124"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="96"
y1="164"
x2="160"
y2="164"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="84"
y1="24"
x2="84"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="128"
y1="24"
x2="128"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="172"
y1="24"
x2="172"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
opacity="0.2"/><line
x1="96"
y1="128"
x2="160"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="96"
y1="160"
x2="160"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="80"
y1="24"
x2="80"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="24"
x2="128"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="176"
y1="24"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M200,32H184V24a8,8,0,0,0-16,0v8H136V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H56A16,16,0,0,0,40,48V200a32,32,0,0,0,32,32H184a32,32,0,0,0,32-32V48A16,16,0,0,0,200,32ZM160,168H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="96"
y1="128"
x2="160"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="96"
y1="160"
x2="160"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="80"
y1="24"
x2="80"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="128"
y1="24"
x2="128"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="176"
y1="24"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="96"
y1="128"
x2="160"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="96"
y1="160"
x2="160"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="80"
y1="24"
x2="80"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="128"
y1="24"
x2="128"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="176"
y1="24"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><line
x1="96"
y1="128"
x2="160"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="96"
y1="160"
x2="160"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="80"
y1="24"
x2="80"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="24"
x2="128"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="176"
y1="24"
x2="176"
y2="56"
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
    name: `PhNotepad`,
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
