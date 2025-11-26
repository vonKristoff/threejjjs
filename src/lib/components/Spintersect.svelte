<script lang="ts">
	import type { Snippet } from 'svelte';
	import global from '$lib/stores/global.svelte';

	interface Props {
		children: Snippet;
		margin?: { top: number; bottom: number; left: number; right: number };
	}
	let { children, margin = { top: 0, bottom: 0, left: 0, right: 0 } }: Props = $props();

	let el: HTMLDivElement;
	let steps = 1000;
	let percent = $state(0);
	let observer = null;

	function intersectPercent(entries) {
		entries.forEach((entry) => {
			percent = entry.intersectionRatio; //Math.round(Math.ceil(entry.intersectionRatio * 100));
			global.setRotation(percent);
		});
	}

	function stepsToThreshold(steps) {
		return [...Array(steps).keys()].map((n) => n / steps);
	}
	$effect(() => {
		const options = {
			rootMargin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
			threshold: stepsToThreshold(steps)
		};
		observer = new IntersectionObserver(intersectPercent, options);
		observer.observe(el);
	});
</script>

<div bind:this={el}>
	{@render children()}
</div>
