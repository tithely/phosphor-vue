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
d="M184.6,184.6c-41.6,41.5-99.2,38.2-127,33.5a24,24,0,0,1-19.7-19.7c-4.7-27.8-8-85.4,33.5-127s99.2-38.2,127-33.5a24,24,0,0,1,19.7,19.7C222.8,85.4,226.1,143,184.6,184.6Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="160"
y1="96"
x2="96"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="124.7"
y1="102.1"
x2="153.9"
y2="131.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="102.1"
y1="124.7"
x2="131.3"
y2="153.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="148.2"
y1="36.2"
x2="219.8"
y2="107.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="36.2"
y1="148.2"
x2="107.8"
y2="219.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M184.6,184.6c-41.6,41.5-99.2,38.2-127,33.5a24,24,0,0,1-19.7-19.7c-4.7-27.8-8-85.4,33.5-127s99.2-38.2,127-33.5a24,24,0,0,1,19.7,19.7C222.8,85.4,226.1,143,184.6,184.6Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="160"
y1="96"
x2="96"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="124.7"
y1="102.1"
x2="153.9"
y2="131.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="102.1"
y1="124.7"
x2="131.3"
y2="153.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="148.2"
y1="36.2"
x2="219.8"
y2="107.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="36.2"
y1="148.2"
x2="107.8"
y2="219.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M36.2,148.2C39,123,48.2,94.7,71.4,71.4S123,39,148.2,36.2h0l71.6,71.6h0c-2.8,25.2-12,53.5-35.2,76.8S133,217,107.8,219.8Z"
opacity="0.2"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M226,56.3A32.3,32.3,0,0,0,199.7,30c-31.4-5.3-90.4-7.7-133.9,35.8S24.7,168.3,30,199.7A32.3,32.3,0,0,0,56.3,226a206.3,206.3,0,0,0,33.3,2.8c31.1,0,69.8-7.7,100.6-38.6C233.7,146.7,231.3,87.7,226,56.3ZM59,210.2A15.9,15.9,0,0,1,45.8,197a178.7,178.7,0,0,1-2.7-30.6l46.5,46.5A179.5,179.5,0,0,1,59,210.2ZM165.7,101.7l-15.1,15,9,9a8,8,0,0,1,0,11.3,8.3,8.3,0,0,1-5.7,2.3,8,8,0,0,1-5.6-2.3l-9-9L128,139.3l9,9a8,8,0,0,1,0,11.3,7.8,7.8,0,0,1-5.7,2.3,7.6,7.6,0,0,1-5.6-2.3l-9-9-15,15.1a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l15.1-15-9-9A8,8,0,0,1,107.7,119l9,9L128,116.7l-9-9a8,8,0,0,1,11.3-11.3l9,9,15-15.1a8.1,8.1,0,0,1,11.4,11.4Zm.7-58.6A179.5,179.5,0,0,1,197,45.8,15.9,15.9,0,0,1,210.2,59a178.7,178.7,0,0,1,2.7,30.6Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M184.6,184.6c-41.6,41.5-99.2,38.2-127,33.5a24,24,0,0,1-19.7-19.7c-4.7-27.8-8-85.4,33.5-127s99.2-38.2,127-33.5a24,24,0,0,1,19.7,19.7C222.8,85.4,226.1,143,184.6,184.6Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="160"
y1="96"
x2="96"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="124.7"
y1="102.1"
x2="153.9"
y2="131.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="102.1"
y1="124.7"
x2="131.3"
y2="153.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="148.2"
y1="36.2"
x2="219.8"
y2="107.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="36.2"
y1="148.2"
x2="107.8"
y2="219.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M184.6,184.6c-41.6,41.5-99.2,38.2-127,33.5a24,24,0,0,1-19.7-19.7c-4.7-27.8-8-85.4,33.5-127s99.2-38.2,127-33.5a24,24,0,0,1,19.7,19.7C222.8,85.4,226.1,143,184.6,184.6Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="160"
y1="96"
x2="96"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="124.7"
y1="102.1"
x2="153.9"
y2="131.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="102.1"
y1="124.7"
x2="131.3"
y2="153.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="148.2"
y1="36.2"
x2="219.8"
y2="107.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="36.2"
y1="148.2"
x2="107.8"
y2="219.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M184.6,184.6c-41.6,41.5-99.2,38.2-127,33.5a24,24,0,0,1-19.7-19.7c-4.7-27.8-8-85.4,33.5-127s99.2-38.2,127-33.5a24,24,0,0,1,19.7,19.7C222.8,85.4,226.1,143,184.6,184.6Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="160"
y1="96"
x2="96"
y2="160"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="124.7"
y1="102.1"
x2="153.9"
y2="131.3"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="102.1"
y1="124.7"
x2="131.3"
y2="153.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="148.2"
y1="36.2"
x2="219.8"
y2="107.8"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="36.2"
y1="148.2"
x2="107.8"
y2="219.8"
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
    name: `PhFootball`,
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
