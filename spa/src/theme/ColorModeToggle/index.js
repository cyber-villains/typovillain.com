import React, {useState, useEffect, useContext} from 'react';
import Link from '@docusaurus/Link';
import { UserContext } from '../Root';


export default function ColorModeToggleWrapper(props) {
    const user = useContext(UserContext);
    let authBtn;
    if (user) {
        authBtn = (
            <>
            <Link to='/account' className="button button--primary" style={{marginLeft: 15, cursor: "pointer"}}>
                View Profile
            </Link>
            </>
        );
    } else {
        // TODO: env vars for URLs
        authBtn = (
            <a 
            href="https://auth.villain.network/login?client_id=4jj7baft9iisgeppfpblhpauiv&response_type=code&scope=aws.cognito.signin.user.admin+email+openid&redirect_uri=https%3A%2F%2Fapi.villain.network%2Foauth2%2Fcallback" 
            style={{marginLeft: 15, cursor: "pointer"}}
            className='button button--outline button--primary'
            >
                Sign up / Login
            </a>
        );
    }

    return authBtn;
}