var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on('connection', socket => {
	console.log('a user is connected');
	socket.on('disconnect', () => console.log('user disconnect'))
})



http.listen(3000, () => console.log("listen on 3000"))

