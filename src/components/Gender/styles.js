import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 99vw;
	display: grid;
	grid-template-areas:
		'header'
		'line'
		'title'
		'gender'
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
			background: white;
			border: 1px solid #0f5090;
			margin: 0 2rem 0 2rem;
			display: inline-block;
			color: white;
			position: relative;
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
		li:first-child {
			background: #0f5090;
		}
		li:last-child::before {
			display: none;
		}
	}

	.title {
		grid-area: title;
		text-align: center;
		margin: 0 0 4rem 0;
		color: #7fa7c9;
	}
	.gender {
		grid-area: gender;
		justify-self: center;

		.img_gender {
			width: 6rem;
			cursor: pointer;
		}

		.img_gender_select {
			background: rgb(37, 150, 190, 0.1);
		}

		.div_error {
			color: red;
			text-align: center;
			margin-top: 2rem;
		}
	}

	.button {
		justify-self: center;
		margin-top: 9rem;
		grid-area: button;

		.button_next {
			color: white;
			background-color: #fe6d1a;
			border-radius: 0.8rem;
			font-size: 0.8rem;
			width: 12rem;
			height: 2rem;
			border: none;
			cursor: pointer;
		}
	}

	@media (min-width: 720px) {
		.line {
			width: 97%;
		}
	}
`;
