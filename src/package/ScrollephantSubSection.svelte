<script lang="ts">
    import { onMount, getContext } from "svelte"
    import { type Writable, get } from "svelte/store"
    import type { Sections, SubSection, SubSections } from "./types.js"

    export let label = ""
    export let autoHeight = false

    const sections: Writable<Sections> = getContext("sections")
    const activeSectionNumber: Writable<number> = getContext(
        "activeSectionNumber"
    )
    const subSections: Writable<SubSections> = getContext("subSections")

    let element: HTMLElement
    let id: number

    onMount(() => {
        subSections.update(currentValue => {
            id = Number(
                `${get(sections).length + 1}.${$subSections.length + 1}`
            )
            const newSubSection: SubSection = {
                id,
                ref: element,
                label,
                autoHeight,
            }
            return [...currentValue, newSubSection]
        })
    })
</script>

<div
    class="scrollephant-subsection"
    data-scrollephant-current={$activeSectionNumber === id}
    data-scrollephant-id={id}
    bind:this={element}
>
    <slot />
</div>

<style>
    .scrollephant-subsection {
        height: 100%;
        width: 100%;
        /* Prevent width shrinks. Inforce full view size. */
        flex-shrink: 0;
    }
</style>
