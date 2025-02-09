# Initial inputting/establishing of my historical ledger
# first start with one person ledger
import datetime

# this stage is adding the data from your account onto the network
list = [1, 2, 3, 4, 5]
lost = ["yes", "no"]
ledger = []
name = input("Enter your name: ")
balance = int(input("How many coins does your acoount hold: "))


# this part of the program should allow me to make the ledger into a historical record - give it timeline feature essentially
person_1 = {"name": name, "coins": balance}
timestamp = datetime.datetime.now()
ledger.append(
    [
        person_1["name"],
        person_1["coins"],
        "starting balance",
        "account create at",
        str(timestamp),
        "",
    ]
)
hash_value = 1

another = "yes"
while another == "yes":
    option = int(
        input(
            """On this online currency netwrok would you like to: \n 1. see the balance of your account \n 2. make a transaction \n 3. import currency \n 4. see the historical ledger regarding your account \n 5. individually search a 'block' in the chain \n Option here: """
        )
    )
    if option in list:
        if option == 1:
            print(
                "You have "
                + str(person_1["coins"])
                + " coins in your account "
                + person_1["name"]
            )
            # I wanted to ensure that user had the option to choose how many transactions or action they put on the ledger. the part below allows them to stop
            another = input(
                "This is your balance, would you like to take any further action?: 'yes'or 'no'? "
            )
        elif option == 2:
            transaction_value = int(
                input(
                    "The transaction made will take how many coins from your account? \n coins: "
                )
            )
            if transaction_value > person_1["coins"]:
                print(
                    (
                        "Sorry this ledger is desgned to prevent the spending of funds which don't exist, we have detected that you dont have sufficient currency to spend on this network. \n"
                    )
                )
                another = input(
                    'Do you want to select a different option?: "yes" or "no"?: '
                )
                # this again allows my ledger to be more interactive allowing users to constantly be adding transactions oir check balance like you would do on a normal Cryptocurrency network.
            else:
                # this part of the program should allow me to make the ledger into a historical record - give it timeline feature essentially
                timestamp = datetime.datetime.now()
                new_balnce = int(person_1["coins"]) - transaction_value
                person_1["coins"] = new_balnce
                ledger.append(
                    [
                        person_1["name"],
                        str(new_balnce),
                        str(timestamp),
                        str(transaction_value),
                        "fund reduction",
                        str(hash_value),
                    ]
                )
                another = input(
                    " \n Your transaction has gone through \n This transaction Block has been assigned hash: '"
                    + str(hash_value)
                    + "'. \n would you like to take any further action?: 'yes'or 'no' "
                )
                hash_value += 1
                while another not in lost:
                    another = input(
                        'please select one of the specified inputs: "yes" or "no": '
                    )
                # didnt know what other information i need inside of the transactions in my ledger i wanted to get articles descibing what other data I should put inside
        elif option == 3:
            transaction_value = int(
                input(
                    "please enter the value of funds to be stored onto your digital account: "
                )
            )
            timestamp = datetime.datetime.now()
            new_balance = int(person_1["coins"]) + transaction_value
            person_1["coins"] = new_balance
            ledger.append(
                [
                    person_1["name"],
                    str(new_balance),
                    str(timestamp),
                    str(transaction_value),
                    "fund addition",
                    str(hash_value),
                ]
            )
            another = input(
                " \n Your digital wallet has been credited, \n This transaction Block has been assigned hash_value: '"
                + str(hash_value)
                + "' \n Would you like to take any further action?: 'yes' or 'no': "
            )
            hash_value += 1

            while another not in lost:
                another = input(
                    'please select one of the specified inputs: "yes" or "no": '
                )
        elif option == 4:
            print("this is the stored historical record on linked to your account")
            for x in ledger:
                print(x)
            another = input(
                "\n this is the history of the transactions your account has been through would you want to take further action?: "
            )
        elif option == 5:
            hash1 = int(
                input("Enter the hash assigned to the block you want to search")
            )
            for y in ledger:
                if y[5] == str(hash1):
                    print("your transaction occured at: " + str(y[2]))
                    request = input(
                        "Would you like the 'status' or 'value' of the transaction: "
                    )
                    if request == "status":
                        print("This transaction was a " + str(y[4]))
                        another = input(
                            """would you like to take further action: 'yes' or 'no' """
                        )
                    elif request == "value":
                        print(str(y[3]) + " coins was transferred in this transaction.")
                        another = input(
                            """would you like to take further action: 'yes' or 'no' """
                        )
                    else:
                        print("your request isnt is invalid.")
                        another = input(
                            """would you like to take further action: 'yes' or 'no' """
                        )

    else:
        option = int(
            input(
                """Please select an option inside of the given range. so action may be performed in the network """
            )
        )
