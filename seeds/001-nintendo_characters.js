
exports.seed = function(knex) {
    const characters = [
      {
        name: "Mario",
        franchise: "Super Mario"
      },
      {
        name: "Pikachu",
        franchise: "Pokemon"
      },
      {
        name: "Fox",
        franchise: "Star Fox"
      },
      {
        name: "Kirby",
        franchise: "Kirby"
      },
      {
        name: "Luigi",
        franchise: "Super Mario"
      },
      {
        name: "Zelda",
        franchise: "Legend of Zelda"
      },
      {
        name: "Gannon",
        franchise: "Legend of Zelda"
      },
      {
        name: "Bowser",
        franchise: "Super Mario"
      },
      {
        name: "Falco",
        franchise: "Star Fox"
      },
      {
        name: "Samus",
        franchise: "Metroid Prime"
      },
      {
        name: "Link",
        franchise: "Legend of Zelda"
      },
    ]
    return knex("Nintendo_Characters").insert(characters);
};
  