const sing_up_form = document.getElementById('sing_up_form');
const mgs = document.querySelector('.mgs');
const buton = document.querySelector('.buton');




buton.onclick = () => {

    setTimeout(function() {
        mgs.innerHTML = `<p class="alert alert-danger">  hello my name is khan </p>`
    }, 1000);

}





sing_up_form.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = sing_up_form.querySelector('input[placeholder="Name"]');
    let email = sing_up_form.querySelector('input[placeholder="Email"]');
    let location = sing_up_form.querySelector('select');
    let gendar = sing_up_form.querySelector('input[type="radio"]:checked');
    let skill = sing_up_form.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < skill.length; i++) {


    }



    if (name.value == '' || email.value == '' || location.value == '' || gendar.value == '') {
        mgs.innerHTML = valedate("plase all feld filap")


    } else {

        mgs.innerHTML = valedate('hllo', 'secaes')

    }
    setTimeout(function() {
        mgs.innerHTML = ''
    }, 4000)
})