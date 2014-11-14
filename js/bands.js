var win = Ti.UI.currentWindow;
 
win.hideNavBar();
 
Ti.UI.backgroundColor = '#050505';
 
var url = "http://api.bandsintown.com/artists/Skrillex/events.json?api_version=2.0&app_id=Skrillex"
 
var table = Ti.UI.createTableView({
 
            backgroundColor: '#050505',
            separatorColor:'#110000',
        });
var tableData = [];
var json, artists, name, picture, title, description;
 
var xhr = Ti.Network.createHTTPClient({
    onload: function() {
    // Ti.API.debug(this.responseText);
 
    json = JSON.parse(this.responseText);
    for (i = 0; i < json.length; i++) {
        data = json[i];
        row = Ti.UI.createTableViewRow({
            height:'100dp',
            backgroundColor: '#050505',
            separatorColor:'#110000',
        });
      var  name = Ti.UI.createLabel({
            text: title,
            font:{
                fontSize:'17dp',
            fontWeight:'bold'
        },
        height:'auto',
        left:'90dp',
        top:'20dp',
        color:'#eee',
        touchEnabled:true
        });
        row.add(name);
 
 
            var  start = Ti.UI.createLabel({
            text:   description,
            font:{
                fontSize:'12dp'
            },
        height:'auto',
        left:'90dp',
        bottom:'20dp',
        color:'#eee',
        touchEnabled:true
        });
        row.add(start);
 
 
      // Avatar
                var img = Ti.UI.createImageView({
                    image   : thumb_url ,
                    width   : 70,
                    height  : 70,
                    top     : 5,
                    bottom  : 5,
                    borderRadius: 5,
                    borderColor: '#eee',
                    left    : 5
                });
                row.add(img);
 
 
        tableData.push(row);
        }
 
    table.setData(tableData);
    },
    onerror: function(e) {
    Ti.API.debug("STATUS: " + this.status);
    Ti.API.debug("TEXT:   " + this.responseText);
    Ti.API.debug("ERROR:  " + e.error);
    alert('There was an error retrieving the remote data. Try again.');
    },
    timeout:5000
});
 
xhr.open("GET", url);
xhr.send();