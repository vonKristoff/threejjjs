export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","favicon.svg","meta-threejjjs.jpg","robots.txt","sprites.svg","threejjjs.jpg","threejjjs.webp","thumbs/.DS_Store","thumbs/ARCH.jpg","thumbs/COOL.jpg","thumbs/CORIN.jpg","thumbs/MOTMAC.jpg","thumbs/PRESSKIT.jpg","thumbs/SAYIT.jpg","thumbs/SCANLAB.jpg","thumbs/SOANE.jpg","thumbs/TECHSUP.jpg","thumbs/VENN.jpg","thumbs/WAWB.jpg","thumbs/mobile/.DS_Store","thumbs/mobile/ARCH.jpg","thumbs/mobile/COOL.jpg","thumbs/mobile/CORIN.jpg","thumbs/mobile/MOTMAC.jpg","thumbs/mobile/PRESSKIT.jpg","thumbs/mobile/SAYIT.jpg","thumbs/mobile/SCANLAB.jpg","thumbs/mobile/SOANE.jpg","thumbs/mobile/TECHSUP.jpg","thumbs/mobile/VENN.jpg","thumbs/mobile/WAWB.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.Dklardys.js",app:"_app/immutable/entry/app.CunB0xOW.js",imports:["_app/immutable/entry/start.Dklardys.js","_app/immutable/chunks/Tm3Y-_R_.js","_app/immutable/chunks/DeXHtuji.js","_app/immutable/entry/app.CunB0xOW.js","_app/immutable/chunks/DeXHtuji.js","_app/immutable/chunks/CItELRlb.js","_app/immutable/chunks/CuyqONxg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js'))
		],
		remotes: {
			'23vqqw': __memo(() => import('./chunks/remote-23vqqw.js'))
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/bernadette",
				pattern: /^\/bernadette\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/brum",
				pattern: /^\/brum\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/comp",
				pattern: /^\/comp\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/heidi",
				pattern: /^\/heidi\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/labs",
				pattern: /^\/labs\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/terra",
				pattern: /^\/terra\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/tldr",
				pattern: /^\/tldr\/?$/,
				params: [],
				page: { layouts: [0,9,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/wired",
				pattern: /^\/wired\/?$/,
				params: [],
				page: { layouts: [0,10,], errors: [1,,], leaf: 20 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
