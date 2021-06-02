import {Notify} from './notification';
export class PushNotification extends Notify {

    constructor(destination: string, date: Date, message: string){
        super(destination, date, message);
    }

    sendNotification(): void {
        super.sendNotification();
        console.log('type: Push Notification')
        console.log('to: '+ super.getDestination());
    }
    
}