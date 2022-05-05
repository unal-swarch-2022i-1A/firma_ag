#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://myuser:mypassword@mq', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'signing_ms';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.prefetch(1);

        console.log(' [x] Awaiting RPC requests');

        channel.consume(queue, function reply(msg) {
            var n = parseInt(msg.content.toString());

            console.log(" [.] signData(%d)", n);

            console.log(" [.] key: " + msg.properties.key);

            var r = signData(n);

            

            channel.sendToQueue(msg.properties.replyTo,
                Buffer.from(r.toString()), {
                    correlationId: msg.properties.correlationId
                });

            channel.ack(msg);
        });
    });
});

function signData(data) {
    const json = '{"result":true, "firma":42}';
    const obj = JSON.parse(json);    
    return obj
}

function fibonacci(n) {
    if (n === 0 || n === 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}
