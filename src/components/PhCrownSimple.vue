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
d="M45.1,196a8.1,8.1,0,0,0,10,5.9,273,273,0,0,1,145.7,0,8.1,8.1,0,0,0,10-5.9L236.3,87.7a8,8,0,0,0-11-9.2L174.7,101a8.1,8.1,0,0,1-10.3-3.4L135,44.6a8,8,0,0,0-14,0l-29.4,53A8.1,8.1,0,0,1,81.3,101L30.7,78.5a8,8,0,0,0-11,9.2Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="24"/></g>
            <g v-else-if="displayWeight === 'duotone'"><path
d="M45.1,196a8.1,8.1,0,0,0,10,5.9,273,273,0,0,1,145.7,0,8.1,8.1,0,0,0,10-5.9L236.3,87.7a8,8,0,0,0-11-9.2L174.7,101a8.1,8.1,0,0,1-10.3-3.4L135,44.6a8,8,0,0,0-14,0l-29.4,53A8.1,8.1,0,0,1,81.3,101L30.7,78.5a8,8,0,0,0-11,9.2Z"
opacity="0.2"/><path
d="M45.1,196a8.1,8.1,0,0,0,10,5.9,273,273,0,0,1,145.7,0,8.1,8.1,0,0,0,10-5.9L236.3,87.7a8,8,0,0,0-11-9.2L174.7,101a8.1,8.1,0,0,1-10.3-3.4L135,44.6a8,8,0,0,0-14,0l-29.4,53A8.1,8.1,0,0,1,81.3,101L30.7,78.5a8,8,0,0,0-11,9.2Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="16"/></g>
            <g v-else-if="displayWeight === 'fill'"><path d="M238.7,73.5A15.9,15.9,0,0,0,222,71.2L171.4,93.7,142,40.7a16.1,16.1,0,0,0-28,0l-29.4,53L34,71.2A16,16,0,0,0,11.9,89.5L37.3,197.8a15.9,15.9,0,0,0,7.4,10.1,16.2,16.2,0,0,0,8.3,2.3,15.2,15.2,0,0,0,4.2-.6,265.5,265.5,0,0,1,141.5,0,16.5,16.5,0,0,0,12.5-1.7,15.6,15.6,0,0,0,7.4-10.1L244.1,89.5A16,16,0,0,0,238.7,73.5Z"/></g>
            <g v-else-if="displayWeight === 'light'"><path
d="M45.1,196a8.1,8.1,0,0,0,10,5.9,273,273,0,0,1,145.7,0,8.1,8.1,0,0,0,10-5.9L236.3,87.7a8,8,0,0,0-11-9.2L174.7,101a8.1,8.1,0,0,1-10.3-3.4L135,44.6a8,8,0,0,0-14,0l-29.4,53A8.1,8.1,0,0,1,81.3,101L30.7,78.5a8,8,0,0,0-11,9.2Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="12"/></g>
            <g v-else-if="displayWeight === 'thin'"><path
d="M45.1,196a8.1,8.1,0,0,0,10,5.9,273,273,0,0,1,145.7,0,8.1,8.1,0,0,0,10-5.9L236.3,87.7a8,8,0,0,0-11-9.2L174.7,101a8.1,8.1,0,0,1-10.3-3.4L135,44.6a8,8,0,0,0-14,0l-29.4,53A8.1,8.1,0,0,1,81.3,101L30.7,78.5a8,8,0,0,0-11,9.2Z"
fill="none"
:stroke="displayColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="8"/></g>
            <g v-else-if="displayWeight === 'regular'"><path
d="M45.1,196a8.1,8.1,0,0,0,10,5.9,273,273,0,0,1,145.7,0,8.1,8.1,0,0,0,10-5.9L236.3,87.7a8,8,0,0,0-11-9.2L174.7,101a8.1,8.1,0,0,1-10.3-3.4L135,44.6a8,8,0,0,0-14,0l-29.4,53A8.1,8.1,0,0,1,81.3,101L30.7,78.5a8,8,0,0,0-11,9.2Z"
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
    name: `PhCrownSimple`,
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
