class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack(){
        let atackType;

        if(this.type === "mago"){
            atackType = "magia";
        }else if(this.type === "guerreiro"){
            atackType = "espada";
        }else if(this.type === "monge"){
            atackType = "artes marciais";
        }else if(this.type === "ninja"){
            atackType = "shuriken";
        }
        console.log(`O ${this.type} atacou usando ${atackType}`);
    }
}

let dumbledore = new hero("Dumbledore", 110, "mago");
let jackieChan = new hero("Jackie Chan", 66, "ninja");

dumbledore.attack();
jackieChan.attack();