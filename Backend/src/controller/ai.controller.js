const aiService = require("../service.js/ai.service")

async function aiConteroller(req,res) {
     
      const prompt = req.query.prompt;

      if(!prompt ){
        return res.status(400).send("prompt is required")
      }


      const response = await  aiService(prompt)

      res.send(response);

}

module.exports = aiConteroller;
