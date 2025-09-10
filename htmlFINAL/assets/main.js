document.addEventListener('DOMContentLoaded', () => {

  // ----- REGISTRO -----
  const registerForm = document.getElementById('registerForm');
  const mensajeErrorRegistro = document.getElementById('mensajeErrorRegistro');
  const mensajeExitoRegistro = document.getElementById('mensajeExitoRegistro');

  // Funciones de validación
  function validarNombre(nombre) {
    let errores = [];
    if(nombre === '') errores.push("El nombre es obligatorio.");
    if(nombre.length > 40) errores.push("El nombre no puede superar 40 caracteres.");
    for(let i=0; i<nombre.length; i++){
      if(nombre[i] >= '0' && nombre[i] <= '9'){
        errores.push("El nombre no puede contener números.");
        break;
      }
    }
    return errores;
  }

  function validarEmail(email) {
    let errores = [];
    if(email === '') errores.push("El correo es obligatorio.");
    if(!email.includes('@')) errores.push("El correo debe contener @.");
    if(email.length > 30) errores.push("El correo no puede superar 30 caracteres.");
    return errores;
  }

  function validarPassword(password, confirmPassword) {
    let errores = [];
    if(password === '') errores.push("La contraseña es obligatoria.");
    if(password.length !== 8) errores.push("La contraseña debe tener exactamente 8 caracteres.");
    
    let tieneMayus = false, tieneNumero = false;
    for(let i=0; i<password.length; i++){
      const c = password[i];
      if(c >= 'A' && c <= 'Z') tieneMayus = true;
      if(c >= '0' && c <= '9') tieneNumero = true;
    }
    if(!tieneMayus) errores.push("La contraseña debe contener al menos una letra mayúscula.");
    if(!tieneNumero) errores.push("La contraseña debe contener al menos un número.");
    
    if(password !== confirmPassword) errores.push("Las contraseñas no coinciden.");

    return errores;
  }

  registerForm.addEventListener('submit', function(e){
    e.preventDefault();

    const nombre = document.getElementById('nombreRegister').value.trim();
    const email = document.getElementById('emailRegister').value.trim();
    const password = document.getElementById('passwordRegister').value.trim();
    const confirmPassword = document.getElementById('confirmPasswordRegister').value.trim();

    let errores = [];
    errores.push(...validarNombre(nombre));
    errores.push(...validarEmail(email));
    errores.push(...validarPassword(password, confirmPassword));

    if(errores.length > 0){
      mensajeErrorRegistro.innerHTML = errores.join('<br>');
      mensajeErrorRegistro.style.display = 'block';
      mensajeExitoRegistro.style.display = 'none';
    } else {
      mensajeErrorRegistro.style.display = 'none';
      mensajeExitoRegistro.style.display = 'block';
      mensajeExitoRegistro.textContent = "Registro exitoso!";
      
    }
  });

  // ----- LOGIN -----
  const loginForm = document.getElementById('loginForm');
  const mensajeErrorLogin = document.getElementById('mensajeErrorLogin');
  const mensajeExitoLogin = document.getElementById('mensajeExitoLogin');

  function validarLogin(email, password){
    let errores = [];
    if(email === '') errores.push("El correo es obligatorio.");
    if(!email.includes('@')) errores.push("El correo debe contener @.");
    if(password === '') errores.push("La contraseña es obligatoria.");
    return errores;
  }

  loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('emailLogin').value.trim();
    const password = document.getElementById('passwordLogin').value.trim();

    const errores = validarLogin(email, password);

    if(errores.length > 0){
      mensajeErrorLogin.innerHTML = errores.join('<br>');
      mensajeErrorLogin.style.display = 'block';
      mensajeExitoLogin.style.display = 'none';
    } else {
      mensajeErrorLogin.style.display = 'none';
      mensajeExitoLogin.style.display = 'block';
      mensajeExitoLogin.textContent = "Login exitoso!";
      
    }
  });

});
