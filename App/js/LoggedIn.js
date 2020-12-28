xui.Class('App.LoggedIn', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"logged_in")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":70,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":650
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":80,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":true,
                        "cmd":true,
                        "itemDisplay":"display:none;"
                    }
                ])
                .setType("horizontal")
            );
            
            host.logged_in.append(
                xui.create("xui.UI.Label")
                .setHost(host,"Discord_DM")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setCaption("Discord [:tick:SYSTEM]"),
                "main"
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input22")
                .setDirtyMark(false)
                .setLeft("17.523809523809526em")
                .setTop("40.38095238095238em")
                .setWidth("73.6em")
                .setHeight("2.5142857142857142em")
                .setLabelSize("8em")
                .setLabelCaption("Send Message to Discord")
                .setCustomStyle({
                    "KEY":{
                        "color":"#000000"
                    },
                    "FRAME":{
                        "background-color":"#FFFFFF"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});