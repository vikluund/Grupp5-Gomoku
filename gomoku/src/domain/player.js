/* eslint-disable no-undef */
const { generateUsername } = require('unique-username-generator');
const uuid = require('uuid');

const players = [];

const create = (name) => {
  const player = {
    id: uuid.v4(),
    name: !name ? generateUsername() : name,
  };
  players.push(player);
  return player;
};

export { create };
