import {configureStore} from '@reduxjs/toolkit';
import appSlise from './appSlise';

const store = configureStore({
    reducer:{
        app:appSlise
    }
});

export default store ;