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
d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
transform="translate(184 24) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32Z"
transform="translate(304 160) rotate(180)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
transform="translate(24 328) rotate(-90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/><path
d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
transform="translate(24 328) rotate(-90)"
opacity="0.2"/><path
d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
opacity="0.2"/><path
d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
transform="translate(184 24) rotate(90)"
opacity="0.2"/><path
d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
opacity="0.2"/><path
d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
transform="translate(184 24) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32Z"
transform="translate(304 160) rotate(180)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
transform="translate(24 328) rotate(-90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M221.1,128A32,32,0,0,0,200,72a32.2,32.2,0,0,0-16,4.3V56a32,32,0,0,0-56-21.1A32,32,0,0,0,72,56a32.2,32.2,0,0,0,4.3,16H56a32,32,0,0,0-21.1,56A32,32,0,0,0,56,184a32.2,32.2,0,0,0,16-4.3V200a32,32,0,0,0,56,21.1A32,32,0,0,0,184,200a32.2,32.2,0,0,0-4.3-16H200a32,32,0,0,0,21.1-56ZM88,56a16,16,0,0,1,32,0V72H104A16,16,0,0,1,88,56ZM40,104A16,16,0,0,1,56,88h48a16,16,0,0,1,16,16v16H56A16,16,0,0,1,40,104Zm128,96a16,16,0,0,1-32,0V184h16A16,16,0,0,1,168,200Zm32-32H152a16,16,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
transform="translate(184 24) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z"
transform="translate(304 160) rotate(180)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128A24,24,0,0,1,176,104Z"
transform="translate(24 328) rotate(-90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152A24,24,0,0,1,104,128Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/><path
d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
transform="translate(184 24) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56A24,24,0,0,1,152,32Z"
transform="translate(304 160) rotate(180)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
transform="translate(24 328) rotate(-90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/><path
d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M80,56h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80A24,24,0,0,1,80,56Z"
transform="translate(184 24) rotate(90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,80H104A23.9,23.9,0,0,1,80,56h0a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M152,32h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z"
transform="translate(304 160) rotate(180)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,128V104a23.9,23.9,0,0,1,24-24h0a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M176,104h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z"
transform="translate(24 328) rotate(-90)"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M128,176h24a23.9,23.9,0,0,1,24,24h0a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/><path
d="M80,128v24a23.9,23.9,0,0,1-24,24h0a23.9,23.9,0,0,1-24-24h0a23.9,23.9,0,0,1,24-24Z"
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
    name: `PhSlackLogo`,
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
