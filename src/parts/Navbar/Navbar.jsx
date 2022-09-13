import React from 'react';
import './Navbar.scss';

export default function Navbar() {
	function toggleMenu() {
		const burger = document.querySelector('.burger');
		const navLinks = document.querySelectorAll('.nav-link');

		burger.classList.toggle('toggle');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
	}

	return (
		<nav>
			<div className="menu-button" onClick={() => toggleMenu()}>
				<div className="burger">
					<div className="line1" />
					<div className="line2" />
					<div className="line3" />
				</div>
			</div>

			<ul>
				<li className="nav-link"><a href="/static/terminal" onClick={() => toggleMenu()}>&gt;_</a></li>
				<li className="nav-link"><a href="#landing-page" onClick={() => toggleMenu()}>Home</a></li>
				<li className="nav-link"><a href="#metrics-page" onClick={() => toggleMenu()}>Métricas</a></li>
				<li className="nav-link"><a href="#students-page" onClick={() => toggleMenu()}>Alunos</a></li>
				<li className="nav-link"><a href="#companies-page" onClick={() => toggleMenu()}>Empresas</a></li>
				<li className="nav-link"><a href="#teachers-page" onClick={() => toggleMenu()}>Docentes</a></li>
				<li className="nav-link"><a href="#courses-page" onClick={() => toggleMenu()}> Cursos </a></li>
			</ul>
		</nav>
	);
}
