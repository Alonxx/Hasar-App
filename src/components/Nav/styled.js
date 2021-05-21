import styled from 'styled-components';
export const StyledContainer = styled.div`
	width: 99vw;

	.nav {
		display: flex;
		position: fixed;
		z-index: 1;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 2.8rem;
		overflow: hidden;
		background-color: #075fa6;
		.div_content {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 95%;
			justify-content: space-between;

			h2 {
				color: white;
			}
			.icon_back {
				font-size: 2.1rem;
				color: white;
			}
		}
	}
`;
