// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"log_in")
                .setDirtyMark(false)
                .setLeft("22.857142857142858em")
                .setTop("31.238095238095237em")
                .setCaption("Log In")
                .setImageClass("xui-icon-xui")
                .onClick("_log_in_onclick")
                .setCustomStyle({
                    "KEY":{
                        "color":"#0000FF"
                    },
                    "CAPTION":{
                    }
                })
                .setCustomClass({
                    "CAPTION":"Log In"
                })
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"discord")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setSrc("{xui.ini.img_pic}")
                .setCustomStyle({
                    "KEY":{
                        "color":"#8A2BE2"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _log_in_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});