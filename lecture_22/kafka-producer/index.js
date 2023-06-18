const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

producer.connect().then(() => {
    setInterval(() => {
        producer.send({
            topic: "test-topic",
            messages: [
                {
                    value: `The time is ${new Date().toLocaleString()}`,
                },
            ],
        });
    }, 1000);
});
