const body = document.querySelector('body');

body.addEventListener('mouseover', function (e) {
	const size = window.getComputedStyle(e.target, null).getPropertyValue('font-size');
	const _el = document.querySelector('#__ExtractStyles');
	_el.innerHTML = size;
});

const div = document.createElement('div');
div.setAttribute('id', '__ExtractStyles');
div.style['position'] = 'fixed';
div.style['top'] = '0';
div.style['display'] = 'inline-block';
body.appendChild(div);