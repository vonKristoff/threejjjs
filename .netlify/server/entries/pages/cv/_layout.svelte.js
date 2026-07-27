import "../../../chunks/dev.js";
//#region src/routes/cv/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	$$renderer.push(`<section id="cv" class="grid place-content-center my-24 px-4"><article class="prose w-full">`);
	children($$renderer);
	$$renderer.push(`<!----></article></section>`);
}
//#endregion
export { _layout as default };
