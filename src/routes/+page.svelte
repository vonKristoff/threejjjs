<script>
  import Navigator from "$lib/components/header/Navigator.svelte";
  // import hero from "$lib/assets/threejjjs.jpg";
  import Highlights from "$lib/components/Highlights.svelte";
  import Intersect from "$lib/components/Intersect.svelte";
  import Spintersect from "$lib/components/Spintersect.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import global from "$lib/stores/global.svelte";
</script>

<!-- style={`background-image:url(${hero})`} -->
<Navigator />
<main class="content-grid">
  <Intersect bg="dark" layout="full-width">
    <section class="grid place-content-center h-dvh bg-prime-200">
      <div class="hero bg-cover bg-prime-200 bg-blend-lighten max-w-full"></div>
      <h1
        class="text-center text-text-200 text-6xl md:text-8xl font-primary m-0"
      >
        three<span class="text-accent-200">jjj</span>s
        <br />
      </h1>
      <span class="px-0 text-lg md:text-xl">INTERACTIVE TECH</span>
    </section>
  </Intersect>

  <Intersect bg="light" layout="full-width">
    <section class="">
      <article class="overflow-hidden px-8 py-32 pt-16">
        <h3
          class="relative z-1 text-text-300 text-left text-4xl md:text-6xl gradient-text text-shadow-2xs"
        >
          🚀 Featured works.
        </h3>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 mt-16"
        >
          <div class="flex flex-col gap-8 lg:gap-12 xl:gap-16 relative z-1">
            <Highlights ctx="motmac" />
            <Highlights ctx="corin" />
          </div>
          <Spintersect>
            <div
              style={`--skew: ${global.skew};`}
              class="flex flex-col gap-8 lg:gap-12 xl:gap-16 middle relative"
            >
              <Highlights ctx="scanlab" />
              <Highlights ctx="soane" />
            </div>
          </Spintersect>
          <div class="flex flex-col gap-8 lg:gap-12 xl:gap-16 relative z-1">
            <Highlights ctx="wawb" />
            <Highlights ctx="archetypal" />
          </div>
        </div>
      </article>
    </section>
  </Intersect>
  <section class="full-width bg-prime-200 py-16">
    <div
      class="grid grid-cols-1 md:grid-cols-3 px-8 gap-x-8 py-16 gap-y-16 md:gap-y-0"
    >
      <div
        class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center"
      >
        <h2 class="">Producing</h2>
        <p class="tagline">📐 Cutting edge User Interfaces</p>
      </div>
      <div
        class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center"
      >
        <h2 class="">Applying</h2>
        <p class="tagline">Strict and Accessible Web standards ✨</p>
      </div>
      <div
        class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center"
      >
        <h2 class="">Practicing</h2>
        <p class="tagline">Agile at the ❤️ of Engineering</p>
      </div>
    </div>
  </section>
  <section
    class="relative overflow-hidden full-width content-grid py-32 *:text-prime-100 text-xl md:text-2xl"
  >
    <div
      class="relative content-grid mx-auto flex gap-y-16 flex-col px-8 rounded-2xl"
    >
      <div class="flex flex-col gap-4">
        <span
          class="text-prime-200 text-4xl font-bold font-primary gradient-text text-shadow-2xs"
          >Let's keep talking...</span
        >
        <p class="message">
          A <strong>keep-it-simple-studio</strong>, open to
          <strong>collaborate</strong>
          with
          <span class="bg-pop-200">product & design</span> and deliver
          satisfying interactions on the
          <strong>web</strong>, from CMS driven store fronts to payment rails.
        </p>
      </div>
      <p class="breakout italic bg-pop-100 p-8 rounded-lg">
        Together, let's make digital (<strong>story driven</strong> and brilliant).
      </p>
      <div class="flex flex-col gap-4">
        <span
          class="text-prime-200 text-4xl font-bold font-primary gradient-text text-shadow-2xs"
          >What's in the bag?</span
        >
        <p class="message">
          With <strong>10+</strong> years of
          <span class="bg-pop-200">development</span>
          experience, including deployment cycles and
          <strong>team leadership</strong>. Agile all the way home.
        </p>
      </div>
    </div>
  </section>
</main>
<Footer />

<style>
  .hero {
    max-width: calc(100vw - 4em);
    max-height: 50dvh;
    aspect-ratio: 1/1;
    width: 50dvh;
    background-image: url("/threejjjs.webp");
  }
  .middle:before {
    content: "";
    position: absolute;
    height: 200%;
    width: 200%;
    background-color: var(--color-wash-200);
    z-index: 0;
    transform: skewX(var(--skew)) translate(-25%, -25%);
  }
  .tagline {
    color: var(--color-neutral-300);
  }
  .message {
    line-height: 1.5em;
    padding-left: 1em;
    border-left: 0.25em solid #d95b5b;
  }
  @media (max-width: 768px) {
    .hero {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .middle:before {
      height: 0;
      width: 0;
    }
  }
  .gradient-text {
    position: relative;
    display: inline-block;
    color: inherit; /* Base text color */
    background: linear-gradient(
      to right,
      currentColor 50%,
      currentColor 0%,
      #ff6b6b 50%,
      #ff6b6b 60%,
      #4ecdc4 60%,
      #4ecdc4 70%,
      #45b7d1 70%,
      #45b7d1 80%,
      #96ceb4 80%,
      #96ceb4 90%,
      #ffeaa7 90%,
      #ffeaa7 100%
    );
    background-size: 200% 100%;
    background-position: 100% 0%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background-position 0.3s ease;
  }
</style>
