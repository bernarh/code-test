import {Notify} from './notification';
export class SMSNoification extends Notify {

    constructor(destination: string, date: Date, message: string){
        super(destination, date, message);
    }

    sendNotification(): void {
        super.sendNotification();
        console.log('type: SMS Notification')
        console.log('to: '+ super.getDestination());
    }

}