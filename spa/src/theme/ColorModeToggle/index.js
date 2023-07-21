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
            href="https://auth.typovillain.com/login?client_id=6gnt6nvgsk07jomm8ie538gkdt&response_type=code&scope=aws.cognito.signin.user.admin+email+openid&redirect_uri=https%3A%2F%2Fapi.typovillain.com%2Foauth2%2Fcallback" 
            style={{marginLeft: 15, cursor: "pointer"}}
            className='fw-normal button button--outline button--primary'
            >
                Sign up / Login
            </a>
        );
    }

    return authBtn;
}