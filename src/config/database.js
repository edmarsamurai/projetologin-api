module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'meupostgres',
    database: 'logindev',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}