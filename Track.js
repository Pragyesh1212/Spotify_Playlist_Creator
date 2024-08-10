import React from "react";
import "./Track.css";
class Track extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:""
        };
        this.addTrack=this.addTrack.bind(this);
        this.removeTrack=this.removeTrack.bind(this);
        
    }
    addTrack(event){
        this.props.onAdd(this.props.track);
    }
    removeTrack(){
        this.props.onRemove(this.state.track);
    }
    renderAction(){
        if(this.props.isRemoval){
            return(
                <button className="Track-action" onClick={this.removeTrack}> - </button>
            );
        }
        return(
            <button className="Track-action" onClick={this.addTrackTrack}> + </button>
        );
    }
    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>
                        <iframe
                        src={"https://open.spotify.com/embed/track/" + this.props.track.id}
                        width="300"
                        height="80"
                        frameborder="0"
                        allowTransparency="true"
                        allow="encrypted-media"
                        title="preview"
                        />
                    </p>
                </div>
             </div>

    )};
}
export default Track;