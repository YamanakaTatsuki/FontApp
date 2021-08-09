import React,{useState} from 'react';
import Button from '@material-ui/core/Button';

const FontType = (props) => {
    return(
        <div>
            <Button onClick={()=>{props.setFont('ScrumFontLine-Bold')}} variant="outlined" style={{fontFamily:'ScrumFontLine-Bold'}} >
                Monochorome1
            </Button>
            <Button onClick={()=>{props.setFont('ScrumFontDiagonalline-Bold')}} variant="outlined" style={{fontFamily:'ScrumFontDiagonalline-Bold'}} >
                Monochrome2
            </Button>
            <Button onClick={()=>{props.setFont('ScrumFontColor-Bold')}} variant="outlined" style={{fontFamily:'ScrumFontColor-Bold'}} >
                COLOR1
            </Button>
            <Button onClick={()=>{props.setFont('MathandCodingColor-Bold')}} variant="outlined" style={{fontFamily:'MathandCodingColor-Bold'}} >
                COLOR2
            </Button>
        </div>
    );
}

export default FontType;