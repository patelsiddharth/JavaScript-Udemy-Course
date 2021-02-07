const data = [
    {
        name : 'John Doe',
        age : 24,
        gender : 'male',
        location : 'Bostan MA',
        image : 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    {
        name : 'Jen Smith',
        age : 45,
        gender : 'female',
        location : 'Miami FL',
        image : 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name : 'William John',
        age : 26,
        gender : 'male',
        location : 'Lynn MA',
        image : 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name : 'Mangy Carl',
        age : 29,
        gender : 'male',
        location : 'New York CA',
        image : 'https://randomuser.me/api/portraits/men/45.jpg'
    }
]


//Profile Iterator
const profiles = GetProfile(data);

NextProfile();
document.getElementById('next').addEventListener('click', NextProfile);

function NextProfile()
{
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined)
    {
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name : ${currentProfile.name}</li>
            <li class="list-group-item">Age : ${currentProfile.age}</li>
            <li class="list-group-item">Gender : ${currentProfile.gender}</li>
            <li class="list-group-item">Location : ${currentProfile.location}</li>
        </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}"/>
    `;
    }
    else
    {
        window.location.reload();
    }
}

function GetProfile(profiles)
{
    let index = 0;
    return {
        next : function()
        {
            return index < profiles.length ? { value : profiles[index++], done : false } : { done : true };
        }
    }
}