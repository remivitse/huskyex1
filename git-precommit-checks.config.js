module.exports = {
    display: {
        // Utilise les notifs système pour nous signler qu’un
        // problème est détecté.
        notifications: true,
        // Affiche les chemins des fichiers et numéros de lignes
        // ainsi que les contenus défaillants. Pratique pour ouvrir
        // via un "Ctrl + clic" le fichier au bon emplacement
        // directement dans l'éditeur.
        offendingContent: true,
        // Si jamais on souhaite obtenir l’affiche dans le
        // terminal du détail des règles en place.
        rulesSummary: false,
        // Si on veut afficher des statistiques simplifiées
        // (exemple : "1 error, 1 warning").
        shortStats: true,
        // Pour afficher le détail de chaque action executée,
        // les fichiers analysés, le résumé des opérations.
        verbose: false,
    },
    rules: [
        {
            message: "Quel flemmard !",
            regex: /TODO/,
            nonBlocking: true
        },
        {
            filter: /\.js$/,
            message: "Tu sais, t'es pas censé commit tes console.log()...",
            regex: /^\s*console\.log/
        },
        {
            message: "Toujours pas capable de merge proprement à ce que je vois...",
            regex: /^[<>|=]{4,}/m
        }
    ]
}