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
d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="79.7"
y1="56.7"
x2="75.5"
y2="33.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="48.7"
y1="76.5"
x2="29"
y2="62.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="40.7"
y1="112.3"
x2="17.1"
y2="116.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="115.5"
y1="64.7"
x2="129.3"
y2="45"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M51.6,135.4a49.1,49.1,0,0,1-10.9-23.1,48,48,0,0,1,91.1-27.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M131.8,84.4a48,48,0,0,0-91.1,27.9,49.1,49.1,0,0,0,10.9,23.1h0A43.6,43.6,0,0,1,76,128a42.5,42.5,0,0,1,14.3,2.4h0a68.3,68.3,0,0,1,41.5-46Z"
opacity="0.2"/><path
d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="79.7"
y1="56.7"
x2="75.5"
y2="33.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="48.7"
y1="76.5"
x2="29"
y2="62.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="40.7"
y1="112.3"
x2="17.1"
y2="116.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="115.5"
y1="64.7"
x2="129.3"
y2="45"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M51.6,135.4a49.1,49.1,0,0,1-10.9-23.1,48,48,0,0,1,91.1-27.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M156,72a78.8,78.8,0,0,0-20.2,2.7,58.9,58.9,0,0,0-9.4-11.5l9.4-13.6a7.9,7.9,0,0,0-1.9-11.1,8,8,0,0,0-11.2,1.9L113.2,54a55,55,0,0,0-26.9-6L83.4,31.7a8,8,0,1,0-15.8,2.8l2.9,16.3A55.7,55.7,0,0,0,47.2,65.6L33.6,56.1a8,8,0,0,0-11.1,2,7.9,7.9,0,0,0,1.9,11.1L38,78.7a55.1,55.1,0,0,0-6,27l-16.3,2.9a8,8,0,0,0,1.4,15.9h1.4l16.3-2.9a52.3,52.3,0,0,0,5.9,12.4A51.9,51.9,0,0,0,76,224h80a76,76,0,0,0,0-152ZM48.6,111.1v-.4a39.6,39.6,0,0,1,6.5-29.5V81h.1A40.1,40.1,0,0,1,80.8,64.6h.5a39.5,39.5,0,0,1,29.1,6.3l.5.3.4.3a37.4,37.4,0,0,1,9.3,9.3,76.6,76.6,0,0,0-35.6,40,53.8,53.8,0,0,0-9-.8,52.6,52.6,0,0,0-22.1,4.9A40,40,0,0,1,48.6,111.1Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="79.7"
y1="56.7"
x2="75.5"
y2="33.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="48.7"
y1="76.5"
x2="29"
y2="62.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="40.7"
y1="112.3"
x2="17.1"
y2="116.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="115.5"
y1="64.7"
x2="129.3"
y2="45"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M51.6,135.4a49.1,49.1,0,0,1-10.9-23.1,48,48,0,0,1,91.1-27.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="79.7"
y1="56.7"
x2="75.5"
y2="33.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="48.7"
y1="76.5"
x2="29"
y2="62.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="40.7"
y1="112.3"
x2="17.1"
y2="116.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="115.5"
y1="64.7"
x2="129.3"
y2="45"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M51.6,135.4a49.1,49.1,0,0,1-10.9-23.1,48,48,0,0,1,91.1-27.9"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M88,148a68,68,0,1,1,68,68H76a44,44,0,0,1,0-88,42.5,42.5,0,0,1,14.3,2.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="79.7"
y1="56.7"
x2="75.5"
y2="33.1"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="48.7"
y1="76.5"
x2="29"
y2="62.7"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="40.7"
y1="112.3"
x2="17.1"
y2="116.5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="115.5"
y1="64.7"
x2="129.3"
y2="45"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M51.6,135.4a49.1,49.1,0,0,1-10.9-23.1,48,48,0,0,1,91.1-27.9"
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
    name: `PhCloudSun`,
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
