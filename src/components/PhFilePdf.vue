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
points="228 164 196 164 196 220"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="224"
y1="196"
x2="196"
y2="196"
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
d="M112,220V164h16a28,28,0,0,1,0,56Z"
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
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><polygon
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
stroke-width="16"/><path
d="M48,200H64a16,16,0,0,0,0-32H48v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="216 168 188 168 188 216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="212"
y1="196"
x2="188"
y2="196"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,216a24,24,0,0,0,0-48H114v48Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M64,160H48a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H56V176h8a8,8,0,0,1,0,16Zm132-16v12h16a8,8,0,0,1,0,16H196v12a8,8,0,0,1-16,0V168a8,8,0,0,1,8-8h28a8,8,0,0,1,0,16Zm-68-16H114a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h14a32,32,0,0,0,0-64Zm0,48h-6V176h6a16,16,0,0,1,0,32ZM48,136H208a8,8,0,0,0,8-8V88a8.1,8.1,0,0,0-2.3-5.7l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88A8,8,0,0,0,48,136ZM152,44l44,44H152Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
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
stroke-width="12"/><path
d="M48,200H64a16,16,0,0,0,0-32H48v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><polyline
points="216 168 188 168 188 216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="212"
y1="196"
x2="188"
y2="196"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M128,216a24,24,0,0,0,0-48H114v48Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
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
stroke-width="8"/><path
d="M48,200H64a16,16,0,0,0,0-32H48v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><polyline
points="216 168 188 168 188 216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="212"
y1="196"
x2="188"
y2="196"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M128,216a24,24,0,0,0,0-48H114v48Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
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
stroke-width="16"/><path
d="M48,200H64a16,16,0,0,0,0-32H48v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polyline
points="216 168 188 168 188 216"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="212"
y1="196"
x2="188"
y2="196"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,216a24,24,0,0,0,0-48H114v48Z"
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
    name: `PhFilePdf`,
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
