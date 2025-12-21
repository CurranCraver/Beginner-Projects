const body = document.querySelector('body');
const section = body.querySelector('section');
const subHeader = section.querySelector('#title');
subHeader.textContent = "Welcome Back!";
const intro = section.querySelector('.intro');
intro.innerText = "Hello, User!";
const content =  section.querySelector('.content');
content.innerHTML = `Your content: <strong>Important</strong> message`;
section.setAttribute('data-page', "home");
console.log(section.getAttribute('data-page'));
section.style.backgroundColor = "lightBlue";
section.style.padding = '1rem';
section.style.display = "flex";
section.style.alignItems = "center";
section.style.gap = "1rem";

const btn = document.createElement('button')
btn.textContent = "Hello World"
section.append(btn)


btn.addEventListener('click', ()=> {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    btn.style.color = `rgb(${r},${g},${b})`
});

/*  
Select the section element
Get the h2 using querySelector on the section (not document)
Use textContent to change h2 to "Welcome Back!"
Get the .intro paragraph
Use innerText to change it to "Hello, User!"
Get the .content paragraph
Use innerHTML to change it to "Your content: <strong>Important</strong> message"
Add data-page="home" to the section using setAttribute()
Read back the data-page attribute using getAttribute()
Style the section: background "#f0f0f0", padding "15px"
Log the data-page value to console
*/