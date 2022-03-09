const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    //create a list of pokémon that have names that start with the letter "B" by using the following code.
    // const bListPkmn = pokémon.filter( p => {
    //     if(p.name[0] === "B")
    //     console.log( p.name );
    //     return (p.name);
    // })

    // return an array of just the ids, we could use something like this.
    // const pkmnIds = pokémon.map( (p) => {
    //     return (p.id);
    // })
    // console.log(pkmnIds);

    //an array of pokémon objects that are "fire" type
    // const fireTypes = pokémon.filter( (p) => {
    //     if(p.types[0] === "fire")
    //     return this;
    // })
    // console.log(fireTypes);

    // an array of pokémon objects that have more than one type
    // const typesTwo = pokémon.filter( (p,i) => {
    //     if(p.types.length === 2)
    //     return this;
    // })
    // console.log(typesTwo);

    // an array with just the names of pokémon with an id greater than 99
    // note: filter is more appropriate for new array & map for objects
    // const greaterId = pokémon.filter((p) => p.id > 99).map((p) => p.name);
    // console.log(greaterId);

    //an array with just the names of the pokémon whose only type is poison
    // const poison = pokémon.filter((p) => p.types[0] === "poison").map((p) => p.name);
    // console.log(poison);

    //an array containing just the first type of all the pokémon whose second type is "flying"
    const flying = pokémon.filter((p) => p.types[1] === "flying").map((p) => p.types[0]);
    console.log(flying);






