const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

consumer.connect().then(() => {
  consumer.subscribe({ topic: "test-topic" });
  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = message.value.toString("utf8");
      console.log({
        partition,
        topic,
        value,
      });
    },
  });
});
