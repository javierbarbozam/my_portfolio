const navbarInit = () => {
	const navbarOpen = () => {
		const openNav = document.getElementById("open_nav_btn");
		const navbar = document.getElementById("header_nav");
		const body = document.querySelector("body");
		openNav.addEventListener("click", (e) => {
			e.preventDefault();
			navbar.classList.add("nav-open");
			// body.style.overflow = "hidden";
		});
	};
	
	const navbarClose = () => {
		const openNav = document.getElementById("close_nav_btn");
		const navbar = document.getElementById("header_nav");
		const body = document.querySelector("body");
		openNav.addEventListener("click", (e) => {
			e.preventDefault();
			navbar.classList.remove("nav-open");
			// body.style.overflow = "hidden";
		});
	};
	navbarOpen()
	navbarClose()
}

export default navbarInit;