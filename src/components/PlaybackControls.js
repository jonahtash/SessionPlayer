import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import PlaybackButton from './PlaybackButton';
import ProgressPanel from './ProgressPanel';

class PlaybackControls extends React.Component {

	constructor(props){
		super(props);
		this.progressBar = React.createRef();
	}
	update(p, e) {
		this.progressBar.current.valueUpdate(p, e);
	}

	render() {
		return (
			<Grid container  spacing={2}>
				<Grid item xs={12}>
					<ProgressPanel ref={this.progressBar} sliderUpdate={this.props.sliderUpdate}/>
				</Grid>
				<Grid item xs={12}>
					<Box component="div" spacing={10}>
						<PlaybackButton label="Play" onClick = {this.props.play} icon="play"/>
						<PlaybackButton label="Pause" onClick={this.props.pause}  icon="pause"/>
						<PlaybackButton label="Prev" onClick={this.props.prev}  icon="next" />
						<PlaybackButton label="Next" onClick={this.props.next} icon="prev"/>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" color="primary" onClick={this.props.onLoadClick}>Load</Button>
				</Grid>
			</Grid>
		);
	}
}

export default PlaybackControls
