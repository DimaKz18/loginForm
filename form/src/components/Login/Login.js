import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { authThunk } from '../../redux/app-reducer'
import { Redirect } from 'react-router-dom';
import { maxLengthCreator, requiredField } from '../validators/validators';
import { Input } from '../FormControls/FormControls';
import '../FormControls/FormControls.css'
import './Login.css'

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form className='login-form' onSubmit={props.handleSubmit}>
            <div>
                <Field className='login-form-input' placeholder='email' name='email' component={Input} validate={[requiredField, maxLength50]} />
            </div>
            <div>
                <Field className='login-form-input' placeholder='password' name='password'component={Input} validate={[requiredField, maxLength50]} type='password' />
            </div>
            {props.error && <div className='text-error'>{props.error}</div>} 
            <div>
                <button className='login-form-btn'>Login</button>
            </div>
        </form>
    )
    
}

const ReduxLoginForm = reduxForm ({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.authThunk(formData.email, formData.password)
    }
    if(props.isAuth) {
        return <Redirect to='/main'/>
    }
    return (
        <div className='login-content'>
            <h1>Login please to enter your page</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth,
    }
}
export default connect(mapStateToProps, {authThunk})(Login);