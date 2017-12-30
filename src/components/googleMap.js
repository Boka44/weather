import React, { Component } from 'react';

export class GoogleMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: undefined,
			current: undefined,
			nextBest: undefined
		}
	}

	componentDidMount(){
      this.fetchData(this.props.lat, this.props.long);      
    }

    componentWillReceiveProps(nextProps){
       this.fetchData(nextProps.lat, nextProps.long);           
    }

	fetchData(lat, long){
        if(lat === 0 && long === 0) {
          this.setState({
            info: undefined
          })
        } else {
            const mapData = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyD_JHFsXyi1nbjmgNuVoejUUe3Gy0-Uf9M`
            console.log(mapData);
            fetch(mapData).then( data => data.json() ).then( data => {
                  this.setState({
                      info: data,
                      current: data.results[1],
                      nextBest: data.results[0]
                      
                  });
                  console.log(data);
              })
          }
    }



      render() {
      	return(
      		this.state.info ? (
	      		this.state.current ? (
	      		<div>
	      			<h1>Location: </h1><h2>{this.state.current.formatted_address}</h2>
	      		</div>) : (<div><h1>Location: </h1><h2>{this.state.nextBest.formatted_address}</h2></div>))
	      	: <div></div>
      	)
      }
}

