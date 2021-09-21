import React from 'react';

import { render } from '@testing-library/react';
import Header from '../../components/Header';
import AppProvider from '../../hooks';

describe("Header Component",()=>{
    it("Should be able do render GoBack button correctly",async ()=>{
        const {getByTestId,debug} = render(
            <Header isBack={true}/>
        )
        expect(getByTestId('goback-button')).toBeInTheDocument()
    })
    it("Should be able do render Cart button Correctly",async ()=>{
        const {getByText,debug} = render(
            <AppProvider>
                <Header />
            </AppProvider>
        )
        expect(getByText('0')).toBeInTheDocument()
    })
})