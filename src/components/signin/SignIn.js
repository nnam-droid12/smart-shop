import React from 'react';
import './SignIn.scss';
import CustomButton from '../custom-button/Custombutton';

import FormInput from '../form-input/Forminput';
import GoogleButton from 'react-google-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state ={
          email: '',
          password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (event) =>{
      const [ value, name ] = event.target;
      this.setState({ [value]:name })
    }
    render(){
        return(
            <div className='sign-in'>
                <h2 className='h2'>I alreay have an account</h2>
                <span className='span'>sign in with your email and password</span>
                <form onSubmit={this.handleSubimit}>
                    <FormInput name='email' 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required />
                     <FormInput name='password' 
                     type='password' 
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label='password'
                     required />
                     <div className='buttons'>
                     <CustomButton type='submit'> Sign In </CustomButton>
                     <GoogleButton
                        onClick={signInWithGoogle}
                        label='Sign In With Google'
                        style={{marginLeft: '14px'}}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;