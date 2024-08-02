var stage = 1;
var turn

const player = {on:false, name:"null", health:100, stamina:100, bac:0.2, weapon:"fists", addBac:0.12, drink:"mountainshine"};
const enemy = {on:false, name:"null", health:95, stamina:95, bac:0.2, weapon:"fists", addBac:0.03, buzzkill:0.04, drink:"ale"};
player.name = "Citadel"
enemy.name = "Horse-Stable Abel"

gameResetHandler();
stageTextHandler(stage, enemy, turn);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }
// eslint-disable-next-line no-unused-vars
function b1ActionHandler(){
    switch(stage){
        case 1:
            player.on = true;
            playerTextHandler(player);
            firstTurnHandler(player, enemy);
             break;
         case 2:
             //no code because you win!
             break;
         case 3:
            if(turn == "player"){
                player.weapon = "fists";
                turn = "player";
                attackHandler(player, enemy, turn);
            } else if(turn == "enemy"){
                enemyTakeTurnHandler(stage, player, enemy);
            }
             break;
        case 4:
            if(turn == "player"){
                yourTurnHandler(player, enemy);
            } else if(turn == "enemy"){
                enemyTakeTurnHandler(stage, player, enemy);
            }
            break;
        case 5:
            if(turn == "player"){
                enemyTakeTurnHandler(stage, player, enemy);
            } else if(turn == "enemy"){
                yourTurnHandler(player, enemy);
            }
            break;
        case 6:
            if(turn == "player"){
                enemyTakeTurnHandler(stage, player, enemy);
            } else if(turn == "enemy"){
                yourTurnHandler(player, enemy);
            }
            break;
        case 7:
            if(turn == "player"){
                enemyTakeTurnHandler(stage, player, enemy);
            } else if(turn == "enemy"){
                yourTurnHandler(player, enemy);
            }
            break;
        case 8:
            if(turn == "player"){
                enemyTakeTurnHandler(stage, player, enemy);
            } else if(turn == "enemy"){
                yourTurnHandler(player, enemy);
            }
            break;
        case 9:
            gameResetHandler();
            stage = 1;
            stageTextHandler(stage, enemy, turn);
            break;
    }  
}  
 
 /*function b2ActionHandler(){
    switch(stage){
        case 1:
            //no code
            break;
        case 2:
            //no code
            break;
        case 3:
            stage += 1;
            player.bac += 0.04;
            stageTextHandler(stage, enemy, turn)
            playerTextHandler(playerOn,player.health, player.stamina, player.bac, player.name);
            break;
        case 4:
            hsaFightStarter(name, "fists",player.health, player.stamina, player.bac,)
            break;
        case 5:
            stage += 7;
            stageTextHandler(stage, enemy, turn)
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
            player.stamina += 12;
            stageTextHandler(stage, enemy, turn)
            playerTextHandler(playerOn,player.health, player.stamina, player.bac, player.name);
            break;
        case 4:
            stage += 2;
            stageTextHandler(stage, enemy, turn)
            break;
        case 5:
            stage += 6;
            stageTextHandler(stage, enemy, turn)
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
            stageTextHandler(stage, enemy, turn)
            break;
        case 4:
            if (player.bac >= 0.04){
                stage += 3; 
            } else {
                stage += 4;
            }
            stageTextHandler(stage, enemy, turn)
            break;
        case 5:
            if (player.bac >= 0.04){
                stage += 5; 
            } else {
                stage += 4;
            }
            stageTextHandler(stage, enemy, turn)
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
    }
 }*/
 function promptHandler(stage, enemy, turn,){
     var prompt = document.getElementById("prompt");
     switch(stage) {
         case 1:
             var promptText = 'In the drunken land of Tamriel stands one man, one mildly-attractive nord, one bladesman of the meadery, whose mission is to get drunk enough to defeat evil for all of Tamriel! One foretold soul to earn the glory of victory!'
             prompt.innerHTML = promptText;
             break;
         case 2:
             promptText = enemy.name + " died!" + player.name + ' hoists onto Clip-Clop and takes off, leaving any weapons at the bar. ' + player.name + '\'s wife must not see ' + player.name + ' coming home with bloodied weapons. '
             prompt.innerHTML = promptText;
             break;
         case 3:
            if(turn == "player"){
                promptText = "It's " + player.name + "'s turn."
                prompt.innerHTML = promptText;
            } else if(turn == "enemy"){
                promptText = "It's " + enemy.name + "'s turn."
                prompt.innerHTML = promptText;
            }
             break;
        case 4:
            if(turn == "player"){
                promptText = player.name + " goes first."
                prompt.innerHTML = promptText;
            } else if(turn == "enemy"){
                promptText = enemy.name + " goes first."
                prompt.innerHTML = promptText;
            }
            break;
        case 5:
            if(turn == "player"){
                promptText = player.name + " hits " + enemy.name + " with the " + player.weapon;
                prompt.innerHTML = promptText;
            } else if(turn == "enemy"){
                promptText = enemy.name + " hits " + player.name + " with the " + enemy.weapon;
                prompt.innerHTML = promptText;
            }
            break;
        case 6:
            if(turn == "player"){
                promptText = player.name + " misses!"
                prompt.innerHTML = promptText;
            } else if(turn == "enemy"){
                promptText = enemy.name + " misses!"
                prompt.innerHTML = promptText;
            }
            break;
        case 7:
            if(turn == "player"){
                promptText = enemy.name + " drinks one " + player.drink;
                prompt.innerHTML = promptText;
            } else if (turn == "enemy"){
                    promptText = enemy.name + " drinks one " + enemy.drink;
                    prompt.innerHTML = promptText;
            }
            break;
        case 8:
            if(player.bac <= 0.08){
                promptText = player.name + " is not drunk enough for a buzzkill move! You just wasted your move!";
                prompt.innerHTML = promptText;       
            } else {
                promptText = player.name + " shows " + enemy.name + " black-and-white paper etchings of old cobblestone fanfare bridges found throughout Dryrim, effectively buzzkilling " + enemy.name + "!";
                prompt.innerHTML = promptText;
            }
            break;
        case 9:
            promptText = enemy.name + ' killed ' + player.name + "! GAME OVER!"
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
            questionText = "YOU WIN! END GAME"
            question.innerHTML = questionText;
            break;
         case 3:
            if(turn == "player"){
                questionText = "What do you do?"
                question.innerHTML = questionText;
            } else if(turn == "enemy"){
                questionText = "Press continue."
                question.innerHTML = questionText;
            }
             
             break;
         case 4:
             questionText = "press continue."
             question.innerHTML = questionText;
             break;
         case 5:
             questionText = "press continue."
             question.innerHTML = questionText;
             break;
         case 6:
             questionText = "press continue."
             question.innerHTML = questionText;
             break;
         case 7:
              questionText = "press continue."
             question.innerHTML = questionText;
             break;
         case 8:
             questionText = "press continue."
             question.innerHTML = questionText;
             break;
         case 9:
             questionText = "would you like to play again?"
             question.innerHTML = questionText;
             break;
    } 
 }
 function b1TextHandler(stage, enemy, turn){
     var b1 = document.getElementById("b1-text");
     switch(stage) {
        case 1:
             var b1Text = "yes";
             b1.innerHTML = b1Text;
             break;
        case 2:
            b1Text = "-"
            b1.innerHTML = b1Text;
            break;
         case 3:
            if(turn == "player"){
                promptText = "punch " + enemy.name;
                prompt.innerHTML = promptText;
            } else if(turn == "enemy"){
                promptText = "continue"
                prompt.innerHTML = promptText;
            }
             break;
         case 4:
             b1Text = "continue";
             b1.innerHTML = b1Text;
             break;
         case 5:
             b1Text = "continue";
             b1.innerHTML = b1Text;
             break;
         case 6:
             b1Text = "continue";
             b1.innerHTML = b1Text;
             break;
         case 7:
             b1Text = "continue";
             b1.innerHTML = b1Text;
             break;
         case 8:
             b1Text = "continue";
             b1.innerHTML = b1Text;
             break;
         case 9:
             b1Text = "play again";
             b1.innerHTML = b1Text;
             break;
     } 
 }
 /*function b2TextHandler(stage, player.weapon){
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
            if(player.weapon == "fists"){
                b2Text = "-";
                b2.innerHTML = b2Text;
            } else {
                b2Text = "use the " + player.weapon;
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
    } 
 }*/
 function stageTextHandler(stage, enemy, turn){
     promptHandler(stage, enemy, turn);
     questionHandler(stage);
     b1TextHandler(stage, enemy);
     //b2TextHandler(stage, player.weapon);
     //b3TextHandler(stage);
     //b4TextHandler(stage);
     
 }
 function playerTextHandler(player){
    var health = document.getElementById("health");
    var stamina = document.getElementById("stamina");
    var buzz = document.getElementById("buzz");
    var playerShow = document.getElementById("player")
    var playerNameVal = document.getElementById("name");
    if(player.on == true){
        playerShow.style.display = "block"; 
    } else if(player.on == false){
        playerShow.style.display = "none"; 
    }
    playerNameVal.innerHTML = player.name;
    health.innerHTML =player.health;
    stamina.innerHTML = player.stamina;
    buzz.innerHTML = player.bac;
 }
 function enemyTextHandler(enemy){
    var eHealth = document.getElementById("e-health");
    var eStamina = document.getElementById("e-stamina");
    var eBuzz = document.getElementById("e-buzz");
    var enemyShow = document.getElementById("enemy");
    var enemyName = document.getElementById("enemy-name");
    if(enemy.on == true){
        enemyShow.style.display = "block"; 
    } else if(enemy.on == false){
        enemyShow.style.display = "none"; 
    }
    enemyName.innerHTML = enemy.name
    eHealth.innerHTML = enemy.health;
    eStamina.innerHTML = enemy.stamina;
    eBuzz.innerHTML = enemy.bac;
 }
 function gameResetHandler(){
    var playerNameShow = document.getElementById("name-show");
    var playerShow = document.getElementById("player");
    var enemyShow = document.getElementById("enemy");
    playerNameShow.style.display = "none";
    playerShow.style.display = "none"; 
    enemyShow.style.display = "none"; 
 }
 function attackHandler(player, enemy, turn){
    const fists = {sober:5, drunk:10};
    //const peltRack = {sober:10, drunk:16};
    //const chair = {sober:11, drunk:15};
    //const sword = {sober:13, drunk:25};
    //const fireBreath = {sober:15, drunk:35};
    if(turn == "player"){
        if(player.weapon == "fists"){
            if(player.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= fists.drunk;
                        player.stamina -= 10;
                        playerTextHandler(player);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 5;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 10;
                        playerTextHandler(player);
                        stage = 6;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= fists.ober;
                        player.stamina -= 10;
                        playerTextHandler(player);
                        enemy.on = true;
                        enemyTextHandler(enemy);
                        stage = 5;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 10;
                        playerTextHandler(player);
                        stage = 6;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (enemy.health <= 0){
                //if(enemy.name == "Horse-Stable Abel"){
                    stage = 2;
                /*} else if (enemy.name == "Karen"){
                    //no code yet
                } else if (enemy.name == "The Tequila Dragon"){
                    //no code yet
                }*/
                stageTextHandler(stage, enemy, turn)
            } else {
                stage = 3;
                turn = "enemy"
                stageTextHandler(stage, enemy, turn);
            }
        }
        /*else if (player.weapon == "pelt rack"){
            if(player.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= peltRackDrunk;
                        player.stamina -= 16;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
            enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 16;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= peltRackSober;
                        player.stamina -= 16;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
            enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 16;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (enemy.health <= 0){
                if(enemy.name == "Horse-Stable Abel"){
                    stage = 13;
                } else if (enemy.name == "Karen"){
                    //no code yet
                } else if (enemy.name == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, enemy, turn)
            } else {
                stage = 15;
                stageTextHandler(stage, enemy, turn);
            }
        } else if (player.weapon == "chair"){
            if(player.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= chairDrunk;
                        player.stamina -= 14;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
            enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 14;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= chairSober;
                        player.stamina -= 14;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
            enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 14;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (enemy.health <= 0){
                if(enemy.name == "Horse-Stable Abel"){
                    stage = 13;
                } else if (enemy.name == "Karen"){
                    //no code yet
                } else if (enemy.name == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, enemy, turn)
            } else {
                stage = 15;
                stageTextHandler(stage, enemy, turn);
            }
        } else if (player.weapon == "sword"){
            if(player.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= swordDrunk;
                        player.stamina -= 12;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
            enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 12;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= swordSober;
                        player.stamina -= 12;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
            enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        player.stamina -= 12;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (enemy.health <= 0){
                if(enemy.name == "Horse-Stable Abel"){
                    stage = 13;
                } else if (enemy.name == "Karen"){
                    //no code yet
                } else if (enemy.name == "The Tequila Dragon"){
                    //no code yet
                }
                stageTextHandler(stage, enemy, turn)
            } else {
                stage = 15;
                stageTextHandler(stage, enemy, turn);
            }
        }*/
    } else if (turn == "enemy"){
        if(enemy.weapon == "fists"){
            if(enemy.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= fists.drunk;
                        enemy.stamina -= 10;
                        playerTextHandler(player);
                        enemy.on = true;
                        enemyTextHandler(enemy);
                        stage = 5;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 10;
                        enemy.on = true;
                        enemyTextHandler(enemy);
                        stage = 6;
                        stageTextHandler(stage, enemy, turn);
                }
            } 
            else {
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= fists.sober;
                        enemy.stamina -= 10;
                        playerTextHandler(player);
                        enemy.on = true;
                        enemyTextHandler(enemy);
                        stage = 5;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 10;
                        enemy.on = true;
                        enemyTextHandler(enemy);
                        stage = 6;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (player.health <= 0){
                gameOverHandler(enemy, stage);
                
             } else {
                yourTurnHandler(player, enemy);
             }
        }
        {/*else if (enemy.weapon == "pelt rack"){
            if(enemy.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= peltRackDrunk;
                        enemy.stamina -= 16;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 16;
                        enemy.on = true;
                        nemyTextHandler(enemy);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= peltRackSober;
                        enemy.stamina -= 16;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 16;
                        enemy.on = true;
                        enemyTextHandler(enemy);
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (player.health <= 0){
                gameOverHandler(enemy.name, stage);
                
             } else {
                yourTurnHandler(name, enemy.name, player.weapon);
             }
        } else if (enemy.weapon == "chair"){
            if(enemy.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= chairDrunk;
                        enemy.stamina -= 14;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 14;
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= chairSober;
                        enemy.stamina -= 14;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 14;
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (player.health <= 0){
                gameOverHandler(enemy.name, stage);
                
             } else {
                yourTurnHandler(name, enemy.name, player.weapon);
             }
        } else if (enemy.weapon == "sword"){
            if(enemy.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= swordDrunk;
                        enemy.stamina -= 12;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 12;
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= swordSober;
                        enemy.stamina -= 12;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 12;
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            }
            if (player.health <= 0){
                gameOverHandler(enemy.name, stage);
                
             } else {
                yourTurnHandler(name, enemy.name, player.weapon);
             }
        } else if (enemy.weapon == "fire breath"){
            if(player.bac >= 0.08){
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= fireBreathDrunk;
                        enemy.stamina -= 20;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 20;
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                       player.health -= fireBreathSober;
                        enemy.stamina -= 20;
                        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 18;
                        stageTextHandler(stage, enemy, turn);
                        break;
                    case 1:
                        enemy.stamina -= 20;
                        enemy.on = true;
                        enemyTextHandler(enemy);;
                        stage = 19;
                        stageTextHandler(stage, enemy, turn);
                }
            }
         */
        }
        if (enemy.health <= 0){
                if(enemy.name == "Horse-Stable Abel"){
                    stage = 2;
                } /*else if (enemy.name == "Karen"){
                    //no code yet
                } else if (enemy.name == "The Tequila Dragon"){
                    //no code yet
                }*/
                stageTextHandler(stage, enemy, turn)
        } else {
                stage = 15;
                stageTextHandler(stage, enemy, turn);
        }
    }
}
 
 /*function alcoHandler(turn, player, enemy){
    if(turn == "player"){
        player.bac += player.addBac;
        var stage = 20;
        stageTextHandler(stage, enemy, turn);
        playerTextHandler(true,player.health, player.stamina, player.bac, player.name);
    } else if (turn == "enemy"){
        if(enemy.name == "Horse-Stable Abel"){
            enemy.bac += enemy.addBac;
            stage = 20;
            stageTextHandler(stage, enemy, turn)
            enemyTextHandler(enemy);
        }
    }
 }
 function buzzKillHandler(stage, player, enemy, turn){
    if(player.bac >= 0.08){
        stage = 21;
        stageTextHandler(stage, enemy, turn)          
    } else {
        enemy.bac -= 0.04;
        stage = 21;
        stageTextHandler(stage, enemy, turn)
        enemyTextHandler(enemy);
    }
 }*/
 function yourTurnHandler(enemy){
    stage = 3;
    turn = "player"
    stageTextHandler(stage, enemy, turn)
 }
 function enemyTakeTurnHandler(stage, player, enemy){
    //if(enemy.weapon == "fists"){
        //switch(getRandomInt(2)) {
            //case 0:
                turn = "enemy";
                attackHandler(player, enemy, turn);
                /*break;
            case 1:
                turn = "enemy";
                console.log = "fists";
                alcoHandler(player, enemy, turn);
                break;
        }
    } else {
        switch(getRandomInt(3)) {
            case 0:
                turn = "enemy"
                attackHandler(name, player, enemy, turn);
                break;
            case 1:
                stage =18;
                stageTextHandler(stage, player, enemy, "enemy")
                turn = "enemy"
                attackHandler(player, enemy, turn);
                break;
            case 2:
                turn = "enemy"
                alcoHandler(player, enemy, turn);
                break;
         }
    }*/
     if (player.health <= 0){
        gameOverHandler(enemy, stage);
     } else {
        yourTurnHandler(player, enemy);
     }
 }
 function gameOverHandler(enemy, stage){
    stage = 9;
    stageTextHandler(stage, enemy, turn)
 }
 
 function firstTurnHandler(enemy){
    switch(getRandomInt(2)) {
        case 0:
            enemy.on = true;
            enemyTextHandler(enemy);
            stage = 4;
            turn = "player";
            stageTextHandler(stage, enemy, turn);
            break;
        case 1:
            enemy.on = true;
            enemyTextHandler(enemy);
            stage = 4;
            turn = "enemy";
            stageTextHandler(stage, enemy, turn);
            break;
     }
 }