var btn1 = document.getElementById('btn-ring');
var btn2 = document.getElementById("btn-bracelet");
var btn3 = document.getElementById("btn-chain");
var btn4 = document.getElementById("btn-earrings");
var btn5 = document.getElementById("btn-pendant");

btn1.addEventListener('click', function() {
    window.location.href = 'ring.html';
  });

btn1.addEventListener('mouseover', function() {
    btn1.style.backgroundColor = '#353535';
    btn1.style.transition = '0.3s';
    btn1.style.fontSize = '1.1em';
    btn1.style.width = '165px';
    btn1.style.height = '40px';
});
document.getElementById('btn-ring').addEventListener('mouseout', function() {
    btn1.style.backgroundColor = '#424242';
    btn1.style.fontSize = '1rem';
    btn1.style.width = '150px';
    btn1.style.height = '35px';
});



btn2.addEventListener('click', function() {
    window.location.href = 'bracelet.html';
  });

btn2.addEventListener('mouseover', function() {
    btn2.style.backgroundColor = '#353535';
    btn2.style.transition = '0.3s';
    btn2.style.fontSize = '1.1em';
    btn2.style.width = '165px';
    btn2.style.height = '40px';
});
document.getElementById('btn-bracelet').addEventListener('mouseout', function() {
    btn2.style.backgroundColor = '#424242';
    btn2.style.fontSize = '1rem';
    btn2.style.width = '150px';
    btn2.style.height = '35px';
});




btn3.addEventListener('click', function() {
    window.location.href = 'chain.html';
  });

btn3.addEventListener('mouseover', function() {
    btn3.style.backgroundColor = '#353535';
    btn3.style.transition = '0.3s';
    btn3.style.fontSize = '1.1em';
    btn3.style.width = '165px';
    btn3.style.height = '40px';
});
document.getElementById('btn-chain').addEventListener('mouseout', function() {
    btn3.style.backgroundColor = '#424242';
    btn3.style.fontSize = '1rem';
    btn3.style.width = '150px';
    btn3.style.height = '35px';
});



btn4.addEventListener('click', function() {
    window.location.href = 'earrings.html';
  });

btn4.addEventListener('mouseover', function() {
    btn4.style.backgroundColor = '#353535';
    btn4.style.transition = '0.3s';
    btn4.style.fontSize = '1.1em';
    btn4.style.width = '165px';
    btn4.style.height = '40px';
});
document.getElementById('btn-earrings').addEventListener('mouseout', function() {
    btn4.style.backgroundColor = '#424242';
    btn4.style.fontSize = '1rem';
    btn4.style.width = '150px';
    btn4.style.height = '35px';
});



btn5.addEventListener('click', function() {
    window.location.href = 'pendant.html';
  });

btn5.addEventListener('mouseover', function() {
    btn5.style.backgroundColor = '#353535';
    btn5.style.transition = '0.3s';
    btn5.style.fontSize = '1.1em';
    btn5.style.width = '165px';
    btn5.style.height = '40px';
});
document.getElementById('btn-pendant').addEventListener('mouseout', function() {
    btn5.style.backgroundColor = '#424242';
    btn5.style.fontSize = '1rem';
    btn5.style.width = '150px';
    btn5.style.height = '35px';
});


let catalogi = ['#catalog-btn1, #catalog-btn2, #catalog-btn3, #catalog-btn4, #catalog-btn5, #catalog-btn6'];

document.querySelectorAll(catalogi).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        window.location.href = '#openModal';
      });
});


var error = document.querySelector('#modal-error')
var name = document.querySelector('#name');
var tel = document.querySelector('#tel');
var title = document.querySelector('#modal-title-error');

document.querySelector('#modal-btn').addEventListener('click', function(e) {
    if (tel.value == '' || name.value == '') {
        title.innerHTML = 'Ошибка...'
        error.innerHTML = 'Заполните все поля!'
        window.location.href = '#endModal';
    }
    else{
        error.innerHTML = 'Ваша заявка будет рассмотрена в ближайшее время!'
        title.innerHTML = 'Получилось!'
        window.location.href = '#endModal';
    }

});
document.querySelector('#modal-btn-close').addEventListener('click', function(e) {
    if (name.value != '' && tel.value != '') {
        window.location.href = '#Close';
        let name = document.getElementById('name');
        let tel = document.getElementById('tel');
        name.value = '';
        tel.value = '';
    }
    else{
        window.location.href = '#openModal';
    }
});

