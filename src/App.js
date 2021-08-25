import React from 'react';
import Body from './components/Body components/body';
import Header from '/Users/yamanakatatsuki/FontApp/src/components/Headercomponets/Header.js';
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