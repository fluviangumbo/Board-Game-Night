import { Model, type InferAttributes, type InferCreationAttributes, DataTypes, type Sequelize, } from 'sequelize';

export class Game extends Model<InferAttributes<Game>, InferCreationAttributes<Game>> {
    public id!: number;
    public name!: string;
    public published!: number;
    public rank!: number;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
    Game.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            published: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            rank: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'games',
            timestamps: false,
            sequelize,
            hooks: {}, // unsure
        }
    );

    return Game;
}