function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.send(null);
    return rawFile.responseText;
}

// var head = 
// 	"<link rel='stylesheet' type='text/css' href='style/style.css'/>" +
// 	"<meta name='viewport' content='width=device-width, initial-sclae=1.0'/>" +
// 	"<title>" + title + "</title>"+
// 	"<link rel='icon' href='image/icon.png'/>";

// if(window.outerWidth <= window.outerHeight){
// 	head += "<link rel='stylesheet' type='text/css' href='style/styleMobile.css'/>";
// }

// var urlmenu = ["index", "android", "pc"];
// var strmenu = ["Main", "Android", "PC"];
// var menu = "<ul>";
// for(var m = 0; m < urlmenu.length; m++){
// 	menu+= "<li><a ";
// 	if(urlmenu[m] == menuitem) menu += "id='menuhere'>";
// 	else menu += "href='" + urlmenu[m] + ".html'>";
// 	menu+=strmenu[m] + "</a></li>";
// }
// menu+="</ul>";


// $.getJSON("content/content.json", function(json) {
// 	contentjson = json;
//     console.log(json); // this will show the info it in firebug console
// });
// readTextFile("content/content.json")

// var jer = JSON.parse(content);
// alert(jer);
var obj = JSON.parse(readTextFile("content/content.json"));
var content = "";
var name = "";
var url = "";
var version = "";
for(var i = obj.content.length-1; i > -1; i--){
	if(menuitem != "index") if(menuitem != obj.content[i].platform) continue;
	name = obj.content[i].name;
	url = obj.content[i].url;
	version = obj.content[i].version;
	content += 
		"<div class='contentitem'>"+
		"<a href='"+ url +"'><h3>"+ name + " v" + version + "</h3>"+
		"<img src='image/"+name+".jpg'/></a></div>";
}

// document.head.innerHTML = head;
// document.getElementById("menu").innerHTML = menu;
document.getElementById("content").innerHTML = content;