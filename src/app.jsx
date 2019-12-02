import React from 'react';

import DenseAppBar from "./components/DenseAppBar";
import InfoPanel from './components/InfoPanel';
import PlaybackPanel from './components/PlaybackPanel';
import QueuePanel from './components/QueuePanel';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}

	}
	render() {
    return (
			<div style={{width:'100%',height:'100%',textAlign:'center'}}>
				{DenseAppBar()}
				<div className="body-div">
					<div className="body-upper">
						<InfoPanel />
						<PlaybackPanel />
					</div>
					<div className="body-lower">
						<QueuePanel />
					</div>
				</div>
			</div>
		);
  }
}
