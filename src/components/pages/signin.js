import React from 'react'

import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function signin() {
    return (
        <div>
            <header className="App-header">
            <AmplifySignOut/>
             <h2>My App Content</h2>
            </header>
        </div>
    )
}

export default withAuthenticator(signin)
