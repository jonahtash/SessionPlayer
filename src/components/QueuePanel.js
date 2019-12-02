import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class PlaybackPanel extends React.Component {
	render () {
		return (
			<Paper className="q-paper-outer">
				<Typography variant="h3">
					Queue
				</Typography>
			</Paper>
		);
	}
}

export default PlaybackPanel;
