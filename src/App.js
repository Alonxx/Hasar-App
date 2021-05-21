import React from 'react';
import {Route} from 'react-router-dom';
import {GlobalStyles} from './GlobalStyles';
import SingIn from './components/SingIn';
import Gender from './components/Gender';
import FormUser from './components/FormUser';
import Horscope from './components/Horoscope';
import WelcomePWA from './components/WelcomePWA'

const App = () => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<Route exact path='/' component={SingIn} />
			<Route exact path='/Gender' component={Gender} />
			<Route exact path='/Formuser' component={FormUser} />
			<Route exact path='/Horoscope' component={Horscope} />
			<Route exact path='/welcomepwa' component={WelcomePWA} />
		</React.Fragment>
	);
};

export default App;
