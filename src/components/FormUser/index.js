import React, {useState} from 'react';
import {StyledContainer} from './styled';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {addUserData} from '../../redux/actions';
import Nav from '../Nav';
import {arrayForm} from '../../utils'



const FormUser = ({addUserData}) => {
	const [Inputs, setInputs] = useState({});
	const [Error, setError] = useState(false);

	let history = useHistory();

	const handleonChangue = (e) => {
		setInputs({...Inputs, [e.target.name]: e.target.value});
	};

	const handleonClick = (e) => {
		if (!Inputs.name || !Inputs.email || !Inputs.date) {
			setError(true);
		} else {
			setError(false);
			addUserData(Inputs);
			history.push('/horoscope');
		}
	};

	return (
		<StyledContainer>
			<div className='header'>
				<div className='header'>
					<Nav link={'/gender'} text={'Tus Datos'} />
				</div>
			</div>
			<div className='line'>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div className='title'>
				<h3>INGRESA TUS DATOS</h3>
			</div>
			<div className='form'>
				{arrayForm &&
					arrayForm.map((el) => (
						<div key={el.name}>
							<label>{el.label}:</label>
							<input
								name={el.name}
								type={el.type}
								onChange={handleonChangue}
							></input>
						</div>
					))}

				<div className='div_error'>
					{Error ? <span>Todos los campos deben ser llenados</span> : null}
				</div>
			</div>
			<div className='button'>
				<div className='div_buttons'>
					<Link to='/Gender'>
						<button className='button_back'>VOLVER</button>
					</Link>

					<button onClick={handleonClick} className='button_next'>
						CONTINUAR
					</button>
				</div>
			</div>
		</StyledContainer>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addUserData: (data) => dispatch(addUserData(data)),
	};
};

export default connect(null, mapDispatchToProps)(FormUser);
