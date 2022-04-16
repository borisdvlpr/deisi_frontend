import React, { useEffect } from 'react';
import './Navbar.scss';

function toggleMenu() {
	const burger = document.querySelector('.burger');
	const navItems = document.querySelectorAll('.nav-link');

	burger.classList.toggle('toggle');

	navItems.forEach((navItem) => {
		navItem.classList.toggle('toggle');
	});
}

function toggleLink() {
	const burger = document.querySelector('.burger');

	if (burger.classList.contains('toggle')) {
		toggleMenu();
	}
}

export default function Navbar() {
	// useEffect(() => {
	// 	const landingPage = document.getElementById('landing-page');
	// 	const studentsPage = document.getElementById('students-page');
	// 	const teachersPage = document.getElementById('teachers-page');
	// 	const metricsPage = document.getElementById('metrics-page');
	// 	const companiesPage = document.getElementById('companies-page');
	// 	const coursesPage = document.getElementById('courses-page');

	// 	const callback = () => {
	// 		const navBar = document.querySelector('nav');
	// 		navBar.classList.toggle('white');
	// 	};

	// 	const observer = new IntersectionObserver(callback, {
	// 		threshold: [0.1, 0.9],
	// 	});

	// 	// // observer.observe(landingPage);
	// 	// // observer.disconnect();
	// 	observer.observe(metricsPage);
	// 	// // observer.unobserve(metricsPage);
	// 	// // observer.observe(studentsPage);
	// 	observer.observe(companiesPage);
	// 	// // observer.unobserve(companiesPage);
	// 	// // observer.observe(teachersPage);
	// 	observer.observe(coursesPage);
	// });

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
				<li className="nav-link"><a href="#landing-page" onClick={() => toggleLink()}>Home</a></li>
				<li className="nav-link"><a href="#metrics-page" onClick={() => toggleLink()}>Métricas</a></li>
				<li className="nav-link"><a href="#students-page" onClick={() => toggleLink()}>Alunos</a></li>
				<li className="nav-link"><a href="#companies-page" onClick={() => toggleLink()}>Empresas</a></li>
				<li className="nav-link"><a href="#teachers-page" onClick={() => toggleLink()}>Docentes</a></li>
				<li className="nav-link"><a href="#courses-page"> Cursos </a></li>
			</ul>
		</nav>
	);
}
