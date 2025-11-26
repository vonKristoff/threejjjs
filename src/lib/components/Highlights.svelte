<script lang="ts">
	import { highlights } from '$lib/contents.json';
	interface Props {
		ctx: keyof typeof highlights;
	}
	let { ctx }: Props = $props();
	let { title, url, thumb, client, role, tags } = highlights[ctx];
</script>

<div
	class="thumb rounded-2xl shadow-2xl bg-transparent overflow-hidden backdrop-blur-2xl aspect-show relative z-1 p-0"
>
	<div class="frame h-full grid place-content-top text-text-300 backdrop-blur-2xl">
		<img src={`/thumbs/${thumb}.jpg`} alt={title} class="object-cover object-center" />
	</div>
	<aside class="p-4 text-prime-100 flex justify-between flex-col">
		<div class="flex justify-between items-center">
			<div class="flex flex-col">
				<h3 class="text-lg m-0">{title}</h3>
				<span class="text-xs">{role}</span>
			</div>
			<h4 class="text-xs">{client}</h4>
		</div>
		<div class="flex justify-between">
			<a class="self-end" href={url}>visit</a>
			<div class="flex flex-col gap-1">
				{#each tags as tag}
					<span class="pill bg-prime-100 text-text-200 px-2 text-xs rounded-lg">{tag}</span>
				{/each}
			</div>
		</div>
	</aside>
</div>

<style>
	.aspect-show {
		aspect-ratio: 4/3;
	}
	img {
		transition: all 0.3s ease-out;
		height: 100%;
		width: 100%;
	}
	aside {
		height: 60%;
		opacity: 0;
		transition: all 0.4s ease-in;
		transform: translate(0%, -20%);
	}
	.thumb:active,
	.thumb:focus-within,
	.thumb:hover {
		.frame {
			height: 40%;
		}
		img {
			opacity: 0.85;
			object-position: 50% 0%;
			height: 50%;
		}
		aside {
			opacity: 1;
			transform: translate(0%, 0%);
		}
	}
	.frame {
		transition: all 0.3s;
		position: relative;
		overflow: hidden;
		&:before {
			position: absolute;
			content: '';
			width: 100%;
			height: 12vh;
			transform: rotate(40deg);
			backdrop-filter: blur(1em);
			background-color: rgba(255, 255, 255, 0.2572);
			z-index: 1;
			top: -0%;
			left: 50%;
		}
	}
</style>
