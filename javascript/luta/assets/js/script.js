let log = new WriteLog(document.querySelector('.log'));

let char = new Knight("Rogerinho");
let monster = new LittleMonster();

const stage = new Stage(
    char, 
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
);

stage.start();