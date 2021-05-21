import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 99vw;
	display: grid;
	grid-template-areas:
		'header'
		'image'
		'main'
		'button';

	.header {
		grid-area: header;
	}

	.image {
		grid-area: image;
		margin: 7rem 0 0 0rem;
		justify-content: center;

		img {
			height: auto;
			width: 16rem;
		}
	}
	.main {
		grid-area: main;
		width: 100%;
		margin: 3rem 0 0 0;
		span {
			margin: auto;
			display: table;
		}
	}

	.loader {
	}

	.button {
		grid-area: button;
		margin-top: 3rem;
		display: flex;
		justify-content: center;

		.button_next {
			color: white;
			background-color: #fe6d1a;
			border-radius: 0.8rem;
			width: 12rem;
			height: 2.5rem;
			border: none;
			cursor: pointer;
		}
	}
	@media (min-width: 720px) {
		.image {
			grid-area: image;
			margin: 7rem 0 0 5rem;

			img {
				height: auto;
				width: 22rem;
			}
		}
	}
`;
