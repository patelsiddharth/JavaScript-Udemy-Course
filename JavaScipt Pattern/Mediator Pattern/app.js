const user = function(name)
{
    this.name = name;
    this.chatroom = null;
}

user.prototype = {
    send : function(message, to){
        this.chatroom.send(message, this, to);
    },
    receive : function(message, from)
    {
        console.log(`${from.name} to ${this.name} : ${message}`);
    }
}

const Chatroom = function()
{
    let users = {};

    return {
        register : function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send : function(message, from, to)
        {
            if(to)
            {
                to.receive(message,from);
            }
            else
            {
                //Broadcast message
                for(key in users)
                {
                    if(users[key] !== from)
                    {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const brad = new user('Brad');
const jeff = new user('Jeff');
const sara = new user('Sara');
const mark = new user('Mark');

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);
chatroom.register(mark);

brad.send('Hi Jeff', jeff);
sara.send('Hello Brad, How are you ?',brad);
jeff.send('Hello Everyone');