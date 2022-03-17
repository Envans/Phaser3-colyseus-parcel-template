import { Schema, type } from '@colyseus/schema'


export default class MyRoomState extends Schema 
{
	@type("string")
	MySynchronizedProperty: string = "Hello World"
}