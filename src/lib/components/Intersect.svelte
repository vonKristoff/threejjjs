<script lang="ts">
	import type { Snippet } from 'svelte';
	import global from '$lib/stores/global.svelte';

	interface Props {
		children: Snippet;
		layout?: 'full-width' | 'breakout';
		bg: 'dark' | 'light';
		margin?: { top: number; bottom: string; left: number; right: number };
		onPercent?: (p: number) => void;
	}
	let {
		children,
		layout,
		bg,
		margin = { top: 0, bottom: '-99%', left: 0, right: 0 },
		onPercent
	}: Props = $props();

	let el: HTMLDivElement;
	let steps = 100;
	let percent = $state(0);
	let observer = null;

	function intersectPercent(entries) {
		entries.forEach((entry) => {
			percent = entry.intersectionRatio; //Math.round(Math.ceil(entry.intersectionRatio * 100));
			if (entry.isIntersecting) global.setAmbience(bg);
			// if (bg == 'dark') console.log(entry);
			// if (!!percent) console.log(bg);
			// onPercent(percent);
		});
	}

	function stepsToThreshold(steps) {
		return [...Array(steps).keys()].map((n) => n / 100);
	}
	$effect(() => {
		const options = {
			rootMargin: `${margin.top}px ${margin.right}px ${margin.bottom} ${margin.left}px`,
			threshold: stepsToThreshold(steps)
		};
		observer = new IntersectionObserver(intersectPercent, options);
		observer.observe(el);
	});
</script>

<div bind:this={el} class={layout}>
	{@render children()}
</div>
