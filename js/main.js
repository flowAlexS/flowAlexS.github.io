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

function elementIsVisibleInViewport(el, partiallyVisible = false) {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };


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

// Navbar on list item click event

const navItems = document.querySelectorAll("#navbar li");
navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        const href = item.firstChild.getAttribute("href");
        document.querySelector(href).scrollIntoView();
        navbar.classList.add('no-show');

    })

})

const post = document.querySelector("#post");
const contactShort = document.querySelector("#contact--description");
post.addEventListener("mouseover", () => {
    contactShort.style.display = 'block';   
})

post.addEventListener("mouseout", () => {
    contactShort.style.display = 'none';
})

const goTop = document.querySelector("#goTop");

document.addEventListener("scroll", () => {
    if (!elementIsVisibleInViewport(document.querySelector("#header"), true) &&
        !elementIsVisibleInViewport(document.querySelector("#footer"), true))
    {
        goTop.style.display = 'block';
    }
    else {
        goTop.style.display = 'none';
    }

    skills = {
        html: document.querySelector("#html"),
        js: document.querySelector("#js"),
        py: document.querySelector("#py")
    }

    if (elementIsVisibleInViewport(document.querySelector(".work--section")))
    {
        skills.html.classList.toggle("html");
        skills.js.classList.toggle("js");
        skills.py.classList.toggle("py");
    }
})


goTop.addEventListener("click", () => {
    scroll(0, 0);
    goTop.style.display = 'none';
})


