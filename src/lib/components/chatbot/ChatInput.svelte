<script lang="ts">
  import { tick } from "svelte";
  import { chat } from "$lib/remote/chat.remote";
  import { store } from "./ChatStore.svelte.ts";
  import Icon from "../Icon.svelte";

  let {
    disabled = false,
    placeholder = "Type a message...",
    scrollEnd,
  }: {
    disabled?: boolean;
    placeholder?: string;
    scrollEnd?: () => void;
  } = $props();

  let value = $state("");
  let textarea: HTMLTextAreaElement | undefined = $state();
  let formEl: HTMLFormElement | undefined = $state();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formEl?.requestSubmit();
    }
  }

  function autoResize(e: Event) {
    const el = e.target as HTMLTextAreaElement;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  }
</script>

<div class="border-t border-gray-200 bg-pop-100 px-4 py-3">
  <form
    bind:this={formEl}
    {...chat.enhance(async (instance) => {
      const message = instance.fields.message.value()?.trim();
      if (!message) return;

      store.addMessage({
        message,
        role: "user",
        timestamp: new Date(),
        id: crypto.randomUUID(),
      });
      scrollEnd?.();
      store.isLoading = true;
      store.chilliInHeader = false;

      try {
        await instance.submit();
        const result = instance.result as any;
        const msgId = crypto.randomUUID();
        const withChilli = !!result?.compatible_with_chilli;

        store.addMessage({
          message: result?.reponse,
          role: "assistant",
          timestamp: new Date(),
          id: msgId,
          compatible_with_chilli: withChilli,
        });
        instance.element.reset();
        scrollEnd?.();

        if (withChilli) {
          // Point the active chilli at this message, ensure it starts in the message
          store.latestChilliId = msgId;
          store.chilliInHeader = false;

          // Wait one tick so Svelte renders the 🌶️ in the message with its VT name
          await tick();

          if (
            typeof document !== "undefined" &&
            "startViewTransition" in document
          ) {
            (document as any).startViewTransition(async () => {
              // Swap: remove from message, appear in header
              store.chilliInHeader = true;
              await tick();
            });
          } else {
            // Fallback for browsers without View Transition support
            store.chilliInHeader = true;
          }
        }
      } catch (err) {
        store.error = err instanceof Error ? err.message : String(err);
      } finally {
        store.isLoading = false;
        scrollEnd?.();
      }
    })}
    class="flex items-center gap-2 rounded-2xl border border-gray-300 bg-text-100 px-3 py-2 transition-colors focus-within:border-blue-500 focus-within:bg-wash-100"
  >
    <textarea
      id="chat-input"
      name="message"
      bind:this={textarea}
      bind:value
      rows="1"
      {placeholder}
      {disabled}
      onkeydown={handleKeydown}
      oninput={autoResize}
      class="max-h-40 flex-1 resize-none bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none disabled:opacity-50"
    ></textarea>

    <button
      type="submit"
      disabled={disabled || !value.trim()}
      aria-label="Send message"
      class="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wash-200 text-white transition-all
			hover:bg-blue-700 active:scale-95
			disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
    >
      <Icon ctx="send" size="1" colour="hotpink" />
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-4 w-4"
      >
        <path
          d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z"
        />
      </svg> -->
    </button>
  </form>

  <p class="mt-1.5 text-center text-[11px] text-gray-400">
    Press <kbd
      class="rounded bg-gray-100 px-1 py-0.5 font-mono text-[10px] text-gray-500"
      >Enter</kbd
    >
    to send &nbsp;·&nbsp;
    <!-- <kbd
      class="rounded bg-gray-100 px-1 py-0.5 font-mono text-[10px] text-gray-500"
      >Shift+Enter</kbd
    >
    for new line -->
  </p>
</div>
