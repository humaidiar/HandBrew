exports.seed = (knex) =>
  knex('coffee')
    .del()
    .then(() =>
      knex('coffee').insert([
        {
          id: 1,
          name: 'Pour Over Coffee',
          url: 'https://images.unsplash.com/photo-1565845120211-ec64763a0dea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
          selftext:
            'The pour over method involves pouring hot water through coffee grounds in a filter.',
        },
        {
          id: 2,
          name: 'Aeropress Coffee',
          url: 'https://images.unsplash.com/photo-1643241274488-832af484e770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          selftext:
            'The Aeropress is a piston-style brewer that forces coffee through a thin paper filter directly into a cup.',
        },
        {
          id: 3,
          name: 'French Press Coffee',
          url: 'https://images.unsplash.com/photo-1536232059214-d1da6aae256e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          selftext:
            'The French Press is a cylindrical pot with a plunger and built-in filter screen that presses hot water through ground coffee.',
        },
        {
          id: 4,
          name: 'Syphon Coffee',
          url: 'https://images.unsplash.com/photo-1649614744688-28fcafb6619e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
          selftext:
            'A vacuum coffee maker brews coffee using two chambers where vapor pressure and gravity produce coffee.',
        },
      ])
    )
