import React,{useRef, useEffect, useContext, useCallback} from 'react';
import mapboxgl from 'mapbox-gl';
import io from 'socket.io-client';
import {SocketContext} from '../context/socket'
// var mqtt = require('mqtt')
// var options ={
//     name: "deployment-u4a179e5",
//     username: "alasclient",
//     password: "client",
//     protocol: "mqtts"
// }
// var host = 'ws://' + 'u4a179e5.en.emqx.cloud' + ':8084';
// var client = mqtt.connect(host,options)
// client.on('connect', ()=>{
//     console.log("cnnected")
// })

function Map1() {
    const socket = useContext(SocketContext);
    const mapcontainerRef = useRef(null);
    var mapdata = [];
    var geojson;
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZHJ1bCIsImEiOiJja2dsNDV3ZHQwMmZzMnBxbjR3MHFmamZ4In0.JYzPwo6Yaf3H1lGDJVpV9Q';
    function createmap() {
        var map = new mapboxgl.Map({
            container: mapcontainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [-79.999732, 40.4374],
            zoom: 15,
        });
        map.on('load', function() {
            map.addSource('trees',{
                type: 'geojson',
                data: geojson
            });

            socket.on('datas', data => {
                console.log("map data has arrived")
                map.getSource('trees').setData(geojson);
            })
            map.addLayer({
                id: 'trees-heat',
                type: 'heatmap',
                source: 'trees',
                maxzoom: 20,
                paint: {
                    'heatmap-weight': {
                        property: 'dbh',
                        type: 'exponential',
                        stops: [
                            [1,0],
                            [62,1]
                        ]
                    },
                    'heatmap-intensity': {
                        stops: [
                            [11,1],
                            [20,3]
                        ]
                    },
                    'heatmap-color': [
                        'interpolate',
                        ['linear'],
                        ['heatmap-density'],
                        0,
                        'rgba(23,22,239,0)',
                        0.2,
                        'rgb(208,20,230)',
                        0.4,
                        'rgb(166,189,29)',
                        0.6,
                        'rgb(10,169,207)',
                        0.8,
                        'rgb(28,144,153)'
                    ],
                    'heatmap-radius': {
                        stops: [
                            [11,15],
                            [15,20]
                        ]
                    },
                    'heatmap-opacity': {
                        default: 0.8,
                        stops: [
                            [19,0.8],
                            [20,0]
                        ]
                    },
                }
            }, 'waterway-label');
            map.addLayer({
                id: 'trees-point',
                type: 'circle',
                source: 'trees',
                minzoom: 19,
                paint: {
                    'circle-radius': {
                        property: 'dbh',
                        type: 'exponential',
                        stops: [
                            [{ zoom: 15, value: 1}, 5],
                            [{ zoom: 15, value: 62}, 10],
                            [{ zoom: 22, value: 1}, 20],
                            [{ zoom: 22, value: 62}, 50],
                        ]
                    },
                    'circle-color': {
                        property: 'dbh',
                        type: 'exponential',
                        stops: [
                            [0, 'rgba(236,222,239,0)'],
                            [10, 'rgb(236,222,239)'],
                            [20, 'rgb(208,209,230)'],
                            [30, 'rgb(166,189,219)'],
                            [40, 'rgb(103,169,207)'],
                            [50, 'rgb(28,144,153)'],
                            [60, 'rgb(1,108,89)']
                        ]
                    },
                    'circle-stroke-color': 'white',
                    'circle-stroke-width': 1,
                    'circle-opacity': {
                        stops: [
                            [19, 0],
                            [20, 1]
                        ]
                    }
                }
            }, 'waterway-label');
            map.on('click', 'trees-point', function(e) {
                new mapboxgl.Popup()
                  .setLngLat(e.features[0].geometry.coordinates)
                  .setHTML('<b>DBH:</b> ' + e.features[0].geometry.coordinates)
                  .addTo(map);
            });
            
        })
    }

    function geojsondatafunction(){
        geojson = {
            type: 'FeatureCollection',
            features: mapdata,
        }
        console.log(geojson);
    }
    useEffect(() => {
        fetch("http://localhost:5000/api/map")
        .then(res=>res.json())
        .then(data=>{
            data.data.forEach(dataobject => {
                mapdata.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [dataobject.longitude,dataobject.latitude]
                    },
                    properties: {
                        id: dataobject.id,
                        name: dataobject.name,
                        description: dataobject.description
                    },
                });
            })
        });
        geojsondatafunction();
        createmap();
        socket.on('datas', data => {
            if(data.action=='mapdata'){
                console.log(data)
                mapdata.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [data.message.longitude,data.message.latitude]
                    },
                    properties: {
                        id: data.message.id,
                        name: data.message.name,
                        description: data.message.desc
                    },
                });
                geojsondatafunction();
            }
        })
        return () => {
            socket.off('datas', data => {
                console.log(data.message);
            })
        }
    },[]);

    return (
        <div className="map-container" ref={mapcontainerRef}>
            
        </div>
    );
}

export default Map1;