import React, { Component } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import LocateControl from '../components/LocateControl'


import { stores } from '../data/stores.json';
import Navbar from '../components/Navbar'

export default class MapView extends Component {
    state = {
        stores : stores,
        zoom : 15,
        lat : 21.87982 ,
        lng : -102.296
    }

    render () {
        const center = [ this.state.lat, this.state.lng ]
        const locateOptions = {};
        return (
            <div>
                <Navbar/>
                <Map center = { center } zoom={this.state.zoom}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"/>  

                {
                    this.state.stores.map(store => 
                        <Marker position={[store.geolocation.latitude, store.geolocation.longitude]} key={store.id}>
                            <Popup>
                                {
                                    store.state
                                }
                            </Popup>

                        </Marker>    
                    )
                }    

                <LocateControl options={ locateOptions } startDirectly />
                </Map>
                <p>holi consoli desde mapoli</p>  

            </div>
        )
    }
}