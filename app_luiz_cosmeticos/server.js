const express = requere('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist"))
app.get(/.*/,function name(req, res) {
    res.sendfile(__dirname+"/dist/index.html")
});
app.listen(port);

console.log('Server Started...');