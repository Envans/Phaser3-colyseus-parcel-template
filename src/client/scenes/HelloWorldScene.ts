import Phaser from 'phaser'
import * as Colyseus from 'colyseus.js'

export default class HelloWorldScene extends Phaser.Scene
{
    private client?: Colyseus.Client

	constructor()
	{
		super('hello-world')
	}

    init() {
        this.client = new Colyseus.Client('ws://localhost:2567')
    }

	preload()
    {
        
    }

    async create()
    {
        const room = await this.client?.joinOrCreate('myRoom')
        console.log(room?.sessionId);

        this.input.keyboard.on('keydown', (e: KeyboardEvent) => {
            room?.send("chat", e.key);
        } )
        room?.onMessage("chat",(message) => {
            console.log(message);
        })
    }
}
