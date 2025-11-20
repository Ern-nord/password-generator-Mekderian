// Fonction pour générer un mot de passe simple de 20 caractères
function generatePassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}~§€<>_\/-µ";
  let password = "";

  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Quand on clique sur le bouton, on génère et affiche le mot de passe
document.getElementById("generate").addEventListener("click", function() {
  document.getElementById("output").value = generatePassword();
});
