if("undefined"==typeof wpthms)var wpthms={};!function(e){"use strict";"undefined"!=typeof wpthms&&(wpthms.YTShortcodeGenerator={init:function(){var o=this;e(window).on("load",function(){e(".yt-google-map").each(function(){o.googleMap(e(this))})})},googleMap:function(e){if(e.length&&(void 0===e.attr("id")||""!==e.attr("id"))){var o=e.data("settings"),n=o.latitude&&o.longitude?"latlong":"address",t=new google.maps.LatLng(o.latitude,o.longitude),a={zoom:o.zoom,disableDefaultUI:o.disableDefaultUI,center:t,mapTypeId:google.maps.MapTypeId[o.mapTypeId],scrollwheel:!1,styles:o.styles},i=new google.maps.Map(document.getElementById(o.id),a);if(o.marker){var s={position:t,map:i,flat:!0};if(o.markerTitle&&(s.title=o.markerTitle),o.icon){var r={url:o.icon,size:null,origin:null,anchor:new google.maps.Point(o.anchorh,o.anchorv),scaledSize:new google.maps.Size(o.markerw,o.markerh)};s.icon=r}var l=new google.maps.Marker(s);if(o.popup&&o.infoWindow){var d=new google.maps.InfoWindow({content:o.infoWindow});google.maps.event.addListener(l,"click",function(){d.open(i,l)})}}if("address"===n){var g=o.address,p=new google.maps.Geocoder;p.geocode({address:g},function(e,o){o==google.maps.GeocoderStatus.OK?(t=e[0].geometry.location,i.setCenter(t),console.log(t),"undefined"!=typeof l&&l.setPosition(t)):alert("Geocode was not successful for the following reason: "+o)})}google.maps.event.addDomListener(window,"resize",function(){i.setCenter(t)})}}},wpthms.YTShortcodeGenerator.init())}(jQuery);