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
x1="128"
y1="176"
x2="128"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M88,88v8a28,28,0,0,1-28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M168,88v8a28,28,0,0,0,28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M104,147.3A40,40,0,1,1,48,184v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M152,147.3A40,40,0,1,0,208,184v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M208,86.7V72a40,40,0,0,0-80,0,40,40,0,0,0-80,0V86.7a48.1,48.1,0,0,0,0,90.6h0V184a40,40,0,0,0,80,0,40,40,0,0,0,80,0v-6.7h0a48.1,48.1,0,0,0,0-90.6Z"
opacity="0.2"/><line
x1="128"
y1="176"
x2="128"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M88,144a40,40,0,1,1-40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M168,144a40,40,0,1,0,40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M88,84v8a28,28,0,0,1-28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M168,84v8a28,28,0,0,0,28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M248,132a56,56,0,0,0-32-50.6V72a48,48,0,0,0-88-26.5A48,48,0,0,0,40,72v9.4a56,56,0,0,0,0,101.2V184a48,48,0,0,0,88,26.5A48,48,0,0,0,216,184v-1.4A56.1,56.1,0,0,0,248,132ZM88,216a32,32,0,0,1-31.8-28.6,49.3,49.3,0,0,0,7.8.6h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.7,94.3,8.1,8.1,0,0,0,56,86.7V72a32,32,0,0,1,64,0v76.3A47.4,47.4,0,0,0,88,136a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a49.3,49.3,0,0,0,7.8-.6A32,32,0,1,1,168,152a8,8,0,0,0,0-16,47.4,47.4,0,0,0-32,12.3V72a32,32,0,0,1,64,0V86.7a8.1,8.1,0,0,0,5.3,7.6A40,40,0,0,1,192,172ZM60,128a8,8,0,0,1,0-16A20.1,20.1,0,0,0,80,92V84a8,8,0,0,1,16,0v8A36,36,0,0,1,60,128Zm144-8a8,8,0,0,1-8,8,36,36,0,0,1-36-36V84a8,8,0,0,1,16,0v8a20.1,20.1,0,0,0,20,20A8,8,0,0,1,204,120Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="128"
y1="176"
x2="128"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M88,144a40,40,0,1,1-40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M168,144a40,40,0,1,0,40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M88,84v8a28,28,0,0,1-28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M168,84v8a28,28,0,0,0,28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="128"
y1="176"
x2="128"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M88,144a40,40,0,1,1-40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M168,144a40,40,0,1,0,40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M88,84v8a28,28,0,0,1-28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M168,84v8a28,28,0,0,0,28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><line
x1="128"
y1="176"
x2="128"
y2="80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M88,144a40,40,0,1,1-40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M168,144a40,40,0,1,0,40,40v-6.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M88,84v8a28,28,0,0,1-28,28"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M168,84v8a28,28,0,0,0,28,28"
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
    name: `PhBrain`,
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
