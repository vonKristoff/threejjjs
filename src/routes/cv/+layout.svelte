<script>
	let { children } = $props();
</script>

<section class="grid place-content-center my-24">
	<article class="prose">
		{@render children()}
	</article>
</section>

<style>
	:global(:root) {
		--html-bg: white !important;
	}
</style>
