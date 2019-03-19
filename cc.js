function encrypt()
{
    var plain_text = document.getElementById("textbox").value;
    var cypher=[];
    var number_shift = parseInt(document.getElementById("shiftmenu").value);
        
    /* performing a loop forcharacters in the text */
    for (char=0, length= plain_text.length; char < length; char++)
    {
        /* this section deals with the upper case characters. */
        if (plain_text[char] == plain_text[char].toUpperCase())
        {
            coded = plain_text[char].charCodeAt(0);
            letter = ((coded - 65 + number_shift) % 26) + 97;
            cypher = cypher + cypher.fromCharCode(letter);
        }
        /*statement for lowercase characters*/
        else if (plain_text[char] == plain_text[char].toLowerCase())
        {
            coded = plain_text[char].charCodeAt(0);
            letter = ((coded - 97 + number_shift) % 26) + 97;
            cypher = cypher + String.fromCharCode(letter);
        }
    }
    document.getElementById("output").value = cypher ;
}
function decrypt()
{
    var ciphertext = document.getElementById("output").value.toLowerCase(); 
    var shift = parseInt(document.getElementById("shiftmenu").value);
    var plain_text =[];    
    var alphabet = /[a-z]/;
    for(i=0; i<ciphertext.length; i++)
    {
        if(alphabet.test(ciphertext.charAt(i))) plain_text += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - shift)%26 + 97); 
        else plain_text += ciphertext.charAt(i); 
    }
    document.getElementById("textbox").value = plain_text;
} 