function MemberFactory()
{
    this.CreateMember = (name, type) => {
        
        let member = [];

        if(type === 'Silver')
        {
            member = new SilverMembership(name);
        }
        else if(type === 'Gold')
        {
            member = new GoldMembership(name);
        }
        else if(type === 'Platinum')
        {
            member = new PlatinumMembership(name);
        }

        member.type = type;

        member.define = function()
        {
            console.log(`${this.name} (${this.type}) : ${this.cost}`);
        }
        return member;
    }
}

const SilverMembership = function(name)
{
    this.name = name;
    this.cost = '$15';
}

const GoldMembership = function(name)
{
    this.name = name;
    this.cost = '$35';
}

const PlatinumMembership = function(name)
{
    this.name = name;
    this.cost = '$55';
}

const members = [];
const factory  = new MemberFactory();
members.push(factory.CreateMember('John Doe', 'Silver'));
members.push(factory.CreateMember('Jen Smith', 'Gold'));
members.push(factory.CreateMember('Mark William', 'Silver'));
members.push(factory.CreateMember('Hugh Grant', 'Platinum'));
members.push(factory.CreateMember('Chris Jackson', 'Gold'));

members.forEach(function(member){
    member.define();
});