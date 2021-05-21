import React, {useEffect} from 'react';
import {StyledContainer} from './styled';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser,clearUser} from '../../redux/actions';
import {singinLoder} from '../../utils';

const SingIn = ({clearUser, getUser, User}) => {
	useEffect(() => {
		getUser();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		return () => clearUser();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<StyledContainer>
			{User.length ? (
				<>
					{User.map((el, i) => (
						<div className='photo' key={i}>
							<img
								className='img_perfil'
								src={el.picture.large}
								alt='perfil'
							></img>
						</div>
					))}
					<div className='button'>
						<Link to='/Gender'>
							<button className='button_next'>INGRESAR</button>
						</Link>
					</div>
				</>
			) : (
				singinLoder()
			)}
		</StyledContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		User: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => dispatch(getUser()),
		clearUser: () => dispatch(clearUser()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
