const players = {
    name: "Alice", score: 150 ,
    name: "Bob", score: 200,
    name: "Charlie", score:100
};

// Access the table
function populateLeaderboard(data){
    const table= document.getElementById('leaderboard');
    
    //Create a new row
    data.forEach(_player => {
        const row = document.createElement('tr');
        row.innerHtml = 
        '<td>' +player.name + '</td>' +
        '<td>' +player.score + '</td>'
     ;

     //Add the row to the table
         table.appendChild(row);   
    });
}

//Populate the leaderboard on page loadd
populateLeaderboard(players);

// Reset table header
function populateLeaderboard(data){
    const table = document.getElementById('leaderboard');
    table.innerHTML = 
    <tr>
        <th>Player</th>
        <th>Score</th>
    </tr>;

    data.forEach(player =>{
    const row  = document.createElement('tr');
    row.innerHTML = 
    '<td>' +player.name + '</td>' +
    '<td>' +player.score + '</td>'
    ;
    table.appendChild(row);
});
}

function sortLeaderboard(){
    players.sort((a,b) => b.score - a.score); // Sort by score descending
    populateLeaderboard(players); // Refresh the table
}

// Call to display sorted leaderboard
sortLeaderboard();

function addPlayer() {
    const name  = document.getElementById('newName').ariaValueMax;
    const score  = parseInt(document.getElementById('newScore').value);

    // Add player to array
if (name && !isNaN(score)) {
    players.push({name, score });
    sortLeaderboard();   // Refresh sorted leaderboard
} else {
    alert("Please enter a valid number");
}

}

function filterLeaderboard(){
    const minScore  = parseInt(document.getElementById('minScore').value);

    if (!isNaN(minScore)) {
        const filteredPlayers = players.filter(player => player.score >= minScore);
        populateLeaderboard(filteredPlayers);
    } else {
        alert("Please enter a valid minimum score");
        }

}