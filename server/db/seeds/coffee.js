const { readFile } = require('node:fs/promises')
const { join } = require('node:path')
const Base64 = require('base64-arraybuffer')

exports.seed = async function (knex) {
  await knex('coffee').del()
  await knex('coffee').insert([
    {
      id: 1,
      name: 'Pour Over Coffee',
      url: Base64.encode(
        await readFile(join(__dirname, '../../public/images/v60.avif'))
      ),
      selftext:
        'The pour over method involves pouring hot water through coffee grounds in a filter.',
    },
    {
      id: 2,
      name: 'Aeropress Coffee',
      url: Base64.encode(
        await readFile(join(__dirname, '../../public/images/aero.avif'))
      ),
      selftext:
        'The Aeropress is a piston-style brewer that forces coffee through a thin paper filter directly into a cup.',
    },
    {
      id: 3,
      name: 'French Press Coffee',
      url: Base64.encode(
        await readFile(join(__dirname, '../../public/images/french.avif'))
      ),
      selftext:
        'The French Press is a cylindrical pot with a plunger and built-in filter screen that presses hot water through ground coffee.',
    },
    {
      id: 4,
      name: 'Syphon Coffee',
      url: Base64.encode(
        await readFile(join(__dirname, '../../public/images/syphon.avif'))
      ),
      selftext:
        'A vacuum coffee maker brews coffee using two chambers where vapor pressure and gravity produce coffee.',
    },
  ])
}
