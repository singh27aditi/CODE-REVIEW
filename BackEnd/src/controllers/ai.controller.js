const aiService = require('../services/ai.service');
//export the controller -> a function that runs on making a particular request
module.exports.getReview = async (req, res) => {
    const code = req.body.code;
    if(!code){
        res.status(400).send("Prompt is required!");
    }

    const response = await aiService(code);
    res.send(response);
}