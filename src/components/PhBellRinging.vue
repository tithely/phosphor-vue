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
d="M56.2,112a71.8,71.8,0,1,1,143.6,0h0c0,35.8,7.5,56.6,14.1,68a8,8,0,0,1-6.9,12H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M96,192v8a32,32,0,0,0,64,0v-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M187.7,17.2a111.1,111.1,0,0,1,40.8,45.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M27.5,62.6A111.1,111.1,0,0,1,68.3,17.2"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M56.2,112a71.8,71.8,0,1,1,143.6,0h0c0,35.8,7.5,56.6,14.1,68a8,8,0,0,1-6.9,12H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68Z"
opacity="0.2"/><path
d="M56.2,112a71.8,71.8,0,1,1,143.6,0h0c0,35.8,7.5,56.6,14.1,68a8,8,0,0,1-6.9,12H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M96,192v8a32,32,0,0,0,64,0v-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M183.4,24a105,105,0,0,1,38,42.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M34.6,66.1A105,105,0,0,1,72.6,24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M207.8,112a79.7,79.7,0,0,0-79.2-80H128a79.9,79.9,0,0,0-79.8,80c0,34.3-7.1,53.7-13,63.9a16.2,16.2,0,0,0-.1,16.1A15.9,15.9,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8,16.2,16.2,0,0,0-.1-16.1C214.9,165.7,207.8,146.3,207.8,112ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM224.9,73.3a9.3,9.3,0,0,1-3.5.8,7.9,7.9,0,0,1-7.2-4.5,97,97,0,0,0-35-38.8,8,8,0,0,1,8.5-13.6,111.7,111.7,0,0,1,40.8,45.4A8,8,0,0,1,224.9,73.3Zm-190.3.8a9.3,9.3,0,0,1-3.5-.8,8,8,0,0,1-3.6-10.7A111.7,111.7,0,0,1,68.3,17.2a8,8,0,0,1,8.5,13.6,97,97,0,0,0-35,38.8A7.9,7.9,0,0,1,34.6,74.1Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M56.2,112a71.8,71.8,0,1,1,143.6,0h0c0,35.8,7.5,56.6,14.1,68a8,8,0,0,1-6.9,12H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M96,192v8a32,32,0,0,0,64,0v-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M183.4,24a105,105,0,0,1,38,42.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M34.6,66.1A105,105,0,0,1,72.6,24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M56.2,112a71.8,71.8,0,1,1,143.6,0h0c0,35.8,7.5,56.6,14.1,68a8,8,0,0,1-6.9,12H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M96,192v8a32,32,0,0,0,64,0v-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M183.4,24a105,105,0,0,1,38,42.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M34.6,66.1A105,105,0,0,1,72.6,24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M56.2,112a71.8,71.8,0,1,1,143.6,0h0c0,35.8,7.5,56.6,14.1,68a8,8,0,0,1-6.9,12H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M96,192v8a32,32,0,0,0,64,0v-8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M183.4,24a105,105,0,0,1,38,42.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M34.6,66.1A105,105,0,0,1,72.6,24"
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
    name: `PhBellRinging`,
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
