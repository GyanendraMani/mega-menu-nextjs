import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Typography } from '@mui/material';
import StyledMenu from './StyledMenu';

const SingleDropdown = ({ panel, anchorEl, open, handleClose, data }) => {
    return (
        <div>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open === panel}
                onClose={handleClose}
            >
                {data?.map((data, i) => {
                    console.log("printing child menu inside drop down", data)
                    return (
                        <div style={{ width: "100%" }}>
                            <MenuItem key={i} onClick={handleClose} disableRipple >
                                {data.title}
                            </MenuItem>
                        </div>
                    )
                })}
            </StyledMenu>

        </div>
    )
}

export default SingleDropdown;