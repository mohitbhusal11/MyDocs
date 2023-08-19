import { Server, Socket } from "socket.io";

const PORT = 9000;

const io = new Server(PORT,{
    cors:{                                     //This is the error getting wihile using realtime chat etc so we
                                               //so we have to bypass this security fo the URL(origin)
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']               //This is the methos we are going to perform in this origin
                                               //we have to declare here
    }
});

io.on('connection', socket => {
    console.log('connected');
});