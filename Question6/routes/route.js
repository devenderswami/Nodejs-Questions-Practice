// routes.js

/**
 * Handle GET requests to the endpoint "/greet"
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
function handleGreetRequest(req, res) {
    console.log("handleGreetRequest")
    const name = req.query.name;
    const greeting = name ? `Hello, ${name}!` : "Hello, Guest!";
    console.log("greetings:",greeting)
    res.send(greeting);
}

module.exports = {
    handleGreetRequest: handleGreetRequest
};