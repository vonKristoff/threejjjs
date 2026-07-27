

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wired/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Bb9FdUnb.js","_app/immutable/chunks/DeXHtuji.js","_app/immutable/chunks/CuyqONxg.js"];
export const stylesheets = [];
export const fonts = [];
