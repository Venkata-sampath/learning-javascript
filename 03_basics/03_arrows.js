const user = {
    username: "sampath",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welocome to website`);
    }
}

user.welcomeMessage();