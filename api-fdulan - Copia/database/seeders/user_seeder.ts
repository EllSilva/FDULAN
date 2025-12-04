import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        full_name: 'fany xxa ',
        email: 'fany@gmail.com',
        password: '123',
      },
      {
        full_name: 'Joaquim José ',
        email: 'kim@gmail.com',
        password: '123',
      },
    ])
  }
}
