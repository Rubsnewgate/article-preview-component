const domElements = {
	shareBtn: document.querySelector('.share-btn'),
	mobileShareBtn: document.querySelector('.btn-mobile'),
	tooltip: document.getElementById('tooltip'),
}

domElements.shareBtn.addEventListener('click', () => {
	if (true) {
		domElements.tooltip.style.display = domElements.tooltip.style.display === 'flex' ? 'none' : 'flex'
	}
})

// Event for the btn in the mobile.sass file
domElements.mobileShareBtn.addEventListener('click', () => {
	if (true) {
		domElements.tooltip.style.display = domElements.tooltip.style.display === 'flex' ? 'none' : 'flex'
	}
})
