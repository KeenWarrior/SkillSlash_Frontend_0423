import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

const mock = new MockAdapter(instance, { delayResponse: 500 });

mock.onGet("/landing/hero").reply(200, [
  {
    title: "Build ready-for-anything teams",
    description:
      "See why leading organizations choose to learn with Udemy Business.",
    bgImage:
      "https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg",
    cta: {
      label: "Get a demo",
      url: "#",
    },
  },
  {
    title: "Learning that gets you",
    bgImage:
      "https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
    description:
      "Skills for your present (and your future). Get started with us.",
  },
]);

mock
  .onGet("/landing/course-selections")
  .reply(200, [
    {
      label: "Python",
      title: "Python for Data Science and Machine Learning Bootcamp",
      description:
        "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
      courses: [],
    },

    {
      label: "Web Development",
      title: "Web Development for Data Science and Machine Learning Bootcamp",
      description:
        "Learn how to use Web Development, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
      courses: [],
    },
  ]);

export default instance;
