import {DataSource} from "typeorm";
import {CoffeeRefactor1730706183474} from "./src/migrations/1730706183474-CoffeeRefactor";
import {Flavor} from "./src/coffees/entities/flavor.entity";
import {Coffee} from "./src/coffees/entities/coffee.entity";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1730706183474],
});