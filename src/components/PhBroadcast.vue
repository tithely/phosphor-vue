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
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M77.1,178.9A71.6,71.6,0,0,1,61.7,156a71.6,71.6,0,0,1,0-56A71.6,71.6,0,0,1,77.1,77.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M178.9,77.1A71.6,71.6,0,0,1,194.3,100a71.6,71.6,0,0,1,0,56,71.6,71.6,0,0,1-15.4,22.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M48.8,207.2a112.9,112.9,0,0,1-24-35.6,112.4,112.4,0,0,1,0-87.2,112.9,112.9,0,0,1,24-35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M207.2,48.8a112.9,112.9,0,0,1,24,35.6,112.4,112.4,0,0,1,0,87.2,112.9,112.9,0,0,1-24,35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><circle
cx="128"
cy="128"
r="32"
opacity="0.2"/><circle
cx="128"
cy="128"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M77.1,178.9A71.6,71.6,0,0,1,61.7,156a71.6,71.6,0,0,1,0-56A71.6,71.6,0,0,1,77.1,77.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M178.9,77.1A71.6,71.6,0,0,1,194.3,100a71.6,71.6,0,0,1,0,56,71.6,71.6,0,0,1-15.4,22.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M48.8,207.2a112.9,112.9,0,0,1-24-35.6,112.4,112.4,0,0,1,0-87.2,112.9,112.9,0,0,1,24-35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M207.2,48.8a112.9,112.9,0,0,1,24,35.6,112.4,112.4,0,0,1,0,87.2,112.9,112.9,0,0,1-24,35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><circle
cx="128"
cy="128"
r="40"/><path d="M82.7,82.7a7.9,7.9,0,0,0,0-11.3,8,8,0,0,0-11.3,0A80,80,0,0,0,54.3,96.9a79.9,79.9,0,0,0,0,62.2,80,80,0,0,0,17.1,25.5,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3,7.9,7.9,0,0,0,0-11.3A65.4,65.4,0,0,1,69,152.9a64.5,64.5,0,0,1,0-49.8A65.4,65.4,0,0,1,82.7,82.7Z"/><path d="M208,128a78.6,78.6,0,0,0-6.3-31.1,80,80,0,0,0-17.1-25.5,8,8,0,0,0-11.3,0,7.9,7.9,0,0,0,0,11.3A65.4,65.4,0,0,1,187,103.1a64.5,64.5,0,0,1,0,49.8,65.4,65.4,0,0,1-13.7,20.4,7.9,7.9,0,0,0,0,11.3,8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3,80,80,0,0,0,17.1-25.5A78.6,78.6,0,0,0,208,128Z"/><path d="M32.2,168.5a104.1,104.1,0,0,1,0-81,101.3,101.3,0,0,1,22.3-33A8.1,8.1,0,0,0,43.1,43.1,121.8,121.8,0,0,0,17.4,81.3a120.7,120.7,0,0,0,0,93.4,121.8,121.8,0,0,0,25.7,38.2,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4A101.3,101.3,0,0,1,32.2,168.5Z"/><path d="M238.6,81.3a121.8,121.8,0,0,0-25.7-38.2,8.1,8.1,0,1,0-11.4,11.4A103.5,103.5,0,0,1,232,128a103.5,103.5,0,0,1-30.5,73.5,8.1,8.1,0,0,0,0,11.4,8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,121.8,121.8,0,0,0,25.7-38.2,120.7,120.7,0,0,0,0-93.4Z"/></g>
            <g v-else-if="displayWeight === 'light'"><circle
cx="128"
cy="128"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M77.1,178.9A71.6,71.6,0,0,1,61.7,156a71.6,71.6,0,0,1,0-56A71.6,71.6,0,0,1,77.1,77.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M178.9,77.1A71.6,71.6,0,0,1,194.3,100a71.6,71.6,0,0,1,0,56,71.6,71.6,0,0,1-15.4,22.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M48.8,207.2a112.9,112.9,0,0,1-24-35.6,112.4,112.4,0,0,1,0-87.2,112.9,112.9,0,0,1,24-35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M207.2,48.8a112.9,112.9,0,0,1,24,35.6,112.4,112.4,0,0,1,0,87.2,112.9,112.9,0,0,1-24,35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><circle
cx="128"
cy="128"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M77.1,178.9A71.6,71.6,0,0,1,61.7,156a71.6,71.6,0,0,1,0-56A71.6,71.6,0,0,1,77.1,77.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M178.9,77.1A71.6,71.6,0,0,1,194.3,100a71.6,71.6,0,0,1,0,56,71.6,71.6,0,0,1-15.4,22.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M48.8,207.2a112.9,112.9,0,0,1-24-35.6,112.4,112.4,0,0,1,0-87.2,112.9,112.9,0,0,1,24-35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M207.2,48.8a112.9,112.9,0,0,1,24,35.6,112.4,112.4,0,0,1,0,87.2,112.9,112.9,0,0,1-24,35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><circle
cx="128"
cy="128"
r="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M77.1,178.9A71.6,71.6,0,0,1,61.7,156a71.6,71.6,0,0,1,0-56A71.6,71.6,0,0,1,77.1,77.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M178.9,77.1A71.6,71.6,0,0,1,194.3,100a71.6,71.6,0,0,1,0,56,71.6,71.6,0,0,1-15.4,22.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M48.8,207.2a112.9,112.9,0,0,1-24-35.6,112.4,112.4,0,0,1,0-87.2,112.9,112.9,0,0,1,24-35.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M207.2,48.8a112.9,112.9,0,0,1,24,35.6,112.4,112.4,0,0,1,0,87.2,112.9,112.9,0,0,1-24,35.6"
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
    name: `PhBroadcast`,
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
