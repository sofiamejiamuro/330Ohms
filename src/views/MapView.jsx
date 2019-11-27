import React, { Component } from 'react'
import { Map, TileLayer , Marker, Popup} from 'react-leaflet'

import LocateControl from '../components/LocateControl'
import { data } from '../data/data.json'

export default class Mapa extends Component {
    state = {

        lat: 21.87982,
        lng: -102.296,
        zoom: 13,
        stores : data,
     
        }
    
    render() {
        const center = [this.state.lat, this.state.lng]
        const locateOptions = {
            position: 'topright',
            strings: {
                title: 'Show me where I am, yo!'
            },
            onActivate: () => {
            } // callback before engine starts retrieving locations
        }
        return (
            <div className="container-map">
                <Map center={center} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
                    />
                    {
                        this.state.stores.map(store => 
                            <Marker position={ [ store.geolocation.latitude, store.geolocation.longitude ]} key={ store.id }>
                                <Popup>
                                    { store.state}
                                </Popup>
                            </Marker>
                            )
                    }
                    <LocateControl options={locateOptions} startDirectly />
                </Map>
                
            </div>
        );
    }
}