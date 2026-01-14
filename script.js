const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// ১. পেজ লোড হওয়ার সময় আগের সেভ করা থিম চেক করা
if (currentTheme) {
    document.body.classList.add(currentTheme + '-mode');

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// ২. সুইচ পরিবর্তন করলে থিম পরিবর্তন করা
function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const textElement = document.querySelector(".typed-text");
const words = ["Full Stack Developer", "Laravel Expert", "Computer Science Student"];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

//contact form
// const form = document.getElementById('form');
// const result = document.getElementById('result');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);
//     result.innerHTML = "Please wait...";

//     fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status == 200) {
//                 result.innerHTML = "Message sent successfully! ✅";
//                 result.style.color = "green";
//             } else {
//                 console.log(response);
//                 result.innerHTML = json.message;
//                 result.style.color = "red";
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             result.innerHTML = "Something went wrong!";
//         })
//         .then(function() {
//             form.reset();
//             setTimeout(() => {
//                 result.style.display = "none";
//             }, 3000);
//         });
// });