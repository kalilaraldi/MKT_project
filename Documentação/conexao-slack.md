# Guia de Conexão: Slack Webhooks

Este guia explica como configurar um Webhook no Slack para que os agentes do **Opensquad** possam enviar notificações e relatórios automaticamente.

## Passo 1: Criar um App no Slack
1. Acesse [api.slack.com/apps](https://api.slack.com/apps).
2. Clique em **"Create New App"**.
3. Escolha **"From scratch"**.
4. Dê um nome ao app (ex: `Opensquad Agent`) e selecione o Workspace da sua agência.

## Passo 2: Ativar Incoming Webhooks
1. No menu lateral, em **Features**, clique em **"Incoming Webhooks"**.
2. Ative a chave **"Activate Incoming Webhooks"** para `On`.
3. Role até o final e clique em **"Add New Webhook to Workspace"**.

## Passo 3: Escolher o Canal
1. Selecione o canal onde deseja receber as notificações (ex: `#growth-intelligence`).
2. Clique em **"Allow"**.

## Passo 4: Copiar a URL do Webhook
1. Você verá uma URL no formato `https://hooks.slack.com/services/T.../B.../X...`.
2. Copie essa URL.

## Passo 5: Configurar no Opensquad
1. Abra o arquivo `.env` na raiz do projeto (ou crie um se não existir).
2. Adicione a seguinte linha:
   ```env
   SLACK_WEBHOOK_URL=sua_url_aqui
   ```

---

## Como os Agentes Usam esta Skill
Os agentes agora têm acesso à ferramenta `slack.send_message`. Eles podem enviar textos simples ou blocos formatados de relatórios.

**Exemplo de uso interno:**
> "Envie o resumo da pesquisa para o Slack usando a ferramenta slack.send_message."
