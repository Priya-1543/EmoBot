import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD1dEANUejtHyj7Fh4bzcHgT3z_Gu9f2uk" });

const identifyEmotion = async (message, summary) => {

    let prompt = ` You are an experienced psychiatrist. You are having a conversation with a patient. Keeping the conversation in mind, predict the patient's emotions. You will be given
 the conversation summary and the patient's current response. You need to return
 the emotions only.

 For example,
 chat summary: "After sharing the greeting of the day, the patient explains that he
 is not feeling peace for some days. On further discussion, it was found that he
 is having pressure to get a good job. Despite his hard work, family, and friend's
 support he is not able to achieve his dream."
 The current response of the patient: "I am thinking of leaving this field and trying
 something new."

 answer : "sad, hopeless."

 Now, identify the emotions for the following case.
 chat summary: ${summary}
 current response of the patient: ${message}
    `

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response.text);

    return response.text;

};

export default identifyEmotion; 