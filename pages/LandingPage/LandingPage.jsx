import React, { useEffect } from 'react';
import './LandingPage.scss';

function terminal() {
	const TerminalEmulator = {
		init(screen) {
			const inst = Object.create(this);
			inst.screen = screen;
			inst.createInput();
			return inst;
		},

		createInput() {
			const inputField = document.createElement('div');
			const inputWrap = document.createElement('div');
			inputField.className = 'terminal_emulator__field';
			inputField.innerHTML = '';
			inputWrap.appendChild(inputField);
			this.screen.appendChild(inputWrap);
			this.field = inputField;
			this.fieldwrap = inputWrap;
		},

		enterInput(input) {
			return new Promise((resolve, reject) => {
				const randomSpeed = (max, min) => Math.random() * (max - min) + min;

				let speed = randomSpeed(70, 90);
				let i = 0;
				let str = '';
				const type = () => {
					str += input[i];
					this.field.innerHTML = str.replace(/ /g, '&nbsp;');
					i++;

					setTimeout(() => {
						if (i < input.length) {
							if (i % 5 === 0) speed = randomSpeed(80, 120);
							type();
						} else {
							// console.log('tick');
							setTimeout(() => {
								// console.log('tock');
								resolve();
							}, 400);
						}
					}, speed);
				};

				type();
			});
		},

		enterCommand() {
			return new Promise((resolve, reject) => {
				const resp = document.createElement('div');
				resp.className = 'terminal_emulator__command';
				resp.innerHTML = this.field.innerHTML;
				this.screen.insertBefore(resp, this.fieldwrap);
				this.field.innerHTML = '';
				resolve();
			});
		},

		enterResponse(response) {
			return new Promise((resolve, reject) => {
				const resp = document.createElement('div');
				resp.className = 'terminal_emulator__response';
				resp.innerHTML = response;
				this.screen.insertBefore(resp, this.fieldwrap);
				resolve();
			});
		},

		wait(time, busy) {
			busy = (busy === undefined) ? true : busy;
			return new Promise((resolve, reject) => {
				if (busy) {
					this.field.classList.add('waiting');
				} else {
					this.field.classList.remove('waiting');
				}

				setTimeout(() => {
					resolve();
				}, time);
			});
		},

		reset() {
			return new Promise((resolve, reject) => {
				this.field.classList.remove('waiting');
				resolve();
			});
		},
	};

	const TE = TerminalEmulator.init(document.getElementById('screen'));

	TE.wait(1000, false)
		.then(TE.enterInput.bind(TE, 'npm install deisi@ulht'))
		.then(TE.enterCommand.bind(TE))
		.then(TE.enterResponse.bind(TE, 'npm installing packages...'))
		.then(TE.wait.bind(TE, 2000))
		.then(TE.enterResponse.bind(TE, '- engenharia_informatica v9.9 installed.'))
		.then(TE.wait.bind(TE, 600))
		.then(TE.enterResponse.bind(TE, '- informatica_gestao v9.9 installed. '))
		.then(TE.wait.bind(TE, 600))
		.then(TE.enterResponse.bind(TE, '- informatica_redes v9.9 installed.'))
		.then(TE.wait.bind(TE, 300))
		.then(TE.enterResponse.bind(TE, '- 500+ graduates since 2008 exported.'))
		.then(TE.wait.bind(TE, 700))
		.then(TE.enterResponse.bind(TE, 'Load new future? (y/y)'))
		.then(TE.wait.bind(TE, 2000, false))
		.then(TE.enterInput.bind(TE, 'y'))
		.then(TE.enterCommand.bind(TE))
		.then(TE.wait.bind(TE, 400))
		.then(TE.enterResponse.bind(TE, 'Become master coding? (y/y)'))
		.then(TE.wait.bind(TE, 1800, false))
		.then(TE.enterInput.bind(TE, 'y'))
		.then(TE.enterCommand.bind(TE))
		.then(TE.wait.bind(TE, 400))
		.then(TE.enterResponse.bind(TE, 'finalizing...'))
		.then(TE.wait.bind(TE, 2000))
		.then(TE.enterResponse.bind(TE, 'deisi complete! Happy hacking!'))
		.then(TE.reset.bind(TE));
}

function LandingPage() {
	useEffect(() => {
		terminal();
	}, []);

	return (
		<div id="landing-page" className="landing-page terminal-font section">
			<div className="landing-anim">
				<div id="screen" className="terminal_emulator" />
			</div>

			<div className="landing-text">
				<div className="hashtag"> #oteulugaréaqui </div>
				<div className="page-title landing-title"> Departamento de Engenharia Informática e Sistemas de Informação </div>
				<a className="home-button button-regular" href="#metrics-page">Sobre Nós</a>
			</div>
		</div>
	);
}

export default LandingPage;
