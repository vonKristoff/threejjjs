<script lang="ts">
  import Icon from "../Icon.svelte";
  import global from "$lib/stores/global.svelte";
  import Dialog from "./Dialog.svelte";
  let modal = $state<HTMLDialogElement>();
</script>

<header
  class="flex fixed top-0 w-full p-8 text-2xl md:text-4xl backdrop-blur-2xl z-10"
  class:lighten={global.ambience === "lighten"}
  class:darken={global.ambience === "darken"}
>
  <aside class="shrink-0 text-md">
    <button
      class="overflow-hidden"
      class:active={global.sidebar}
      onclick={() => global.toggleSidebar()}
    >
      <Icon ctx="cpu" size="1" />
      <Icon ctx="x" size="1" />
    </button>
  </aside>
  <nav class="grow">
    <div class="flex justify-center px-2 md:px-0">
      REMAIN CURIOUS | ZIG WHEN THEY ZAG
    </div>
  </nav>
  <aside class="shrink-0">
    <button onclick={() => modal?.showModal()}><Icon ctx="menu"></Icon></button>
  </aside>
</header>
<Dialog bind:modalRef={modal} />

<style>
  header {
    transition: color 0.3s;
  }
  .lighten {
    color: var(--color-text-200);
  }
  .darken {
    color: var(--color-text-300);
  }
  button {
    position: relative;
    overflow: hidden;
    display: inline-flex;
  }

  button :global(svg) {
    transition: transform 0.3s ease;
  }

  /* Default state - cpu visible, x hidden to the right */
  button :global(svg:first-child) {
    transform: translateX(0);
  }

  button :global(svg:last-child) {
    transform: translateX(100%);
    position: absolute;
    left: 0;
  }

  /* Active state - cpu slides left out, x slides in */
  button.active :global(svg:first-child) {
    transform: translateX(-100%);
  }

  button.active :global(svg:last-child) {
    transform: translateX(0);
  }
</style>
