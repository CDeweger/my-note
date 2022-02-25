const noteData = [
  {
    title: "Make dinner",
    details:
      "Id reprehenderit veniam Lorem laborum amet incididunt mollit labore eiusmod non excepteur dolor pariatur ullamco.",
    category: "reminders",
    id: 1,
  },
  {
    title: "Buy Grocery",
    details: "Eu ex excepteur id laboris nisi.",
    category: "todos",
    id: 3,
  },
  {
    title: "work",
    details: "this is something for work",
    category: "work",
    id: 4,
  },
  {
    title: "work",
    details: "this is something for work",
    category: "work",
    id: 5,
  },
  {
    title: "pay phone bills",
    details: "pay phone bills",
    category: "bills",
    id: 7,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("note").del();
  await knex("note").insert(noteData);
};
