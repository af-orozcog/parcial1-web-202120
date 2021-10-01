const { response, request } = require('express');
const axios = require('axios');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  try{
    let sum = parseInt(req.query.input);
    let data = await axios.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players');
    data = data.data.values;

    let answer = {players:[]};
    let seen = {};

    for(const ply of data){
      let newKey = "h"+ply.h_in;
      let toAdd = ply.first_name + " "+ply.last_name;
      console.log(toAdd);

      let imp = sum - parseInt(ply.h_in);
      let check = "h"+imp;

      if(check in seen){
        for(const player of seen[check]){
          answer.players.push({pName1:toAdd,pName2:player});
        }
      }

      if(newKey in seen){
        seen[newKey].push(toAdd);
      }
      else{
        seen[newKey] = [];
        seen[newKey].push(toAdd);
      }
    }

    if(answer.players.length === 0)
      answer.message = "No matches found";

    return resp.json(answer);
  }
  catch(error){
    console.log(error);
    resp.status(500).json({ error });
  }
};

module.exports = { getPairsOfPlayers };
