const axios = require('axios');

// Configuração da Evolution API
const evolutionClient = axios.create({
  baseURL: 'https://api.evolution.chat/v1', 
  headers: {
    instanceId: process.env.EVOLUTION_INSTANCE_ID,
    apiKey: process.env.EVOLUTION_API_KEY,
  }
});

exports.sendWhatsAppMessage = async (to, message) => {
  try {
    const response = await evolutionClient.post('/message/sendText', {
      number: to,
      options: {
        delay: 1200,
        presence: true,
      },
      textMessage: {
        text: message
      }
    });

    console.log("Mensagem enviada:", response.data);
    return response.data;
  } catch (err) {
    console.error("Erro ao enviar mensagem pela Evolution API:", err.response?.data || err.message);
    return { error: err.response?.data || err.message };
  }
};