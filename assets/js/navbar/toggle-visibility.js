const userMenuButton = document.getElementById('user-menu-button')
const userMenuDropdown = document.getElementById('user-menu-dropdown')
userMenuDropdown.classList.add('hidden')

userMenuButton.addEventListener('click', () => {
	const expanded = userMenuButton.getAttribute('aria-expanded') === 'true'
	userMenuButton.setAttribute('aria-expanded', !expanded)
	userMenuDropdown.classList.toggle('hidden')
	userMenuDropdown.classList.toggle('opacity-100')
	userMenuDropdown.classList.toggle('scale-100')
})



const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')
mobileMenu.classList.add('hidden')

mobileMenuButton.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden')
})
