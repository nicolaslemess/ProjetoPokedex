window.onscroll = function() { mostrarBotaoReset(); };

function mostrarBotaoReset() {
  var botaoReset = document.getElementById("botao-reset");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botaoReset.style.display = "block";
    botaoReset.classList.remove("esconder");
  } else {
    botaoReset.classList.add("esconder");
    setTimeout(function() {
      botaoReset.style.display = "none";
    });
  }
}

document.getElementById("botao-reset").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});