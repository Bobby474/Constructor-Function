// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }

  // Methods added to the BankAccount prototype
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
      console.log("Invalid deposit amount.");
    }
  };

  BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
      console.log("Invalid withdrawal amount or insufficient balance.");
    }
  };

  BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  };

  BankAccount.prototype.isActive = function() {
    return this.active;
  };

  // Function to calculate total balance of all active accounts
  function getTotalBalance(accounts) {
    return accounts.reduce((total, account) => {
      if (account.isActive()) {
        return total + account.balance;
      }
      return total;
    }, 0);
  }

  // Example: Create multiple BankAccount objects
  const account1 = new BankAccount(101, "John Doe", "Savings", 1000);
  const account2 = new BankAccount(102, "Jane Doe", "Checking", 1500);

  // Test deposit, withdraw, and balance check operations
  account1.deposit(500);
  account1.checkBalance();
  account1.withdraw(200);
  account1.checkBalance();

  account2.deposit(1000);
  account2.checkBalance();
  account2.withdraw(200);
  account2.checkBalance();

  // Test isActive method
  console.log(`Account 1 is active: ${account1.isActive()}`);
  console.log(`Account 2 is active: ${account2.isActive()}`);

  // Test getTotalBalance function
  const accounts = [account1, account2];
  const totalBalance = getTotalBalance(accounts);
  console.log(`Total balance of all active accounts: ${totalBalance}`);