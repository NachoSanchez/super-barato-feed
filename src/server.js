import app from './app';
import dotenv from 'dotenv' ;


//setting enviroment
dotenv.config();

const port = process.env.PORT || 3000;

// server init
async function main() {
    app.listen(port);
    console.log(`server on port ${port}`);
}

main();