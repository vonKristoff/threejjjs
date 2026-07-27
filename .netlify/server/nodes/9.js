

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tldr/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.Dg4G2m7M.js","_app/immutable/chunks/DeXHtuji.js","_app/immutable/chunks/CuyqONxg.js"];
export const stylesheets = [];
export const fonts = [];
