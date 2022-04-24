import React, { useEffect } from 'react';
import './Navbar.scss';

export default function Navbar() {
	// useEffect(() => {
	// 	const burgerDivs = document.querySelectorAll('.burger div');
	// 	const navLinks = document.querySelectorAll('.nav-link a');
	// 	const metricsPage = document.querySelector('.metrics-page');
	// 	const studentsPage = document.querySelector('.students-page');
	// 	const companiesPage = document.querySelector('.companies-page');
	// 	const teachersPage = document.querySelector('.teachers-page');
	// 	const coursesPage = document.querySelector('.courses-page');

	// 	const sectionOptions = {
	// 		rootMargin: '-30px 0px 0px 0px',
	// 	};

	// 	const sectionObserver = new IntersectionObserver(((entries, sectionObserver) => {
	// 		entries.forEach((entry) => {
	// 			if (entry.isIntersecting) {
	// 				burgerDivs.forEach((divBar) => {
	// 					divBar.classList.remove('blue-background');
	// 				});

	// 				navLinks.forEach((link) => {
	// 					link.classList.remove('blue-text');
	// 				});
	// 			} else {
	// 				burgerDivs.forEach((divBar) => {
	// 					divBar.classList.add('blue-background');
	// 				});

	// 				navLinks.forEach((link) => {
	// 					link.classList.add('blue-text');
	// 				});
	// 			}
	// 		});
	// 	}), sectionOptions);
	// }, []);

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
