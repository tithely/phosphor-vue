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
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M181.2,79.4A98.3,98.3,0,0,1,196,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M196,195.8a98.3,98.3,0,0,1-14.8-19.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M168.7,140a117.3,117.3,0,0,1-.7-12,117.3,117.3,0,0,1,.7-12"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M74.8,79.4A98.3,98.3,0,0,0,60,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M60,195.8a98.3,98.3,0,0,0,14.8-19.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M87.3,140a117.3,117.3,0,0,0,.7-12,117.3,117.3,0,0,0-.7-12"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M60.1,195.9a95.8,95.8,0,0,1-.2-135.6h0a95.5,95.5,0,0,1,28,67.7,95.8,95.8,0,0,1-28,67.8Z"
opacity="0.2"/><path
d="M196.1,195.9a95.8,95.8,0,0,1-.2-135.6h0a96,96,0,0,1,0,135.5Z"
opacity="0.2"/><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M169.2,113A94.7,94.7,0,0,1,173,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M173,158.5a94.7,94.7,0,0,1-3.8-15.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M86.8,113A94.7,94.7,0,0,0,83,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M83,158.5A94.7,94.7,0,0,0,86.8,143"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M186.8,70.9A103.8,103.8,0,0,1,196,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M196,195.8a115.6,115.6,0,0,1-9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M60,195.8a115.6,115.6,0,0,0,9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M69.2,70.9A103.8,103.8,0,0,0,60,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M51.9,63.9a4,4,0,0,0-6,.3,103.9,103.9,0,0,0,0,127.6,4,4,0,0,0,6,.3l7.3-7.3a8,8,0,0,1,6.2-2.8,7.9,7.9,0,0,1,5.2,2,8.2,8.2,0,0,1,.6,11.4,99.9,99.9,0,0,1-7.8,8.2,3.9,3.9,0,0,0,.2,6,103.8,103.8,0,0,0,128.8,0,3.9,3.9,0,0,0,.2-6,103.3,103.3,0,0,1-7.9-8.3,8,8,0,1,1,12.1-10.5l7.3,7.3a4,4,0,0,0,6-.3,103.9,103.9,0,0,0,0-127.6,4,4,0,0,0-6-.3l-7.3,7.3a8.1,8.1,0,0,1-6.1,2.8,7.6,7.6,0,0,1-5.3-2,8.2,8.2,0,0,1-.6-11.4,99.9,99.9,0,0,1,7.8-8.2,3.9,3.9,0,0,0-.2-6,103.8,103.8,0,0,0-128.8,0,3.9,3.9,0,0,0-.2,6,99.9,99.9,0,0,1,7.8,8.2A8,8,0,0,1,65.3,74h0a8.1,8.1,0,0,1-6.1-2.8ZM79.2,88.2a9.6,9.6,0,0,1,2.8-.7,8.1,8.1,0,0,1,7.9,5.3,105.7,105.7,0,0,1,4.4,16.5,8,8,0,0,1-5.9,9.4,6.3,6.3,0,0,1-1.9.3h0a8,8,0,0,1-7.9-6.6,83.8,83.8,0,0,0-3.7-13.9C73.5,94.5,75.2,89.8,79.2,88.2Zm15.1,58.5a105.7,105.7,0,0,1-4.4,16.5,8.1,8.1,0,0,1-7.6,5.3h0a7,7,0,0,1-3.1-.7,8.2,8.2,0,0,1-4.3-10.3,83.8,83.8,0,0,0,3.7-13.9,8.1,8.1,0,0,1,7.7-6.6l2,.2A8.2,8.2,0,0,1,94.3,146.7Zm82.5,21.1a7,7,0,0,1-3.1.7,8.1,8.1,0,0,1-7.6-5.3,105.7,105.7,0,0,1-4.4-16.5,8.2,8.2,0,0,1,5.4-9.3,8.1,8.1,0,0,1,10.3,6.2,83.8,83.8,0,0,0,3.7,13.9A8.2,8.2,0,0,1,176.8,167.8Zm3.6-68a23.6,23.6,0,0,0-2.9,11.4,8,8,0,0,1-8,7.8l-1.4-.2c-4.3-.7-7.2-5.3-6.4-9.6A109,109,0,0,1,166,93.1a8.3,8.3,0,0,1,9.8-5.3A8,8,0,0,1,180.4,99.8Z"/></g>
            <g v-else-if="displayWeight === 'light'"><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M169.2,113A94.7,94.7,0,0,1,173,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M173,158.5a94.7,94.7,0,0,1-3.8-15.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M86.8,113A94.7,94.7,0,0,0,83,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M83,158.5A94.7,94.7,0,0,0,86.8,143"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M186.8,70.9A103.8,103.8,0,0,1,196,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M196,195.8a115.6,115.6,0,0,1-9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M60,195.8a115.6,115.6,0,0,0,9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M69.2,70.9A103.8,103.8,0,0,0,60,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M169.2,113A94.7,94.7,0,0,1,173,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M173,158.5a94.7,94.7,0,0,1-3.8-15.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M86.8,113A94.7,94.7,0,0,0,83,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M83,158.5A94.7,94.7,0,0,0,86.8,143"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M186.8,70.9A103.8,103.8,0,0,1,196,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M196,195.8a115.6,115.6,0,0,1-9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M60,195.8a115.6,115.6,0,0,0,9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M69.2,70.9A103.8,103.8,0,0,0,60,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><circle
cx="128"
cy="128"
r="96"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M169.2,113A94.7,94.7,0,0,1,173,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M173,158.5a94.7,94.7,0,0,1-3.8-15.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M86.8,113A94.7,94.7,0,0,0,83,97.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M83,158.5A94.7,94.7,0,0,0,86.8,143"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M186.8,70.9A103.8,103.8,0,0,1,196,60.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M196,195.8a115.6,115.6,0,0,1-9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M60,195.8a115.6,115.6,0,0,0,9.2-10.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M69.2,70.9A103.8,103.8,0,0,0,60,60.2"
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
    name: `PhBaseball`,
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
