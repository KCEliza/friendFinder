var friends = require("../data/friends.js");


//api get request
module.exports = function (app) {
    app.get("/api.friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        }
        var sum = b.reduce((a, b) => a+b, 0)
        console.log(`Name: ${name}\nUser Score: ${userScores}\n`);
        console.log(`Sum of user score ${sum}\nBest friend match ${bestMatch.friendDifference}`);
    

        for(var i = 0; i < friends.length; i++){
            console.log(friends[i].name);
            totalDifference = 0;
            console.log(`Total Difference: ${totalDifference}\nBest friend match: ${bestMatch.friendDifference}`)
        
        var bFriendScore = friends[i].scores.reduce ((a,b) => a+b, 0)
        console.log(`Total friend score: ${bFriendScore}`);
        totalDifference += Math.abs(sum - bFriendScore);
        console.log(totalDifference);

        if(totalDifference <= bestMatch.friendDifference){
            bestMatch.name = frineds[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
        console.log(totalDifference + "Total Difference")

        }
        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added: " + userData);
    });



};