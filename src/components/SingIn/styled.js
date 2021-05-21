import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 99vw;
	height: 99vh;
	display: grid;
	grid-template-areas:
		'photo'
		'button';

	justify-content: center;
	align-content: center;

	.photo {
		grid-area: photo;
		justify-self: center;

		.img_perfil {
			border-radius: 90%;
		}
	}
	.button {
		margin-top: 4rem;
		grid-area: button;

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
`;
