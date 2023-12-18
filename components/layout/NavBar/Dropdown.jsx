import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import StyledMenu from './StyledMenu';
import Submenu from './Submenu';


const Dropdown = ({ panel, anchorEl, open, handleClose, data }) => {

  console.log("prinitn data of drop down", data)
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
        width="100%"
      >
        <Grid container md={12} >
          {data?.map((data, i) => {
            console.log("printing child menu inside drop down", data)
            return (
              <Grid item container md={3} >
                <div style={{ width: "100%" }}>
                  <MenuItem key={i} onClick={handleClose} disableRipple sx={{ fontSize: 24, fontWeight: 700 }}>
                    {data.title}
                  </MenuItem>
                  {data?.submenu && <Submenu submenu={data?.submenu} handleClose={handleClose} key={i} />}
                </div>
              </Grid>
            )
          })}
        </Grid>
      </StyledMenu>

    </div>
  )
}
export default Dropdown;