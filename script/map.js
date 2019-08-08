var LocationData = [
    [-7.929525, 112.633516, "<h4><a href='Main Str. 213' target='_blank'>Main Str. 213</a></h4>Phone: <a href=\"tel:123123\">123123</a>"],
];

function initialize() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var isDraggable = w > 480 ? true : false;

    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 15,
        center: new google.maps.LatLng(-7.931618, 112.630952),
        navigationControl: false,
        disableDefaultUI: true,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        draggable: isDraggable
    });

    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();

    var customMapType = new google.maps.StyledMapType([
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ],

    {
        name: 'Custom Style'
    });

    var customMapTypeId = 'custom_style';

    for (var i in LocationData) {
        var p = LocationData[i];
        var latlng = new google.maps.LatLng(p[0], p[1]);
        bounds.extend(latlng);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: 'images/pin.png',
            title: p[2]
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.title);
            infowindow.open(map, this);
        });
    }

//map.fitBounds(bounds);
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}

google.maps.event.addDomListener(window, 'load', initialize);