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
y1="200"
x2="128"
y2="232"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M150.7,153a40.4,40.4,0,0,1-22.7,7h0a40,40,0,0,1-40-40V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M98.9,36.5A39.9,39.9,0,0,1,128,24h0a40,40,0,0,1,40,40v48.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M177.7,182.7A80,80,0,0,1,48,120"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M208,120a79.5,79.5,0,0,1-5.9,30.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><rect
x="88"
y="24"
width="80"
height="144"
rx="40"
opacity="0.2"/><path
d="M176.4,181.3A72,72,0,0,1,56.4,136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M154.9,157.6A39.6,39.6,0,0,1,128,168h0a40,40,0,0,1-40-40V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="200"
x2="128"
y2="232"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M94,43a39.8,39.8,0,0,1,34-19h0a40,40,0,0,1,40,40v60.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M199.6,136a72.4,72.4,0,0,1-4.5,18.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M213.9,210.6l-160-176A8,8,0,0,0,42.1,45.4L80,87.1V128a48,48,0,0,0,73.9,40.4l10.9,12A64,64,0,0,1,64.4,135.1a8,8,0,1,0-15.9,1.8A79.9,79.9,0,0,0,120,207.6V232a8,8,0,0,0,16,0V207.6a79.2,79.2,0,0,0,39.6-15.3l26.5,29.1A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1A7.9,7.9,0,0,0,213.9,210.6Z"/><path d="M162.1,129.8a7.9,7.9,0,0,0,5.9,2.6,7.4,7.4,0,0,0,2.9-.5,8,8,0,0,0,5.1-7.5V64a48,48,0,0,0-48-48A47.5,47.5,0,0,0,87.2,38.8a8,8,0,0,0,.8,9.6Z"/><path d="M192.2,161.7a9.3,9.3,0,0,0,2.9.5,7.8,7.8,0,0,0,7.4-5.1,78.7,78.7,0,0,0,5-20.2,8,8,0,1,0-15.9-1.8,60.1,60.1,0,0,1-4,16.2A8.1,8.1,0,0,0,192.2,161.7Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="128"
y1="200"
x2="128"
y2="232"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M154.9,157.6A39.6,39.6,0,0,1,128,168h0a40,40,0,0,1-40-40V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M176.4,181.3A72,72,0,0,1,56.4,136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M199.6,136a72.4,72.4,0,0,1-6.2,22.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M94,43a39.8,39.8,0,0,1,34-19h0a40,40,0,0,1,40,40v60.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="128"
y1="200"
x2="128"
y2="232"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M176.4,181.3A72,72,0,0,1,56.4,136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M154.9,157.6A39.6,39.6,0,0,1,128,168h0a40,40,0,0,1-40-40V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M94,43a39.8,39.8,0,0,1,34-19h0a40,40,0,0,1,40,40v60.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M199.6,136a72.4,72.4,0,0,1-4.5,18.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M176.4,181.3A72,72,0,0,1,56.4,136"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M154.9,157.6A39.6,39.6,0,0,1,128,168h0a40,40,0,0,1-40-40V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="200"
x2="128"
y2="232"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="48"
y1="40"
x2="208"
y2="216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M94,43a39.8,39.8,0,0,1,34-19h0a40,40,0,0,1,40,40v60.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M199.6,136a72.4,72.4,0,0,1-4.5,18.2"
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
    name: `PhMicrophoneSlash`,
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
