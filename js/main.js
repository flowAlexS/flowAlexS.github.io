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

let body = document.querySelector("body");
let bodyContent = body.innerHTML;
window.addEventListener("resize", () => {
    if (window.innerWidth < 600)
    {
        body.style.backgroundColor = 'black';
        body.innerHTML = 'notDeveloped for mobiles yet';
    }
    else
    {
        body.innerHTML = bodyContent;
        body.style.backgroundColor = 'white';
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
