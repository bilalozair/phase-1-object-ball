function gameObject() {
    return {
        home: {
                teamName: "Brooklyn Nets",
                colors: ["Black","White"],
                players: {
                    "Alan Anderson": {
                        number: 0 ,
                        shoe:16, 
                        points:22 ,
                        rebounds:12 ,
                        assists:12 ,
                        steals:3 ,
                        blocks:1,
                        slamDunks:1 
                    },
                    "Reggie Evans": {
                        number: 30 ,
                        shoe:14, 
                        points:12 ,
                        rebounds:12 ,
                        assists:12 ,
                        steals:12 ,
                        blocks:12,
                        slamDunks:7 
                    },
                    "Brook Lopez": {
                        number: 11 ,
                        shoe:17, 
                        points:17 ,
                        rebounds:19 ,
                        assists:10 ,
                        steals:3 ,
                        blocks:1,
                        slamDunks:15 
                    },
                    "Mason Plumlee": {
                        number: 1 ,
                        shoe:19, 
                        points:26 ,
                        rebounds:12 ,
                        assists:6 ,
                        steals:3 ,
                        blocks:8,
                        slamDunks:5 
                    },
                    "Jason Terry": {
                        number: 31 ,
                        shoe:15, 
                        points:19 ,
                        rebounds:2 ,
                        assists:2 ,
                        steals:4 ,
                        blocks:11,
                        slamDunks:1 
                    }
                }
        }
        ,
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4 ,
                    shoe:18, 
                    points:10 ,
                    rebounds:1 ,
                    assists:1 ,
                    steals:2,
                    blocks:7,
                    slamDunks:2 
                },
                "Bismak Biyombo": {
                    number: 0 ,
                    shoe:16, 
                    points:12 ,
                    rebounds:4 ,
                    assists:7 ,
                    steals:7 ,
                    blocks:15,
                    slamDunks:10 
                },
                "DeSagna Diop": {
                    number: 2 ,
                    shoe:14, 
                    points:24 ,
                    rebounds:12 ,
                    assists:12 ,
                    steals:4 ,
                    blocks:5,
                    slamDunks:5 
                },
                "Ben Gordon": {
                    number: 8 ,
                    shoe:15, 
                    points:33 ,
                    rebounds:3 ,
                    assists:2 ,
                    steals:1 ,
                    blocks:1,
                    slamDunks:0 
                },
                "Brendan Haywood": {
                    number: 33 ,
                    shoe:15, 
                    points:6 ,
                    rebounds:12 ,
                    assists:12 ,
                    steals:22 ,
                    blocks:5,
                    slamDunks:12
                }
            }
        }
    }
}
function homeTeam() {
    return gameObject().home;
}

function awayTeam() {
    return gameObject().away;
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}
function maxShoeSize() {
    let playerArrays = Object.entries(players());
    let shoeSizes = playerArrays.map(playerArray => (playerArray[1].shoe));
    return Math.max(...shoeSizes);
}

function homeTeamName () {
    let object = gameObject();
    return object['home']['teamName'];
}

function numPointScored(name) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey]
        for (teamKey in teamObj ){
            let playerStats = teamObj.players;
            for (let key in playerStats){
                if (key.toUpperCase() == `${name.toUpperCase()}`){
                    return playerStats[key]["points"];
                }
            }
        }
    }
}
function shoeSize(name) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey]
        for (teamKey in teamObj ){
            let playerStats = teamObj.players;
            for (let key in playerStats){
                if (key.toUpperCase() == `${name.toUpperCase()}`){
                    return playerStats[key]["shoe"];
                }
            }
        }
    }
}
function teamColors(name) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey]
        for (teamKey in teamObj ){
            if (teamKey == "teamName"){
                if (teamObj[teamKey].toUpperCase() == name.toUpperCase()) {
                    return teamObj['colors'];

                }
            }
        }
    }
}
function teamNames () {
    let game = gameObject();
    let teams = [];
    for (gameKey in game) {
        let teamObj = game[gameKey];
        // console.log(teamObj['teamName']);
        teams.push(teamObj["teamName"]);
    }
   return teams;
}
function playerNumbers (name) {
    let game = gameObject();
    let jerseyNumbers = [];
    for (gameKey in game) {
        let teamObj = game[gameKey];
        for (teamKey in teamObj){
            let playerObj = teamObj.players;
            //console.log(playerObj);
            if (teamKey == "teamName" && teamObj["teamName"] == name) {
                for (playerKey in playerObj) {
                   jerseyNumbers.push(playerObj[playerKey]["number"]);
                }
            }
        }
    }
    return jerseyNumbers;
}
function playerStats (name) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey]
        for (teamKey in teamObj ){
            let playerObj = teamObj.players;
            for (playerKey in playerObj){
                //console.log(playerKey.toUpperCase())
                if (playerKey.toUpperCase() == name.toUpperCase()){
                    return playerObj[playerKey];
                }
            }
        }
    }
}
function bigShoeRebounds() {
    let playerArrays = Object.entries(players());
    let bigShoePlayer =  playerArrays.find(playerArray => playerArray[1].shoe === maxShoeSize());
    return bigShoePlayer[0];
}

 console.log(bigShoeRebounds())
// console.log(numPointScored("jason terry"));
// console.log(shoeSize("jason terry"));
// console.log(teamColors("charLotte HoRnets"));
// console.log(teamNames());
// console.log(playerNumbers("Brooklyn Nets"))
// console.log(playerStats("Alan Anderson"));
// console.log(bigShoeRebounds());
