import {Notify} from './notification';
export class EmailNotification extends Notify {

    constructor(destination: string, date: Date, message: string){
        super(destination, date, message);
    }

    sendNotification(): void {
        super.sendNotification();
        console.log('type: Email Notification')
        console.log('to: '+ super.getDestination());
    }

}