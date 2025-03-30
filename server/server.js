import express from "express";
import cors from 'cors';
import identifyEmotion from "./identifyEmotion.js";
import generateResponse from "./generateResponse.js";
import generateSummary from "./generateSummary.js";

const app = express();
app.use(cors());

let summary = "" ;

app.get('/bot', async (req, res) => {
    const userMessage = req.query.message; 
    console.log(userMessage); 

    let emotions = await identifyEmotion(userMessage, summary); 
    // emotions = JSON.parse(emotions).answer; 
    // console.log(emotions); 

    let botResponse = await generateResponse(userMessage, summary, emotions);
    // botResponse = JSON.parse(botResponse).answer;
    // console.log(botResponse); 

    summary = await generateSummary(userMessage, summary, botResponse) ;
    // summary = JSON.parse(summary).answer;
    // console.log(summary); 

    res.status(200).json({message: botResponse }); 
}); 

app.listen(4001, "localhost", () => {
    console.log("Server is up and running at port 4001");
});