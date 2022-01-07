import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Frelance de website',
          type: 'depost',
          category: 'developer',
          amount: 7000,
          createdAt: new Date('2020-05-25 20:00:04'),
        },
        {
          id: 2,
          title: 'Interface de website',
          type: 'withdraw',
          category: 'developer',
          amount: 5000,
          createdAt: new Date('2020-04-24 19:00:19'),
        }

      ],
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data)
    })

  }
})


ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
);