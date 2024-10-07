// Libraries.
import axios from "axios";

// Endpoint to generate a story using OpenAI API.
export const generateStory = async (startType, developmentType, endType) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_APIKEY`, // Reemplaza con tu clave API
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write a story that begins with ${startType}, includes a ${developmentType}, and ends with a ${endType}.`,
          max_tokens: 10,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
