var Colors = ['red', 'orange', 'green', 'blue', 'yellow', 'indigo', 'violet'];

function RandomColor()
{
	var ColorIndex = Math.floor(Math.random() * Colors.length);
	return Colors[ColorIndex];
}

function Rainbow(elem)
{
	if(elem.tagName == 'SCRIPT' || elem.style == undefined) return;

	elem.style.backgroundColor = RandomColor();
	elem.style.color = RandomColor();

	for(var i = 0 ; i < elem.childNodes.length ; i++)
		Rainbow(elem.childNodes[i]);
}

Rainbow(document.body);