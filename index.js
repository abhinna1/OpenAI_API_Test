require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

key = process.env.API_SECRET_KEY;

// Configuring OpenAI
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);

openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Tell me something about Leonardo Davinci.",
  max_tokens: 300
})
.then(res=>{
    console.log(res.data.choices[0].text);
})
