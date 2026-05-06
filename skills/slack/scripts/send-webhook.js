import { env } from 'process';

async function sendSlackMessage(text) {
  const url = env.SLACK_WEBHOOK_URL;
  if (!url) {
    console.error('ERRO: A variável de ambiente SLACK_WEBHOOK_URL não está configurada.');
    process.exit(1);
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    console.log('Mensagem enviada com sucesso para o Slack!');
  } catch (error) {
    console.error('Erro ao enviar mensagem para o Slack:', error.message);
    process.exit(1);
  }
}

// Recebe o texto via argumento de linha de comando
const message = process.argv[2];
if (!message) {
  console.error('ERRO: Nenhum texto fornecido para a mensagem.');
  process.exit(1);
}

sendSlackMessage(message);
