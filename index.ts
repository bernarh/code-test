import { EmailNotification } from "./email";
import { SMSNoification } from "./sms";
import { PushNotification } from "./push";
import { Notify } from "./notification";

let Emailnotification: Notify = new EmailNotification('userTest@gmail.com', new Date(), "no olvides salir sin mascarilla");
let smsNotification: Notify = new SMSNoification('userTest@gmail.com', new Date(), "no olvides salir sin mascarilla");
let pushNotification: Notify = new PushNotification('userTest@gmail.com', new Date(), "no olvides salir sin mascarilla");

Emailnotification.sendNotification();
smsNotification.sendNotification();
pushNotification.sendNotification();