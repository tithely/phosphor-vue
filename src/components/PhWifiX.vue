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
d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="224"
y1="56"
x2="176"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="224"
y1="104"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M25.1,98.2A145.6,145.6,0,0,1,128,56l8,.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M59,132.1A97.8,97.8,0,0,1,128,104c2.7,0,5.4.1,8,.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><circle
cx="128"
cy="200"
r="16"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M20.2,75.9C83.7,28,172.3,28,235.8,75.9A8,8,0,0,1,237,87.5L134,208.9a7.9,7.9,0,0,1-12.1-.1L19,87.6A8.1,8.1,0,0,1,20.2,75.9Z"
opacity="0.2"/><line
x1="224"
y1="56"
x2="176"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="224"
y1="104"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M202.7,127.9l-68.7,81a7.9,7.9,0,0,1-12.1-.1L19,87.6a8.1,8.1,0,0,1,1.2-11.7A178.9,178.9,0,0,1,147.7,41.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M229.4,98.1a8.2,8.2,0,0,1,.6,11.1,7.8,7.8,0,0,1-6,2.8,8.3,8.3,0,0,1-5.7-2.3L200,91.3l-18.3,18.4A8.5,8.5,0,0,1,176,112a8,8,0,0,1-6.1-2.8,8.3,8.3,0,0,1,.6-11.1L188.7,80,170.6,61.9a8.3,8.3,0,0,1-.4-11.4,8.1,8.1,0,0,1,11.5-.2L200,68.7l18.3-18.4a8.1,8.1,0,0,1,11.5.2,8.3,8.3,0,0,1-.4,11.4L211.3,80Zm-26.6,18.7a3.9,3.9,0,0,0-5.6,0l-3.9,3.8a24,24,0,0,1-34.3.4,24.2,24.2,0,0,1,0-34l7.1-7-6.7-6.6c-9-9-9.9-23.6-1.5-33.2a11.4,11.4,0,0,1,1.1-1.1,2.9,2.9,0,0,0-1.5-4.8A187.4,187.4,0,0,0,15.4,69.6,15.6,15.6,0,0,0,9.2,80.5a16.6,16.6,0,0,0,3.7,12.3l103,121.3a15.9,15.9,0,0,0,24.2,0l71.5-84.2a4,4,0,0,0-.9-5.9,26.9,26.9,0,0,1-3.7-3Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="224"
y1="56"
x2="176"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="224"
y1="104"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M25.1,98.2A145.6,145.6,0,0,1,128,56a141.7,141.7,0,0,1,16,.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M59,132.1A97.8,97.8,0,0,1,128,104a93.4,93.4,0,0,1,16,1.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><circle
cx="128"
cy="200"
r="10"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="224"
y1="56"
x2="176"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="224"
y1="104"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M25.1,98.2A145.6,145.6,0,0,1,128,56a141.7,141.7,0,0,1,16,.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M59,132.1A97.8,97.8,0,0,1,128,104a93.4,93.4,0,0,1,16,1.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><circle
cx="128"
cy="200"
r="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="224"
y1="56"
x2="176"
y2="104"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="224"
y1="104"
x2="176"
y2="56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M25.1,98.2A145.6,145.6,0,0,1,128,56a141.7,141.7,0,0,1,16,.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M59,132.1A97.8,97.8,0,0,1,128,104a93.4,93.4,0,0,1,16,1.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><circle
cx="128"
cy="200"
r="12"/></g>
    </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator, ContextGetter } from '@/lib/helpers'
import { IconComputed, IconProps, IconContext } from '@/lib/types'

export default Vue.extend<{}, {}, IconComputed, IconProps>({
    name: `PhWifiX`,
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
