/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fleur\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-flower' : '&#x35;',
			'icon-facebook' : '&#x23;',
			'icon-twitter' : '&#x21;',
			'icon-broadcast' : '&#x22;',
			'icon-gamepad' : '&#x24;',
			'icon-food' : '&#x25;',
			'icon-lab' : '&#x26;',
			'icon-tree' : '&#x27;',
			'icon-heart' : '&#x28;',
			'icon-cup' : '&#x29;',
			'icon-briefcase' : '&#x2b;',
			'icon-github' : '&#x2a;',
			'icon-gift' : '&#x2c;',
			'icon-brush' : '&#x2e;',
			'icon-camera' : '&#x2f;',
			'icon-quill' : '&#x30;',
			'icon-happy' : '&#x31;',
			'icon-smiley' : '&#x32;',
			'icon-sad' : '&#x33;',
			'icon-wink' : '&#x34;',
			'icon-angry' : '&#x36;',
			'icon-shocked' : '&#x37;',
			'icon-wondering' : '&#x38;',
			'icon-neutral' : '&#x39;',
			'icon-tux' : '&#x3a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};