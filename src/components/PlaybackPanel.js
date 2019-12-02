import React from 'react';
import Paper from '@material-ui/core/Paper';

import PlaybackControls from './PlaybackControls';

class PlaybackPanel extends React.Component {
	render () {
		return (
			<Paper className="playback-paper-outer">
				<PlaybackControls />
			</Paper>
		);
	}
}

export default PlaybackPanel;
