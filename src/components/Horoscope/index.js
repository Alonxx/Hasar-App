import React, {useState, useEffect} from 'react';
import {StyledContainer} from './styled';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getHoroscope, clearHoroscope} from '../../redux/actions/index';
import Nav from '../Nav';
import {horoscopeLoader, getSign, getBirthday} from '../../utils';

const Horoscope = ({clearHoroscope, getHoroscope, horoscope, userData}) => {
	const [Sign, setSign] = useState('');
	const [daysBirthday, setdaysBirthday] = useState('');

	useEffect(() => {
		getHoroscope();
		userData.date && setSign(getSign(userData.date));
		userData.date && setdaysBirthday(getBirthday(userData.date));
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		return () => clearHoroscope();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!horoscope || !userData || !Sign) {
		return (
			<StyledContainer>
				<div className='header'>
					<div className='header'>
						<Nav link={'/formuser'} text={'Tu Horoscopo'} /> //
					</div>
				</div>
				<div className='button loader'>{horoscopeLoader()}</div>
			</StyledContainer>
		);
	} else {
		return (
			<StyledContainer>
				<div className='header'>
					<div className='header'>
						<Nav link={'/formuser'} text={'Tu Horoscopo'} />
					</div>
				</div>
				{userData && horoscope && Sign && (
					<div>
						<div className='image'>
							<img src={`/images/${Sign}.png`} alt='Sign'></img>
						</div>
						<div className='main'>
							<span className='title'> Hola {userData.name}</span> <br />
							<span>Tu horoscopo para hoy dice:</span>
							<br />
							<span>En el amor: {horoscope[Sign].amor}</span>
							<br />
							<span>En la salud: {horoscope[Sign].salud}</span>
							<br />
							<span>En el dinero: {horoscope[Sign].dinero}</span>
							<br />
							<span>Tu color: {horoscope[Sign].color}</span>
							<br />
							<div>
								<span> Faltan {daysBirthday} dias para tu cumpleaños</span>
							</div>
						</div>
						<div className='button'>
							<Link to='/'>
								<div>
									<button className='button_next'>CONTINUAR</button>
								</div>
							</Link>
						</div>
					</div>
				)}
			</StyledContainer>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		userData: state.userData,
		horoscope: state.horoscope.horoscopo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getHoroscope: () => dispatch(getHoroscope()),
		clearHoroscope: () => dispatch(clearHoroscope()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Horoscope);
