<script lang="ts">
	import Icon from '../Icon.svelte';
	let { modalRef = $bindable() } = $props();
</script>

<dialog bind:this={modalRef} class="shadow-xl rounded-2xl fixed">
	<div class="modal">
		<div class="flex justify-end">
			<button onclick={() => modalRef.close()} class="p-2 text-3xl">
				<Icon ctx="x" />
			</button>
		</div>
		<h2 class="text-6xl text-center">Hello 🤙</h2>
		<nav class="grid place-content-center font-secondary gap-y-4">
			<div class="flex gap-4 items-center text-3xl">
				<Icon ctx="mail" />
				<a class="link" href="mailto:0xjceee@proton.me">
					<span>Email</span>
				</a>
			</div>
			<div class="flex gap-4 items-center text-3xl">
				<Icon ctx="github" />
				<a class="link" href="https://github.com/vonKristoff" target="_blank">
					<span>Github</span>
				</a>
			</div>
			<div class="flex gap-4 items-center text-3xl">
				<Icon ctx="file-text" />
				<a class="link" href="/cv">
					<span>CV</span>
				</a>
			</div>
		</nav>
		<div class="flex justify-center"></div>
		<div class="flex flex-col text-right text-prime-300 text-sm self-end">
			<h1 class="text-center text-prime-300 text-6xl md:text-8xl font-primary m-0">
				three<span class="text-lime-500">jjj</span>s
				<br />
			</h1>
			<span
				>&copy; {new Date().getFullYear()}
				<span class="text-lime-500">threejjjs interactive tech</span>. All rights reserved.</span
			>
		</div>
	</div>
</dialog>

<style>
	a:hover,
	a:focus {
		color: black;
	}
	dialog {
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		opacity: 1;
		width: 90vw;
		height: 90dvh;
		transition: all 0.4s allow-discrete;
		background-color: var(--color-accent-100);
		backdrop-filter: blur(1em);
	}
	@starting-style {
		dialog[open] {
			opacity: 0;
			transform: translate(-50%, -25%);
		}
	}
	dialog:not([open]) {
		opacity: 0;
		transform: translate(-50%, -150%);
	}

	nav {
		height: inherit;
	}
	.modal {
		padding: 2em;
		height: inherit;
	}

	.modal {
		gap: 16px;
		display: flex;
		flex-direction: column;
	}

	dialog::backdrop {
		background-color: #5b786d93;
		backdrop-filter: blur(0.5em);
	}
</style>
