/*you win the fight by either being drunk or buzzkilling the enemy. Buzzkilling only works if you're sober, and it doesn't work on animals.*/
var name;
var eName;

var playerOn;
var enemyOn;

var healthNum;
var staminaNum;
var bacNum;
var eHealthNum;
var eStaminaNum;
var eBacNum;

var playerWeapon;
var eWeapon;

var stage = 1;
var turn

const playerDrink = {addBac:0.16, drink:"mountainshine"};
const hsaDrink = {addBac:0.03, drink:"ale"};
const karenDrink = {addBac:0.05, drink:"alto wine"};
const dragonDrink = {addBac:0.14, drink:"Don Julio tequila"};

gameResetHandler();
stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }
// eslint-disable-next-line no-unused-vars
function b1ActionHandler(){
    switch(stage){
        case 1:
            stage += 1;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
            var nameShow = document.getElementById("name-show");
            nameShow.style.display = "block"; 
            break;
        case 2:
            name = document.getElementById("name-input").value;
            nameShow = document.getElementById("name-show");
            nameShow.style.display = "none";
            stage += 1;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            playerOn = true;
            healthNum = 100;
            staminaNum = 100;
            bacNum = 0;
            playerTextHandler(playerOn, healthNum, staminaNum, bacNum, name);
            break;
        case 3:
            stage += 1;
            healthNum +=12
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            playerTextHandler(playerOn, healthNum, staminaNum, bacNum, name);
            break;
        case 4:
            if(healthNum == 112){
                healthNum +=13;
            } else if (bacNum == 0.04){
                bacNum += 0.04;
            } else if (staminaNum == 112){
                staminaNum += 13;
            }
            playerTextHandler(true, healthNum, staminaNum, bacNum, name);
            stage += 1;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
            break;
        case 5:
            playerWeapon = "fists";
            hsaFightStarter(name, playerWeapon, healthNum, staminaNum, bacNum,);
            //fight
            break;
        case 6:
            hsaFightStarter(name, "fists", healthNum, staminaNum, bacNum,)
            //fight
            break;
        case 7:
            hsaFightStarter(name, "pelt rack", healthNum, staminaNum, bacNum,)
            //fight
            break;
        case 8:
            hsaFightStarter(name, "fists", healthNum, staminaNum, bacNum,)
            //fight
            break;
        case 9:
            hsaFightStarter(name, "fists", healthNum, staminaNum, bacNum,)
            //fight
            break;
        case 10:
            stage += 7
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 11:
            hsaFightStarter(name, "fists", healthNum, staminaNum, bacNum,)
            //fight
            break;
        case 12:
            hsaFightStarter(name, "fists", healthNum, staminaNum, bacNum,)
            //fight
            break;
        case 13:
            stage += 4
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 14:
            attackHandler(stage, name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn);
            break;
        case 15:
            eWeapon = "fists";
            enemyTakeTurnHandler(stage, name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum);
            break;
        case 16:
            yourTurnHandler(name, eName, playerWeapon);
            break;
        case 17:
            enemyTakeTurnHandler(stage, name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum)
            break;
        case 18:
            if(turn == "player"){
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon);
            } else if(turn == "enemy"){
                yourTurnHandler(name, eName, playerWeapon, eWeapon)
            }
            break;
        case 19:
            if(turn == "player"){
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon);
            } else if(turn == "enemy"){
                yourTurnHandler(name, eName, playerWeapon, eWeapon)
            }
            break;
        case 20:
            if(turn == "player"){
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon);
            } else if(turn == "enemy"){
                yourTurnHandler(name, eName, playerWeapon, eWeapon)
            }
            break;
        case 21:
            enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon);
            break;
        case 22:
            gameResetHandler();
            stage = 1;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
    }    
 }
 // eslint-disable-next-line no-unused-vars
 function b2ActionHandler(){
    switch(stage){
        case 1:
            //no code
            break;
        case 2:
            //no code
            break;
        case 3:
            stage += 1;
            bacNum += 0.04;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            playerTextHandler(playerOn, healthNum, staminaNum, bacNum, name);
            break;
        case 4:
            hsaFightStarter(name, "fists", healthNum, staminaNum, bacNum,)
            break;
        case 5:
            stage += 7;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 6:
            //no code
            break;
        case 7:
            //no code
            break;
        case 8:
            //no code
            break;
        case 9:
            //no code
            break;
        case 10:
            //no code
            break;
        case 11:
            //no code
            break;
        case 12:
            //no code
            break;
        case 13:
            //no code
            break;
        case 14:
            if(playerWeapon == "fists"){
                //no code
            } else{
                attackHandler(stage, name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, "player")
            }
            stage += 1
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 15:
            // no code
            break;
        case 16:
            // no code
            break;
        case 17:
            //no code
            break;
        case 18:
            //no code
            break;
        case 19:
            // no code
            break;
        case 20:
            // no code
            break;
        case 21:
            //no code
            break;
        case 22:
            //no code
            break;
    }
 }
 // eslint-disable-next-line no-unused-vars
 function b3ActionHandler(){
    switch(stage){
        case 1:
            //no code
            break;
        case 2:
            //no code
            break;
        case 3:
            stage += 1;
            staminaNum += 12;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            playerTextHandler(playerOn, healthNum, staminaNum, bacNum, name);
            break;
        case 4:
            stage += 2;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 5:
            stage += 6;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 6:
            //no code
            break;
        case 7:
            //no code
            break;
        case 8:
            //no code
            break;
        case 9:
            //no code
            break;
        case 10:
            //no code
            break;
        case 11:
            //no code
            break;
        case 12:
            //no code
            break;
        case 13:
            //no code
            break;
        case 14:
            alcoHandler(name, eName, "player", playerWeapon, healthNum, staminaNum, eWeapon, bacNum, eBacNum)
            stage += 1;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 15:
            // no code
            break;
        case 16:
            // no code
            break;
        case 17:
            //no code
            break;
        case 18:
            //no code
            break;
        case 19:
            // no code
            break;
        case 20:
            // no code
            break;
        case 21:
            //no code
            break;
        case 22:
            //no code
            break;
    }
 }
 // eslint-disable-next-line no-unused-vars
 function b4ActionHandler(){
    switch(stage){
        case 1:
            //no code
            break;
        case 2:
            //no code
            break;
        case 3:
            stage += 1;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 4:
            if (bacNum >= 0.04){
                stage += 3; 
            } else {
                stage += 4;
            }
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 5:
            if (bacNum >= 0.04){
                stage += 5; 
            } else {
                stage += 4;
            }
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 6:
            //no code
            break;
        case 7:
            //no code
            break;
        case 8:
            //no code
            break;
        case 9:
            //no code
            break;
        case 10:
            //no code
            break;
        case 11:
            //no code
            break;
        case 12:
            //no code
            break;
        case 13:
            //no code
            break;
        case 14:
            buzzKillHandler(stage, name, eName, playerWeapon, eWeapon, "player", enemyOn, eHealthNum, eStaminaNum, eBacNum);
            break;
        case 15:
            // no code
            break;
        case 16:
            // no code
            break;
        case 17:
            //no code
            break;
        case 18:
            //no code
            break;
    }
 }
 function promptHandler(stage, name, eName, playerWeapon, eWeapon, turn){
     var prompt = document.getElementById("prompt");
     switch(stage) {
         case 1:
             var promptText = 'In the drunken land of Tamriel stands one man, one mildly-attractive nord, one bladesman of the meadery, whose mission is to get drunk enough to defeat evil for all of Tamriel! One foretold soul to earn the glory of victory!'
             prompt.innerHTML = promptText;
             break;
         case 2:
             promptText = 'What is your name, brave swordsman?'
             prompt.innerHTML = promptText;
             break;
         case 3:
             promptText = name + ' is at the bar. The menu features bloodroot tea, brandy, Wind Chasers, and water.'
             prompt.innerHTML = promptText;
             break;
         case 4:
             promptText = 'A drunken horseback rider crashes through the wall into the bar! The rider, Horse-Stable Abel stumbles to his feet and wants to fight ' + name + ', because look what the master swordsman made him do.' 
             prompt.innerHTML = promptText;
             break;
         case 5:
             promptText = '"I don\'t got all day, prettyboy." said the horseman. "Put your dukes up!"'
             prompt.innerHTML = promptText;
             break;
         case 6:
             promptText = 'Horse-Stable Abel sees ' + name + ' look at the door, he goes over and stands in the doorway. "You\'re going to have to get past me!" He said, sounding like a 5 year old.'
             prompt.innerHTML = promptText;
             break;
         case 7:
             promptText = name + ' scavenges around for something to hit this weirdo with. ' + name + ' finds a pelt rack with no pelt hanging on it. ' + name + ' picks it up and faces Horse-Stable Abel.'
             prompt.innerHTML = promptText;
             break;
         case 8:
             promptText = name + ' scavenges around for something to hit this weirdo with. ' + name + ' is not drunk enough to think clearly enough to find something. "Look at this grade 4 dropout!" Said Horse-Stable Abel.'
             prompt.innerHTML = promptText;
             break;
         case 9:
             promptText = name + ' attempts to steal the horse. The horse\'s back hoof lands a clear blow against ' + name +'\'s skull. "What are you doing to Clip-Clop?!?" Shouts Horse-Stable Abel.'
             prompt.innerHTML = promptText;
             break;
         case 10:
             promptText = name + ' drunkenly stumbles onto the horse and grab the reins! "What are you doing to Clip-Clop?!?" Shouts Horse-Stable Abel. ' + name + ' rides off home, unscathed. Clip-Clop is now ' + name + '\'s horse.'
             prompt.innerHTML = promptText;
             break;
         case 11:
             promptText = '"Pretty-boy yourself some maidens" ' + name + ' said. That pissed off Horse-Stable Abel and Horse-Stable Abel tries to swing, but he misses.'
             prompt.innerHTML = promptText;
             break;
         case 12:
             promptText = '"I didn\'t ride my horse through the wall right there. Drunk riding spills happen, nothing to blame anyone over." ' + name + ' said. "BLAHBLAHBLAHBLAHBLAH!" shouted Horse-Stable Abel. "That last blah was one blah too many. I\'ll teach you not to blah at me again." ' + name + ' said. '
             prompt.innerHTML = promptText;
             break;
         case 13:
             promptText = eName + " died!" + name + ' hoists onto Clip-Clop and takes off, leaving any weapons at the bar. ' + name + '\'s wife must not see ' + name + ' coming home with bloodied weapons. '
             prompt.innerHTML = promptText;
             break;
         case 14:
             promptText = "It's " + name + "'s turn."
             prompt.innerHTML = promptText;
             break;
         case 15:
             promptText = "It's " + eName + "'s turn."
             prompt.innerHTML = promptText;
             break;
        case 16:
            promptText = name + " goes first."
            prompt.innerHTML = promptText;
            break;
        case 17:
            promptText = eName + " goes first."
            prompt.innerHTML = promptText;
            break;
        case 18:
            if(turn == "player"){
                promptText = name + " hits " + eName + " with the " + playerWeapon;
                prompt.innerHTML = promptText;
            } else if(turn == "enemy"){
                promptText = eName + " hits " + name + " with the " + eWeapon;
                prompt.innerHTML = promptText;
            }
            break;
        case 19:
            if(turn == "player"){
                promptText = name + " misses!"
                prompt.innerHTML = promptText;
            } else if(turn == "enemy"){
                promptText = eName + " misses!"
                prompt.innerHTML = promptText;
            }
            break;
        case 20:
            if(turn == "player"){
                promptText = eName + " drinks one " + playerDrink.drink;
                prompt.innerHTML = promptText;
            } else if (turn == "enemy"){
                if(eName == "Horse-Stable Abel"){
                    promptText = eName + " drinks one " + hsaDrink.drink;
                    prompt.innerHTML = promptText;
                }  else if (eName == "Karen"){
                    promptText = eName + " drinks one " + karenDrink.drink;
                    prompt.innerHTML = promptText;
                } else if (eName == "The Tequila Dragon"){
                    promptText = eName + " drinks one " + dragonDrink.drink;
                    prompt.innerHTML = promptText;
                }
            }
            break;
        case 21:
            if(bacNum <= 0.08){
                promptText = name + " is not drunk enough for a buzzkill move! You just wasted your move!";
                prompt.innerHTML = promptText;       
            } else {
                promptText = name + " shows " + eName + " black-and-white paper etchings of old cobblestone fanfare bridges found throughout Dryrim, effectively buzzkilling " + eName + "!";
                prompt.innerHTML = promptText;
            }
            break;
        case 22:
            promptText = eName + ' killed ' + name + "! GAME OVER!"
            prompt.innerHTML = promptText;
            break;
     } 
 }
 function questionHandler(stage){
     var question = document.getElementById("question");
     switch(stage) {
         case 1:
             var questionText = "Do you dare to earn the glory of victory?"
             question.innerHTML = questionText;
             break;
        case 2:
            questionText = '-'
            question.innerHTML = questionText;
            break;
         case 3:
             questionText = "What do you choose to drink?"
             question.innerHTML = questionText;
             break;
         case 4:
             questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 5:
             questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 6:
             questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 7:
              questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 8:
             questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 9:
             questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 10:
             questionText = "Press continue to go to the next scene."
             question.innerHTML = questionText;
             break;
         case 11:
             questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 12:
             questionText = "What do you do?"
             question.innerHTML = questionText;
             break;
         case 13:
             questionText = "Press continue to go to the next scene."
             question.innerHTML = questionText;
             break;
        case 14:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 15:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 16:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 17:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 18:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 19:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 20:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 21:
            questionText = "press continue."
            prompt.innerHTML = questionText;
            break;
        case 22:
            questionText = eName + ' killed ' + name + "! GAME OVER!"
            prompt.innerHTML = questionText;
            break;
    } 
 }
 function b1TextHandler(stage){
     var b1 = document.getElementById("b1-text");
     switch(stage) {
        case 1:
             var b1Text = "yes";
             b1.innerHTML = b1Text;
             break;
        case 2:
            b1Text = 'submit'
            b1.innerHTML = b1Text;
            break;
         case 3:
             b1Text = "bloodroot tea (+25 health)";
             b1.innerHTML = b1Text;
             break;
         case 4:
             b1Text = "finish your beverage calmly";
             b1.innerHTML = b1Text;
             break;
         case 5:
             b1Text = "teach him a lesson";
             b1.innerHTML = b1Text;
             break;
         case 6:
             b1Text = "teach him a lesson";
             b1.innerHTML = b1Text;
             break;
         case 7:
             b1Text = "use the pelt rack to teach him a lesson";
             b1.innerHTML = b1Text;
             break;
         case 8:
             b1Text = "teach him a lesson";
             b1.innerHTML = b1Text;
             break;
         case 9:
             b1Text = "fight the man or he'll fight you.";
             b1.innerHTML = b1Text;
             break;
         case 10:
             b1Text = "continue";
             b1.innerHTML = b1Text;
             break;
         case 11:
             b1Text = "teach him a lesson";
             b1.innerHTML = b1Text;
             break;
         case 12:
             b1Text = "teach him a lesson";
             b1.innerHTML = b1Text;
             break;
         case 13:
             b1Text = "continue";
             b1.innerHTML = b1Text;
             break;
         case 14:
             b1Text = "use your fists";
             b1.innerHTML = b1Text;
             break;
        case 15:
            b1Text = "continue";
            b1.innerHTML = b1Text;
            break;
        case 16:
            b1Text = "continue";
            b1.innerHTML = b1Text;
            break;
        case 17:
            b1Text = "continue";
            b1.innerHTML = b1Text;
            break;
        case 18:
            b1Text = "continue";
            b1.innerHTML = b1Text;
            break;
        case 19:
            b1Text = "continue";
            b1.innerHTML = b1Text;
            break;
        case 20:
            b1Text = "continue";
            b1.innerHTML = b1Text;
            break;
        case 21:
            b1Text = "continue";
            b1.innerHTML = b1Text;
            break;
        case 22:
            b1Text = "Play Again";
            b1.innerHTML = b1Text;
            break;
     } 
 }
 function b2TextHandler(stage, playerWeapon){
     var b2 = document.getElementById("b2-text");
     switch(stage) {
         case 1:
             var b2Text = "-";
             b2.innerHTML = b2Text;
             break;
        case 2:
            b2Text = '-'
            b2.innerHTML = b2Text;
            break;
        case 3:
            b2Text = "brandy (+30 buzz)";
            b2.innerHTML = b2Text;
            break;
        case 4:
            b2Text = "begin fighting immediately";
            b2.innerHTML = b2Text;
            break;
        case 5:
            b2Text = "be rational with him";
            b2.innerHTML = b2Text;
            break;
        case 6:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 7:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 8:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 9:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 10:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 11:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 12:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 13:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 14:
            if(playerWeapon == "fists"){
                b2Text = "-";
                b2.innerHTML = b2Text;
            } else {
                b2Text = "use the " + playerWeapon;
                b2.innerHTML = b2Text;
            }
            break;
        case 15:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 16:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 17:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 18:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 19:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 20:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 21:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
        case 22:
            b2Text = "-";
            b2.innerHTML = b2Text;
            break;
    }
 }
 function b3TextHandler(stage){
     var b3 = document.getElementById("b3-text");
     switch(stage) {
        case 1:
            var b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 2:
            b3Text = '-'
            b3.innerHTML = b3Text;
            break;
       case 3:
           b3Text = "Wind Chaser (+25 stamina)";
           b3.innerHTML = b3Text;
           break;
       case 4:
           b3Text = "attempt to flee";
           b3.innerHTML = b3Text;
           break;
       case 5:
           b3Text = "sarcasm";
           b3.innerHTML = b3Text;
           break;
       case 6:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 7:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 8:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 9:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 10:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 11:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 12:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 13:
           b3Text = "-";
           b3.innerHTML = b3Text;
           break;
       case 14:
           b3Text = 'drink mountainshine';
           b3.innerHTML = b3Text;
           break;
        case 15:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 16:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 17:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 18:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 19:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 20:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 21:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
        case 22:
            b3Text = "-";
            b3.innerHTML = b3Text;
            break;
    } 
 }
 function b4TextHandler(stage){
     var b4 = document.getElementById("b4-text");
     switch(stage) {
        case 1:
            var b4Text = "-";
            b4.innerHTML = b4Text;
            break;
        case 2:
            b4Text = '-'
            b4.innerHTML = b4Text;
            break;
        case 3:
           b4Text = "water (nothing)";
           b4.innerHTML = b4Text;
           break;
        case 4:
           b4Text = "look for a weapon";
           b4.innerHTML = b4Text;
           break;
        case 5:
           b4Text = "steal the horse";
           b4.innerHTML = b4Text;
           break;
        case 6:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 7:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 8:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 9:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 10:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 11:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 12:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 13:
           b4Text = "-";
           b4.innerHTML = b4Text;
           break;
        case 14:
           b4Text = 'buzzkill';
           b4.innerHTML = b4Text;
           break;
        case 15:
            b4Text = "-";
            b4.innerHTML = b4Text;
            break;
        case 16:
            b4Text = "-";
            b4.innerHTML = b4Text;
            break;
        case 17:
             b4Text = "-";
             b4.innerHTML = b4Text;
             break;
        case 18:
            b4Text = "-";
            b4.innerHTML = b4Text;
            break;
        case 19:
            b4Text = "-";
            b4.innerHTML = b4Text;
            break;
        case 20:
            b4Text = "-";
            b4.innerHTML = b4Text;
            break;
        case 21:
            b4Text = "-";
            b4.innerHTML = b4Text;
            break;
        case 22:
            b4Text = "-";
            b4.innerHTML = b4Text;
            break;
    } 
 }
 function stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn){
     promptHandler(stage, name, eName, playerWeapon, eWeapon, turn);
     questionHandler(stage);
     b1TextHandler(stage);
     b2TextHandler(stage, playerWeapon);
     b3TextHandler(stage);
     b4TextHandler(stage);
     
 }
 function playerTextHandler(playerOn, healthNum, staminaNum, bacNum, name){
    var health = document.getElementById("health");
    var stamina = document.getElementById("stamina");
    var buzz = document.getElementById("buzz");
    var playerShow = document.getElementById("player")
    var nameVal = document.getElementById("name");
    if(playerOn == true){
        playerShow.style.display = "block"; 
    } else if(playerOn == false){
        playerShow.style.display = "none"; 
    }
    nameVal.innerHTML = name
    health.innerHTML = healthNum;
    stamina.innerHTML = staminaNum;
    buzz.innerHTML = bacNum;
 }
 function enemyTextHandler(enemyOn, eHealthNum, eStaminaNum, eBacNum, eName){
    var eHealth = document.getElementById("e-health");
    var eStamina = document.getElementById("e-stamina");
    var eBuzz = document.getElementById("e-buzz");
    var enemyShow = document.getElementById("enemy");
    var enemyName = document.getElementById("enemy-name");
    if(enemyOn == true){
        enemyShow.style.display = "block"; 
    } else if(enemyOn == false){
        enemyShow.style.display = "none"; 
    }
    enemyName.innerHTML = eName
    eHealth.innerHTML = eHealthNum;
    eStamina.innerHTML = eStaminaNum;
    eBuzz.innerHTML = eBacNum;
 }
 function gameResetHandler(){
    var nameShow = document.getElementById("name-show");
    var playerShow = document.getElementById("player");
    var enemyShow = document.getElementById("enemy");
    nameShow.style.display = "none";
    playerShow.style.display = "none"; 
    enemyShow.style.display = "none"; 
 }
 function attackHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn){
    var fistsSober = 5;
    var fistsDrunk = 10;
    var peltRackSober = 10;
    var peltRackDrunk = 16;
    var chairSober = 11;
    var chairDrunk = 15;
    var swordSober = 13;
    var swordDrunk = 25;
    var fireBreathSober = 15;
    var fireBreathDrunk = 35;
    if(turn == "player"){
        if(playerWeapon == "fists"){
            if(bacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= fistsDrunk;
                        staminaNum -= 10;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 10;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= fistsSober;
                        staminaNum -= 10;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 10;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (eHealthNum <= 0){
                if(eName == "Horse-Stable Abel"){
                    stage = 13;
                } else if (eName == "Karen"){
                    //no code yet
                } else if (eName == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            } else {
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon)
            }
        } else if (playerWeapon == "pelt rack"){
            if(bacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= peltRackDrunk;
                        staminaNum -= 16;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 16;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= peltRackSober;
                        staminaNum -= 16;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 16;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (eHealthNum <= 0){
                if(eName == "Horse-Stable Abel"){
                    stage = 13;
                } else if (eName == "Karen"){
                    //no code yet
                } else if (eName == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            } else {
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon)
            }
        } else if (playerWeapon == "chair"){
            if(bacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= chairDrunk;
                        staminaNum -= 14;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 14;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= chairSober;
                        staminaNum -= 14;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 14;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (eHealthNum <= 0){
                if(eName == "Horse-Stable Abel"){
                    stage = 13;
                } else if (eName == "Karen"){
                    //no code yet
                } else if (eName == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            } else {
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon)
            }
        } else if (playerWeapon == "sword"){
            if(bacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= swordDrunk;
                        staminaNum -= 12;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 12;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        eHealthNum -= swordSober;
                        staminaNum -= 12;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        staminaNum -= 12;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (eHealthNum <= 0){
                if(eName == "Horse-Stable Abel"){
                    stage = 13;
                } else if (eName == "Karen"){
                    //no code yet
                } else if (eName == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            } else {
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon)
            }
        }
    } else if (turn == "enemy"){
        if(eWeapon == "fists"){
            if(eBacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= fistsDrunk;
                        eStaminaNum -= 10;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 10;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= fistsSober;
                        eStaminaNum -= 10;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 10;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (healthNum <= 0){
                gameOverHandler(name, eName, stage);
                
             } else {
                yourTurnHandler(name, eName, playerWeapon);
             }
        } else if (eWeapon == "pelt rack"){
            if(eBacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= peltRackDrunk;
                        eStaminaNum -= 16;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 16;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= peltRackSober;
                        eStaminaNum -= 16;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 16;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (healthNum <= 0){
                gameOverHandler(name, eName, stage);
                
             } else {
                yourTurnHandler(name, eName, playerWeapon);
             }
        } else if (eWeapon == "chair"){
            if(eBacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= chairDrunk;
                        eStaminaNum -= 14;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 14;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= chairSober;
                        eStaminaNum -= 14;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 14;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (healthNum <= 0){
                gameOverHandler(name, eName, stage);
                
             } else {
                yourTurnHandler(name, eName, playerWeapon);
             }
        } else if (eWeapon == "sword"){
            if(eBacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= swordDrunk;
                        eStaminaNum -= 12;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 12;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= swordSober;
                        eStaminaNum -= 12;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 12;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (healthNum <= 0){
                gameOverHandler(name, eName, stage);
                
             } else {
                yourTurnHandler(name, eName, playerWeapon);
             }
        } else if (eWeapon == "fire breath"){
            if(bacNum >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= fireBreathDrunk;
                        eStaminaNum -= 20;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 20;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        healthNum -= fireBreathSober;
                        eStaminaNum -= 20;
                        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 18;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                        break;
                    case 1:
                        eStaminaNum -= 20;
                        enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName);
                        stage = 19;
                        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
                }
            }
            if (eHealthNum <= 0){
                if(eName == "Horse-Stable Abel"){
                    stage = 13;
                } else if (eName == "Karen"){
                    //no code yet
                } else if (eName == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            } else {
                enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon)
            }
        }
    }
 }
 function alcoHandler(name, eName, turn, playerWeapon, healthNum, staminaNum, eWeapon, bacNum, eBacNum){
    const playerDrink = {addBac:0.16, drink:"mountainshine"};
    const hsaDrink = {addBac:0.03, drink:"ale"};
    const karenDrink = {addBac:0.05, drink:"alto wine"};
    const dragonDrink = {addBac:0.14, drink:"Don Julio tequila"};
    if(turn == "player"){
        bacNum += playerDrink.addBac;
        var stage = 20;
        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn);
        playerTextHandler(true, healthNum, staminaNum, bacNum, name);
    } else if (turn == "enemy"){
        if(eName == "Horse-Stable Abel"){
            eBacNum += hsaDrink.addBac;
            stage = 20;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            enemyTextHandler(enemyOn, eHealthNum, eStaminaNum, eBacNum, eName);
        } else if (eName == "Karen"){
            eBacNum += karenDrink.addBac;
            stage = 20;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            enemyTextHandler(enemyOn, eHealthNum, eStaminaNum, eBacNum, eName);
        } else if (eName == "The Tequila Dragon"){
            eBacNum += dragonDrink.addBac;
            stage = 20;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            enemyTextHandler(enemyOn, eHealthNum, eStaminaNum, eBacNum, eName);
        }
    }
 }
 function buzzKillHandler(stage, name, eName, playerWeapon, eWeapon, turn, enemyOn, eHealthNum, eStaminaNum, eBacNum){
    if(bacNum >= 0.08){
        stage = 21;
        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)          
    } else {
        eBacNum -= 0.04;
        stage = 21;
        stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
        enemyTextHandler(enemyOn, eHealthNum, eStaminaNum, eBacNum, eName);
    }
 }
 function yourTurnHandler(name, eName, playerWeapon, eWeapon){
    stage = 14;
    turn = "player"
    stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
 }
 function enemyShowTurnHandler(stage, turn, name, playerWeapon, eName, eWeapon){
    stage = 15;
    stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
 }
 function enemyTakeTurnHandler(stage, name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum){
    if(eWeapon == "fists"){
        switch(getRandomInt(2)) {
            case 0:
                turn = "enemy"
                attackHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn)
                break;
            case 1:
                alcoHandler(name, eName, "enemy", playerWeapon, healthNum, staminaNum, eWeapon, bacNum, eBacNum);
                break;
        }
    } else {
        switch(getRandomInt(3)) {
            case 0:
                turn = "enemy"
                attackHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn);
                break;
            case 1:
                stage =18;
                stageTextHandler(stage, name, eName, playerWeapon, eWeapon, "enemy")
                turn = "enemy"
                attackHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn);
                break;
            case 2:
                alcoHandler(name, eName, "enemy", playerWeapon, healthNum, staminaNum, eWeapon, bacNum, eBacNum);
                break;
         }
    }
     if (healthNum <= 0){
        gameOverHandler(name, eName, stage);
     } else {
        yourTurnHandler(name, eName, playerWeapon);
     }
 }
 function gameOverHandler(name, eName, stage){
    stage = 16;
    stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
 }
 
 function fightHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn){
    switch(getRandomInt(2)) {
        case 0:
            enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName)
            stage = 16;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
        case 1:
            enemyTextHandler(true, eHealthNum, eStaminaNum, eBacNum, eName)
            stage = 17;
            stageTextHandler(stage, name, eName, playerWeapon, eWeapon, turn)
            break;
     }
 }
 function hsaFightStarter(name, playerWeapon, healthNum, staminaNum, bacNum){
    eName = "Horse-Stable Abel";
    eHealthNum = 85;
    eStaminaNum = 95;
    eBacNum = 0.20;
    eWeapon = "fists"
    fightHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn)
 }
 function karenFightStarter(name, playerWeapon, healthNum, staminaNum, bacNum){
    eName = "Horse-Stable Abel";
    eHealthNum = 85;
    eStaminaNum = 95;
    eBacNum = 0.20;
    eWeapon = "fists"
    fightHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn)
 }
 function dragonFightStarter(name, playerWeapon, healthNum, staminaNum, bacNum){
    eName = "The Tequila Dragon";
    eHealthNum = 85;
    eStaminaNum = 95;
    eBacNum = 0.20;
    eWeapon = "fire-breath"
    fightHandler(name, playerWeapon, healthNum, staminaNum, bacNum, eName, eWeapon, eHealthNum, eStaminaNum, eBacNum, turn)
 }
//vars loaded. begin game.
//player definitions, and enemy definitions.
//function for prompt, question, and button 1-4
//function that loads stages