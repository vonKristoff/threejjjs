<script lang="ts">
  import type { Message } from "./types.js";
  import { store } from "./ChatStore.svelte.ts";
  import Icon from "../Icon.svelte";

  let { message }: { message: Message } = $props();

  const isUser = $derived(message.role === "user");

  const isActiveChilli = $derived(
    !!message.compatible_with_chilli &&
      message.id === store.latestChilliId &&
      !store.chilliInHeader,
  );

  function formatTime(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }
</script>

<div class="flex w-full {isUser ? 'justify-end' : 'justify-start'} px-4">
  <div
    class="flex max-w-[75%] flex-col gap-1 {isUser
      ? 'items-end'
      : 'items-start'}"
  >
    <!-- Avatar + Name -->
    <div
      class="flex items-center gap-2 {isUser ? 'flex-row-reverse' : 'flex-row'}"
    >
      <div
        class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold
				{isUser ? 'bg-wash-300 text-white' : 'bg-pop-200 text-wash-300'}"
      >
        {#if isUser}
          👩‍🍳
        {:else}
          AI
        {/if}
      </div>
      <span class="text-xs text-gray-400">
        {isUser ? "You" : "Assistant"}
      </span>
    </div>

    <!-- Bubble -->
    <div
      class="rounded-2xl px-4 py-2.5 text-sm leading-relaxed
			{isUser
        ? 'rounded-tr-sm bg-wash-300 text-white'
        : 'rounded-tl-sm bg-pop-200 text-prime-100'}"
    >
      {message.message}
    </div>

    <!-- Chilli badge + timestamp row -->
    <div
      class="flex items-center gap-1.5 {isUser
        ? 'flex-row-reverse'
        : 'flex-row'}"
    >
      {#if message.compatible_with_chilli}
        <span
          style={isActiveChilli
            ? "view-transition-name: chilli-pepper"
            : "view-transition-name: none"}
          class="text-base leading-none select-none"
          title="Compatible with chilli!"
        >
          🌶️
        </span>
      {/if}
      <span class="text-[11px] text-gray-400">
        {formatTime(message.timestamp)}
      </span>
    </div>
  </div>
</div>
