(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(43)},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(27),n(4)),c=n(5),l=n(7),u=n(6),v=n(8),h=(n(28),n(21)),d=(n(29),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={selectedStation:null,stations:[]},n.handleSelectStation=function(t){n.setState({selectedStation:t}),n.props.onSelectStation(t.value)},n}return Object(v.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gbfs.bluebikes.com/gbfs/en/station_information.json").then(function(t){return t.json()}).catch(function(){return alert("Could not connect to Blue Bikes servers."),{data:{stations:[]}}}).then(function(e){return t.setState({stations:e.data.stations.map(function(t){return{value:t,label:t.name}})})})}},{key:"render",value:function(){return o.a.createElement(h.a,{className:"select-station",value:this.state.selectedStation,onChange:this.handleSelectStation,options:this.state.stations})}}]),e}(a.Component)),f=(n(41),function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=void 0!==this.props.lat&&void 0!==this.props.lon,e=t?parseFloat(this.props.lat):42.3616357609158,n=t?parseFloat(this.props.lon):-71.0906195640564,a="https://image.maps.api.here.com/mia/1.6/mapview?app_id=U9umRZloTL1NlnFVh5yy&app_code=ysINLh115zGxmmSBeofNNg"+"&w=".concat(600)+"&h=".concat(300)+"&z=14"+"&c=".concat(e,",").concat(n)+(t?"":"&nodot");return o.a.createElement("div",{className:"show-station"},o.a.createElement("img",{src:a,alt:"Station on Map"}))}}]),e}(a.Component)),p=n(20);n(42);function m(t){var e=t.bike,n=t.dock,a={Bikes:void 0!==e?e:-1,Docks:void 0!==n?n:-1};return o.a.createElement("div",{className:"show-counts"},Object.entries(a).map(function(t){var e=Object(p.a)(t,2),n=e[0],a=e[1];return o.a.createElement("div",{className:"count",key:n},o.a.createElement("div",{className:"name"},n),o.a.createElement("div",{className:-1===a?"number hidden":"number"},a))}))}var b=new Audio("bell.wav"),w=w||{permission:"denied"};function k(t){"denied"===w.permission?alert(t):new w(t)}var g=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={station:{},pollInterval:NaN,waitInterval:NaN,bike:void 0,dock:void 0},n.handleSelectStation=function(t){t=t||{},n.setState({station:t}),n.poll(t.station_id),n.wait(null)},n}return Object(v.a)(e,t),Object(c.a)(e,[{key:"poll",value:function(t){var e=this;clearInterval(this.state.pollInterval);var n=function(){fetch("https://gbfs.bluebikes.com/gbfs/en/station_status.json").then(function(t){return t.json()}).catch(function(){return k("Could not connect to Blue Bikes servers."),{data:{stations:[]}}}).then(function(n){var a=n.data.stations.filter(function(e){return e.station_id===t});1===a.length?e.setState({bike:a[0].num_bikes_available,dock:a[0].num_docks_available}):(clearInterval(e.state.pollInterval),e.setState({pollInterval:NaN}))})},a=setInterval(n,15e3);n(),this.setState({pollInterval:a})}},{key:"wait",value:function(t){var e=this;clearInterval(this.state.waitInterval);var n=NaN;if(t){var a=function(){e.state[t]>0&&(b.play(),k("There is now a ".concat(t," available.")),e.wait(null))};n=setInterval(a,15e3),a()}this.setState({waitInterval:n})}},{key:"componentDidMount",value:function(){"default"===w.permission&&w.requestPermission()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.pollInterval),clearInterval(this.state.waitInterval)}},{key:"render",value:function(){var t=this,e="";0===this.state.bike&&(e="bike"),0===this.state.dock&&(e="dock");var n=!Number.isNaN(this.state.waitInterval);return o.a.createElement("div",{id:"app",className:"flow"},o.a.createElement("header",null,o.a.createElement("h1",null,"BLUEbikes Watcher")),o.a.createElement("main",{className:"flow"},o.a.createElement(d,{onSelectStation:this.handleSelectStation}),o.a.createElement(f,{lat:this.state.station.lat,lon:this.state.station.lon}),o.a.createElement(m,{bike:this.state.bike,dock:this.state.dock}),e?o.a.createElement("button",{onClick:function(){return t.wait(n?null:e)}},n?"Stop waiting":"Wait"," for ",e,"."):o.a.createElement("div",null)))}}]),e}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}r.a.render(o.a.createElement(g,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?(function(t,e){fetch(t).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):y(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(e,t)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.dcc781d8.chunk.js.map