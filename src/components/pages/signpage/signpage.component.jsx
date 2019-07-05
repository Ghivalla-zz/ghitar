import React from 'react';
import './signpage.styles.scss';
import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';

const SignPage =()=>(
	<div className='sign'>
		<SignIn/>
		<SignUp/>
	</div>
);
export default SignPage;