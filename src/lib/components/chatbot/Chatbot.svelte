<script lang="ts">
  import { store } from "./ChatStore.svelte.ts";
  import ChatMessage from "./ChatMessage.svelte";
  import Icon from "../Icon.svelte";
  import ChatInput from "./ChatInput.svelte";
  import type { ChatbotProps } from "./types.js";

  let { title = "Assistant", placeholder = "Type a message..." }: ChatbotProps =
    $props();

  let scrollContainer: HTMLDivElement | undefined = $state();

  function scrollToBottom() {
    if (!scrollContainer) return;
    scrollContainer.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: "smooth",
    });
  }
</script>

<div
  class="flex h-[70dvh] w-auto flex-col overflow-hidden rounded-2xl border border-gray-200 bg-pop-100 shadow-lg m-8"
>
  <!-- Header -->
  <div
    class="flex items-center gap-3 border-b border-gray-200 bg-pop-100 px-5 py-4"
  >
    <div
      class="relative flex text-6xl items-center justify-center rounded-full bg-blue-600 leading-none text-white shadow-sm select-none"
    >
      🥘
      {#if store.chilliInHeader}
        <span
          style="view-transition-name: chilli-pepper"
          class="absolute -right-1 -bottom-1 text-sm leading-none select-none"
        >
          🌶️
        </span>
      {/if}
    </div>
    <div>
      <h2 class="text-xl mb-0 font-secondary text-wash-300">{title}</h2>
      <div class="flex items-center gap-1">
        <span
          class="h-3 w-3 rounded-full {store.isLoading
            ? 'animate-pulse bg-yellow-400'
            : 'bg-green-400'}"
        ></span>
        <span class="text-xs text-wash-300"
          >{store.isLoading ? "Thinking..." : "Online"}</span
        >
      </div>
    </div>
  </div>

  <!-- Messages -->
  <div
    bind:this={scrollContainer}
    class="flex flex-1 flex-col gap-4 overflow-y-auto scroll-smooth py-5"
  >
    {#if store.messages.length === 0}
      <div
        class="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center"
      >
        <div
          class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-prime-100"
        >
          <Icon ctx="message-circle" size="2" />
          <!-- <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-7 w-7"
					>
						<path
							d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"
						/>
						<path
							d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.124-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"
						/>
					</svg> -->
        </div>
        <div>
          <p class="text-xl font-primary text-prime-100">
            Give me your marvellous recipies...
          </p>
          <p class="text-md text-wash-300">
            And I'll see if they can be paired with chilli!
          </p>
        </div>
      </div>
    {:else}
      {#each store.messages as msg (msg.id)}
        <ChatMessage message={msg} />
      {/each}
    {/if}

    <!-- Typing indicator -->
    {#if store.isLoading}
      <div class="flex items-start gap-2 px-4">
        <div
          class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700"
        >
          AI
        </div>
        <div class="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3">
          <div class="flex items-center gap-1">
            <span
              class="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"
            ></span>
            <span
              class="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"
            ></span>
            <span class="h-2 w-2 animate-bounce rounded-full bg-gray-400"
            ></span>
          </div>
        </div>
      </div>
    {/if}

    <!-- Error banner -->
    {#if store.error}
      <div
        class="mx-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mt-0.5 h-4 w-4 shrink-0 text-red-500"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="flex-1">
          <p class="text-xs font-medium text-red-700">Something went wrong</p>
          <p class="mt-0.5 text-xs text-red-600">{store.error}</p>
        </div>
        <button
          type="button"
          onclick={() => (store.error = "")}
          class="text-red-400 hover:text-red-600"
          aria-label="Dismiss error"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path
              d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
            />
          </svg>
        </button>
      </div>
    {/if}
  </div>

  <!-- Input -->
  <ChatInput
    {placeholder}
    disabled={store.isLoading}
    scrollEnd={scrollToBottom}
  />
</div>
