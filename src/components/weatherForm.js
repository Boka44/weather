import React, { Component } from 'react';

export class WeatherForm extends Component {

  constructor(props) {
      super(props);
      this.state = {
          lat: '',
          long: '',
          city: {
            losAngeles: {
              lat: 34.0522,
              long: -118.2437
            },

            inclineVillage: {
              lat: 39.2512962,
              long: -119.9729674
            },

            portland: {
              lat: 45.512794,
              long: -122.679565
            },

            seattle: {
              lat: 47.608013,
              long: -122.335167
            },

            detroit: {
              lat: 42.331429,
              long: -83.045753
            },

            newYork: {
              lat: 40.730610,
              long: -73.935242
            },

            lusaka: {
              lat: -15.411899,
              long: 28.2858805
            },

            london: {
              lat: 51.509865,
              long: -0.118092
            },

            paris: {
              lat: 48.864716,
              long: 2.349014
            },

            zman: {
              lat: 43.9722,
              long: 15.1133
            },

            tokyo: {
              lat: 35.652832,
              long: 139.839478
            },

            sydney: {
              lat: -33.865143,
              long: 151.209900
            },

            auckland: {
              lat: -36.848461,
              long: 174.763336
            },

            stockholm: {
              lat: 59.334591,
              long: 18.063240
            },

            beijing: {
              lat: 39.913818,
              long: 116.363625
            },

            bangkok: {
              lat: 13.736717,
              long: 100.523186
            },

            rioDeJaneiro: {
              lat: -22.970722,
              long: -43.182365
            },

            mexicoCity: {
              lat: 19.432608,
              long: -99.133209
            }
          }
      }
      this.onChangeLat = this.onChangeLat.bind(this);
      this.onChangeLong = this.onChangeLong.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeLat = (e) => {
      
        this.setState({
            lat: e.target.value
        });
      
  }

  onChangeLong = (e) => {
   
      this.setState({
          long: e.target.value
      });
    
  }

  onChangeCity = (e) => {
    let value = e.target.value;
    if(value === "select") {

  } else { 

    let currentCity = this.state.city[value]

    this.setState({
      lat: currentCity.lat,
      long: currentCity.long
    })
  }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.lat.length === 0 || this.state.long.length === 0) {
        alert("You must enter something in both fields!");
    }else{
      this.props.onSubmit(this.state.lat, this.state.long)
    }

  }

  render() {
      return(
          <div>
            
            <div id="form">
                
                <form onSubmit={this.onSubmit}>
                    <label>Enter the Latitude in <strong>decimal</strong> format:</label>
                    <br/>
                    <input required type="text" name="lat" value={this.state.lat} onChange={this.onChangeLat}/>
                    <br/>
                    <label>Enter the Longitude in <strong>decimal</strong> format:</label> 
                    <br/>
                    <input required type="text" name="long" value={this.state.long} onChange={this.onChangeLong}/>
                    
                    <br/>
                    <label>Select city: (optional)</label>
                    <br/>
                    <select value={this.value} onChange={this.onChangeCity}>
                      <option value="select">Select a city</option>
                      <option value="losAngeles">Los Angeles, CA</option>
                      <option value="inclineVillage">Incline Village, NV</option>
                      <option value="portland">Portland, OR</option>
                      <option value="seattle">Seattle, WA</option>
                      <option value="detroit">Detroit, MI</option>
                      <option value="newYork">New York, NY</option>
                      <option value="lusaka">Lusaka, Zambia</option>
                      <option value="london">London, United Kingdom</option>
                      <option value="paris">Paris, France</option>
                      <option value="zman">Zman, Croatia</option>
                      <option value="tokyo">Tokyo, Japan</option>
                      <option value="sydney">Sydney, Australia</option>
                      <option value="auckland">Auckland, New Zealand</option>
                      <option value="stockholm">Stockholm, Sweden</option>
                      <option value="beijing">Beijing, China</option>                      
                      <option value="bangkok">Bangkok, Thailand</option>
                      <option value="rioDeJaneiro">Rio de Janeiro, Brazil</option>
                      <option value="mexicoCity">Mexico City, Mexico</option>
                    </select>
                    <br/>
                    <button id="submit">Submit</button>
                </form>
            </div>
          </div>
      )
  }
}

