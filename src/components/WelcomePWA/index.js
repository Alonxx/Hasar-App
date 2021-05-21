import {Link} from 'react-router-dom';
import {StyledContainer} from './styled';
import logo from '../../assets/logo.png';

const WelcomePWA = () => {
	return (
		<StyledContainer>
			<div className='div_logo'>
				<img className='img_logo' src={logo} alt='logo'></img>
			</div>

			<h1 className='title'>Bienvenido a Hasar App</h1>

			<h2 className='description'>
				Obten el horoscopo del dia de forma simple y rapida
			</h2>
			<div className='div_button'>
				<Link to='/'>
					<button className='button'>Comenzar</button>
				</Link>
			</div>
		</StyledContainer>
	);
};

export default WelcomePWA;
