function  buttonclick(val)
{
   
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clearDisplay(){
    document.getElementById("screen").value=""

}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function sinClick() {
    var input = parseFloat(document.getElementById('screen').value);
    var result = Math.sin(input);
    document.getElementById('screen').value = result;
}

function cosClick() {
    var input = parseFloat(document.getElementById('screen').value);
    var result = Math.cos(input);
    document.getElementById('screen').value = result;
}

function tanClick() {
    var input = parseFloat(document.getElementById('screen').value);
    var result = Math.tan(input);
    document.getElementById('screen').value = result;
}
