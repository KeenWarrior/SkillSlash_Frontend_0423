const Hero = require("../models/hero.model");

const getHeros = async (req, res) => {
  const heroSlides = await Hero.findAll({ where: { active: true } });
  for (let i = 0; i < heroSlides.length; i++) {
    heroSlides[i].cta = JSON.parse(heroSlides[i].cta);
  }
  res.json(heroSlides);
};

const createHero = async (req, res) => {
  const { title, description, bgImage, cta, active } = req.body;
  const stringCta = JSON.stringify(cta);

  const newHero = await Hero.create({
    title,
    description,
    bgImage,
    cta: stringCta,
    active,
  });
  res.json(newHero);
};

module.exports = { getHeros, createHero };
