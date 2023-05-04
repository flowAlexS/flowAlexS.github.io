const form = document.querySelector("#commentForm");
const name = document.querySelector("#username");
const comment = document.querySelector("#comment");

const div = document.createElement("div");
div.classList.add("warning-div");

function makeDiv (message, element) {
    div.innerHTML = `<p>${message}</p>`;
    element.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 2000)
}

form.addEventListener("submit", (e) => {
    if (!name.value){
        makeDiv("Enter a username", name.parentElement);
        e.preventDefault();
        return;
    }
    else if(name.value.length > 50)
    {
        makeDiv("Don't enter more than 50 characters for the user", name.parentElement);
        e.preventDefault();
        return;

    }
    
    if (!comment.value)
    {
        makeDiv("Enter a comment", comment.parentElement);
        e.preventDefault();
        return;


    }

    else if(comment.value.length > 5000)
    {
        makeDiv("Too many characters 5000 only allowed", comment.parentElement);
        e.preventDefault();
        return;
    }

    alert("Thanks for submission, didn't update this yet");
    e.preventDefault();
})


// Removing the nav-links default design and adding it back on resize
const navlinks = document.querySelectorAll("#navbar a");
if (window.innerWidth < 600) 
{    
    navlinks.forEach((nav) => {
        if(nav.classList.contains('nav-link'))
        {
            nav.classList.remove('nav-link');
        }
    })
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 600)
    {
        
        navlinks.forEach((nav) => {
            if(nav.classList.contains('nav-link'))
            {
                nav.classList.remove('nav-link');
            }
    })
    }
    else
    {
        navlinks.forEach((nav) => {
            if(!nav.classList.contains('nav-link'))
            {
                nav.classList.add('nav-link');
            }
        
        })
    }
})

// Toggling the navbar
const navToggler = document.querySelector("#nav-toggler");
const navbar = document.querySelector("#navbar");


navToggler.addEventListener("click", () => {
    if (navbar.classList.contains('no-show'))
    {
        navbar.classList.remove('no-show');
    }
    else {
        navbar.classList.add('no-show');
    }
})




const post = document.querySelector("#post");
const contactShort = document.querySelector("#contact--description");
post.addEventListener("mouseover", () => {
    contactShort.style.display = 'block';   
})

post.addEventListener("mouseout", () => {
    contactShort.style.display = 'none';
})
