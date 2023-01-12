const game = {
    team1: 'Argentina',
    team2: 'Pháp',
    players: [
    [
        'Martinez',
        'Molina',
        'Romero',
        'Otamendi',
        'Tagliafico',
        'Di Maria',
        'De Paul',
        'Fernandez',
        'Mac Allister',
        'Alvarez',
        'Messi',
    ],
    [
        'Lloris',
        'Kounde',
        'Varane',
        'Upamecano',
        'Theo Hernandez',
        'Tchouameni',
        'Rabiot',
        'Dembele',
        'Griezmann',
        'Mbappe',
        'Giroud'
    ],
    ],
    score: '3-0',
    scored: ['Alvarez','Messi','Fernandez','Mac Allister'],
    date: '23-11-2022',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


const [players1, players2] = game.players;
console.log(players1,players2  );


const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);


const allPlayers = [...players1, ...players2];
console.log(allPlayers);


const players1Final = [...players1,'Dybala','Lautaro Martínez','Lisandro Martínez'];
console.log(players1Final);


const {odds: {team1, x: draw, team2},} = game;
console.log(team1, draw,team2)


const printGoals = function(...players){
    console.log(players)
    console.log(`${players.length} bàn thắng được ghi`)
}
printGoals(...game.scored);


team1 < team2 && console.log('Team 1 giành chiến thắng');
team1 > team2 && console.log('Team 2 giành chiến thắng');