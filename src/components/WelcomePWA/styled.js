import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	.div_logo {
		margin-top: 7rem;
		display: flex;
		justify-content: center;
		.img_logo {
			width: 300px;
		}
	}
	.title {
		margin-top: 4rem;
		text-align: center;
	}

	.description {
		text-align: center;
	}
	.div_button {
		margin-top: 4rem;
		display: flex;
		justify-content: center;
		.button {
			justify-content: center;
			color: white;
			background-color: #06d6a0;
			border-radius: 0.8rem;
			width: 12rem;
			height: 2.5rem;
			border: none;
			cursor: pointer;
		}
	}
`;
