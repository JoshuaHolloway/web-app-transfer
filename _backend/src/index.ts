import express from 'express'; // -TS converts to CommonJS.

const app = express();

app.listen(3000, () => console.log('listening...'));

// tsc -w
