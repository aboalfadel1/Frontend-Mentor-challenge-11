let btn = document.getElementById('submit'),
    firtName = document.getElementById('first'),
    lastName = document.getElementById('last'),
    email = document.getElementById('mail'),
    password = document.getElementById('pass');




btn.addEventListener('click', () => {
    let regix = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (firtName.value == '') {
        document.getElementById("error").style.display = 'flex'
        document.getElementById("first1").style.display = 'flex'
    }
    if (lastName.value == '') {
        document.getElementById("error1").style.display = 'flex'
        document.getElementById("last1").style.display = 'flex'
    }
    if (password.value == '') {
        document.getElementById("error3").style.display = 'flex'
        document.getElementById("p1").style.display = 'flex'
    }
    if (!email.value.match(regix)) {
        document.getElementById("error2").style.display = 'flex'
        document.getElementById("em").style.display = 'flex'
        email.value = ""
        email.setAttribute("placeholder", "email@example.com")
    } else {
        document.getElementById("error2").style.display = 'none'
        document.getElementById("em").style.display = 'none'
    }
})
firtName.onfocus = function() {
    document.getElementById('error').style.display = "none"
    document.getElementById("first1").style.display = 'none '
    var oldValue = '';
    setPlaceholder(oldValue, firtName)
}

lastName.onfocus = function() {
    document.getElementById('error1').style.display = "none"
    document.getElementById("last1").style.display = 'none '
    var oldValue = '';
    setPlaceholder(oldValue, lastName)
}
password.onfocus = function() {
    document.getElementById('error3').style.display = "none"
    document.getElementById("p1").style.display = 'none '
    var oldValue = '';
    setPlaceholder(oldValue, password)
}

email.onfocus = function() {
    document.getElementById('error2').style.display = "none"
    document.getElementById("em").style.display = 'none '
    var oldValue = '';
    setPlaceholder(oldValue, email)
}

function setPlaceholder(old, theInput) {
    old = theInput.getAttribute('placeholder');
    theInput.setAttribute('placeholder', '');
    theInput.onblur = function() {
        theInput.setAttribute('placeholder', old)
    }
}