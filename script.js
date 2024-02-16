const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY} = event;
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 5000, fill: "forwards"});
}


const htmlIcon = document.getElementById("htmlIcon")
const cssIcon = document.getElementById("cssIcon")
const javaIcon = document.getElementById("javaIcon")
const reactIcon = document.getElementById("reactIcon")
const skillName = document.getElementById("skillName")


htmlIcon.onmouseover = function() {
    skillName.innerHTML = "HTML5";
    skillName.style.color = "#E44D26";
    blob.style.background = "linear-gradient(to right, rgb(288, 77, 38), rgb(94, 133, 110))";
};

htmlIcon.onmouseout = function() {
    skillName.innerHTML = "Skills";
    skillName.style.color = "whitesmoke";
    blob.style.background = "linear-gradient(to right, rgb(44, 79, 155), rgb(94, 133, 110))";
};

cssIcon.onmouseover = function() {
    skillName.innerHTML = "CSS3";
    skillName.style.color = "#2299F8";
    blob.style.background = "linear-gradient(to right, rgb(34, 153, 248), rgb(94, 133, 110))";
};

cssIcon.onmouseout = function() {
    skillName.innerHTML = "Skills";
    skillName.style.color = "whitesmoke";
    blob.style.background = "linear-gradient(to right, rgb(44, 79, 155), rgb(94, 133, 110))";
};

javaIcon.onmouseover = function() {
    skillName.innerHTML = "JavaScript";
    skillName.style.color = "#F0DB4F";
    blob.style.background = "linear-gradient(to right, rgb(240, 219, 79), rgb(94, 133, 110))";
};

javaIcon.onmouseout = function() {
    skillName.innerHTML = "Skills";
    skillName.style.color = "whitesmoke";
    blob.style.background = "linear-gradient(to right, rgb(44, 79, 155), rgb(94, 133, 110))";
};

reactIcon.onmouseover = function() {
    skillName.innerHTML = "React";
    skillName.style.color = "#61DAFB";
    blob.style.background = "linear-gradient(to right, rgb(97, 218, 251), rgb(94, 133, 110))";
};

reactIcon.onmouseout = function() {
    skillName.innerHTML = "Skills";
    skillName.style.color = "whitesmoke";
    blob.style.background = "linear-gradient(to right, rgb(44, 79, 155), rgb(94, 133, 110))";
};


