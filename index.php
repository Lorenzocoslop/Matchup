<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jogo de Match Up com Cliques e Linhas</title>
        <link rel="stylesheet" href="css/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </head>
<body>
  <div id="message"></div>
  <div class="game-container">
    <div id="leftColumn" class="column"></div>
    <div id="rightColumn" class="column"></div>
    <svg id="lines"></svg>
  </div>
  <div>
    <button id="submitButton">Enviar</button>
    <button id="resetButton">Resetar</button>
  </div>
  <div class="modal fade" id="resultModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="resultModalLabel">Resultado</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center" id="modalMessage">
      </div>
    </div>
  </div>
</div>

<script src="js/script.js"></script>
</body></html>