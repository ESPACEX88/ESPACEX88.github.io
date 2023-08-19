function iniciarJuego() {
  const savedPlayerName = localStorage.getItem('playerName');
  if (savedPlayerName) {
    alert(`¡Bienvenido al juego, ${savedPlayerName}!`);
    console.log('Juego iniciado con:', savedPlayerName);
    // Redirect to juego.html
    window.location.href = 'juego.html';
  } else {
    alert('Por favor guarda tu nombre antes de iniciar el juego.');
  }
}

  
  
  function savePlayerName() {
    
    db.collection("Jugadores").add({
      Nombre: document.getElementById("playerName").value,
      
  })
  .then((docRef) => {
      alert('NicknameGuardado')
  })
  .catch((error) => {
      alert('Error al guardar')
  });
  }

 

