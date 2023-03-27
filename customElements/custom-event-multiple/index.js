import MyCustomEvenetElement from "./MyCustomEvenetElement.js";

const players = [
  {
    id: 0,
    name: 'Apple',
    age: 10,
  },
  {
    id: 1,
    name: 'Banana',
    age: 16,
  },
  {
    id: 2,
    name: 'Cherry',
    age: 21,
  },
];

customElements.define('my-custom-event-element', MyCustomEvenetElement);

const el = document.querySelector('.people-list');
el.innerHTML = players.map((player) => `<my-custom-event-element id="player-${player.id}"></my-custom-event-element>`).join('');
players.forEach((player) => {
  const customEvent = new CustomEvent('playerEvent', { detail: player });
  const playerElement = document.getElementById(`player-${player.id}`);
  playerElement.dispatchEvent(customEvent);
});
