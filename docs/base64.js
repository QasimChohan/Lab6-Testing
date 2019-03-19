function encode() 
{
    var plain_text = document.getElementById("output").value;
    document.getElementById("message").value = btoa(plain_text);
}
{
    for (var idx=0; idx<Text.length;idx++) 
    {
        encode += Text[idx].charCodeAt(0).toString(2)+[];
    }
}
function decrypt()
{
   var ct = document.getElementById("message").value;
    document.getElementById("output").value = atob(ct);
}
    for (var idx=0; idx<ct.length;idx++) 
    {
        encode += ct[idx].charCodeAt(0).toString(2)+[];
    }