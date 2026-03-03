<script>
  let { children } = $props();
  
  function theme(node) {
    node.setAttribute('data-theme', 'light');
    return {
      destroy() {
        node.removeAttribute('data-theme');
      }
    };
  }

</script>

<svelte:body use:theme />


<section id="cv" class="grid place-content-center my-24 px-4">
  <article class="prose w-full">
    {@render children()}
  </article>
</section>
