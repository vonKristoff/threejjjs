<script>
  let { children } = $props();
</script>

<section id="cv" class="grid place-content-center my-24 px-4">
  <article class="prose w-full">
    {@render children()}
  </article>
</section>
