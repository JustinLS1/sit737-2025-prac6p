const express = require('express');
const winston = require('winston');
const app = express();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({ filename: 'logs/error.log', level:'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Endpoint for add
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const operation = 'addition';
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for addition');
        return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
    });
    res.json({ result });
});

// Endpoint for subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const operation = 'subtraction';
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for subtraction');
        return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
    });
    res.json({ result });
});

// Endpoint for multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const operation = 'multiplication';
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for multiplication');
        return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
    });
    res.json({ result });
});

// Endpoint for division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const operation = 'division';
    if (isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for division');
        return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
    }
    if (parseFloat(num2) === 0) {
        logger.error('Division by zero attempted');
        return res.status(400).json({ error: 'Cannot divide by zero.' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
    });
    res.json({ result });
});

// Endpoint for exponentiation
app.get('/exponentiate', (req, res) => {
    const { base, exponent } = req.query;
    const operation = 'exponentiation';
    if (isNaN(base) || isNaN(exponent)) {
        logger.error('Invalid input for exponentiation');
        return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
    }
    const result = parseFloat(base) ** parseFloat(exponent);
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${base} ${operation} ${exponent}`,
    });
    res.json({ result });
});

// Endpoint for square root
app.get('/squareroot', (req, res) => {
    const { num } = req.query;
    const operation = 'square root';
    if (isNaN(num) || parseFloat(num) < 0) {
        logger.error('Invalid input for square root');
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative number.' });
    }
    const result = Math.sqrt(parseFloat(num));
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${operation} of ${num}`,
    });
    res.json({ result });
});

// Endpoint for modulo
app.get('/modulo', (req, res) => {
    const { dividend, divisor } = req.query;
    const operation = 'modulo';
    if (isNaN(dividend) || isNaN(divisor)) {
        logger.error('Invalid input for modulo');
        return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
    }
    const result = parseFloat(dividend) % parseFloat(divisor);
    logger.log({
        level: 'info',
        message: `New ${operation} operation requested: ${dividend} ${operation} ${divisor}`,
    });
    res.json({ result });
});

const port=3000;
app.listen(port,()=> {
    console.log("Microservice running at " +port);
})