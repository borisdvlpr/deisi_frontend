import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './parts/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import StatsPage from './pages/StatsPage/StatsPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage';
import TeachersPage from './pages/TeachersPage/TeachersPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/landing-page"
					element={(
						<>
							<header>
								<Navbar />
							</header>

							<main>
								<LandingPage />
								<StatsPage />
								<StudentsPage />
								<CompaniesPage />
								<TeachersPage />
								<CoursesPage />
							</main>
						</>
					)}
				/>

				<Route
					path="/static/terminal/"
					element={(
						<>
							<h1>Terminal Page</h1>
							<p>The DEISI terminal will run here.</p>
						</>
					)}
				/>
			</Routes>
		</Router>
	);
}

export default App;
