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
d="M80,108h96a32,32,0,0,1,32,32v76a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V140A32,32,0,0,1,80,108Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M80,108V92a23.9,23.9,0,0,1,24-24h48a23.9,23.9,0,0,1,24,24v16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M184,40a16,16,0,0,0-16-16H104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="128"
y1="24"
x2="128"
y2="68"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z"
opacity="0.2"/><path
d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M80,104V88a23.9,23.9,0,0,1,24-24h48a23.9,23.9,0,0,1,24,24v16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M184,40a16,16,0,0,0-16-16H104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="24"
x2="128"
y2="64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M184,96.8V88a32.1,32.1,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24.1,24.1,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32.1,32.1,0,0,0,72,88v8.8A40.1,40.1,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.1,40.1,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M80,104V88a23.9,23.9,0,0,1,24-24h48a23.9,23.9,0,0,1,24,24v16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M184,40a16,16,0,0,0-16-16H104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="128"
y1="24"
x2="128"
y2="64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M80,104V88a23.9,23.9,0,0,1,24-24h48a23.9,23.9,0,0,1,24,24v16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M184,40a16,16,0,0,0-16-16H104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="128"
y1="24"
x2="128"
y2="64"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M80,104V88a23.9,23.9,0,0,1,24-24h48a23.9,23.9,0,0,1,24,24v16"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M184,40a16,16,0,0,0-16-16H104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="24"
x2="128"
y2="64"
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
    name: `PhHandSoap`,
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
