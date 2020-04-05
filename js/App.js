import React from 'react';
import {Provider } from 'react-redux'
import AppNavigator from './Navigator/AppNavigator'
import store from './store'

export default () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}







