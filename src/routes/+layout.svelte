<script>
	import '../style.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<style>
		:root {
			--html-bg: #15130e;
		}
	</style>
</svelte:head>

<main id="home">
	{@render children()}
</main>
