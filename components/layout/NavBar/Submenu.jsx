import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

const Submenu = ({ submenu, handleClose }) => {
    return submenu.map((sm, i) => {
        return (
            <>
                {sm.submenu ?
                    <>
                        <MenuItem key={i} onClick={handleClose} disableRipple sx={{ fontSize: 20, fontWeight: 600 }}>
                            {sm.title}
                        </MenuItem>
                        <Submenu submenu={sm.submenu} handleClose={handleClose} />
                    </>
                    : <MenuItem key={i} onClick={handleClose} disableRipple>
                        {sm.title}
                    </MenuItem>
                }
            </>
        )
    })
}



export default Submenu;