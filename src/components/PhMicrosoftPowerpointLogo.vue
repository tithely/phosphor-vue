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
x1="160"
y1="128"
x2="232"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><rect
x="32"
y="68"
width="128"
height="120"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M82,136H98a16,16,0,0,0,0-32H82v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M61.1,68a96,96,0,1,1,0,120"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><rect
x="32"
y="72"
width="120"
height="112"
rx="8"
opacity="0.2"/><line
x1="136"
y1="184"
x2="136"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="136"
y1="32"
x2="136"
y2="72"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="152"
y1="128"
x2="232"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="32"
y="72"
width="120"
height="112"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M78,136H94a16,16,0,0,0,0-32H78v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M58,72a96,96,0,1,1,0,112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M102,120a8,8,0,0,0-8-8H86v16h8A8,8,0,0,0,102,120Z"/><path d="M136,24A104.5,104.5,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24ZM70,152V104a8,8,0,0,1,8-8H94a24,24,0,0,1,0,48H86v8a8,8,0,0,1-16,0Zm58,63.6A88.7,88.7,0,0,1,75.6,192H128ZM128,64H75.6A88.7,88.7,0,0,1,128,40.4Zm16-23.6A88,88,0,0,1,223.6,120H160V80a16,16,0,0,0-16-16Zm0,175.2V192a16,16,0,0,0,16-16V136h63.6A88,88,0,0,1,144,215.6Z"/></g>
            <g v-else-if="displayWeight === 'light'"><line
x1="136"
y1="184"
x2="136"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="136"
y1="32"
x2="136"
y2="72"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="152"
y1="128"
x2="232"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><rect
x="32"
y="72"
width="120"
height="112"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M78,136H94a16,16,0,0,0,0-32H78v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M58,72a96,96,0,1,1,0,112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><line
x1="136"
y1="184"
x2="136"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="136"
y1="32"
x2="136"
y2="72"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="152"
y1="128"
x2="232"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><rect
x="32"
y="72"
width="120"
height="112"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M78,136H94a16,16,0,0,0,0-32H78v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M58,72a96,96,0,1,1,0,112"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><line
x1="136"
y1="184"
x2="136"
y2="224"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="136"
y1="32"
x2="136"
y2="72"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="152"
y1="128"
x2="232"
y2="128"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><rect
x="32"
y="72"
width="120"
height="112"
rx="8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M78,136H94a16,16,0,0,0,0-32H78v48"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M58,72a96,96,0,1,1,0,112"
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
    name: `PhMicrosoftPowerpointLogo`,
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
