import {Server} from 'socket.io';
import Redis from 'ioredis';

const pub = new Redis({
    host: 'redis-e5b98cb-prakharpandeylfs-dece.a.aivencloud.com',
    port: 12275,
    username: 'default',
    password: 'AVNS_2y65CHnrhyu6lLN0y5u'
});
const sub = new Redis({
    host: 'redis-e5b98cb-prakharpandeylfs-dece.a.aivencloud.com',
    port: 12275,
    username: 'default',
    password: 'AVNS_2y65CHnrhyu6lLN0y5u'
});


class SocketService{
    private _io:Server;
    constructor(){
        console.log("Init Socket Service...");
        this._io=new Server({
            cors: {
                allowedHeaders: ['*'],
                origin: '*'
            },
    });
    sub.subscribe("MESSAGES");
}

    public initListeners(){
        const io=this.io;
        console.log("Init Socket Listeners...");
        io.on("connect",(socket)=>{
            console.log(`New Socket Connected`,socket.id);
            socket.on('event:message', async ({message}:{message:string})=>{
                console.log("New Message Rec.", message);
                // publish this message to redis
                await pub.publish('MESSAGES', JSON.stringify({ message }));
            });
        });

        sub.on('message', (channel,message) => {
            if (channel === "MESSAGES") {
                console.log("new message from redis", message);
                io.emit("message", message);
            }
        });
    }

    get io(){
        return this._io;
    }
}

export default SocketService;
