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
d="M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M143.5,23.4A31.9,31.9,0,0,1,168,12"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z"
opacity="0.2"/><path
d="M138.1,32.5A32,32,0,0,1,168,12"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M130.7,29.6A40.2,40.2,0,0,1,168,4a8,8,0,0,1,0,16,24.1,24.1,0,0,0-22.4,15.4,8,8,0,0,1-7.5,5.1,9.2,9.2,0,0,1-2.8-.5A8,8,0,0,1,130.7,29.6ZM222,155.8a40,40,0,0,1-2.7-70A8.2,8.2,0,0,0,221.5,74,68,68,0,0,0,128,61,68,68,0,0,0,20,116a135,135,0,0,0,22.9,74c14.4,21.3,32.7,34,49.1,34h72c22.5,0,47.9-23.9,61.9-58A7.9,7.9,0,0,0,222,155.8Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M138.1,32.5A32,32,0,0,1,168,12"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M138.1,32.5A32,32,0,0,1,168,12"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M138.1,32.5A32,32,0,0,1,168,12"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M218.5,162.9C205.9,193.7,183.1,216,164,216H92c-28,0-64-48-64-100A60,60,0,0,1,128,71.3h0a60,60,0,0,1,87.2,7.6h0a48,48,0,0,0,3.3,84Z"
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
    name: `PhAppleLogo`,
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
