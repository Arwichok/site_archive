function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.send(null);
    return rawFile.responseText;
}

var head = 
	"<meta name='viewport' content='width=device-width, initial-sclae=1.0'/>" +
	"<link rel='stylesheet' type='text/css' href='style/style.css'/>" +
	"<title>" + title + "</title>"+
	"<link rel='icon' href='image/icon.png'/>";

if(window.outerWidth <= window.outerHeight){
	head += "<link rel='stylesheet' type='text/css' href='style/styleMobile.css'/>";
}

var urlmenu = ["index", "android", "pc"];
var strmenu = ["Main", "Android", "PC"];
var menu = "<ul>";
for(var m = 0; m < urlmenu.length; m++){
	menu+= "<li><a ";
	if(urlmenu[m] == menuitem) menu += "id='menuhere'>";
	else menu += "href='" + urlmenu[m] + ".html'>";
	menu+=strmenu[m] + "</a></li>";
}
menu+="</ul>";

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

document.head.innerHTML = head;
document.getElementById("menu").innerHTML = menu;
document.getElementById("content").innerHTML = content;