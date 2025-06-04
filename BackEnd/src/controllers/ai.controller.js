const aiService = require('../services/ai.service');
//export the controller -> a function that runs on making a particular request
module.exports.getResponse = async (req, res) => {
    const prompt = req.query.prompt;
    if(!prompt){
        res.status(400).send("Prompt is required!");
    }

    const response = await aiService(prompt);
    res.send(response);
}