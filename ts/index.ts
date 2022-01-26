const patterns = {
    "cpf": /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    "cnpj": /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
}

if (patterns[process.argv[2]]) {
    if (process.argv.length > 3) {
        for (const argument of process.argv.slice(3)) {
            console.info(`${patterns[process.argv[2]].test(argument)} => ${argument}`);
        }
    } else {
        console.info(patterns[process.argv[2]]);
    }
} else {
    console.info(`Use um dos nomes da lista de padrões regex: ${Object.keys(patterns).join(', ')}`);
}

exports.default = patterns;