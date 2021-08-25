import React from 'react';
import Body from './components/Body components/body';
import Header from './components/Headercomponets/Header';
import MUIRichTextEditor from './rich-text-editor';

const App=(props)=>{

    return(
        <div>
            <Header />
            <Body/>
            <MUIRichTextEditor/>
        </div>
    );
    }

export default App;