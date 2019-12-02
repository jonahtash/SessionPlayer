import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

class NowPlayingPanel extends React.Component {
	render() {
		return(
			<Box component="div" className="now-playing-div">
				<Paper className="now-playing-paper">
					<Typography variant="h5" component="h3">Now playing:</Typography>
					<Typography variant="h5" component="h3" className="song-title"> {decodeURIComponent(this.props.song.split('/').slice(-1)[0])}</Typography>
				</Paper>
			</Box>
		);
	}
}

export default NowPlayingPanel;
