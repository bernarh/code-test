export class Notify {

    private destination: string;
    private date: Date;
    private message: string;
    
    constructor(destination: string, date: Date, message: string ){
        this.destination= destination;
        this.date = date;
        this.message = message;
    }

    sendNotification(): void {
        console.log('Enviando notificación ');
    }

    getDestination(): string {
        return this.destination
    }

}