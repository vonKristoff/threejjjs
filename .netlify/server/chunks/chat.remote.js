import { v as __exportAll } from "./environment.js";
import "./shared.js";
import { i as form } from "./remote.js";
import "./paths.js";
import "@sveltejs/kit";
import { init_remote_functions } from "@sveltejs/kit/internal";
import "@sveltejs/kit/internal/server";
import * as v from "valibot";
//#region src/lib/remote/chat.remote.js
var chat_remote_exports = /* @__PURE__ */ __exportAll({ chat: () => chat });
var API_TOKEN = "CRAPPYBUTREALLYBRUTALTOKYO";
var chat = /* @__PURE__ */ form(v.object({ message: v.string() }), async ({ message }) => {
	const request = {
		message,
		timestamp: /* @__PURE__ */ new Date(),
		sessionId: "12345"
	};
	try {
		const response = await fetch("https://zero.cycocyan.xyz/webhook/chatter", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${API_TOKEN}`,
				Accept: "*/*",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(request)
		});
		if (!response.ok) throw new Error("Network response was not ok");
		return await response.json();
	} catch (err) {
		console.error("Error:", err instanceof Error ? err.message : String(err));
		return { error: err instanceof Error ? err.message : String(err) };
	}
});
init_remote_functions(chat_remote_exports, "src/lib/remote/chat.remote.js", "23vqqw");
for (const [name, fn] of Object.entries(chat_remote_exports)) {
	fn.__.id = "23vqqw/" + name;
	fn.__.name = name;
}
//#endregion
export { chat_remote_exports as n, chat as t };
