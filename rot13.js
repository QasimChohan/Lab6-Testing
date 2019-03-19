function encode()

{ 
    var plain_text = document.getElementById("message").value;
    var cypher_text = [];
    var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    for(var idx=0; idx<plain_text.length; idx++)
        {
            input = alphabet.indexOf(plain_text[idx]);
            if(input == -1)
        {
            cypher_text.push(plain_text[idx]);
        }
        else
        {
            var coded = (input+13)%26;
            var letter = alphabet[coded];
            cypher_text.push(letter);
        }
    }
    document.getElementById("output").innerHTML = cypher_text.join("");
}
function decrypt()
    {
    cypher_text = document.getElementById("output").value;
        if(cypher_text.length <1)
        {
            alert("enter ciphertext)"); 
            return;
        }
        var plaintext=[]; 
        var alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
    for(var idx=0; idx<cypher_text.length; idx++)

        {
            input = alphabet.indexOf(cypher_text[idx]);
            if(input == -1)
        {
            plaintext.push(cypher_text[idx]);
        }
        else
        {
            var coded = (input+13)%26;
            var letter = alphabet[coded];
            plaintext.push(letter); 
        }
    } 
        console.log(plaintext);
    document.getElementById("message").value = plaintext.join("");
    }