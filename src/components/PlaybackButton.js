import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const StyledButton = styled(Button)({
  background: 'rgba(227, 47, 47, 1)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
	'&:hover': {
		background: 'rgba(252, 59, 59, 1)',
	},
	marginLeft: 1,
	marginRight: 1,
});

class PlaybackButton extends React.Component {
	render() {
		let svgPaths = {
			"play": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
			"pause": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" ,
			"next": "M6 6h2v12H6zm3.5 6l8.5 6V6z",
			"prev" : "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"
		}
		return (
			<StyledButton aria-label={this.props.label} onClick = {this.props.onClick}><SvgIcon fontSize="large"><path d={svgPaths[this.props.icon]} /></SvgIcon></StyledButton>
		);
	}
}

export default PlaybackButton
