import 'react-hot-loader/patch';
import { render } from 'react-dom';
import React from 'react';
import Root from 'Root';
import { AppContainer } from 'react-hot-loader';

render(
    <AppContainer>
        <Root/>
    </AppContainer>
    , document.getElementById('content'));

