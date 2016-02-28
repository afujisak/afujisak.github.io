var data=[
    {
        "nayami":"stress",
        "herb" :[
            {"name":"#camomail"},
            {"name":"#mate"},
            {"name":"#ravender"},
            {"name":"#rinden"},
            {"name":"#remonbarm"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"sleepless",
        "herb" :[
            {"name":"#camomail"},

            {"name":"#ravender"},
            {"name":"#rinden"},
            {"name":"#remonbarvena"},
            {"name":"#remonbarm"},
        ]
    },
    {
        "nayami":"motivation",
        "herb" :[
            {"name":"#nettle"},
            {"name":"#peparmint"},
            {"name":"#rinden"},
            {"name":"#remonbarvena"},
            {"name":"#remonbarm"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"concentrate",
        "herb" :[
            {"name":"#mate"},
            {"name":"#rosemary"},
        ]

    },
    {
        "nayami":"headache",
        "herb" :[
            {"name":"#camomail"},
            {"name":"#yallow"},
            {"name":"#rinden"},
            {"name":"#remonbarvena"},
            {"name":"#remonbarm"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"stomach",
        "herb" :[
            {"name":"#camomail"},
            {"name":"#calen"},
            {"name":"#haibisu"},
            {"name":"#mallow"},
            {"name":"#remongrass"},
            {"name":"#remonbarvena"},
            {"name":"#remonbarm"},
        ]
    },
    {
        "nayami":"HP",
        "herb" :[
            {"name":"#yallow"},
            {"name":"#ravender"},
            {"name":"#rinden"},
            {"name":"#ruibos"},
        ]
    },
    {
        "nayami":"CC",
        "herb" :[
            {"name":"#echina"},
            {"name":"#camomail"},
            {"name":"#haibisu"},
            {"name":"#mallow"},
        ]
    },
    {
        "nayami":"joint",
        "herb" :[
            {"name":"#nettle"},
            {"name":"#peparmint"},
            {"name":"#rinden"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"constipation",
        "herb" :[
            {"name":"#camomail"},
            {"name":"#tanpopo"},
            {"name":"#nettle"},
            {"name":"#haibisu"},
            {"name":"#mate"},
            {"name":"#mallow"},
            {"name":"#peparmint"},
            {"name":"#ruibos"},
            {"name":"#rosehip"},
        ]
    },
    {
        "nayami":"anemia",
        "herb" :[
            {"name":"#calen"},
            {"name":"#nettle"},
            {"name":"#mate"},
            {"name":"#peparmint"},
            {"name":"#ruibos"},
            {"name":"#remongrass"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"liver",
        "herb" :[
            {"name":"#calen"},
            {"name":"#tanpopo"},
            {"name":"#nettle"},
            {"name":"#haibisu"},
            {"name":"#peparmint"},
            {"name":"#remongrass"},
            {"name":"#rosehip"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"skin",
        "herb" :[
            {"name":"#tanpopo"},
            {"name":"#nettle"},
            {"name":"#haibisu"},
            {"name":"#mallow"},
            {"name":"#rinden"},
            {"name":"#rosehip"},
        ]
    },
    {
        "nayami":"acne",
        "herb" :[
            {"name":"#echina"},
            {"name":"#tanpopo"},
            {"name":"#mallow"},
        ]
    },
    {
        "nayami":"blot",
        "herb" :[
            {"name":"#yallow"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"menstrual",
        "herb" :[
            {"name":"#camomail"},
            {"name":"#calen"},
            {"name":"#tanpopo"},
            {"name":"#yallow"},
            {"name":"#ravender"},
            {"name":"#rosehip"},
        ]
    },
    {
        "nayami":"cold",
        "herb" :[
            {"name":"#camomail"},
            {"name":"#yallow"},
            {"name":"#ruibos"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"menopause",
        "herb" :[
            {"name":"#calen"},
            {"name":"#yallow"},
            {"name":"#rosemary"},
        ]
    },
    {
        "nayami":"breast",
        "herb" :[
            {"name":"#tanpopo"},
            {"name":"#nettle"},
        ]
    },
    {
        "nayami":"summer",
        "herb" :[
            {"name":"#tanpopo"},
            {"name":"#haibisu"},
            {"name":"#rosehip"},
        ]
    },
    {
        "nayami":"hangover",
        "herb" :[
            {"name":"#tanpopo"},
            {"name":"#haibisu"},
            {"name":"#rinden"},
        ]
    }
];

$(function() {
    $('.submenu li').on('click',function(){
        $('#herbtea img').hide();

        for(var i=0;  i<data.length; i++){

            if(this.id == data[i].nayami){
                console.log(this.id + '=' + data[i].nayami);
                for(var j=0; j<data.length; j++){
                    var view = data[i].herb[j].name;
                    console.log('jsonのnayamiのherbの値は'+ view);
                    $(view).show();
                }
            }
        }
    });
});
