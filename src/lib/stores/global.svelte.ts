function store() {
	let sidebar = $state(false);
	let dropdown = $state(false);
	let ambience = $state();
	let skew = $state(0);
	return {
		setAmbience(value: 'dark' | 'light') {
			ambience = value === 'dark' ? 'lighten' : 'darken';
		},
		setRotation(pct: number) {
			skew = -60 + Math.round(120 * pct);
		},
		toggleSidebar() {
			sidebar = !sidebar;
		},
		toggleDropdown() {
			dropdown = !dropdown;
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
export default store();
