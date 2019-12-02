import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DragHandleIcon from "@material-ui/icons/DragHandle";

const DragHandle = SortableHandle(() => (
  <ListItemIcon>
    <DragHandleIcon />
  </ListItemIcon>
));

const SortableItem = SortableElement(({ text }) => (
	<div className = "playlist-item">
	  <ListItem ContainerComponent="div">
	    <ListItemText primary={text} />
	    <ListItemSecondaryAction>
	      <DragHandle />
	    </ListItemSecondaryAction>
	  </ListItem>
	</div>
));

const SortableListContainer = SortableContainer(({ items }) => (
  <List className = "playlist" component="div">
    {items.map(({ id, text }, index) => (
      <SortableItem className = "playlist-item"  key={id} index={index} text={text} />
    ))}
  </List>
));

class PlaylistFrame extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			songs: [],
			index: 0,
			playlistIndex: 4,
		};
		this.onSortEnd = this.onSortEnd.bind(this);
		this.enqueue = this.enqueue.bind(this);
		this.dequeue = this.dequeue.bind(this);
	}

	enqueue(song) {
		this.setState({ playlistIndex: this.state.playlistIndex + 1 })
		this.state.songs.push({id: ""+this.state.playlistIndex, text: song});
		this.forceUpdate();
	}
	dequeue(){
		let song = this.state.songs.shift();
		this.forceUpdate();
		return (song.text);
	}
	current() {
		return this.state.songs[this.state.index].text;
	}
	inc() {
		if (this.state.index < this.state.songs.length - 1) {
			this.state.index += 1;
		}
	}
	dec() {
		if (this.state.index > 0){
			this.state.index -= 1;
		}
	}
	onSortEnd(idxs, e){
		if (idxs.oldIndex == this.state.index) {
			this.setState({index : idxs.newIndex});
		}
		this.setState({songs: arrayMove(this.state.songs, idxs.oldIndex, idxs.newIndex)});
	}
	render() {
		return (
			<div>
				<SortableListContainer items={this.state.songs} onSortEnd={this.onSortEnd} useDragHandle={true} lockAxis="y"/>
			</div>
	);
	}
}

export default PlaylistFrame
