import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD1dEANUejtHyj7Fh4bzcHgT3z_Gu9f2uk" });

const generateSummary = async (userMessage, summary, botMessage) => {

    let prompt = `You are given a summary of the conversation between the psychiatrist and the patient. You are also given the psychiatrist's and patient's current responses. 
    Merge the response with the summary to generate the new summary. Merge it wisely, highlighting necessary details. 
    The summary should be such that it is easy to identify the patient's emotions and the emotional problem.
 
    NOTE that the speaker of the summary should be the psychiatrist, so "you" in the summary refers to the psychiatrist. And one can easily grasp the context of the entire chat just through summary .and keep it short and to the point with proper grammar as it is the conversation between one patient and one psychiatrist.
 
    For example :

 chat summary : "After sharing the greeting of the day, the patient explains that
 he is not feeling peace for some days. On further discussion, it was found that he
 is having pressure to get a good job. Despite his hard work, family, and friend's
 support he is not able to achieve his dream."

 The current response of the patient: "I am thinking of leaving this field and trying something new."

 current response of the psychiatrist : "Do you think the problem is due to the field in which you are working? I think patience along with hard work takes you to success."
 
 answer : "After greeting the patient, he shared that he has not been feeling at peace for several days. 
 As we delved deeper, it became clear that he is experiencing pressure to secure a good job. 
 Despite his hard work and the support of his family and friends, he feels unable to achieve his dream. 
 Recently, the patient expressed thoughts of leaving his current field and exploring something new. 
 I suggested he consider whether the issue is truly related to his field and reminded him that success often requires patience in addition to hard work."

 chat summary : ${summary}
 current response of the patient: ${userMessage}
 current response of the psychiatrist: ${botMessage}

 NOTE : Keep summary as concise as posssible , with minimal words it should explain context, such that any third person can understand what happened till now.
 
 IMPORTANT : If you feel user is trying to change topic than return empty string
 as new summary.`

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response.text);

    return response.text;

};

export default generateSummary; 