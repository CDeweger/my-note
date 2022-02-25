const userData = [
  {
    id: 1, //primary key
    name: "Steve",
    user_type: "Admin",
  },
  {
    id: 2, //primary key
    name: "Sarah",
    user_type: "Writer",
  },
  {
    id: 3, //primary key
    name: "Joe",
    user_type: "Writer",
  },
];

const postData = [
  {
    id: 1, //primary key
    title: "First Posting",
    content: "Nulla do qui reprehenderit anim ad.",
    user_id: 2, //foreign key, referencing user primary key
  },
  {
    id: 2, //primary key
    title: "Another Post",
    content: "Nulla do qui reprehenderit anim ad.",
    user_id: 3, //foreign key, referencing user primary key
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert(userData);
  await knex("post").del();
  await knex("post").insert(postData);
};
