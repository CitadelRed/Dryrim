/*you win the fight by either being drunk or buzzkilling the enemy. Buzzkilling only works if you're sober, and it doesn't work on animals.*/

    var stage = 1;
    var turn;
    var weaponNum;
    var won = false;
    var b1Text;
    var b2Text;
    var b3Text;
    var b4Text;

    const player = {on:true,name:"null", health:100, stamina:100, bac:0.0, weapon:"fists", addBac:0.12, drink:"mountainshine", shield:false};
    const enemy = {on:false,name:"null", health:90, stamina:100, bac:0.0, weapon:"fists", addBac:0.03, buzzKill:0.08, drink:"ale"};

    const fists = {sober:15, drunk:20, staminaHit:3};
    const peltRack = {sober:20, drunk:32, staminaHit:16};
    const chair = {sober:22, drunk:35, staminaHit:14};
    const sword = {sober:26, drunk:40, staminaHit:12};
    const fireBreath = {sober:23, drunk:35, staminaHit:20};

    var b1Body = document.getElementById("b1");
    var b2Body = document.getElementById("b2");
    var b3Body = document.getElementById("b3");
    var b4Body = document.getElementById("b4");

    
    var b2TextBox = document.getElementById("b1-text");

    gameResetHandler();
    stageTextHandler(weaponNum, stage, turn, player, enemy);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function b1ActionHandler() {
        console.log('Button b1 clicked, current stage:', stage);  // Debugging
        switch(stage){
            case 1:
                stage += 1;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                var nameShow = document.getElementById("name-show");
                nameShow.style.display = "block"; 
                break;
            case 2:
                player.name = document.getElementById("name-input").value;
                if (player.name.length == 0) {
                    alert("Name Cannot Be Blank")
                    stage = 2;
                    stageTextHandler(weaponNum, stage, turn, player, enemy)
                } else {
                    player.nameShow = document.getElementById("name-show");
                    player.nameShow.style.display = "none";
                    stage = 3;
                    player.on = true;
                    player.health = 100;
                    player.stamina = 100;
                    player.bac = 0.0;
                    playerTextHandler(player);
                    stageTextHandler(weaponNum, stage, turn, player, enemy)
                }
                
                break;
            case 3:
                stage += 1;
                player.health +=12
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                playerTextHandler(player);
                break;
            case 4:
                if(player.health == 112){
                    player.health +=13;
                } else if (player.bac == 0.04){
                    player.bac += 0.04;
                } else if (player.stamina == 112){
                    player.stamina += 13;
                }
                playerTextHandler(player);
                stage += 1;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 5:
                player.weapon = "fists";
                fightHsa(player, enemy)
                //fight
                break;
            case 6:
                player.weapon = "fists";
                fightHsa(player, enemy)
                //fight
                break;
            case 7:
                player.weapon = "pelt rack";
                fightHsa(player, enemy)
                //fight
                break;
            case 8:
                player.weapon = "fists";
                fightHsa(player, enemy)
                //fight
                break;
            case 9:
                player.weapon = "fists";
                fightHsa(player, enemy)
                //fight
                break;
            case 10:
                stage = 23;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 11:
                player.weapon = "fists";
                fightHsa(player, enemy)
                //fight
                break;
            case 12:
                player.weapon = "fists";
                fightHsa(player, enemy)
                //fight
                break;
            case 13:
                //no code
                break;
            case 14:
                console.log('Stage 14: Preparing for transition');
                stage = 23;
                won = false;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 15:
                console.log('Entering stage 15 logic');
                if(turn == "player"){
                    if(player.stamina >= fists.staminaHit){
                        weaponNum = 1;
                        turn = "player";
                        attackHandler(player, enemy, weaponNum, turn);
                    } else {
                        player.stamina += 20;
                        playerTextHandler(player)
                        stage = 22;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                    }                
                } else if(turn == "enemy"){
                    if(enemy.stamina >= fists.staminaHit){
                        enemyTakeTurnHandler(stage, player, enemy);
                    } else {
                        enemy.stamina += 20;
                        enemyTextHandler(enemy)
                        stage = 22;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                    }
                }
                break;
            case 16:
                if(turn == "player"){
                    stage = 15;
                    turn = "player";
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else if(turn == "enemy"){
                    enemyTakeTurnHandler(stage, player, enemy);
                }
                break;
            case 17:
                console.log('Stage 17 handling started');
                if(turn == "player"){
                    if (enemy.health <= 0){
                        console.log('Enemy health is 0 or less, calling winHandler');
                        console.log('winHandler called'); // Debugging
                        if(enemy.name == "Horse-Stable Abel"){
                            console.log('Winning against', enemy.name, ', transitioning to stage 14'); // Debugging
                            stage = 14;
                            enemy.on = false;
                            player.health = 100;
                            player.stamina = 100;
                            playerTextHandler(player);
                            enemyTextHandler(enemy);
                            console.log('Stage set to 14, enemy off, player health and stamina reset');
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        } else if (enemy.name == "Karen"){
                            stage = 38;
                            enemy.on = false;
                            player.health = 100;
                            player.stamina = 100;
                            player.bac = 0;
                            playerTextHandler(player);
                            enemyTextHandler(enemy);
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        } else if (enemy.name == '"The Tequila Dragon"'){
                            stage = 55;
                            enemy.on = false;
                            player.health = 100;
                            player.stamina = 100;
                            player.bac = 0;
                            playerTextHandler(player);
                            enemyTextHandler(enemy);
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        }
                    } else {
                        console.log('Enemy health greater than 0, setting stage to 15, turn to enemy');
                        stage = 15;
                        turn = "enemy"
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                    }
                } else if(turn == "enemy"){
                    if (player.health <= 0){
                        gameOverHandler(turn, player, enemy);
                    } else {
                        console.log('Player health greater than 0, setting stage to 15, turn to player');
                        stage = 15;
                        turn = "player";
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                    }
                }
                break;
            case 18:
                if(turn == "player"){
                    turn = "enemy";
                    stage = 15;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else if(turn == "enemy"){
                    stage = 15;
                    turn = "player";
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
                break;
            case 19:
                if(turn == "player"){
                    turn = "enemy";
                    stage = 15;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else if(turn == "enemy"){
                    stage = 15;
                    turn = "player";
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
                break;
            case 20:
                if(turn == "player"){
                    turn = "enemy";
                    stage = 15;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else if(turn == "enemy"){
                    stage = 15;
                    turn = "player";
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
                break;
            case 21:
                console.log('Entering stage 21 logic');
                if(enemy.name == "Horse-Stable Abel"){
                    stage = 3;
                    enemy.on = false;
                    player.health = 100;
                    player.stamina = 100;
                    player.bac = 0;
                    playerTextHandler(player);
                    enemyTextHandler(enemy);
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else if (enemy.name == "Karen"){
                    stage = 33;
                    enemy.on = false;
                    player.health = 100;
                    player.stamina = 100;
                    player.bac = 0;
                    playerTextHandler(player);
                    enemyTextHandler(enemy);
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else if (enemy.name == '"The Tequila Dragon"'){
                    stage = 52;
                    enemy.on = false;
                    player.health = 100;
                    player.stamina = 100;
                    player.bac = 0;
                    playerTextHandler(player);
                    enemyTextHandler(enemy);
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
                break;
            case 22:
                if(turn == "player"){
                    turn = "enemy";
                    stage = 15;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else if(turn == "enemy"){
                    stage = 15;
                    turn = "player";
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
                break;
            case 23:
                console.log('At stage 23');  // Debugging
                if (player.bac >= 0.31){
                    stage = 24; 
                } else {
                    stage = 25;
                }
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 24:
                stage = 29;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 25:
                stage = 30;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 26:
                stage = 29;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 27:
                stage = 30;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 28:
                stage = 29;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 29:
                stage = 32;
                player.bac = 0;
                playerTextHandler(player);
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 30:
                stage = 23;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 31:
                stage = 30;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 32:
                stage = 33;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 33:
                stage = 34;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 34:
                fightKaren(player, enemy)
                break;
            case 35:
                fightKaren(player, enemy)
                break;
            case 36:
                fightKaren(player, enemy)
                break;
            case 37:
                fightKaren(player, enemy)
                break;
            case 38:
                stage = 39;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 39:
                stage = 40;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 40:
                stage = 44;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 41:
                stage = 47;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 42:
                stage = 41;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 43:
                stage = 50;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 44:
                stage = 47;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 45:
                stage = 50;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 46:
                stage = 47;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 47:
                stage = 51;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 48:
                stage = 47;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 49:
                stage = 47;
                player.name = "Shakira Flabbergasted";
                playerTextHandler(player);
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 50:
                stage = 38;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 51:
                stage = 52;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 52:
                stage = 53;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 53:
                fightTequilaDragon(player, enemy);
                break;
            case 54:
                fightTequilaDragon(player, enemy);
                break;
            case 55:
                stage = 56;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 56:
                stage = 57;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 57:
                stage = 58;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;  
            case 58:
                stage = 3;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
        }    
    }
    function b2ActionHandler() {
        switch(stage){
            case 1:
                window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=R2u3MlCHRVWRMDOg';
                break;
            case 2:
                //no code
                break;
            case 3:
                stage += 1;
                player.bac += 0.04;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                playerTextHandler(player);
                break;
            case 4:
                player.weapon = "fists";
                fightHsa(player, enemy)
                break;
            case 5:
                stage = 12;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
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
                //no code
                break;
            case 15:
                if(turn == "player"){
                    if (player.weapon == "pelt rack"){
                        if(player.stamina >= peltRack.staminaHit){
                            weaponNum = 2;
                            turn = "player";
                            attackHandler(player, enemy, weaponNum, turn);
                        } else {
                            player.stamina += 20;
                            playerTextHandler(player);
                            stage = 22;
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        }
                    } else if (player.weapon == "chair"){
                        if(player.stamina >= chair.staminaHit){
                            weaponNum = 2;
                            turn = "player";
                            attackHandler(player, enemy, weaponNum, turn);
                        } else {
                            player.stamina += 20;
                            playerTextHandler(player);
                            stage = 22;
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        }
                    } else if (player.weapon == "sword"){
                        if(player.stamina >= sword.staminaHit){
                            weaponNum = 2;
                            turn = "player";
                            attackHandler(player, enemy, weaponNum, turn);
                        } else {
                            player.stamina += 20;
                            playerTextHandler(player);
                            stage = 22;
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        }
                    }
                    
                } else if(turn == "enemy"){
                    if (enemy.weapon == "pelt rack"){
                        if(enemy.stamina >= peltRack.staminaHit){
                            weaponNum = 2;
                            turn = "enemy";
                            attackHandler(player, enemy, weaponNum, turn);
                        } else {
                            enemy.stamina += 20;
                            enemyTextHandler(enemy);
                            stage = 22;
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        }
                    } else if (enemy.weapon == "chair"){
                        if(enemy.stamina >= chair.staminaHit){
                            weaponNum = 2;
                            turn = "enemy";
                            attackHandler(player, enemy, weaponNum, turn);
                        } else {
                            enemy.stamina += 20;
                            enemyTextHandler(enemy);
                            stage = 22;
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        }
                    } else if (enemy.weapon == "sword"){
                        if(enemy.stamina >= sword.staminaHit){
                            weaponNum = 2;
                            turn = "enemy";
                            attackHandler(player, enemy, weaponNum, turn);
                        } else {
                            enemy.stamina += 20;
                            enemyTextHandler(enemy);
                            stage = 22;
                            stageTextHandler(weaponNum, stage, turn, player, enemy);
                        }
                    }
                }
                break;
            case 16:
                //no code
                break;
            case 17:
                //no code
                break;
            case 18:
                //no code
                break;
            case 19:
                //no code
                break;
            case 20:
                //no code
                break;
            case 21:
                //no code
                break;
            case 22:
                //no code
                break;
            case 23:
                stage = 26;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 24:
                //no code
                break;
            case 25:
                //no code
                break;
            case 26:
                //no code
                break;
            case 27:
                //no code
                break;
            case 28:
                //no code
                break;
            case 29:
                //no code
                break;
            case 30:
                //no code
                break;
            case 31:
                //no code
                break;
            case 32:
                //no code
                break;
            case 33:
                stage = 35;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 34:
                //no code
                break;
            case 35:
                //no code
                break;
            case 36:
                //no code
                break;
            case 37:
                //no code
                break;
            case 38:
                //no code
                break;
            case 39:
                stage = 41;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 40:
                stage = 45;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 41:
                stage = 48;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 42:
                stage = 49;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 43:
                //no code
                break;
            case 44:
                //no code
                break;
            case 45:
                //no code
                break;
            case 46:
                //no code
                break;
            case 47:
                stage = 51;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 48:
                //no code
                break;
            case 49:
                stage = 48;
                player.name = "Shakira Flabbergasted";
                playerTextHandler(player);
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 50:
                //no code
                break;
            case 51:
                //no code
                break;
            case 52:
                //no code
                break;
            case 53:
                player.bac += 0.28;
                playerTextHandler(player);
                stage = 54;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 54:
                //no code
                break;
            case 55:
                //no code
                break;
            case 56:
                //no code
                break;
            case 57:
                //no code
                break;
            case 58:
                window.location.href = 'https://en.wikipedia.org/wiki/PDF';
                break;
        }
    }
    function b3ActionHandler() {
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
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                playerTextHandler(player);
                break;
            case 4:
                stage += 2;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 5:
                stage += 6;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
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
                //no code
                break;
            case 15:
                if(turn == "player"){
                    turn = "player";
                    alcoHandler(player, enemy, turn);
                } else if(turn == "enemy"){
                    //no code
                }
                break;
            case 16:
                //no code
                break;
            case 17:
                //no code
                break;
            case 18:
                //no code
                break;
            case 19:
                //no code
                break;
            case 20:
                //no code
                break;
            case 21:
                //no code
                break;
            case 22:
                //no code
                break;
            case 23:
                if (player.bac >= 0.31){
                    stage = 28; 
                } else {
                    stage = 27;
                }
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 24:
                //no code
                break;
            case 25:
                //no code
                break;
            case 26:
                //no code
                break;
            case 27:
                //no code
                break;
            case 28:
                //no code
                break;
            case 29:
                //no code
                break;
            case 30:
                //no code
                break;
            case 31:
                //no code
                break;
            case 32:
                //no code
                break;
            case 33:
                stage = 36;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 34:
                //no code
                break;
            case 35:
                //no code
                break;
            case 36:
                //no code
                break;
            case 37:
                //no code
                break;
            case 38:
                //no code
                break;
            case 39:
                stage = 42;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 40:
                stage = 46;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 41:
                stage = 47;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 42:
                stage = 40;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 43:
                //no code
                break;
            case 44:
                //no code
                break;
            case 45:
                //no code
                break;
            case 46:
                //no code
                break;
            case 47:
                stage = 45;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 48:
                //no code
                break;
            case 49:
                stage = 47;
                player.name = "Shakira Flabbergasted";
                playerTextHandler(player);
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 50:
                //no code
                break;
            case 51:
                //no code
                break;
            case 52:
                //no code
                break;
            case 53:
                //no code
                break;
            case 54:
                fightTequilaDragon(player, enemy);
                break;
            case 55:
                //no code
                break;
            case 56:
                //no code
                break;
            case 57:
                //no code
                break;
            case 58:
                window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=R2u3MlCHRVWRMDOg';
                break;
        }
    }
    function b4ActionHandler() {
        switch(stage){
            case 1:
                //no code
                break;
            case 2:
                //no code
                break;
            case 3:
                stage += 1;
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 4:
                if (player.bac >= 0.04){
                    stage += 3; 
                } else {
                    stage += 4;
                }
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 5:
                if (player.bac >= 0.04){
                    stage += 5; 
                } else {
                    stage += 4;
                }
                stageTextHandler(weaponNum, stage, turn, player, enemy)
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
                //no code
                break;
            case 15:
                if(turn == "player"){
                    turn = "player";
                    buzzKillHandler(player, enemy);
                } else if(turn == "enemy"){
                    //no code
                }
                break;
            case 16:
                //no code
                break;
            case 17:
                //no code
                break;
            case 18:
                //no code
                break;
            case 19:
                //no code
                break;
            case 20:
                //no code
                break;
            case 21:
                //no code
                break;
            case 22:
                //no code
                break;
            case 23:
                stage = 31; 
                stageTextHandler(weaponNum, stage, turn, player, enemy)
                break;
            case 24:
                //no code
                break;
            case 25:
                //no code
                break;
            case 26:
                //no code
                break;
            case 27:
                //no code
                break;
            case 28:
                //no code
                break;
            case 29:
                //no code
                break;
            case 30:
                //no code
                break;
            case 31:
                //no code
                break;
            case 32:
                //no code
                break;
            case 33:
                stage = 37;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 34:
                //no code
                break;
            case 35:
                //no code
                break;
            case 36:
                //no code
                break;
            case 37:
                //no code
                break;
            case 38:
                //no code
                break;
            case 39:
                stage = 43;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 40:
                stage = 43;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 41:
                stage = 43;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 42:
                stage = 43;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 43:
                //no code
                break;
            case 44:
                //no code
                break;
            case 45:
                //no code
                break;
            case 46:
                //no code
                break;
            case 47:
                stage = 43;
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 48:
                //no code
                break;
            case 49:
                stage = 43;
                player.name = "Shakira Flabbergasted";
                playerTextHandler(player);
                stageTextHandler(weaponNum, stage, turn, player, enemy);
                break;
            case 50:
                //no code
                break;
            case 51:
                //no code
                break;
            case 52:
                //no code
                break;
            case 53:
                //no code
                break;
            case 54:
                //no code
                break;
            case 55:
                //no code
                break;
            case 56:
                //no code
                break;
            case 57:
                //no code
                break;
            case 58:
                //no code
                break;
        }
    }
    function promptHandler(stage, player, enemy, weaponNum, turn){
        console.log('promptHandler called, stage:', stage);
        var prompt = document.getElementById("prompt");
        if (turn == "player"){
            if (weaponNum == 1 || player.weapon == "fists"){
                var pWeapon = "fists";
            } else {
                pWeapon = player.weapon;
            }
        } else if (turn == "enemy"){
            if (weaponNum == 1 || enemy.weapon == "fists"){
                var eWeapon = "fists";
            } else {
                eWeapon = enemy.weapon;
            }
        }
        switch(stage) {
            case 1:
                var promptText = 'In the drunken land of Tamriel stands one hero. This bladesman is one mildly-attractive nord, a bladesman of the meadery, whose mission is to get drunk enough to defeat evil for all of Tamriel! One foretold soul to earn the glory of victory! (Note: Alcohol is good for you in this game, it will make you more charismatic and a better fighter.)'
                prompt.innerHTML = promptText;
                break;
            case 2:
                promptText = 'What is your name, brave swordsman?'
                prompt.innerHTML = promptText;
                break;
            case 3:
                promptText = player.name + ' is at the bar. The menu features bloodroot tea, brandy, wind-chaser, and water.'
                prompt.innerHTML = promptText;
                break;
            case 4:
                promptText = 'A drunken horseback rider crashes through the wall into the bar! The rider, Horse-Stable Abel stumbles to his feet and wants to fight ' + player.name + ', because look what the master swordsman made him do.' 
                prompt.innerHTML = promptText;
                break;
            case 5:
                promptText = '"I don\'t got all day, buckeroo!" slurs the horseman. "Put your dukes up!"'
                prompt.innerHTML = promptText;
                break;
            case 6:
                promptText = 'Horse-Stable Abel sees ' + player.name + ' look at the door, he goes over and stands in the doorway. "You\'re going to have to get past me!" He says, sounding like a 5 year old.'
                prompt.innerHTML = promptText;
                break;
            case 7:
                promptText = player.name + ' scavenges around for something to hit this weirdo with. ' + player.name + ' finds a pelt rack with no pelt hanging on it. ' + player.name + ' picks it up and faces Horse-Stable Abel.'
                prompt.innerHTML = promptText;
                break;
            case 8:
                promptText = player.name + ' scavenges around for something to hit this weirdo with. ' + player.name + ' is not drunk enough to think clearly enough to find something. "Look at this grade 4 dropout!" Says Horse-Stable Abel.'
                prompt.innerHTML = promptText;
                break;
            case 9:
                promptText = player.name + ' attempts to steal the horse. The horse\'s back hoof lands a clear blow against ' + player.name +'\'s skull. "What are you doing to Clip-Clop?!?" Shouts Horse-Stable Abel.'
                prompt.innerHTML = promptText;
                break;
            case 10:
                promptText = player.name + ' drunkenly stumbles onto the horse and grabs the reins! "What are you doing to Clip-Clop?!?" Shouts Horse-Stable Abel. ' + player.name + ' rides off home, unscathed. Clip-Clop is now ' + player.name + '\'s horse.'
                prompt.innerHTML = promptText;
                break;
            case 11:
                promptText = '"\'buckeroo\' yourself some maidens" ' + player.name + ' says. That pisses off Horse-Stable Abel and Horse-Stable Abel tries to swing, but he misses.'
                prompt.innerHTML = promptText;
                break;
            case 12:
                promptText = '"I didn\'t ride my horse through the wall right there. Drunk riding spills happen, nothing to blame anyone over." ' + player.name + ' says. "BLAHBLAHBLAHBLAHBLAH!" shouts Horse-Stable Abel. "That last blah was one blah too many. I\'ll teach you not to blah at me again." ' + player.name + ' says. '
                prompt.innerHTML = promptText;
                break;
            case 13:
                //no code
                break;
            case 14:
                promptText = enemy.name + " died! " + player.name + ' hoists onto Horse-Stable Abel\'s Horse, Clip-Clop, and takes off, leaving any weapons at the bar. ' + player.name + '\'s wife must not see ' + player.name + ' coming home with bloodied weapons. '
                prompt.innerHTML = promptText;
                break;
            case 15:
                if(turn == "player"){
                    promptText = "It's " + player.name + "'s turn."
                    prompt.innerHTML = promptText;
                } else if(turn == "enemy"){
                    promptText = "It's " + enemy.name + "'s turn."
                    prompt.innerHTML = promptText;
                }
                break;
            case 16:
                if(turn == "player"){
                    promptText = player.name + " goes first."
                    prompt.innerHTML = promptText;
                } else if(turn == "enemy"){
                    promptText = enemy.name + " goes first."
                    prompt.innerHTML = promptText;
                }
                break;
            case 17:
                if(turn == "player"){
                    promptText = player.name + " hits " + enemy.name + " with the " + pWeapon;
                    prompt.innerHTML = promptText;
                } else if(turn == "enemy"){
                    promptText = enemy.name + " hits " + player.name + " with the " + eWeapon;
                    prompt.innerHTML = promptText;
                }
                break;
            case 18:
                if(turn == "player"){
                    promptText = player.name + " swings with the " + pWeapon + " but misses!"
                    prompt.innerHTML = promptText;
                } else if(turn == "enemy"){
                    if (player.shield == false){
                        promptText = enemy.name + " swings with the " + eWeapon + " but misses!"
                        prompt.innerHTML = promptText;
                    } else if (player.shield == true){
                        promptText = enemy.name + " swings with the " + eWeapon + " but it hits " + player.name + "'s shield!"
                        prompt.innerHTML = promptText;
                    }
                }
                break;
            case 19:
                if(turn == "player"){
                    promptText = player.name + " drinks one " + player.drink;
                    prompt.innerHTML = promptText;
                } else if (turn == "enemy"){
                    promptText = enemy.name + " drinks " + enemy.drink;
                    prompt.innerHTML = promptText;
                }
                break;
            case 20:
                if(player.bac >= 0.2){
                    promptText = player.name + " is not sober enough for a buzzkill move! " + player.name + " wastes a move!";
                    prompt.innerHTML = promptText;       
                } else {
                    promptText = player.name + " shows " + enemy.name + " black-and-white paper etchings of old cobblestone fanfare bridges found throughout Dryrim, effectively buzzkilling " + enemy.name + "!";
                    prompt.innerHTML = promptText;
                }
                break;
            case 21:
                promptText = enemy.name + ' kills ' + player.name + "! GAME OVER!"
                prompt.innerHTML = promptText;
                break;
            case 22:
                if(turn == "player"){
                    promptText = player.name + " doesn't have enough stamina for the move! " + player.name + " takes a breather to gather 20 stamina!";
                    prompt.innerHTML = promptText;
                } else if (turn == "enemy"){
                    promptText = enemy.name + " doesn't have enough stamina for the move! " + enemy.name + " takes a breather to gather 20 stamina!" ;
                    prompt.innerHTML = promptText;
                }
                break;
            case 23:
                promptText =  player.name + ' arrives home to ' + player.name + '\'s wife, Thara. "Look who the dragon drag in?" says Thara. ' + player.name + ' gets off the horse with a confused look on the swordsman\'s face. "You forgot to feed the chickens today. I had to feed them again for the millionth time. What do you have to say for yourself?" asks Thara.'
                prompt.innerHTML = promptText;
                break;
            case 24:
                promptText = '"But look what I got us from the pony store!" '+ player.name + ' presents the horse to Thara. This thing was on sale for 5 gold. His name is Clip-Clop!" says the swordsman. "Look how cute he is!" Says Thara. "But there\'s something I\'d like to talk to you about." she says.'
                prompt.innerHTML = promptText;
                break;
            case 25:
                promptText = '"luckily for us, I stole this pony off of a guy who wanted to kick my ass." Admits the swordsman. "Gawd you\'re such an idiot." Says Thara. " I\'m tired of you always stealing stuff for no reason. I\'m taking young Ralof and moving in back with my parents. And you better actually go to the Jarl\'s for divorce proceedings."' 
                prompt.innerHTML = promptText;
                break;
            case 26:
                promptText = '"Well be sure to feed them the next time you get a chance." says Thara. But there\'s another thing I\'d like to talk to you about." she says.'
                prompt.innerHTML = promptText;
                break;
            case 27:
                promptText = '"I kicked a man\'s ass today." says ' + player.name + '.  "I kicked his ass all across the floor." Thara doesn\'t like that one bit, so she raises her voice. "YOU\'RE SUPPOSED TO BE TAKING CARE OF RALOF AND THE CHICKENS AND BRINGING HOME THE BACON! ALL YOU DO IS KICK PEOPLE\'S ASSES! You know what? I\'m taking young Ralof and moving in with my parents. Expect to hear from a courier to go down to the Jarl\'s for the divorce proceedings." shouts Thara.'
                prompt.innerHTML = promptText;
                break;
            case 28:
                promptText = '"I kicked some dude\'s ass today." says ' + player.name + '.  "I kicked his ass all across the floor." Thara thinks the way you said that was cute. "I guess drunken swordsmen will be drunken swordsmen. But there\'s another thing I\'d like to talk to you about." She says.'
                prompt.innerHTML = promptText;
                break;
            case 29:
                promptText = 'Thara continued, "I like the pony you got, but I just found this in that treasure chest we have upstairs, I was finally able to pick the lock. The note said \'To my child, ' + player.name + '; If you are reading this, I have been slain by "The Tequila Dragon". A dragon that drinks enough tequila, even for its size, to be a threat to the entire city of Whiterun, and other cities in Tamriel. You inhereit the contents of this chest, use them to avenge my death.\' This must mean this fancy sword and shield are now yours." Says Thara. "Go tell the Jarl about the danger, make sure he knows about "The Tequila Dragon", and take the sword and shield with you."'
                prompt.innerHTML = promptText;
                break;
            case 30:
                promptText = 'Thara files for divorce, and there\'s no prenup. She leaves with everything you own. She takes the house, she takes Clip-Clop, she takes your son, Ralof. You will never see Ralof again. GAME OVER.'
                prompt.innerHTML = promptText;
                break;
            case 31: 
                promptText = '"YOU NEVER CARE ABOUT ANYTHING! YOU\'RE SUPPOSED TO BE TAKING CARE OF RALOF AND THE CHICKENS AND BRINGING HOME THE BACON! INSTEAD YOU GET DRUNK AND GALAVANT AROUND TOWN MESSING WITH PEOPLE LIKE A COMMON IDIOT! You know what? I\'m taking young Ralof and moving in with my parents. Expect to hear from a courier to go down to the Jarl\'s for the divorce proceedings." shouts Thara'
                prompt.innerHTML = promptText;
                break;
            case 32:
                promptText = player.name + ' rides into Whiterun. He notices, right next to the Jarl\'s castle, there\'s a sign that says "Free Cabbage Potato Soup For Life! First come, first serve. " ' + player.name +' gets off Clip-Clop and heads into the Jarl\'s castle.'
                prompt.innerHTML = promptText;
                break;
            case 33:
                promptText = 'Inside the Jarl\'s castle, two women are arguing over who should get the free cabbage potato soup for life. Freya says "I have seven children, I need this or they will starve!" and Karen says "Too bad you stupid bimbo! I was here first!" "You there!" says the Jarl, pointing at ' + player.name + '. "Karen won\'t listen to me! Freya is the winner of the soup. Please take care of this matter!"'
                prompt.innerHTML = promptText;
                break;
            case 34:
                promptText = 'Karen grabs a folding chair. "I\'ve been smoking goat meth all day, I am not the one!" She tries to crack ' + player.name + ' in the head with the folding chair, but she misses!'
                prompt.innerHTML = promptText;
                break;
            case 35:
                promptText = '"Don\'t you think you\'ve had enough food?" says ' + player.name + ', as the swordsman pokes Karen in the stomach. "HOW DARE YOU!" shouts Karen. Karen picks up a chair and starts trying to hit ' + player.name + ' with it.'
                prompt.innerHTML = promptText;
                break;
            case 36:
                promptText = '"Karen, time to graduate 2nd grade and learn how to share." says ' + player.name + '. "How dare you! I am entitled to this food!" Shouts Karen. Karen swings at you with her folding chair.'
                prompt.innerHTML = promptText;
                break;
            case 37: 
                promptText = '"Karen I literally have my sword and shield right here. You\'re looking at a warrior." said ' + player.name + '. "I\'m looking at a common idiot!" replied Karen. Karen swings at ' + player.name + ' with the folding chair.'
                prompt.innerHTML = promptText;
                break;
            case 38:
                promptText = enemy.name + ' died! The Jarl is most impressed. "You there!" inquires the Jarl.'
                prompt.innerHTML = promptText;
                break;
            case 39:
                promptText = '"What is your name, brave swordsman?" asks the Jarl.'
                prompt.innerHTML = promptText;
                break;
            case 40:
                promptText = '"Why do you ask?" inquires the swordman. "You fight like a true drunken warrior, I need a warrior like you to defend my city." Explains the Jarl.'
                prompt.innerHTML = promptText;
                break;
            case 41:
                promptText = '"my name is ' + player.name + '." says the swordsman. "alright, ' + player.name + ', I dub thee Thane of Whiterun. Your first order of business is to defeat \'The Tequila Dragon.\'"'
                prompt.innerHTML = promptText;
                break;
            case 42:
                promptText = '"my name is Shakira Flabbergasted." Said the warrior. The Jarl begins laughing. "You watch Dryrim Cops like I do? Crazy show. But I would like your real name."'
                prompt.innerHTML = promptText;
                break;
            case 43:
                promptText = '"Oh I see, you\'re giving me the silent treatment." says the Jarl." Two can play at that game. Begone!"'
                prompt.innerHTML = promptText;
                break;
            case 44:
                promptText = '"Yes, that\'s the one!" exclaims the Jarl.'
                prompt.innerHTML = promptText;
                break;
            case 45:
                promptText = '"Alright! you don\'t have to do it, dang!" exclaims the Jarl.'
                prompt.innerHTML = promptText;
                break;
            case 46:
                promptText = '"Wow what a predicament! Where can we find a true drunken warrior?" asks ' + player.name + '. "It\'s you, smart one." Says the Jarl. "You are to defeat \'The Tequila Dragon.\'"'
                prompt.innerHTML = promptText;
                break;
            case 47:
                promptText = '"\'The Tequila Dragon\' lives in a cave in Mount Hrothgar, the mouth of the cave is in plain sight of the city. \'The Tequila Dragon\' sometimes comes out and mad-dogs us. She flips her middle finger at the townspeople. We are concerned she will, one day, fly over here and lay waste to this great city. I need you, as our thane, to slay this beast." Says the Jarl.'
                prompt.innerHTML = promptText;
                break;
            case 48:
                promptText = '"That\'s her." replies the Jarl.'
                prompt.innerHTML = promptText;
                break;
            case 49:
                promptText = '"Sir, that\'s actually my name." says the swordsman. "Alright, Shakira Flabbergasted, I dub thee Thane of Whiterun. This legally changes your name to Shakira Flabbergasted, if that wasn\'t your name. Your first order of business is to defeat \'The Tequila Dragon.\'"'
                prompt.innerHTML = promptText;
                break;
            case 50:
                promptText = 'Game Over! Upon your failure to serve the Jarl, "The Tequila Dragon" gets really drunk one night and lays waste to all of Whiterun! Oh no!'
                prompt.innerHTML = promptText;
                break;
            case 51:
                promptText = 'Great! I know I can trust you then. Now off you go before this Dragon destroys our city!'
                prompt.innerHTML = promptText;
                break;
            case 52: 
                promptText = 'So ' + player.name + ' rides nobile clip-clop up the mountain. The swordsman spots "The Tequila Dragon\'s" cave. In the mouth of the cave, he spots a warrior\'s dead body. "That\'s the exact same breastplate my father wore! That\'s him!"'
                prompt.innerHTML = promptText;
                break;
            case 53:
                promptText = 'The swordsman hears evil laughter coming from the cave. It\'s "The Tequila Dragon!" The dragon came out of the cave carrying a huge bottle of Dragon Julio, Tequila. "You killed my father, you crazy bitch!" Shouts ' + player.name + ', only then realizing dragons don\'t understand english.'
                prompt.innerHTML = promptText;
                break;
            case 54:
                promptText = '"This one\'s for you, Dad!" ' + player.name + ' raises the mountainshine to the sky, drinking up a 0.28 BAC. "Now let\'s rumble!"'
                prompt.innerHTML = promptText;
                break;
            case 55:
                promptText = player.name + 'kills "The Tequila Dragon!" "The Tequila Dragon" falls on the ground with its head landing next to ' + player.name + '!'
                prompt.innerHTML = promptText;
                break;
            case 56:
                promptText = 'Out of "The Tequila Dragon\'s" gnarly jaws, crawls out a man. The man\'s boot gets stuck in the teeth. The man rights himself as he grabs the boot and puts it back on his foot. That man is ' + player.name + '\'s father!" ' + player.name + ' you did it! I\'ve spent years in the pit of this beast\'s stomach. I ate whatever I could find in there, and drank of the Tequila to stay alive!" says ' + player.name +'\'s dad. "I can\'t believe you\'re alive!" Says ' + player.name + '. "We have so much to catch up on!"'
                prompt.innerHTML = promptText;
                break;
            case 57:
                promptText = '"I\'ll catch you up on this!" says dad. "Whatever you\'re drinking, pour it out! This Tequila kept me sane this entire time I was in isolation!" ' + player.name + ' dumps out the mountainshine and fills his flask with Dragon Julio Tequila. "We can take this to the meadery, we can find out what is in this! We can make Buckoo bucks!" says dad. "My wife will finally take me for a hard working man of Tamriel!" says ' + player.name + '. "You have a wife now? Fantastic!" says dad. They both walked down the mountain. "Say, is she anything like your mother?" asks dad. They both laugh.'
                prompt.innerHTML = promptText;
                break;
            case 58:
                promptText = 'Congratulations! Upon beating this game, you can now save 50% on one 750ML bottle of Dragon Julio Tequila! use code "DRYRIM" at checkout at dragonjuliostore.com in Washington D.C., Florida, Hawaii, Kentucky, Nebraska, New Hampshire, Rhode Island, or West Virginia. If your state is not listed, use the second button from the top to go to a coupon PDF where you can print it out to buy Dragon Julio 50% off one 750ML bottle at your local participating state liquor stores! Thank you for playing, and please drink responsibly in real life.'
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
                questionText = 'When you\'re Ready, hit "submit"'
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
                //no code
                break;
            case 14:
                questionText = "YOU WIN! Press continue"
                question.innerHTML = questionText;
                break;
            case 15:
                if(turn == "player"){
                    questionText = "What do you do?"
                    question.innerHTML = questionText;
                } else if(turn == "enemy"){
                    questionText = "Press continue."
                    question.innerHTML = questionText;
                }
                break;
            case 16:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 17:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 18:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 19:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 20:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 21:
                questionText = "would you like to play again?"
                question.innerHTML = questionText;
                break;
            case 22:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 23:
                questionText = "What do you have to say for yourself?"
                question.innerHTML = questionText;
                break;
            case 24:
                questionText = 'Press continue.'
                question.innerHTML = questionText;
                break;
            case 25:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 26:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 27:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 28:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 29:
                    questionText = "Press continue to go to the next scene."
                question.innerHTML = questionText;
                break;
            case 30:
                questionText = "Would you like to continue from saved checkpoint?"
                question.innerHTML = questionText;
                break;
            case 31:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 32:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 33:
                questionText = "What do you say?"
                question.innerHTML = questionText;
                break;
            case 34:
                questionText = "What do you do?"
                question.innerHTML = questionText;
                break;
            case 35:
                    questionText = "What do you do?"
                question.innerHTML = questionText;
                break;
            case 36:
                questionText = "What do you do?"
                question.innerHTML = questionText;
                break;
            case 37:
                questionText = "What do you do?"
                question.innerHTML = questionText;
                break;
            case 38:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 39:
                questionText = "What do you say?"
                question.innerHTML = questionText;
                break;
            case 40:
                questionText = "What do you say?"
                question.innerHTML = questionText;
                break;
            case 41:
                questionText = "What do you say?"
                question.innerHTML = questionText;
                break;
            case 42:
                questionText = "What do you say?"
                question.innerHTML = questionText;
                break;
            case 43:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 44:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 45:
                questionText = 'Press continue.'
                question.innerHTML = questionText;
                break;
            case 46:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 47:
                questionText = "What do you say?"
                question.innerHTML = questionText;
                break;
            case 48:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 49:
                questionText = "What do you say?"
                question.innerHTML = questionText;
                break;
            case 50:
                questionText = "Would you like to continue from saved checkpoint?"
                question.innerHTML = questionText;
                break;
            case 51:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 52:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 53:
                questionText = "What do you do?"
                question.innerHTML = questionText;
                break;
            case 54:
                questionText = "What do you do?"
                question.innerHTML = questionText;
                break;
            case 55:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 56:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 57:
                questionText = "Press continue."
                question.innerHTML = questionText;
                break;
            case 58:
                questionText = "Select from the following."
                question.innerHTML = questionText;
                break;
        } 
    }
    function b1TextHandler(stage, enemy, turn){
        var b1 = document.getElementById("b1-text");
        console.log('b1TextHandler called, stage:', stage);  // Debugging
        switch(stage) {
            case 1:
                var b1Text = "yes";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 2:
                b1Text = 'submit'
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 3:
                b1Text = "bloodroot tea (+25 health)";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 4:
                b1Text = "finish your beverage calmly";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 5:
                b1Text = "fight";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 6:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 7:
                b1Text = "use the pelt rack to teach him a lesson";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 8:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 9:
                b1Text = "fight the man or he'll fight you.";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 10:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 11:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 12:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 13:
                //no code
                break;
            case 14:
                b1Text = "continue"
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 15:
                if(turn == "player"){
                    b1Text = "punch " + enemy.name;
                    b1.innerHTML = b1Text;
                    return b1Text;
                } else if(turn == "enemy"){
                    b1Text = "continue"
                    b1.innerHTML = b1Text;
                    return b1Text;
                }
                break;
            case 16:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 17:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 18:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 19:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 20:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 21:
                b1Text = "play again from save";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 22:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 23:
                b1Text = "use charisma"
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 24:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 25:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 26:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 27:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 28:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 29:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 30:
                b1Text = "yes";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 31:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 32:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 33:
                b1Text = '"Karen, the Jarl\'s right"';
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 34:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 35:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 36:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 37:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 38:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 39:
                b1Text = '"Why?"';
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 40:
                b1Text = '"The Tequila Dragon?"';
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 41:
                b1Text = '"How\'d you know?"';
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 42:
                b1Text = 'tell him your real name';
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 43:
                b1Text = "continue"
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 44:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 45:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 46:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 47:
                b1Text = '"Reminds me of my ex"';
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 48:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 49:
                b1Text = '"How\'d you know?"';
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 50:
                b1Text = "yes";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 51:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 52:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 53:
                b1Text = "fight this beast!";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 54:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 55:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 56:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 57:
                b1Text = "continue";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
            case 58:
                b1Text = "play again from beginning";
                b1.innerHTML = b1Text;
                return b1Text;
                break;
        } 
    }
    function b2TextHandler(stage, player, turn){
        var b2 = document.getElementById("b2-text");
        switch(stage) {
            case 1:
                var b2Text = "I don't feel like it.";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 2:
                b2Text = '-'
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 3:
                b2Text = "brandy (+0.8 buzz)";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 4:
                b2Text = "begin fighting immediately";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 5:
                b2Text = "be rational with him";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 6:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 7:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 8:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 9:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 10:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 11:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 12:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 13:
                //no code
                break;
            case 14:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 15:
                if(turn == "player"){
                    if(player.weapon == "fists"){
                        b2Text = "-";
                        b2.innerHTML = b2Text;
                        return b2Text;
                    } else {
                        b2Text = "use the " + player.weapon;
                        b2.innerHTML = b2Text;
                        return b2Text;
                    }
                } else if(turn == "enemy"){
                    b2Text = "-";
                    b2.innerHTML = b2Text;
                    return b2Text;
                }
                break;
            case 16:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 17:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 18:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 19:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 20:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 21:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 22:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 23:
                b2Text = '"I\'m sorry"';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 24:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 25:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 26:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 27:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 28:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 29:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 30:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 31:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 32:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 33:
                b2Text = "sarcasm";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 34:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 35:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 36:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 37:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 38:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 39:
                b2Text = 'tell him your name';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 40:
                b2Text = '"You can forget it."';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 41:
                b2Text = '"I saw her on my way in."';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 42:
                b2Text = '"That is my name, sir."';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 43:
                b2Text = "-"
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 44:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 45:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 46:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 47:
                b2Text = '"You can count on me!"';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 48:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 49:
                b2Text = '"I saw her on my way in."';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 50:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 51:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 52:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 53:
                b2Text = 'get absolutely plastered first!';
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 54:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 55:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 56:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 57:
                b2Text = "-";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
            case 58:
                b2Text = "go to your coupon";
                b2.innerHTML = b2Text;
                return b2Text;
                break;
        }
    }
    function b3TextHandler(stage, turn){
        var b3 = document.getElementById("b3-text");
        switch(stage) {
            case 1:
                var b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 2:
                b3Text = '-'
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 3:
                b3Text = "a wind-chaser (+25 stamina)";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 4:
                b3Text = "attempt to flee";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 5:
                b3Text = "sarcasm";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 6:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 7:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 8:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 9:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 10:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 11:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 12:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 13:
                //no code
                break;
            case 14:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 15:
                if(turn == "player"){
                    b3Text = 'drink mountainshine';
                    b3.innerHTML = b3Text;
                return b3Text;
                } else if(turn == "enemy"){
                    b3Text = '-';
                    b3.innerHTML = b3Text;
                return b3Text;
                }
                break;
            case 16:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 17:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 18:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 19:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 20:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 21:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 22:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 23:
                b3Text = "I kicked a dude's ass today.";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 24:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 25:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 26:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 27:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 28:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 29:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 30:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 31:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 32:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 33:
                b3Text = '"Karen stop being immature"';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 34:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 35:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 36:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 37:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 38:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 39:
                b3Text = '"Shakira Flabbergasted"';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 40:
                b3Text = 'sarcasm';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 41:
                b3Text = '"That\'s why I\'m here."';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 42:
                b3Text = '"Why?"';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 43:
                b3Text = "-"
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 44:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 45:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 46:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 47:
                b3Text = '"No!"';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 48:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 49:
                b3Text = '"That\'s why I\'m here."';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 50:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 51:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 52:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 53:
                b3Text = '-';
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 54:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 55:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 56:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 57:
                b3Text = "-";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            case 58:
                b3Text = "go to other reward";
                b3.innerHTML = b3Text;
                return b3Text;
                break;
            
        } 
    }
    function b4TextHandler(stage, turn){
        var b4 = document.getElementById("b4-text");
        switch(stage) {
            case 1:
                var b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 2:
                b4Text = '-'
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 3:
                b4Text = "water (nothing)";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 4:
                b4Text = "look for a weapon";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 5:
                b4Text = "steal the horse";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 6:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 7:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 8:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 9:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 10:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 11:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 12:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 13:
                //no code
                break;
            case 14:
                b4Text = '-'
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 15:
                if(turn == "player"){
                    b4Text = "buzzkill (-0.8 Enemy BAC)";
                    b4.innerHTML = b4Text;
                return b4Text;
                } else if(turn == "enemy"){
                    b4Text = "-";
                    b4.innerHTML = b4Text;
                return b4Text;
                }
                break;
            case 16:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 17:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 18:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 19:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 20:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 21:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 22:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 23:
                b4Text = '"I don\'t care"';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 24:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 25:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 26:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 27:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 28:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 29:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 30:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 31:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 32:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 33:
                b4Text = "intimidate";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 34:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 35:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 36:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 37:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 38:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 39:
                b4Text = 'remain silent';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 40:
                b4Text = 'remain silent';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 41:
                b4Text = 'remain silent';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 42:
                b4Text = 'remain silent';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 43:
                b4Text = "-"
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 44:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 45:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 46:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 47:
                b4Text = 'remain silent';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 48:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 49:
                b4Text = 'remain silent';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 50:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 51:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 52:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 53:
                b4Text = '-';
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 54:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 55:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 56:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 57:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
            case 58:
                b4Text = "-";
                b4.innerHTML = b4Text;
                return b4Text;
                break;
        } 
    }
    function stageTextHandler(weaponNum, stage, turn, player, enemy){
        console.log('stageTextHandler called, stage:', stage);  // Debugging
        promptHandler(stage, player, enemy, weaponNum, turn);
        console.log('promptHandler called');
        questionHandler(stage);
        console.log('questionHandler called');
        b1TextHandler(stage, enemy, turn);
        console.log('b1TextHandler called');
        b2TextHandler(stage, player, turn);
        console.log('b2TextHandler called');
        b3TextHandler(stage, turn);
        console.log('b3TextHandler called');
        b4TextHandler(stage, turn);
        console.log('b4TextHandler called');
    }
    b1Body.addEventListener("mouseenter", function( event ) { 
        if (b1TextHandler(stage, enemy, turn) != "-"){
            event.target.style.backgroundColor = "rgb(242, 132, 91, 1.00)";
            document.getElementById("b1-text").style.color = "rgba(35, 31, 32, 1.00)";
        }
      }, false);
    b1Body.addEventListener("mouseleave", function( event ) {   
        if (b1TextHandler(stage, enemy, turn) != "-"){
            event.target.style.backgroundColor = "rgba(35, 31, 32, 1.00)";
            document.getElementById("b1-text").style.color = "rgb(242, 132, 91, 1.00)";
        }
      }, false);
    b2Body.addEventListener("mouseenter", function( event ) { 
        if (b2TextHandler(stage, player, turn) != "-"){
            event.target.style.backgroundColor = "rgb(242, 132, 91, 1.00)";
            document.getElementById("b2-text").style.color = "rgba(35, 31, 32, 1.00)";
        }
      }, false);
    b2Body.addEventListener("mouseleave", function( event ) {   
        if (b2TextHandler(stage, player, turn) != "-"){
            event.target.style.backgroundColor = "rgba(35, 31, 32, 1.00)";
            document.getElementById("b2-text").style.color = "rgb(242, 132, 91, 1.00)";
        }
      }, false);
    b3Body.addEventListener("mouseenter", function( event ) { 
        if (b3TextHandler(stage, turn) != "-"){
            event.target.style.backgroundColor = "rgb(242, 132, 91, 1.00)";
            document.getElementById("b3-text").style.color = "rgba(35, 31, 32, 1.00)";
        }
      }, false);
    b3Body.addEventListener("mouseleave", function( event ) {   
        if (b3TextHandler(stage, turn) != "-"){
            event.target.style.backgroundColor = "rgba(35, 31, 32, 1.00)";
            document.getElementById("b3-text").style.color = "rgb(242, 132, 91, 1.00)";
        }
      }, false);
    b4Body.addEventListener("mouseenter", function( event ) { 
        if (b4TextHandler(stage, turn) != "-"){
            event.target.style.backgroundColor = "rgb(242, 132, 91, 1.00)";
            document.getElementById("b4-text").style.color = "rgba(35, 31, 32, 1.00)";
        }
      }, false);
    b4Body.addEventListener("mouseleave", function( event ) {   
        if (b4TextHandler(stage, turn) != "-"){
            event.target.style.backgroundColor = "rgba(35, 31, 32, 1.00)";
            document.getElementById("b4-text").style.color = "rgb(242, 132, 91, 1.00)";
        }
      }, false);

    function playerTextHandler(player){
    var health = document.getElementById("health");
    var stamina = document.getElementById("stamina");
    var buzz = document.getElementById("buzz");
    var playerShow = document.getElementById("player")
    var playerNameVal = document.getElementById("name");
    var playerBlackRow = document.getElementById("playerrow");
    if(player.on == true){
        playerBlackRow.style.display = "block";
        playerShow.style.display = "block"; 
    } else if(player.on == false){
        playerShow.style.display = "none";
        playerBlackRow.style.display = "none" 
    }
    playerNameVal.innerHTML = player.name;
    health.innerHTML =player.health;
    stamina.innerHTML = player.stamina;
    buzz.innerHTML = player.bac.toFixed(2);
    }
    function enemyTextHandler(enemy){
    var eHealth = document.getElementById("e-health");
    var eStamina = document.getElementById("e-stamina");
    var eBuzz = document.getElementById("e-buzz");
    var enemyShow = document.getElementById("enemy");
    var enemyName = document.getElementById("enemy-name");
    var enemyBlackRow = document.getElementById("enemyrow");
    if(enemy.on == true){
        enemyBlackRow.style.display = "block";
        enemyShow.style.display = "block"; 
    } else if(enemy.on == false){
        enemyBlackRow.style.display = "none";
        enemyShow.style.display = "none"; 
    }
    enemyName.innerHTML = enemy.name;
    eHealth.innerHTML = enemy.health;
    eStamina.innerHTML = enemy.stamina;
    eBuzz.innerHTML = enemy.bac.toFixed(2);
    }
    function gameResetHandler(){
    var playerNameShow = document.getElementById("name-show");
    var playerShow = document.getElementById("player");
    var enemyShow = document.getElementById("enemy");
    var playerBlackRow = document.getElementById("playerrow");
    var enemyBlackRow = document.getElementById("enemyrow");
    playerNameShow.style.display = "none";
    playerShow.style.display = "none"; 
    enemyShow.style.display = "none";
    playerBlackRow.style.display = "none";
    enemyBlackRow.style.display = "none";
    stage = 1;
    stageTextHandler(weaponNum, stage, turn, player, enemy);
    }
    function attackHandler(player, enemy, weaponNum, turn){
    if(turn == "player"){
        if(player.weapon == "fists" || weaponNum == 1){
            if(player.bac >= 0.2){
                var percentage = getRandomInt(100)
                if (percentage <= 75){
                    enemy.health -= fists.drunk;
                    player.stamina -= fists.staminaHit;
                    playerTextHandler(player);
                    enemyTextHandler(enemy);;
                    stage = 17;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else {
                    player.stamina -= fists.staminaHit;
                    playerTextHandler(player);
                    stage = 18;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= fists.sober;
                        player.stamina -= fists.staminaHit;
                        playerTextHandler(player);               
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        player.stamina -= fists.staminaHit;
                        playerTextHandler(player);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        } else if (player.weapon == "pelt rack"){
            if(player.bac >= 0.2){
                percentage = getRandomInt(100)
                if (percentage <= 75){
                    enemy.health -= peltRack.drunk;
                    player.stamina -= peltRack.staminaHit;
                    playerTextHandler(player);
                    enemyTextHandler(enemy);;
                    stage = 17;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else {
                    player.stamina -= peltRack.staminaHit;
                    playerTextHandler(player);
                    stage = 18;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= peltRack.sober;
                        player.stamina -= peltRack.staminaHit;
                        playerTextHandler(player);               
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        player.stamina -= peltRack.staminaHit;
                        playerTextHandler(player);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        } else if (player.weapon == "chair"){
            if(player.bac >= 0.2){
                percentage = getRandomInt(100)
                if (percentage <= 75){
                    enemy.health -= chair.drunk;
                    player.stamina -= chair.staminaHit;
                    playerTextHandler(player);
                    enemyTextHandler(enemy);;
                    stage = 17;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else {
                    player.stamina -= chair.staminaHit;
                    playerTextHandler(player);
                    stage = 18;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= chair.sober;
                        player.stamina -= chair.staminaHit;
                        playerTextHandler(player);               
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        player.stamina -= chair.staminaHit;
                        playerTextHandler(player);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        } else if (player.weapon == "sword"){
            if(player.bac >= 0.2){
                percentage = getRandomInt(100)
                if (percentage <= 75){
                    enemy.health -= sword.drunk;
                    player.stamina -= sword.staminaHit;
                    playerTextHandler(player);
                    enemyTextHandler(enemy);;
                    stage = 17;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                } else {
                    player.stamina -= sword.staminaHit;
                    playerTextHandler(player);
                    stage = 18;
                    stageTextHandler(weaponNum, stage, turn, player, enemy);
                }
            } else {
                switch(getRandomInt(2)) {
                    case 0:
                        enemy.health -= sword.sober;
                        player.stamina -= sword.staminaHit;
                        playerTextHandler(player);               
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        player.stamina -= sword.staminaHit;
                        playerTextHandler(player);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        }
    } else if (turn == "enemy"){
        if(enemy.weapon == "fists" || weaponNum == 1){
            if(enemy.bac >= 0.2){
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= fists.drunk;
                        enemy.stamina -= fists.staminaHit;
                        playerTextHandler(player);
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= fists.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            } 
            else {
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= fists.sober;
                        enemy.stamina -= fists.staminaHit;
                        playerTextHandler(player); 
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= fists.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        } else if (enemy.weapon == "pelt rack"){
            if(enemy.bac >= 0.2){
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= peltRack.drunk;
                        enemy.stamina -= peltRack.staminaHit;
                        playerTextHandler(player);
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= peltRack.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            } 
            else {
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= peltRack.sober;
                        enemy.stamina -= peltRack.staminaHit;
                        playerTextHandler(player); 
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= peltRack.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        } else if (enemy.weapon == "chair"){
            if(enemy.bac >= 0.2){
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= chair.drunk;
                        enemy.stamina -= chair.staminaHit;
                        playerTextHandler(player);
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= chair.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            } 
            else {
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= chair.sober;
                        enemy.stamina -= chair.staminaHit;
                        playerTextHandler(player); 
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= chair.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        } else if (enemy.weapon == "sword"){
            if(enemy.bac >= 0.2){
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= sword.drunk;
                        enemy.stamina -= sword.staminaHit;
                        playerTextHandler(player);
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= sword.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            } 
            else {
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= sword.sober;
                        enemy.stamina -= sword.staminaHit;
                        playerTextHandler(player); 
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= sword.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        } else if (enemy.weapon == "fire breath"){
            if(enemy.bac >= 0.2){
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= fireBreath.drunk;
                        enemy.stamina -= fireBreath.staminaHit;
                        playerTextHandler(player);
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= fireBreath.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            } 
            else {
                switch(getRandomInt(2)) {
                    case 0:
                        player.health -= fireBreath.sober;
                        enemy.stamina -= fireBreath.staminaHit;
                        playerTextHandler(player); 
                        enemyTextHandler(enemy);
                        stage = 17;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                    case 1:
                        enemy.stamina -= fireBreath.staminaHit;
                        enemyTextHandler(enemy);
                        stage = 18;
                        stageTextHandler(weaponNum, stage, turn, player, enemy);
                        break;
                }
            }
        }       
    }
    }
    function alcoHandler(player, enemy, turn){
    if(turn == "player"){
        player.bac += player.addBac;
        playerTextHandler(player);
        stage = 19;
        turn = "player";
        stageTextHandler(weaponNum, stage, turn, player, enemy);
    } else if (turn == "enemy"){
        enemy.bac += enemy.addBac;
        enemyTextHandler(enemy);
        stage = 19;
        turn = "enemy";
        stageTextHandler(weaponNum, stage, turn, player, enemy);
    }
    }
    function buzzKillHandler(player, enemy){
    if(player.bac >= 0.2){
        stage = 20;
        stageTextHandler(weaponNum, stage, turn, player, enemy);      
    } else {
        enemy.bac = (enemy.bac - enemy.buzzKill).toFixed(2); // This will give you "0.17" as a string
        enemy.bac = parseFloat(enemy.bac); // Convert back to a number if needed
        enemyTextHandler(enemy);
        stage = 20;
        stageTextHandler(weaponNum, stage, turn, player, enemy);
    }
    }
    function enemyTakeTurnHandler(stage, player, enemy){
    if(enemy.weapon == "fists"){
        switch(getRandomInt(2)) {
            case 0:
                weaponNum = 1;
                turn = "enemy";
                attackHandler(player, enemy, weaponNum, turn);
                break;
            case 1:
                turn = "enemy";
                alcoHandler(player, enemy, turn);
                break;
        }
    } else {
        switch(getRandomInt(3)) {
            case 0:
                weaponNum = 1;
                turn = "enemy";
                attackHandler(player, enemy, weaponNum, turn);
                break;
            case 1:
                weaponNum = 2;
                turn = "enemy";
                attackHandler(player, enemy, weaponNum, turn);
                break;
            case 2:
                turn = "enemy"
                alcoHandler(player, enemy, turn);
                break;
            }
    }
    }
    function gameOverHandler(turn, player, enemy){
        player.health = 0;
        playerTextHandler(player);
        stage = 21;
        stageTextHandler(weaponNum, stage, turn, player, enemy);
    }
    function firstTurnHandler(player, enemy){
    switch(getRandomInt(2)) {
        case 0:
            stage = 16;
            turn = "player";
            stageTextHandler(weaponNum, stage, turn, player, enemy);
            break;
        case 1:
            stage = 16;
            turn = "enemy";
            stageTextHandler(weaponNum, stage, turn, player, enemy);
            break;
        }
    }
    function fightHsa(player, enemy){
    enemy.on = true;
    enemy.name = "Horse-Stable Abel"
    enemy.health = 90;
    enemy.stamina = 95;
    enemy.bac = 0.2;
    player.shield = false;
    enemy.weapon = "fists";
    enemy.addBac = 0.03;
    enemy.buzzkill = 0.08
    enemy.drink = "one ale" //HSA weighs 200lbs
    playerTextHandler(player);
    enemyTextHandler(enemy);
    firstTurnHandler(player, enemy);
    }
    function fightKaren(player, enemy){
    enemy.on = true;
    enemy.name = "Karen"
    enemy.health = 100;
    enemy.stamina = 100;
    enemy.bac = 0.25;
    player.weapon = "sword";
    player.shield = true;
    enemy.weapon = "chair";
    enemy.addBac = 0.05;
    enemy.buzzkill = 0.08
    enemy.drink = "one bottle of wine" //Karen weighs 350lbs
    playerTextHandler(player);
    enemyTextHandler(enemy);
    firstTurnHandler(player, enemy);
    }
    function fightTequilaDragon(player, enemy){
        enemy.on = true;
        enemy.name = '"The Tequila Dragon"'
        enemy.health = 100;
        enemy.stamina = 100;
        enemy.bac = 0.3;
        player.weapon = "sword";
        player.shield = true;
        enemy.weapon = "fire breath";
        enemy.addBac = 0.12;
        enemy.buzzkill = 0.08
        enemy.drink = "a twelve-thousand-liter tank of Dragon Julio Tequila" //tequila dragon weighs 8819 pounds
        playerTextHandler(player);
        enemyTextHandler(enemy);
        firstTurnHandler(player, enemy);
    }
