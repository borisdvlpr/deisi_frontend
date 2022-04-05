import React, { useEffect } from 'react';
import './Navbar.scss';

function toggleMenu() {
	const menuDrawer = document.querySelector('.menu-drawer');
	const burger = document.querySelector('.burger');

	menuDrawer.style.transform === 'translateX(0%)' ? menuDrawer.style.transform = 'translateX(-120%)' : menuDrawer.style.transform = 'translateX(0%)';

	burger.classList.toggle('toggle');
}

function Navbar() {
	useEffect(() => {

	});

	return (
		<>
			<div className="menu-button" onClick={() => toggleMenu()}>
				<div className="burger">
					<div className="line1" />
					<div className="line2" />
					<div className="line3" />
				</div>
			</div>

			<div className="menu-drawer">
				<ul>
					<li><a href="#landing-page"> Home </a></li>
					<li><a href="#metrics-page"> Métricas </a></li>
					<li><a href="#students-page"> Alunos </a></li>
					<li><a href="#companies-page"> Empresas </a></li>
					<li><a href="#teachers-page"> Docentes </a></li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
