import React from 'react';
import MuiTextField from './input';
import Box from '@material-ui/core/Box';

const Body = (props) => {
    return(
        <div>
            {/* <MuiTextField/> */}
            <Box display="flex" justifyContent="center" p={1} m={1} bgcolor="background.paper" sx={{ maxWidth: '100%' }}>
                <Box p={1} bgcolor="background.paper">
                    <MuiTextField/>
                </Box>
            </Box>
        </div>
    );
}

export default Body;