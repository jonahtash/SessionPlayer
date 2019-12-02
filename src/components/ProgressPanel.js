import React from 'react';
import Slider from '@material-ui/lab/Slider';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledSlider = withStyles({
  thumb: {
    height: 24,
    width: 3,
    backgroundColor: '#000000',
		borderRadius: '0',
    '&$focused, &:hover': {
      boxShadow: `0px 0px 0px ${8}px ${fade('#de235b', 0.16)}`,
    },
    '&$activated': {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade('#de235b', 0.16)}`,
    },
    '&$jumped': {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade('#de235b', 0.16)}`,
    },
  },
  track: {
    backgroundColor: '#de235b',
    height: 8,
  },
  trackAfter: {
    backgroundColor: `${fade('#de235b', 0.16)}`,
  },
  focused: {},
  activated: {},
  jumped: {},
})(Slider);

class ProgressPanel extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			progress: 0,
			elapsed: "NO SONG LOADED"
		};
		this.valueUpdate = this.valueUpdate.bind(this);
	}
	valueUpdate(p, e) {
		this.setState({progress: p, elapsed: e});
	}

	render() {
		return (
			<Box className = "slider-wrapper" component="div">
				<Paper>
					<StyledSlider value={this.state.progress} aria-labelledby="label" onChange={this.props.sliderUpdate} />
					<Typography variant="h5" component="h3">{this.state.elapsed}</Typography>
				</Paper>
			</Box>
	);
	}
}

export default ProgressPanel;
