'use strict';

let accNum = 100;

class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountNumber = accNum++;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  static getNextAccountNumber() {
    return accNum;
  }

  showAccountDetails() {
    console.log(`Account Number: ${this.accountNumber}, Name: ${this.accountHolderName}, Balance: ${this.balance}`);
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log(`Insufficient Balance for user ${this.accountHolderName}`);
    }
  }
}


class VipBankAccount extends BankAccount {
  __limit = 500;

  constructor(accountHolderName, balance) {
    super(accountHolderName, balance);
  }

  get limit() {
    return this.__limit;
  }

  set limit(value) {
    if(value <= 1000) {
      this.__limit = value;
    } else {
      console.log(`Can't change limit over 1000`);
    }
  }

  withdraw(amount) {
    if (this.balance + this.__limit >= amount) {
      this.balance -= amount;
    } else {
      console.log(`Insufficient Balance for user ${this.accountHolderName}`);
    }
  }
}


const johnAccount = new BankAccount('John Doe', 1000);
johnAccount.deposit(200);
johnAccount.showAccountDetails();
johnAccount.withdraw(1500);


const maryAccount = new VipBankAccount( 'Mary Smith', 50000);
maryAccount.showAccountDetails();
maryAccount.withdraw(50200);
maryAccount.showAccountDetails();
maryAccount.withdraw(500);
maryAccount.deposit(200);

console.log(  BankAccount.getNextAccountNumber()  );

const helenAccount = new VipBankAccount('Helen Smith', 10000);
console.log(  VipBankAccount.getNextAccountNumber()  );

console.log(maryAccount.limit);

maryAccount.limit = 5000;
console.log(maryAccount.limit);


// Messenger
//
//
// Settings {
//
// }
//
// User {
//   messageHandler: MessageHandler
//   login() {}
//   logout() {}
//   sendMessage() {
//     this.messageHandler.send(time: Date)
//   }
//   signIn() {}
//   settings: Settings
// }
//
// PremiumUser extends User {
//
// }
//
// Admin extends User {
//   ban
//   kick
//   deleteUser(User) {
//     User.signOut();
//   }
//
// }
//
// // ====
// MessageHandler {
//   messages = Message[];
//   sendByTime
//   autoDelete
//   send()
// }
//
// Message {
//   userId: string;
//   date: Date;
//   sent: true
// }
//
// TextMessage extends Message{
//   text: string;
//   smiles: []
//   pictures: []
//   files: []
// }
//
// VoiceMessage extends Message {
//   voice
// }
//
// // ====
// Group {
//   messages = []
//   updateMessages();
//   add(User) {
//   }
//   delete(User) {
//     if users <= 2 NO!
//   }
// }
//
// PrivateGroup extends Group {
//   link:
// }
//
// // ====
// Call {
//   voice
//   connect()
//   end()
// }
//
// VideoCall extends Call {
//   video
// }



















