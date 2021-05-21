import React, {useState} from 'react';
import {connect} from 'react-redux';
import {History, useHistory} from 'react-router-dom';
import {StyledContainer} from './styles';
import Gender1 from '../../assets/gen-1.png';
import Gender2 from '../../assets/gen-2.png';
import Gender3 from '../../assets/gen-3.png';
import {addGender} from '../../redux/actions';
import Nav from '../Nav';

const genders = [
	{name: 'Male', img: Gender1},
	{name: 'Non-binary', img: Gender2},
	{name: 'Female', img: Gender3},
];

const Gender = ({addGender}) => {
	const [Gender, setGender] = useState('none');
	const [Error, setError] = useState(false);
	let history = useHistory();

	const handleonClick = (e) => {
		setGender(e.target.name);
		addGender(e.target.name);
		setError(false);
	};

	

	const handleNext = () => {
		Gender === 'none' ? setError(true) : history.push('/formuser');
	};

	return (
		<StyledContainer>
			<div className='header'>
				<Nav link={'/'} text={'Tu Genero'} />
			</div>
			<div className='line'>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div className='title'>
				<h3>INGRESA TU GÉNERO</h3>
			</div>
			<div className='gender'>
				{genders &&
					genders.map((el) => (
						<img
							onClick={handleonClick}
							className={
								el.name === Gender
									? 'img_gender img_gender_select'
									: 'img_gender'
							}
							name={el.name}
							src={el.img}
							alt={el}
						></img>
					))}

				<div className='div_error'>
					{Error ? <span>Debes Seleccionar un Genero</span> : null}
				</div>
			</div>

			<div className='button'>
				<button onClick={handleNext} className='button_next'>
					INGRESAR
				</button>
			</div>
		</StyledContainer>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addGender: (gender) => dispatch(addGender(gender)),
	};
};

export default connect(null, mapDispatchToProps)(Gender);
