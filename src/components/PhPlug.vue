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
d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="88"
y1="168"
x2="32"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="144"
y1="64"
x2="184"
y2="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="232"
y1="72"
x2="192"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="224"
y1="144"
x2="112"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44Z"
opacity="0.2"/><path
d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="168"
x2="32"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="64"
x2="184"
y2="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="232"
y1="72"
x2="192"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="224"
y1="144"
x2="112"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M237.7,77.7,203.3,112l26.4,26.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0l-6.3-6.4L160.3,195a40.1,40.1,0,0,1-56.6,0L88,179.3,37.7,229.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L76.7,168,61,152.3a40.1,40.1,0,0,1,0-56.6L112.7,44l-6.4-6.3a8.1,8.1,0,0,1,11.4-11.4L144,52.7l34.3-34.4a8.1,8.1,0,0,1,11.4,11.4L155.3,64,192,100.7l34.3-34.4a8.1,8.1,0,0,1,11.4,11.4Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="88"
y1="168"
x2="32"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="144"
y1="64"
x2="184"
y2="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="232"
y1="72"
x2="192"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="224"
y1="144"
x2="112"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="88"
y1="168"
x2="32"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="144"
y1="64"
x2="184"
y2="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="232"
y1="72"
x2="192"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="224"
y1="144"
x2="112"
y2="32"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="88"
y1="168"
x2="32"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="144"
y1="64"
x2="184"
y2="24"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="232"
y1="72"
x2="192"
y2="112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="224"
y1="144"
x2="112"
y2="32"
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
    name: `PhPlug`,
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
