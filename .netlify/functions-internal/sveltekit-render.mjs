import { init } from '../serverless.js';

export default init((() => {
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
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		remotes: {
			'23vqqw': __memo(() => import('../server/chunks/remote-23vqqw.js'))
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/bernadette","/brum","/comp","/cv","/heidi","/labs","/terra","/tldr","/wired"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());

export const config = {
	path: ["/*"],
	excludedPath: ["/.netlify/*"],
	preferStatic: true
};
