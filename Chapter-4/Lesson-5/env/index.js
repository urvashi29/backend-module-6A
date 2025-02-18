// console.log(process.env.PaymentApi);//way to read value from env
// set PaymentApi=myDevApi : write it in cmd

const dotEnv = require("dotenv");
dotEnv.config();
console.log(process.env.PaymentApi);


