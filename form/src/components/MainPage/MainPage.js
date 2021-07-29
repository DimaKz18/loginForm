import React from 'react'
import { connect } from 'react-redux';
import { authThunk } from '../../redux/app-reducer'
import { Redirect } from 'react-router-dom';
import './MainPage.css'

const MainPage = (props) => {
    const onLogout = () => {
        props.authThunk(null, null); 
    }
    if(!props.isAuth) {
        return <Redirect to='/'/>
    }
    return (
        <div className='main-page-content'>
            <h1>Main page</h1>
            <button onClick={onLogout} className='main-page-btn'>Logout</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth,
    }
}

 export default connect(mapStateToProps, {authThunk})(MainPage)