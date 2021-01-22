body.darkmode {
    background: rgb(57, 57, 57);
    color: rgb(227, 227, 227);
}
<div id="theme">
      <div onclick="setDarkMode(true)" id="darkBtn" class="">  <span>Dark</span></div>
    <div onclick="setDarkMode(false)" id="lightBtn" class="is-hidden"> <span>Light</span> </div>
</div>

<script>
 function setDarkMode(isDark) {
        var darkBtn = document.getElementById('darkBtn')
        var lightBtn = document.getElementById('lightBtn')

        if(isDark) {
            lightBtn.style.display = "block"
            darkBtn.style.display = "none"
        } else {
            lightBtn.style.display = "none"
            darkBtn.style.display = "block"
        }

        document.body.classList.toggle("darkmode");
    }
</script>
//check localstorage
if(localStorage.getItem('preferredTheme') == 'dark') {
    setDarkMode(true)
}

function setDarkMode(isDark) {
    var darkBtn = document.getElementById('darkBtn')
    var lightBtn = document.getElementById('lightBtn')

    if(isDark) {
        lightBtn.style.display = "block"
        darkBtn.style.display = "none" 
    //tambahan localstorage
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
     //tambahan localstorage
        localStorage.removeItem('preferredTheme');
    }

    document.body.classList.toggle("darkmode");
}
