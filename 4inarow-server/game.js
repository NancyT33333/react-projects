let  field = [[0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0]] ;

let currentUser = 1;

function getFreeCell(columnId) {
    return field[columnId].lastIndexOf(0);
}

let myUser = null; 

module.exports = function (app) {
    app.get('/game/status', (req, res) => {
     
        res.send({ field, currentUser});
    });

    app.post('/game/move', (req, res) => {
        const columnId = req.body.columnId;
        const cellId = getFreeCell(columnId);

        field[columnId][cellId] = currentUser;
        currentUser = currentUser == 1 ? 2 : 1;

        res.send({
            field,
            currentUser
        })
    });

    app.post('/game/reset', (req, res) => {
        field = [[0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0]];

        currentUser = 1;

        res.send({
            field,
            currentUser
        });

    });
    

}
