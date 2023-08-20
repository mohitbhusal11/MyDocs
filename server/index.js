import { Server, Socket } from "socket.io";
import Connection from "./database/db.js";
import { getDocument } from "./controller/document-controller.js";
import { updateDocument } from "./controller/document-controller.js";

const PORT = 9000;

Connection();

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

    socket.on('get-document', async documentId =>{
        // const data = "";                         //this is only for when i did not connect with data base
        const document = await getDocument(documentId);
        socket.join(documentId);

        socket.emit('load-document', document.data);

        socket.on('send-changes', delta =>{
            // console.log(delta);
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        })

        socket.on('save-document', async data =>{
            await updateDocument(documentId, data);
        })
    })

});