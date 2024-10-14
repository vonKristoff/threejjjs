<nav class="fixed min-w-full flex justify-between items-center bg-dark md:bg-transparent py-2">
	<!-- <a href="https://github.com/vonKristoff" aria-label="github profile">
		<div class="_icon fill">
			<svg><use xlink:href="archetypal.svg#logo" /></svg>
		</div>
	</a> -->
	<div></div>
	<p class="_tagline md:text-xl text-sm">
		❤️ Loving story driven content, and new ways to explore data.
	</p>
	<div></div>
	<!-- <a href="https://github.com/vonKristoff" aria-label="github profile">
		<div class="_icon text-lime-300">
			<svg><use xlink:href="github.svg#git" /></svg>
		</div>
	</a> -->
</nav>
<div class="_page grid md:grid-cols-3 md:place-content-center min-h-screen px-16 md:gap-8">
	<div class="flex items-center md:text-2xl pt-16 md:pt-0">
		<p>
			🧠 Having 10+ years senior <span class="text-lime-300">leadership</span> experience,
			practicing
			<span class="text-tomato">Agile</span>
			at the heart of Front-end engineering.
		</p>
	</div>
	<div class="_poster flex flex-col items-center">
		<div><img src="./threejjjs.png" alt="threejjjs" /></div>
		<h1 class="text-center text-white text-6xl font-primary">
			three<span class="text-lime-300">jjj</span>s
		</h1>
		<h2 class="text-center text-white text-2xl font-secondary">Interactive Tech</h2>
	</div>
	<div class="flex items-center md:text-2xl">
		<p>
			📐 Producing cutting edge interfaces; applying strict and
			<span class="text-lime-300">accessible</span> Web standards.
		</p>
	</div>
</div>

<div
	class="_contact grid gap-8 justify-center px-16 mt-[-2em] text-sm md:text-xl text-center md:w-1/2 mx-auto py-16 pt-4 md:pt-0"
>
	<!-- <p>
		🔮 Now <span class="text-lime-300">building bridges</span> into the
		<span class="text-tomato">Blockchain</span>
		space where immutability, proof, and local-first ownership of personal data is all part of the journey
		towards a
		<span class="text-lime-300">decentralised</span> world...
	</p> -->
	<p>
		🔮 Now <span class="text-lime-300">building bridges</span> with immutability, proof, and
		local-first ownership of personal data; all driving towards a
		<span class="text-lime-300">decentralised</span> world...
	</p>
</div>

<div
	class="_experience grid md:grid-cols-3 my-8 md:my-0 justify-center md:mt-16 px-16 pb-4 pt-12 md:pt-16 text-base border-t-[1px] border-tomato border-dashed md:border-none"
>
	<div class="col"></div>
	<div class="col">
		<div class="grid md:grid-cols-3">
			<div class="col">
				<h4 class="text-tomato">Enterprise</h4>
				<ul class="my-4 md:my-8 text-gray-400">
					<li>Vodafone</li>
					<li>MSQ Partners</li>
					<li>MMT Digital</li>
				</ul>
			</div>
			<div class="col">
				<h4 class="text-lime-300">Creative</h4>
				<ul class="my-4 md:my-8 text-gray-400">
					<li>ScanLAB Projects</li>
					<li>Mail Rail Museum</li>
					<li>Sir John Soanes Museum</li>
				</ul>
			</div>
			<h4 class="">Currently with Samaeopus Ltd.</h4>
		</div>
	</div>
	<div class="col"></div>
</div>
<footer
	class="w-screen grid md:grid-cols-3 border-t-[1px] border-tomato p-8 border-dashed text-xs text-primary"
>
	<div class="col"></div>
	<div class="col text-sm flex flex-col gap-2">
		<div class="_block">
			🧨 <span class="text-gray-400">Contact:</span> <span class="text-lime-300">0xjceee</span> @
			<span class="text-gray-400">proton.me</span>
		</div>
		<div class="_block text-gray-400">
			📍 <span>Find:</span>
			<span class="text-lime-300">Printclub London</span> Unit 3, 10-28 Millers Ave. London, E8 2DS
		</div>
	</div>
	<div class="col"></div>
</footer>

<style>
	h2 {
		color: tomato;
	}
	._icon {
		padding: 1em;
	}
	._icon svg {
		width: 2em;
		height: 2em;
	}
	.fill {
		color: rgb(190 242 100);
		fill: rgb(190 242 100);
	}
	._tagline {
		animation: shrink linear both;
		animation-duration: 7s;
		animation-timeline: scroll();
		animation-range: 100px 50%;
		opacity: 1;
	}
	._contact {
		transform: scale(1);
		animation: fade linear both;
		animation-timeline: view();
		animation-range: -100px 30%;
	}
	@keyframes shrink {
		from {
			transform: scale(1);
			opacity: 1;
		}
		to {
			opacity: 0;
			transform: scale(0.8);
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
			transform: translateY(-2em) scale(1);
		}
		to {
			opacity: 1;
			transform: translateY(2em) scale(1.2);
		}
	}
</style>
