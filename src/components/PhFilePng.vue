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
            <g v-if="displayWeight === 'bold'"><polyline
points="108 220 108 164 148 220 148 164"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><polyline
points="148 36 148 100 212 100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M44,124V44a8,8,0,0,1,8-8H156l56,56v32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M36,204H52a20,20,0,0,0,0-40H36v56"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M220,198.9h8v8c-4.6,7.9-12.7,13.1-22,13.1-14.4,0-26-12.5-26-28s11.6-28,26-28a24.2,24.2,0,0,1,14,4.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M44,200H60a16,16,0,0,0,0-32H44v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="108 216 108 168 144 216 144 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M204,194h12v11.8A21.5,21.5,0,0,1,198,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polygon
points="152 32 152 88 208 88 152 32"
opacity="0.2"/><path
d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="152 32 152 88 208 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M60,160H44a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H52V176h8a8,8,0,0,1,0,16Zm92-24v48a8,8,0,0,1-5.5,7.6,7.3,7.3,0,0,1-2.5.4,7.8,7.8,0,0,1-6.4-3.2L116,192v24a8,8,0,0,1-16,0V168a8,8,0,0,1,5.5-7.6,7.9,7.9,0,0,1,8.9,2.8L136,192V168a8,8,0,0,1,16,0Zm72,37.8a7.5,7.5,0,0,1-1.3,4.3A29.4,29.4,0,0,1,198,224c-16.5,0-30-14.4-30-32s13.5-32,30-32a28.4,28.4,0,0,1,16.6,5.4,8,8,0,0,1-9.2,13A12.6,12.6,0,0,0,198,176c-7.7,0-14,7.2-14,16s6.3,16,14,16a13.3,13.3,0,0,0,10-4.8V202h-4a8,8,0,0,1,0-16h12a8,8,0,0,1,8,8ZM48,136H208a8,8,0,0,0,8-8V88a8.1,8.1,0,0,0-2.3-5.7l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88A8,8,0,0,0,48,136ZM152,44l44,44H152Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M44,200H60a16,16,0,0,0,0-32H44v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="108 216 108 168 144 216 144 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M204,194h12v11.8A21.5,21.5,0,0,1,198,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="152 32 152 88 208 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M44,200H60a16,16,0,0,0,0-32H44v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><polyline
points="108 216 108 168 144 216 144 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M204,194h12v11.8A21.5,21.5,0,0,1,198,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><polyline
points="152 32 152 88 208 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M44,200H60a16,16,0,0,0,0-32H44v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="108 216 108 168 144 216 144 168"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M204,194h12v11.8A21.5,21.5,0,0,1,198,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="152 32 152 88 208 88"
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
    name: `PhFilePng`,
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
