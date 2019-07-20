
var friendsData = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  // API POST Requests

  app.post("/api/friends", function(req, res) {
    var friend = req.body;
    var match;
    var lowestDiff = 100;
    for(let i in friendsData){
      var diff = 0;
      for(let k in friendsData[i].score){
        diff += Math.abs(friend.score[k] - friendsData[i].score[k]);
      }
      if(diff < lowestDiff){
        lowestDiff = diff;
        match = friendsData[i];
      }

    }
    friendsData.push(friend);
    res.json(match);
  });

};