import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class InfoPanel extends React.Component {
	render () {
		return (
			<Paper className="info-paper-outer">
				<Typography variant="h3">
					Info
				</Typography>
			</Paper>
		);
	}
}

export default InfoPanel;
