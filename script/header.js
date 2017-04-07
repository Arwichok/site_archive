function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
                //return allText;
            }
        }
    }
    rawFile.send(null);
    return rawFile.responseText;
}


var head = 
	"<meta name='viewport' content='width=device-width, initial-sclae=1.0'/>" +
	"<link rel='stylesheet' type='text/css' href='style/style.css'/>" +
	"<title>" + title + "</title>"+
	"<link rel='icon' href='image/icon.png'/>";

if(screen.width <= screen.height){
	head += "<link rel='stylesheet' type='text/css' href='style/styleMobile.css'/>";
}

document.head.innerHTML = head;

// document.getElementById("menu").innerHTML = "HEllo";

var obj = JSON.parse(readTextFile("content/content.json"));

var content = "";
var name = "";
var url = "";
for(var i = obj.content.length-1; i > -1; i--){
	if(menuitem != "index") if(menuitem != obj.content[i].platform) continue;
	name = obj.content[i].name;
	url = obj.content[i].url;
	content += 
		"<div class='contentitem'>"+
		"<a href='"+ url +"'><h3>"+ name +"</h3>"+
		"<img src='image/"+name+".jpg'/></a></div>";
}

document.getElementById("content").innerHTML = content;