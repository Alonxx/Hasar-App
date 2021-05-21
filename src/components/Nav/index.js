import {StyledContainer} from './styled';
import {Link} from 'react-router-dom';
import {RiArrowLeftCircleLine} from 'react-icons/ri';

const Nav = ({link, text}) => {
	return (
		<StyledContainer>
			<div className='nav'>
				<div className='div_content'>
					<Link to={link}>
						<RiArrowLeftCircleLine className='icon_back' />
					</Link>
					<h2>{text}</h2>
				</div>
			</div>
		</StyledContainer>
	);
};

export default Nav;
