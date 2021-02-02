<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="Buttons"></div>


<script>
        var index = 21;
        var Buttons = $('#Buttons');
for (var i = 1; i < index; i++) 
{
  Buttons.append('<input type="button" onclick="buttonFunction()" id="button" ' + i + '" value="Button' + i + '"/>');
}

function buttonFunction() 
{
    for(var i = 0; i < 20; i++)
    {
        document.write("<button onclick='alert("+(i + 1)+")'>Button " + (i + 1) +"</button> <br/> <br/>");
    }
}
</script>