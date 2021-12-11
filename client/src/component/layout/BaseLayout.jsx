import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../common/Header';
import { Loader } from '../common/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { showSpinner } from '../../store/slices/spinnerSlice';

const BaseLayout =(props)=>{
const dispatch= useDispatch()
const spinner = useSelector(showSpinner);
//dispatch(setSpinner(true))
    return (
        <>
            <Header/>
               { spinner && <Loader/>} 
            <div className="main-content" id="main-content">
                <Outlet/>
            </div>
        </>
    )
}
export {BaseLayout}
