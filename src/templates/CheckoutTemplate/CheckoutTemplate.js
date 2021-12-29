import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../utilities/constant'

export const CheckoutTemplate = (props) => {

    // console.log('localStorage', localStorage.getItem(USER_LOGIN));
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem(USER_LOGIN)) {
            navigate('/login');
        }
    })





    return (
        <div>
            {props.children}
        </div>
    )
}
