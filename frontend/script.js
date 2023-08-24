document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const messageDiv = document.getElementById("message");
  
    loginForm.addEventListener("submit", async function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Fazer uma solicitação para o servidor Node.js para autenticar
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
        if (response.ok) {
          messageDiv.textContent = "Autenticado com sucesso!";
          // Armazenar o token onde você preferir (cookie, localStorage)
        } else {
          messageDiv.textContent = "Erro de autenticação. Verifique suas credenciais.";
        }
      } catch (error) {
        console.error("Erro ao fazer a solicitação:", error);
        messageDiv.textContent = "Erro ao se comunicar com o servidor.";
      }
    });
  });
  