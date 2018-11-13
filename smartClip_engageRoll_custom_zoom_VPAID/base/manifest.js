FT.manifest({
    "filename": "index.html",
    "width": 640,
    "height": 360,
    "clickTagCount": 5,
    "adFormat": "jsvpaid_linear",
    "vpaidData":{
        "hAlign":"center",
        "vAlign":"center",
        "duration":15,
        "upscaling":true
    },
    "videos": [
        { "name": "video1", "ref": "9268/22576_bull_rider" }
    ],
    "richLoads": [
        { "name": "richload", "src": "engageRoll_custom_zoom_richload" }
    ],
    "instantAds":[
        {"name":"richload", "type":"richload", "default":"engageRoll_custom_zoom_richload"},
        {"name":"video1", "type":"video", "default":"59113/ft_vpaid_showreel"},
        {"name":"videoPos_X_Y_Width", "type":"text", "default":"160, 0, 480"},
        {"name":"zoom", "type":"text", "default":"on"}
    ]
});