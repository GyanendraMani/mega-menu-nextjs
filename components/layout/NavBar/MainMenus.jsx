import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dropdown from './Dropdown';
import SingleDropdown from './SingleDropdown';
import { Grid } from '@mui/material';
import menus from "../../data/nav.json"


export default function MainMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (panel) => (event) => {
    setOpen(panel);
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid container justifyContent={"center"}>
        {
          menus.map((menu, i) => {
            return (
              <>
                {menu?.childmenu ?
                  <>
                    <Dropdown
                      panel={`panel-${i}`}
                      data={menu?.childmenu}
                      anchorEl={anchorEl}
                      open={open}
                      handleClose={handleClose}
                    />
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick(`panel-${i}`)}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {menu.title}
                    </Button>
                  </>
                  : menu?.submenu ? <>
                    <SingleDropdown
                      panel={`panel-${i}`}
                      data={menu?.submenu}
                      anchorEl={anchorEl}
                      open={open}
                      handleClose={handleClose}
                    />
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick(`panel-${i}`)}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {menu.title}
                    </Button>
                  </> :
                    <Button
                      variant="contained"
                      disableElevation
                    >
                      {menu.title}
                    </Button>}
              </>
            )
          })
        }
      </Grid>

    </div>
  );
}

