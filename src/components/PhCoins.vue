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
            <g v-if="displayWeight === 'bold'"><ellipse
cx="96"
cy="84"
rx="80"
ry="36"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M16,84v40c0,19.9,35.8,36,80,36s80-16.1,80-36V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="64"
y1="117"
x2="64"
y2="157"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M176,96.7c36.5,3.4,64,17.9,64,35.3,0,19.9-35.8,36-80,36-19.6,0-37.6-3.2-51.5-8.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M80,159.3V172c0,19.9,35.8,36,80,36s80-16.1,80-36V132"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="192"
y1="165"
x2="192"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><line
x1="128"
y1="117"
x2="128"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><ellipse
cx="96"
cy="84"
rx="80"
ry="36"
opacity="0.2"/><path
d="M176,96.7c36.5,3.4,64,17.9,64,35.3,0,19.9-35.8,36-80,36-19.6,0-37.6-3.2-51.5-8.4h0C146.8,156.9,176,142,176,124Z"
opacity="0.2"/><ellipse
cx="96"
cy="84"
rx="80"
ry="36"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M16,84v40c0,19.9,35.8,36,80,36s80-16.1,80-36V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="117"
x2="64"
y2="157"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,96.7c36.5,3.4,64,17.9,64,35.3,0,19.9-35.8,36-80,36-19.6,0-37.6-3.2-51.5-8.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M80,159.3V172c0,19.9,35.8,36,80,36s80-16.1,80-36V132"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="192"
y1="165"
x2="192"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="117"
x2="128"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M184,89.6V84c0-25.1-37.8-44-88-44S8,58.9,8,84v40c0,20.9,26.2,37.5,64,42.5V172c0,25.1,37.8,44,88,44s88-18.9,88-44V132C248,111.3,222.6,94.7,184,89.6ZM72,150.2V126.5A184,184,0,0,0,96,128a184,184,0,0,0,24-1.5v23.7A151.1,151.1,0,0,1,96,152,151.1,151.1,0,0,1,72,150.2Zm96-40.3V124c0,8.4-12.4,17.4-32,22.9V123.5C148.9,120.4,159.8,115.7,168,109.9ZM24,124V109.9c8.2,5.8,19.1,10.5,32,13.6v23.4C36.4,141.4,24,132.4,24,124Zm64,48v-4.2l8,.2q5.9,0,11.4-.3c4,1.4,8.2,2.6,12.6,3.7v23.5C100.4,189.4,88,180.4,88,172Zm48,26.2V174.4a188.4,188.4,0,0,0,24,1.6,184,184,0,0,0,24-1.5v23.7a160.9,160.9,0,0,1-48,0Zm64-3.3V171.5c12.9-3.1,23.8-7.8,32-13.6V172C232,180.4,219.6,189.4,200,194.9Z"/></g>
            <g v-else-if="displayWeight === 'light'"><ellipse
cx="96"
cy="84"
rx="80"
ry="36"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M16,84v40c0,19.9,35.8,36,80,36s80-16.1,80-36V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="64"
y1="117"
x2="64"
y2="157"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M176,96.7c36.5,3.4,64,17.9,64,35.3,0,19.9-35.8,36-80,36-19.6,0-37.6-3.2-51.5-8.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M80,159.3V172c0,19.9,35.8,36,80,36s80-16.1,80-36V132"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="192"
y1="165"
x2="192"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><line
x1="128"
y1="117"
x2="128"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><ellipse
cx="96"
cy="84"
rx="80"
ry="36"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M16,84v40c0,19.9,35.8,36,80,36s80-16.1,80-36V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="64"
y1="117"
x2="64"
y2="157"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M176,96.7c36.5,3.4,64,17.9,64,35.3,0,19.9-35.8,36-80,36-19.6,0-37.6-3.2-51.5-8.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M80,159.3V172c0,19.9,35.8,36,80,36s80-16.1,80-36V132"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="192"
y1="165"
x2="192"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><line
x1="128"
y1="117"
x2="128"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><ellipse
cx="96"
cy="84"
rx="80"
ry="36"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M16,84v40c0,19.9,35.8,36,80,36s80-16.1,80-36V84"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="64"
y1="117"
x2="64"
y2="157"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,96.7c36.5,3.4,64,17.9,64,35.3,0,19.9-35.8,36-80,36-19.6,0-37.6-3.2-51.5-8.4"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M80,159.3V172c0,19.9,35.8,36,80,36s80-16.1,80-36V132"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="192"
y1="165"
x2="192"
y2="205"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><line
x1="128"
y1="117"
x2="128"
y2="205"
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
    name: `PhCoins`,
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
