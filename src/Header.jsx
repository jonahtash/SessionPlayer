import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {

  render() {
    return (
			<div >
				<AppBar position="static">
					<Toolbar variant="dense">
					<IconButton edge="start" color="inherit" aria-label="Menu">
						<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit">
						Sessioning
						</Typography>
				</Toolbar>
			</AppBar>
			</div>
    );
  }
}


export default Header
