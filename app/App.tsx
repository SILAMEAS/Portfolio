"use client"
import React, {ReactNode} from 'react';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const App = ({children}:{children:ReactNode}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default App;
