import React from 'react';
import Body from './components/Body components/body';
import Header from '/Users/yamanakatatsuki/FontApp/src/components/Headercomponets/Header.js';
import RichTextEditor from './rich-text-editor';

const App=(props)=>{

    return(
        <div>
            <Header />
            <Body/>
            <RichTextEditor/>
        </div>
    );
    }

export default App;