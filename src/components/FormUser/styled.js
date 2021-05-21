import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 99vw;
	display: grid;
	grid-template-areas:
		'header'
		'line'
		'title'
		'form'
		'button';

	.header {
		grid-area: header;
	}

	.line {
		grid-area: line;
		width: 90%;
		text-align: center;
		margin: 5rem 0rem 0 0;
		li {
			width: 1rem;
			height: 1rem;
			border-radius: 1rem;
			border: 1px solid #0f5090;
			margin: 0 2rem 0 2rem;
			display: inline-block;
			color: white;
			position: relative;
			background: #0f5090;
		}
		li::before {
			content: '';
			position: absolute;
			top: 0.5rem;
			left: 1rem;
			width: 4.2rem;
			height: 0.15rem;
			background: #0f5090;
			z-index: -1;
		}
		li:last-child {
			background: white;
		}
		li:last-child::before {
			display: none;
		}
	}

	.title {
		grid-area: title;
		text-align: center;
		width: 100%;
		margin: 0 0 4rem 0;
		color: #7fa7c9;
	}
	.form {
		grid-area: form;
		justify-self: center;
		display: flex;
		flex-direction: column;

		label {
			font-size: 1.1rem;
			color: #7fa7c9;
		}
		input {
			border-top: hidden;
			border-right: hidden;
			border-left: hidden;
			border-bottom: 1px solid #7fa7c9;
			margin-bottom: 2.5rem;
			&:focus {
				outline: none;
			}
		}

		.div_error {
			color: red;
			text-align: center;
			margin-top: 2rem;
		}
	}
	.button {
		grid-area: button;
		width: 100%;
		margin-top: 9rem;
		.div_buttons {
			display: flex;
			justify-content: space-around;
			.button_next {
				color: white;
				background-color: #fe6d1a;
				border-radius: 0.8rem;
				width: 8rem;
				height: 1.5rem;
				font-size: 0.7rem;
				border: none;
				cursor: pointer;
			}
			.button_back {
				color: white;
				background-color: #075fa6;
				border-radius: 0.8rem;
				width: 8rem;
				height: 1.5rem;
				font-size: 0.7rem;
				border: none;
				cursor: pointer;
			}
		}
	}
	@media (min-width: 720px) {
		.line {
			width: 97%;
		}
	}
`;
