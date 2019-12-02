import React from 'react';
const { dialog } = require('electron').remote

import PlaybackControls from './components/playback-controls.component';
import ProgressBar from './components/progress-bar.compenent';
import PlaylistFrame from './components/playlist-frame.component'

class Play extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			currentTrack: null,
			currentSong: ""
		};
		this.progressBar = React.createRef();
		this.playlist = React.createRef();
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.loadFile = this.loadFile.bind(this);
		this.sliderUpdate = this.sliderUpdate.bind(this);
	}

	loadFile () {
		let path;
		path = dialog.showOpenDialog();
		if (path) {
			this.playlist.current.enqueue(path)
		} else {
				console.log("No file selected");
		}
	}
	secTommss2(sec){
	  return new Date(sec*1000).toUTCString().split(" ")[4]
	}
	play() {
		if (!this.state.currentTrack) {
			let track
			track = new Audio(this.playlist.current.dequeue());
			track.ontimeupdate = function(){
				this.progressBar.current.update(track.currentTime / track.duration * 100, this.secTommss2(track.currentTime));
			}
			track.onended = function(){
				this.setState({currentTrack: null});
				this.playlist.current.inc();
				this.play();
			}
			track.ontimeupdate = track.ontimeupdate.bind(this);
			track.onended = track.onended.bind(this);
			this.state.currentTrack = track;
			this.setState({currentSong: track.src})
	}
		this.state.currentTrack.play();
	}
	pause() {
		this.state.currentTrack.pause();
	}
	next() {
		this.state.currentTrack.pause();
		this.state.currentTrack = null;
		this.play();
	}
	prev() {
			this.state.currentTrack.currentTime = 0;
	}

	sliderUpdate(event, newValue){
		this.progressBar.current.update(newValue, this.secTommss2(this.state.currentTrack.currentTime));
		this.state.currentTrack.currentTime = this.state.currentTrack.duration * (newValue / 100);
	}

  render() {
    return (
			<div className="row">
				<PlaybackControls  ref={this.progressBar} currentSong={this.state.currentSong} sliderUpdate={this.sliderUpdate} play={this.play} pause={this.pause} next={this.next} prev={this.prev} onLoadClick={this.loadFile}/>
				<PlaylistFrame ref={this.playlist} />
			</div>
    );
  }
}


export default Play
