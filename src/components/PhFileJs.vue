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
points="148 36 148 100 212 100"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M180,220h24a8,8,0,0,0,8-8V92L156,36H52a8,8,0,0,0-8,8v80"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M108,214.4a23.7,23.7,0,0,0,15,5.6c9,0,17-3.4,17-14.6,0-17.9-32-10-32-26.8,0-9,6-14.6,15-14.6a23.7,23.7,0,0,1,15,5.6"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M68,164v36a20,20,0,0,1-40,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M72,168v32a16,16,0,0,1-32,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M104,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><polygon
points="152 32 152 88 208 88 152 32"
opacity="0.2"/><polyline
points="152 32 152 88 208 88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M144,204c0,13.1-9.3,21-25,21a33.4,33.4,0,0,1-20.1-6.8h0A7.6,7.6,0,0,1,96,212a8,8,0,0,1,8-8,8.3,8.3,0,0,1,5.1,1.8H109a18.4,18.4,0,0,0,10,3.2c9,0,9-3,9-5s0-.9-1.2-1.6-5.8-2.2-9.2-3.1C109,197,96,193.5,96,180s9.5-21,23-21a33.4,33.4,0,0,1,20.1,6.8h0A7.6,7.6,0,0,1,142,172a8,8,0,0,1-8,8,8.3,8.3,0,0,1-5.1-1.8h.1a18.4,18.4,0,0,0-10-3.2c-4.6,0-7,1.7-7,5v.2c1.1,1.3,6.6,2.8,9.7,3.6C130,186,144,189.7,144,204ZM72,160a8,8,0,0,0-8,8v32a8,8,0,0,1-16,0,8,8,0,0,0-16,0,24,24,0,0,0,48,0V168A8,8,0,0,0,72,160ZM216,88V216a16,16,0,0,1-16,16H176a8,8,0,0,1-8-8V144a8,8,0,0,0-8-8H48a8,8,0,0,1-8-8V40A16,16,0,0,1,56,24h96a8.1,8.1,0,0,1,5.7,2.3l56,56A8.1,8.1,0,0,1,216,88Zm-20,0L152,44V88Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M72,168v32a16,16,0,0,1-32,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M104,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
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
d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M72,168v32a16,16,0,0,1-32,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M104,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
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
d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V144"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M72,168v32a16,16,0,0,1-32,0"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M104,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
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
    name: `PhFileJs`,
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
