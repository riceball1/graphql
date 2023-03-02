import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash';
import casual from 'casual';

const sequelize = new Sequelize('sqlite:memory:');

/*

@TODO 03/01/2023:

This is an example using SQL, but needs to update the resolvers to handle getting the data from sqlite, also need to import this to the resolvers

*/

const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING,
})

Categories.sync({force: true}).then(() => {
    _.times(5, (i) => {
        Categories.create({
            category: casual.word,
            description: casual.sentence,
        })
    })
})

export {Categories}