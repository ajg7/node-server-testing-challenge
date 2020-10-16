
exports.up = function(knex) {
    return knex.schema
        .createTable("Nintendo_Characters", table => {
            table.increments();
            table.string("name").unique().index();
            table.string("franchise").notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Nintendo_Characters");
};
