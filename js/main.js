const SHARE_BTN = document.querySelector('.share-btn')
const SHARE_BTN_MOBILE = document.querySelector('.btn-mobile')

SHARE_BTN.addEventListener('click', () => {
	let tooltip = document.getElementById('tooltip')

	if (true) {
		tooltip.style.display = tooltip.style.display === 'flex' ? 'none' : 'flex'
	}
})

// Event for the btn in the mobile.scss file
SHARE_BTN_MOBILE.addEventListener('click', () => {
	let tooltip = document.getElementById('tooltip')

	if (true) {
		tooltip.style.display = tooltip.style.display === 'flex' ? 'none' : 'flex'
	}
})
