//Creates a variable for generate element in the HTML file
var generateBtn = document.querySelector("#generate");
//Creates a click event that sets off the functions to generate and display our password
generateBtn.addEventListener("click", function(event){
  //Resets the text box so that when you click to generate another password it isn't just added on to the end of the old one
  var password=""
  var passwordLength= window.prompt("How long would you like your password to be")
  if (passwordLength>=8){
    //The confirm messages have to be after the if statement because you don't want them to be triggered if the prompt recieved an invalid response
    var uppercase= window.confirm("Include uppercase characters")
    var lowercase= window.confirm("Include lowercase characters")
    var special= window.confirm("Include special Characters")
    //This function generates a random password using the keys on the keyboard and your responses to the prompt and the prior confirms
    function generatePassword(){
      if(uppercase&&lowercase&&special){
        var characters=["z","x","c","v","b","n","m",",",".","/","a","s","d","f","g","h","j","k","l",";","q","w","e","r","t","y","u","i","o","p","[","]","|","1","2","3","4","5","6","7","8","9","0","-","=","Z","X","C","V","B","N","M","<",">","?","A","S","D","F","G","H","J","K","L",":","Q","W","E","R","T","Y","U","I","O","P","{","}","!","@","#","$","%","^","&","*","(",")","_","+"]
        //This loops as many times as the number you typed during the prompt
        for (let i = 0; i < passwordLength; i++) {
          //This selects a random string out of our array, its important to have this in the loop so that it chooses a random value every time it loops
          var index=Math.floor(Math.random()*characters.length)
          var key= characters[index]
          //The += is important here so that way you aren't just displaying the last random character and the whole password is displayed
          password+=key
        }
      }else if(uppercase&&lowercase){
        var characters=["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","Z","X","C","V","B","N","M","A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P"]
        var index=Math.floor(Math.random()*characters.length)
        for (let i = 0; i < passwordLength; i++) {
          var index=Math.floor(Math.random()*characters.length)
          var key= characters[index]
          password+=key
        }
      }else if(uppercase&&special){
        var characters=["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P",",",".","/","<",">","?",";",":","1","2","3","4","5","6","7","8","9","0","-","=","[","]","|","!","@","#","$","%","^","&","*","(",")","_","+"]
        var index=Math.floor(Math.random()*characters.length)
        for (let i = 0; i < passwordLength; i++) {
          var index=Math.floor(Math.random()*characters.length)
          var key= characters[index]
          password+=key
        }
      }else if(uppercase){
        var characters=["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P"]
        var index=Math.floor(Math.random()*characters.length)
        for (let i = 0; i < passwordLength; i++) {
          var index=Math.floor(Math.random()*characters.length)
          var key= characters[index]
          password+=key
        }
      }else if(lowercase&&special){
        var characters=["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p",",",".","/","<",">","?",";",":","1","2","3","4","5","6","7","8","9","0","-","=","[","]","|","!","@","#","$","%","^","&","*","(",")","_","+"]
        var index=Math.floor(Math.random()*characters.length)
        for (let i = 0; i < passwordLength; i++) {
          var index=Math.floor(Math.random()*characters.length)
          var key= characters[index]
          password+=key
        }
      }else if(lowercase){
        var characters=["z","x","c","v","b","n","m","a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p"]
        var index=Math.floor(Math.random()*characters.length)
        for (let i = 0; i < passwordLength; i++) {
          var index=Math.floor(Math.random()*characters.length)
          var key= characters[index]
          password+=key
        }
      }else if(special){
        var characters=[",",".","/","<",">","?",";",":","1","2","3","4","5","6","7","8","9","0","-","=","[","]","|","!","@","#","$","%","^","&","*","(",")","_","+"]
        var index=Math.floor(Math.random()*characters.length)
        for (let i = 0; i < passwordLength; i++) {
          var index=Math.floor(Math.random()*characters.length)
          var key= characters[index]
          password+=key
        }
        //This displays a sort of error message when none of the options are chosen and importantly doesn't generate a password
      }else{
        window.alert("please choose an option")
      }
    }
    //Calls the password creation function
    generatePassword()
    console.log(password)
    //This replaces the text in the text box with the password we have created
    function writePassword() {
      var passwordText = document.querySelector("#password");
      passwordText.textContent = password;
    }
    //This calls the function that writes in the text box
    writePassword()
    //If someone asks for a password under 8 characters this error message displays and they can press the generate button to start over 
  }else{
    window.alert("Password must be 8 or more characters")
  }
}
)