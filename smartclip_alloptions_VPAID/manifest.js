FT.manifest({
    "filename": "index.html",
    "width": 640,
    "height": 360,
    "clickTagCount": 1,
    "adFormat": "jsvpaid_linear",
    "vpaidData":{
        "hAlign":"left",
        "vAlign":"top",
        "duration":99,
        "upscaling":true
    },
    "videos": [
        { "name": "video1", "ref": "9268/22576_bull_rider" }
    ],
    "instantAds":[
        {"name":"closeBTN", "type":"text", "default":"on"},
        {"name":"closeBTN_afterXsec", "type":"text", "default":"4"},
        {"name":"closeBTN_countdown", "type":"text", "default":"on"},
        {"name":"video1", "type":"video"}
    ],
    "trackingEvents": [
        {
            "name": "skipAd",
            "type": "standard"
        }
    ]
});