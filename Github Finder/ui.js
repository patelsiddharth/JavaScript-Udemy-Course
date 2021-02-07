class UI
{
    constructor()
    {
        this.profile = document.querySelector('.profile');
    }

    ShowUser(user)
    {
        this.profile.innerHTML =
        `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-success">Followers : ${user.followers}</span>
                        <span class="badge badge-info">Following : ${user.following}</span>
                        
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">User Name : ${user.login}</li>
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Website / Blogs : ${user.blog}</li>
                            <li class="list-group-item">Location : ${user.location}</li>
                            <li class="list-group-item">Member since : ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;    
    }

    ShowRepos(repos)
    {
        let output = '';
        repos.forEach((repo) => {
            output += 
            `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks : ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.querySelector('#repos').innerHTML = output;
    }

    ClearProfile()
    {
        this.profile.innerHTML = "";
    }

    ClearAlert()
    {
        const alertMsg = document.querySelector('.alert');
        if(alertMsg)
        {
            alertMsg.remove();
        }
    }
    ShowAlert(msg,classErr)
    {
        this.ClearAlert();
        const errorDiv = document.createElement('div');
        errorDiv.className = classErr;
        errorDiv.innerHTML = msg;
        errorDiv.style.display = 'block';
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(errorDiv,search);
        setTimeout(() => {
            this.ClearAlert();
        }, 3000);
    }
}