const domElements = {
	shareBtn: document.getElementById('share-btn'),
	tooltip: document.getElementById('tooltip'),
	userPicture: document.querySelector('.user__photo'),
	userInfo: document.querySelector('.user__info'),
}

function toogleTooltip () {
	domElements.tooltip.style.display = domElements.tooltip.style.display === 'flex' ? 'none' : 'flex'
	const photo = domElements.userPicture
	const info = domElements.userInfo

	// hidden elements in mobile devices
	if (photo.classList.contains('hidden')) {
		photo.classList.remove('hidden')
        info.classList.remove('hidden')
	}
	else {
        photo.classList.add('hidden')
        info.classList.add('hidden')
    }
}

domElements.shareBtn.addEventListener('click', () => toogleTooltip())
