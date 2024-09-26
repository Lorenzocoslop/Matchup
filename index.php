<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Matchup</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <h1 class="text-center">Jogo de MatchUp</h1>
    <div class="container ">
            <div class="terms row" id="terms">
            </div>
            <div class="descriptions row" id="descriptions">  
            </div>
            
        
            <div class="reset d-flex justify-content-center">
                <button class="btn-reset" onclick="inicializar()"> <i class="large material-icons">autorenew</i></button>
            </div>
        </div>
        
    </div>
    <div class="informacoes">
        <div class="mensagem">
        </div>
    </div>
    
    
    <script src="js/script.js"></script>
</body>
</html>