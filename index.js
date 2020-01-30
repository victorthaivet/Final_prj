window.onload = function() {
    // necessary for dropdown menus to function properly:
    // https://stackoverflow.com/a/25347431
    $('.ui.dropdown').dropdown();
  
    console.log('Hey, I loaded')
  
    let btn = document.querySelector('#loginBtn')
    let input = document.querySelector('#username')
  
    btn.addEventListener('click', function(event) {
      console.log(input.value)
    } )
  };