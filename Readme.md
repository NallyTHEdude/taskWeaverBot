- do npm run dev,
- then do `ngrock http ${PORT}`, where the port is from .env or 3000
- then replace the http from postman with the https link given by ngrock and send a post request
- now the bot works

##TODO 0. Connect postgres db

1. add sendMessage function to the controller. //DONE
2. connect to prisma postgres database. //DONE
3. add OAuth Logic for trigger based human in the loop actions.
4. Webhook event listening for github, jira, google calendar, slack, etc.
5. and aggregate all required OAuth metadata
6. Create a logistic regression model.
7. build a decision engine based on risk score given by logistic model.
8. concurrent n8n webhooks executer based on decision engine output.
9. sendMessage to the user after n8n execution.
