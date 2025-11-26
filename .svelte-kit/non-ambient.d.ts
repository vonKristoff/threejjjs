
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/cv";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/cv": Record<string, never>
		};
		Pathname(): "/" | "/cv" | "/cv/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/meta-threejjjs.jpg" | "/robots.txt" | "/sprites.svg" | "/thumbs/.DS_Store" | "/thumbs/ARCH.jpg" | "/thumbs/CORIN.jpg" | "/thumbs/MOTMAC.jpg" | "/thumbs/PRESSKIT.jpg" | "/thumbs/SCANLAB.jpg" | "/thumbs/SOANE.jpg" | "/thumbs/WAWB.jpg" | "/thumbs/mobile/ARCH.jpg" | "/thumbs/mobile/CORIN.jpg" | "/thumbs/mobile/MOTMAC.jpg" | "/thumbs/mobile/PRESSKIT.jpg" | "/thumbs/mobile/SCANLAB.jpg" | "/thumbs/mobile/SOANE.jpg" | "/thumbs/mobile/WAWB.jpg" | string & {};
	}
}