var data = [
    {
        "nayami":"strress",
        "herb" :[
            {"name":"camomail"},
            {"name":"mate"},
            {"name":"ravender"},
            {"name":"rinden"},
            {"name":"remonbarm"},
            {"name":"rosemary"},
        ]
    },
    {
        "nayami":"#sleepless",
        "herb" :[
            {"name":"#camomail"},
            {"name":"#ravender"},
            {"name":"#rinden"},
            {"name":"#remonbarvena"},
            {"name":"#remonbarm"},
        ]
    }
]

for(var i in data){

    if(data[i].nayami == )

    for(var j in data[i].person){
        $("#output").append("<li>" + data[i].herb[j].name + "（" + data[i].person[j].age + "才）</li>n");
    }
}
