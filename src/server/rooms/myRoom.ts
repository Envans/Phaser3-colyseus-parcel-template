
import { Client, Room } from 'colyseus'
import MyRoomState from './schema/myRoomState';

export default class myRoom extends Room<MyRoomState>
{
	onCreate(options:any)
	{
		this.setState(new MyRoomState())

		this.onMessage("chat", (client, msg) => {
			this.broadcast("chat",msg,{
				except:client
			})
		})
	}

	onJoin(client: Client)
	{
	}

    onLeave (clent: Client) {

    }

    onDispose () {

    }
}
