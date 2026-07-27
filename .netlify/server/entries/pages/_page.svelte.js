import { o as tick } from "../../chunks/environment.js";
import { B as attr, H as escape_html, V as clsx, a as bind_props, i as attributes, n as attr_class, o as derived, r as attr_style, s as ensure_array_like, u as stringify } from "../../chunks/dev.js";
import { t as chat } from "../../chunks/chat.remote.js";
//#region src/lib/components/Icon.svelte
function Icon($$renderer, $$props) {
	const { ctx, weight = "2", size = "1", colour = "currentColor", src = "sprites" } = $$props;
	const href = `/${src}.svg#icon-${ctx}`;
	$$renderer.push(`<svg${attr("width", `${size}em`)}${attr("height", `${size}em`)} fill="none"${attr("stroke", colour)}${attr("stroke-width", weight)} stroke-linecap="round" stroke-linejoin="round"><use${attr("href", href)}></use></svg>`);
}
//#endregion
//#region src/lib/stores/global.svelte.ts
function store$1() {
	let sidebar = false;
	let dropdown = false;
	let ambience = void 0;
	let skew = 0;
	return {
		setAmbience(value) {
			ambience = value === "dark" ? "lighten" : "darken";
		},
		setRotation(pct) {
			skew = -60 + Math.round(120 * pct);
		},
		toggleSidebar() {
			sidebar = !sidebar;
		},
		toggleDropdown() {
			dropdown = !dropdown;
		},
		get sidebar() {
			return sidebar;
		},
		get dropdown() {
			return dropdown;
		},
		get ambience() {
			return ambience;
		},
		get skew() {
			return `${skew}deg`;
		}
	};
}
var global_svelte_default = store$1();
//#endregion
//#region src/lib/components/header/Dialog.svelte
function Dialog($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { modalRef = void 0 } = $$props;
		$$renderer.push(`<dialog class="shadow-xl rounded-2xl fixed svelte-1n1oowa"><div class="modal svelte-1n1oowa"><div class="flex justify-end"><button class="p-2 text-3xl">`);
		Icon($$renderer, { ctx: "x" });
		$$renderer.push(`<!----></button></div> <h2 class="text-6xl text-center">Hello 🤙</h2> <nav class="grid place-content-center font-secondary gap-y-4 svelte-1n1oowa"><div class="flex gap-4 items-center text-3xl">`);
		Icon($$renderer, { ctx: "mail" });
		$$renderer.push(`<!----> <a class="link svelte-1n1oowa" href="mailto:0xjceee@proton.me"><span>Email</span></a></div> <div class="flex gap-4 items-center text-3xl">`);
		Icon($$renderer, { ctx: "github" });
		$$renderer.push(`<!----> <a class="link svelte-1n1oowa" href="https://github.com/vonKristoff" target="_blank"><span>Github</span></a></div> <div class="flex gap-4 items-center text-3xl">`);
		Icon($$renderer, { ctx: "file-text" });
		$$renderer.push(`<!----> <a class="link svelte-1n1oowa" href="/cv"><span>CV</span></a></div></nav> <div class="flex justify-center"></div> <div class="flex flex-col text-right text-prime-300 text-sm self-end"><h1 class="text-center text-prime-300 text-6xl md:text-8xl font-primary m-0">three<span class="text-lime-500">jjj</span>s <br/></h1> <span>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} <span class="text-lime-500">threejjjs interactive tech</span>. All rights reserved.</span></div></div></dialog>`);
		bind_props($$props, { modalRef });
	});
}
//#endregion
//#region src/lib/components/header/Navigator.svelte
function Navigator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let modal = void 0;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<header${attr_class("flex items-center fixed top-0 w-full p-8 text-xl md:text-4xl backdrop-blur-2xl z-10 svelte-o3hprx", void 0, {
				"lighten": global_svelte_default.ambience === "lighten",
				"darken": global_svelte_default.ambience === "darken"
			})}><aside class="shrink-0 text-md"><button data-chat-cta=""${attr_class("overflow-hidden svelte-o3hprx", void 0, { "active": global_svelte_default.sidebar })}>`);
			Icon($$renderer, {
				ctx: "cpu",
				size: "1"
			});
			$$renderer.push(`<!----> `);
			Icon($$renderer, {
				ctx: "x",
				size: "1"
			});
			$$renderer.push(`<!----></button></aside> <nav class="grow"><div class="flex justify-center px-8 md:px-0">REMAIN CURIOUS | ZIG WHEN THEY ZAG</div></nav> <aside class="shrink-0"><button>`);
			Icon($$renderer, { ctx: "menu" });
			$$renderer.push(`<!----></button></aside></header> `);
			Dialog($$renderer, {
				get modalRef() {
					return modal;
				},
				set modalRef($$value) {
					modal = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
//#region src/lib/components/chatbot/ChatStore.svelte.ts
var ChatStore = class {
	#messages = [];
	#isLoading = false;
	#error = "";
	#latestChilliId = null;
	#chilliInHeader = false;
	get messages() {
		return this.#messages;
	}
	get isLoading() {
		return this.#isLoading;
	}
	get error() {
		return this.#error;
	}
	get latestChilliId() {
		return this.#latestChilliId;
	}
	get chilliInHeader() {
		return this.#chilliInHeader;
	}
	set isLoading(value) {
		this.#isLoading = value;
	}
	set error(value) {
		this.#error = value;
	}
	set latestChilliId(value) {
		this.#latestChilliId = value;
	}
	set chilliInHeader(value) {
		this.#chilliInHeader = value;
	}
	addMessage(msg) {
		this.#messages.push(msg);
	}
	clearMessages() {
		this.#messages = [];
	}
	clearError() {
		this.#error = "";
	}
};
var store = new ChatStore();
//#endregion
//#region src/lib/components/chatbot/ChatMessage.svelte
function ChatMessage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { message } = $$props;
		const isUser = derived(() => message.role === "user");
		const isActiveChilli = derived(() => !!message.compatible_with_chilli && message.id === store.latestChilliId && !store.chilliInHeader);
		function formatTime(date) {
			return new Intl.DateTimeFormat("en-US", {
				hour: "numeric",
				minute: "2-digit",
				hour12: true
			}).format(date);
		}
		$$renderer.push(`<div${attr_class(`flex w-full ${stringify(isUser() ? "justify-end" : "justify-start")} px-4`)}><div${attr_class(`flex max-w-[75%] flex-col gap-1 ${stringify(isUser() ? "items-end" : "items-start")}`)}><div${attr_class(`flex items-center gap-2 ${stringify(isUser() ? "flex-row-reverse" : "flex-row")}`)}><div${attr_class(`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${stringify(isUser() ? "bg-wash-300 text-white" : "bg-pop-200 text-wash-300")}`)}>`);
		if (isUser()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`👩‍🍳`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`AI`);
		}
		$$renderer.push(`<!--]--></div> <span class="text-xs text-gray-400">${escape_html(isUser() ? "You" : "Assistant")}</span></div> <div${attr_class(`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${stringify(isUser() ? "rounded-tr-sm bg-wash-300 text-white" : "rounded-tl-sm bg-pop-200 text-prime-100")}`)}>${escape_html(message.message)}</div> <div${attr_class(`flex items-center gap-1.5 ${stringify(isUser() ? "flex-row-reverse" : "flex-row")}`)}>`);
		if (message.compatible_with_chilli) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span${attr_style(isActiveChilli() ? "view-transition-name: chilli-pepper" : "view-transition-name: none")} class="text-base leading-none select-none" title="Compatible with chilli!">🌶️</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <span class="text-[11px] text-gray-400">${escape_html(formatTime(message.timestamp))}</span></div></div></div>`);
	});
}
//#endregion
//#region src/lib/components/chatbot/ChatInput.svelte
function ChatInput($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { disabled = false, placeholder = "Type a message...", scrollEnd } = $$props;
		let value = "";
		$$renderer.push(`<div class="border-t border-gray-200 bg-pop-100 px-4 py-3"><form${attributes({
			...chat.enhance(async ({ form, data, submit }) => {
				const message = data.message?.trim();
				if (!message) return;
				store.addMessage({
					message,
					role: "user",
					timestamp: /* @__PURE__ */ new Date(),
					id: crypto.randomUUID()
				});
				scrollEnd?.();
				store.isLoading = true;
				store.chilliInHeader = false;
				try {
					await submit();
					const result = chat.result;
					const msgId = crypto.randomUUID();
					const withChilli = !!result?.compatible_with_chilli;
					store.addMessage({
						message: result?.reponse,
						role: "assistant",
						timestamp: /* @__PURE__ */ new Date(),
						id: msgId,
						compatible_with_chilli: withChilli
					});
					form.reset();
					scrollEnd?.();
					if (withChilli) {
						store.latestChilliId = msgId;
						store.chilliInHeader = false;
						await tick();
						if (typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(async () => {
							store.chilliInHeader = true;
							await tick();
						});
						else store.chilliInHeader = true;
					}
				} catch (err) {
					store.error = err instanceof Error ? err.message : String(err);
				} finally {
					store.isLoading = false;
					scrollEnd?.();
				}
			}),
			class: "flex items-center gap-2 rounded-2xl border border-gray-300 bg-text-100 px-3 py-2 transition-colors focus-within:border-blue-500 focus-within:bg-wash-100"
		})}><textarea id="chat-input" name="message" rows="1"${attr("placeholder", placeholder)}${attr("disabled", disabled, true)} class="max-h-40 flex-1 resize-none bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none disabled:opacity-50">`);
		const $$body = escape_html(value);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea> <button type="submit"${attr("disabled", disabled || !value.trim(), true)} aria-label="Send message" class="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wash-200 text-white transition-all hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400">`);
		Icon($$renderer, {
			ctx: "send",
			size: "1",
			colour: "hotpink"
		});
		$$renderer.push(`<!----></button></form> <p class="mt-1.5 text-center text-[11px] text-gray-400">Press <kbd class="rounded bg-gray-100 px-1 py-0.5 font-mono text-[10px] text-gray-500">Enter</kbd> to send  · </p></div>`);
	});
}
//#endregion
//#region src/lib/components/chatbot/Chatbot.svelte
function Chatbot($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { title = "Assistant", placeholder = "Type a message..." } = $$props;
		function scrollToBottom() {}
		$$renderer.push(`<div class="flex h-[70dvh] w-auto flex-col overflow-hidden rounded-2xl border border-gray-200 bg-pop-100 shadow-lg m-8"><div class="flex items-center gap-3 border-b border-gray-200 bg-pop-100 px-5 py-4"><div class="relative flex text-6xl items-center justify-center rounded-full bg-blue-600 leading-none text-white shadow-sm select-none">🥘 `);
		if (store.chilliInHeader) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span style="view-transition-name: chilli-pepper" class="absolute -right-1 -bottom-1 text-sm leading-none select-none">🌶️</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div><h2 class="text-xl mb-0 font-secondary text-wash-300">${escape_html(title)}</h2> <div class="flex items-center gap-1"><span${attr_class(`h-3 w-3 rounded-full ${stringify(store.isLoading ? "animate-pulse bg-yellow-400" : "bg-green-400")}`)}></span> <span class="text-xs text-wash-300">${escape_html(store.isLoading ? "Thinking..." : "Online")}</span></div></div></div> <div class="flex flex-1 flex-col gap-4 overflow-y-auto scroll-smooth py-5">`);
		if (store.messages.length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-prime-100">`);
			Icon($$renderer, {
				ctx: "message-circle",
				size: "2"
			});
			$$renderer.push(`<!----></div> <div><p class="text-xl font-primary text-prime-100">Give me your marvellous recipies...</p> <p class="text-md text-wash-300">And I'll see if they can be paired with chilli!</p></div></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(store.messages);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let msg = each_array[$$index];
				ChatMessage($$renderer, { message: msg });
			}
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--> `);
		if (store.isLoading) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="flex items-start gap-2 px-4"><div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">AI</div> <div class="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3"><div class="flex items-center gap-1"><span class="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></span> <span class="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></span> <span class="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (store.error) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mx-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mt-0.5 h-4 w-4 shrink-0 text-red-500"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path></svg> <div class="flex-1"><p class="text-xs font-medium text-red-700">Something went wrong</p> <p class="mt-0.5 text-xs text-red-600">${escape_html(store.error)}</p></div> <button type="button" class="text-red-400 hover:text-red-600" aria-label="Dismiss error"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg></button></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> `);
		ChatInput($$renderer, {
			placeholder,
			disabled: store.isLoading,
			scrollEnd: scrollToBottom
		});
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
//#region src/lib/contents.json
var highlights = {
	"motmac": {
		"title": "Mott Macdonald",
		"client": "A26",
		"role": "FE Developer",
		"url": "https://www.mottmac.com",
		"thumb": "MOTMAC",
		"tags": ["FE Components"]
	},
	"corin": {
		"title": "Corinthia Hotels",
		"client": "A26",
		"role": "FE Developer",
		"url": "https://www.corinthia.com/",
		"thumb": "CORIN",
		"tags": ["FE Components"]
	},
	"scanlab": {
		"title": "ScanLAB Projects",
		"client": "ScanLAB Projects",
		"role": "Web Developer",
		"url": "https://scanlabprojects.co.uk/",
		"thumb": "SCANLAB",
		"tags": [
			"Astro",
			"Design & Development",
			"CI/CD"
		]
	},
	"soane": {
		"title": "Soane Museum",
		"client": "ScanLAB Projects",
		"role": "Software Engineer",
		"url": "https://explore.soane.org/",
		"thumb": "SOANE",
		"tags": [
			"Vue",
			"Design & Development",
			"three.js"
		]
	},
	"wawb": {
		"title": "What Are We Building",
		"client": "threejjjs",
		"role": "Web Developer",
		"url": "https://walthamstow.whatarewebuilding.xyz/",
		"thumb": "WAWB",
		"tags": ["Design & Development"]
	},
	"archetypal": {
		"title": "Archetypal Tech",
		"client": "Semaeoupus",
		"role": "Front End Engineer",
		"url": "https://archetypaltech.com/",
		"thumb": "ARCH",
		"tags": [
			"Design & Development",
			"FE Components",
			"UX/UI"
		]
	},
	"presskit": {
		"title": "PressKit infrastructure",
		"client": "Semaeopus",
		"role": "Front End Engineer",
		"url": "https://press.oruggintrail.com/",
		"thumb": "PRESSKIT",
		"tags": [
			"Design & Development",
			"Markdown",
			"CI/CD"
		]
	},
	"cooltrees": {
		"title": "Valley of the Cooltrees",
		"client": "Cwmcoedoeron",
		"role": "Web Developer",
		"url": "https://cooltrees.net/",
		"thumb": "COOL",
		"tags": ["Design & Development", "Astro"]
	},
	"techsup": {
		"title": "Tech Support!",
		"client": "Tech Support Interactive",
		"role": "Web Developer",
		"url": "https://techsup.uk/",
		"thumb": "TECHSUP",
		"tags": ["Design & Development"]
	},
	"vender": {
		"title": "Vender Blender",
		"client": "Tech Support!",
		"role": "AI Engineer",
		"url": "https://venn.threejjjs.xyz/",
		"thumb": "VENN",
		"tags": ["Design & Development", "API"]
	},
	"sayit": {
		"title": "Say it with Love",
		"client": "threejjjs",
		"role": "Build your poster with an API",
		"url": "https://say.itwithlove.com/",
		"thumb": "SAYIT",
		"tags": ["Design & Development", "API"]
	}
};
//#endregion
//#region src/lib/components/Highlights.svelte
function Highlights($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ctx } = $$props;
		let { title, url, thumb, client, role, tags } = highlights[ctx];
		$$renderer.push(`<div class="thumb rounded-2xl shadow-2xl bg-transparent overflow-hidden backdrop-blur-2xl aspect-show relative z-1 p-0 svelte-128zca7"><div class="frame h-full grid place-content-top text-text-300 backdrop-blur-2xl svelte-128zca7"><img${attr("src", `/thumbs/${thumb}.jpg`)}${attr("alt", title)} class="object-cover object-center svelte-128zca7"/></div> <aside class="p-4 text-prime-100 flex justify-between flex-col svelte-128zca7"><div class="flex justify-between items-center"><div class="flex flex-col"><h3 class="text-lg m-0">${escape_html(title)}</h3> <span class="text-xs">${escape_html(role)}</span></div> <h4 class="text-xs">${escape_html(client)}</h4></div> <div class="flex justify-between"><a class="self-end"${attr("href", url)}>visit</a> <div class="flex flex-col gap-1"><!--[-->`);
		const each_array = ensure_array_like(tags);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tag = each_array[$$index];
			$$renderer.push(`<span class="pill bg-prime-100 text-text-200 px-2 text-xs rounded-lg">${escape_html(tag)}</span>`);
		}
		$$renderer.push(`<!--]--></div></div></aside></div>`);
	});
}
//#endregion
//#region src/lib/components/Intersect.svelte
function Intersect($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, layout, bg, margin = {
			top: 0,
			bottom: "-99%",
			left: 0,
			right: 0
		}, onPercent } = $$props;
		$$renderer.push(`<div${attr_class(clsx(layout))}>`);
		children($$renderer);
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
//#region src/lib/components/Spintersect.svelte
function Spintersect($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, margin = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		} } = $$props;
		$$renderer.push(`<div>`);
		children($$renderer);
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<footer class="bg-prime-200 w-screen grid grid-cols-1 gap-y-16 md:grid-cols-2 border-t border-tomato py-32 px-8 md:px-16 border-dashed text-2xl text-primary"><div class="col flex flex-col gap-4 text-xl md:text-2xl"><div class="_block text-gray-400">🧨 <span>Contact:</span> <span class="text-lime-300">0xjceee</span>@<span>proton.me</span></div> <div class="_block text-gray-400">📍 <span>Find:</span> <span class="text-lime-300">Printclub London</span> Unit 3, 10-28 Millers Ave. London, E8 2DS</div> <div class="_block text-gray-400">📚 <span class="text-slate-600">Recruitment:</span> <a class="hover:text-white" data-sveltekit-preload-data="off" aria-label="CV for threejjjs" href="/cv">Curriculum Vitae</a></div></div> <div class="flex flex-col text-right text-text-200 text-sm self-end"><h1 class="text-center text-text-200 text-6xl md:text-8xl font-primary m-0">three<span class="text-accent-200">jjj</span>s <br/></h1> <span>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} <span class="text-accent-200">threejjjs interactive tech</span>. All rights reserved.</span></div></footer>`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		Navigator($$renderer, {});
		$$renderer.push(`<!----> <aside id="chatwindow"${attr_class("h-screen fixed py-24 svelte-1uha8ag", void 0, { "active": global_svelte_default.sidebar })}>`);
		Chatbot($$renderer, {
			title: "Chef Assistant",
			placeholder: "daal with a rhubarb salad"
		});
		$$renderer.push(`<!----></aside> <main class="content-grid svelte-1uha8ag">`);
		Intersect($$renderer, {
			bg: "dark",
			layout: "full-width",
			children: ($$renderer) => {
				$$renderer.push(`<section class="grid place-content-center h-dvh bg-prime-200"><div class="hero bg-cover bg-prime-200 bg-blend-lighten max-w-full svelte-1uha8ag"></div> <h1 class="text-center text-text-200 text-6xl md:text-8xl font-primary m-0">three<span class="text-accent-200">jjj</span>s <br/></h1> <span class="px-0 text-lg md:text-xl">INTERACTIVE TECH</span></section>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Intersect($$renderer, {
			bg: "light",
			layout: "full-width",
			children: ($$renderer) => {
				$$renderer.push(`<section><article class="overflow-hidden px-8 py-32 pt-16"><h3 class="relative z-1 text-text-300 text-left text-4xl md:text-6xl gradient-text text-shadow-2xs svelte-1uha8ag">🚀 Featured works.</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 mt-16"><div class="flex flex-col gap-8 lg:gap-12 xl:gap-16 relative z-1">`);
				Highlights($$renderer, { ctx: "motmac" });
				$$renderer.push(`<!----> `);
				Highlights($$renderer, { ctx: "corin" });
				$$renderer.push(`<!----> `);
				Highlights($$renderer, { ctx: "sayit" });
				$$renderer.push(`<!----></div> `);
				Spintersect($$renderer, {
					children: ($$renderer) => {
						$$renderer.push(`<div${attr_style(`--skew: ${global_svelte_default.skew};`)} class="flex flex-col gap-8 lg:gap-12 xl:gap-16 middle relative svelte-1uha8ag">`);
						Highlights($$renderer, { ctx: "scanlab" });
						$$renderer.push(`<!----> `);
						Highlights($$renderer, { ctx: "soane" });
						$$renderer.push(`<!----> `);
						Highlights($$renderer, { ctx: "cooltrees" });
						$$renderer.push(`<!----></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> <div class="flex flex-col gap-8 lg:gap-12 xl:gap-16 relative z-1">`);
				Highlights($$renderer, { ctx: "wawb" });
				$$renderer.push(`<!----> `);
				Highlights($$renderer, { ctx: "archetypal" });
				$$renderer.push(`<!----> `);
				Highlights($$renderer, { ctx: "techsup" });
				$$renderer.push(`<!----></div></div></article></section>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> <section class="full-width bg-prime-200 py-16"><div class="grid grid-cols-1 md:grid-cols-3 px-8 gap-x-8 py-16 gap-y-16 md:gap-y-0"><div class="text-2xl grid place-content-center [&amp;>p]:font-secondary font-light *:text-center"><h2>Producing</h2> <p class="tagline svelte-1uha8ag">📐 Cutting edge User Interfaces</p></div> <div class="text-2xl grid place-content-center [&amp;>p]:font-secondary font-light *:text-center"><h2>Applying</h2> <p class="tagline svelte-1uha8ag">Strict and Accessible Web standards ✨</p></div> <div class="text-2xl grid place-content-center [&amp;>p]:font-secondary font-light *:text-center"><h2>Practicing</h2> <p class="tagline svelte-1uha8ag">Agile at the ❤️ of Engineering</p></div></div></section> <section class="relative overflow-hidden full-width content-grid py-32 *:text-prime-100 text-xl md:text-2xl"><div class="relative content-grid mx-auto flex gap-y-16 flex-col px-8 rounded-2xl"><div class="flex flex-col gap-4"><span class="text-prime-200 text-4xl font-bold font-primary gradient-text text-shadow-2xs svelte-1uha8ag">Let's keep talking...</span> <p class="message svelte-1uha8ag">A <strong>keep-it-simple-studio</strong>, open to <strong>collaborate</strong> with <span class="bg-pop-200">product &amp; design</span> and deliver
          satisfying interactions on the <strong>web</strong>, from CMS driven store fronts to payment rails.</p></div> <p class="breakout italic bg-pop-100 p-8 rounded-lg">"JC is a brilliant Tech Lead and Software Engineer with an incredible
        attention to detail, empathy and people skills. He led a team that I
        managed flawlessly with minimal intervention and always proactively
        looked at problems and possible solutions."</p> <div class="flex flex-col gap-4"><span class="text-prime-200 text-4xl font-bold font-primary gradient-text text-shadow-2xs svelte-1uha8ag">What's in the bag?</span> <p class="message svelte-1uha8ag">With <strong>10+</strong> years of <span class="bg-pop-200">development</span> experience, including deployment cycles and <strong>team leadership</strong>. Agile all the way home.</p></div></div></section></main> `);
		Footer($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
