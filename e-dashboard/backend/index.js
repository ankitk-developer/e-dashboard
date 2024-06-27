const express  =  require('express');

const app = express();

app.get("/", (req,resp) => {
    resp.send("App is working...")
})


app.listen(5000, () => {
    console.log('listening on port 5000')
})