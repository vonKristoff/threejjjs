<script>
	let { children } = $props();
</script>

<svelte:head>
	<style>
		:root {
			--html-bg: white;
		}
	</style>
</svelte:head>
<section id="cv" class="grid place-content-center my-24 px-4">
	<article class="prose">
		{@render children()}
	</article>
</section>

<!-- <style>
	:global(html:has(section#cv)) {
		--html-bg: white;
	}
</style> -->
