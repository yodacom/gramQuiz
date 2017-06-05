exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/gram-quiz' :
                            'mongodb://localhost/gram-quiz-dev');
exports.PORT = process.env.PORT || 8080;