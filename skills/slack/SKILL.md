---
name: slack
type: script
version: 1.0.0
description: Envie notificações e relatórios formatados para o Slack via Webhooks.
env_vars:
  - SLACK_WEBHOOK_URL
categories:
  - communication
  - notification
---

# Slack Webhook Skill

Esta skill permite que os squads enviem mensagens e relatórios diretamente para canais do Slack.

## Operações

### `send_message`
Envia uma mensagem de texto simples ou formatada (Markdown) para o canal configurado.

**Argumentos:**
- `text` (string, obrigatório): O conteúdo da mensagem.

---

## Configuração
Certifique-se de que a variável de ambiente `SLACK_WEBHOOK_URL` está configurada no seu arquivo `.env`.
