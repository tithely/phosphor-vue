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
d="M24,184V161.1C24,103.6,70.2,56.2,127.6,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="128"
y1="56"
x2="128"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="27.5"
y1="133.1"
x2="58.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="228.5"
y1="133.1"
x2="197.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="103.4"
y1="192"
x2="171.8"
y2="102.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M24,184V161.1C24,103.6,70.2,56.2,127.6,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
opacity="0.2"/><path
d="M24,184V161.1C24,103.6,70.2,56.2,127.6,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="56"
x2="128"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="27.5"
y1="133.1"
x2="58.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="228.5"
y1="133.1"
x2="197.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="103.4"
y1="192"
x2="171.8"
y2="102.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M240,160v24a16,16,0,0,1-16,16H115.5a4,4,0,0,1-3.2-6.4L178,108a8.2,8.2,0,0,0-1.1-11.3A7.9,7.9,0,0,0,165.5,98L88.4,198.4a3.8,3.8,0,0,1-3.1,1.6H32a16,16,0,0,1-16-16V161.1a116.1,116.1,0,0,1,2.2-22.2L40.9,145l2.1.2a8,8,0,0,0,7.8-6.2,8.1,8.1,0,0,0-6-9.6l-22.4-6C37,82,74.9,51.5,120,48.3V71.7a8.2,8.2,0,0,0,7.5,8.3,8,8,0,0,0,8.5-8V48.3a111.5,111.5,0,0,1,71.1,32.4,112.7,112.7,0,0,1,26.8,42.6l-22.7,6.1a8.1,8.1,0,0,0-6,9.6,8,8,0,0,0,7.8,6.2l2.1-.2,22.9-6.2A114.5,114.5,0,0,1,240,160Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M24,184V161.1C24,103.6,70.2,56.2,127.6,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="128"
y1="56"
x2="128"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="27.5"
y1="133.1"
x2="58.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="228.5"
y1="133.1"
x2="197.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="103.4"
y1="192"
x2="171.8"
y2="102.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M24,184V161.1C24,103.6,70.2,56.2,127.6,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="128"
y1="56"
x2="128"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="27.5"
y1="133.1"
x2="58.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="228.5"
y1="133.1"
x2="197.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="103.4"
y1="192"
x2="171.8"
y2="102.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M24,184V161.1C24,103.6,70.2,56.2,127.6,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="56"
x2="128"
y2="88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="27.5"
y1="133.1"
x2="58.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="228.5"
y1="133.1"
x2="197.5"
y2="141.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="103.4"
y1="192"
x2="171.8"
y2="102.9"
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
    name: `PhGauge`,
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
