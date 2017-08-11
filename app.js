var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on('connection', socket => {
	var user = '';
	socket.on('join', username => {
		console.log(username)
	})
	socket.on('chat message', msg => {
		io.emit('chat message', msg)
	})
})



http.listen(3000, () => console.log("listen on 3000"))

