addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

const list = {
    'codes' : [
        {
            "name" : "Shane",
            "code" : 1386495762
        },
        {
            "name" : "Jobelle",
            "code" : 7346895683
        },
        {
            "name" : "Catherine",
            "code" : 1165253846
        },
        {
            "name" : "Sophia",
            "code" : 5267385946
        },
        {
            "name" : "Trio",
            "code" : 4658352659
        },
        {
            "name" : "Bhdbd",
            "code" : 9075467895
        },
        
    ]
};
function codename(int) {
    const result = list.codes.find(era => era.code === parseInt(int));
    return result ? result.name : "Invitation code not found";
} 
document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault();
    const given = document.getElementById('given').value;
    const reso = codename(given);
    
    if(reso == 'Catherine'){
        window.location.href = 'messages/catherine.html';
    }
    else if(reso == 'Jobelle'){
        window.location.href = 'messages/jobelle.html';
    }
    else if(reso == 'Shane'){
        window.location.href = 'messages/shane.html';
    }
    else if(reso == 'Sophia'){
        window.location.href = 'messages/sophia.html';
    }
    else if(reso == 'Trio'){
        window.location.href = 'messages/trio.html';
    }
    else if(reso == 'Bhdbd'){
        window.location.href = 'messages/bhdbd.html';
    }
    else {
        alert(reso);
    }
});
