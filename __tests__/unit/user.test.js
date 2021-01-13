const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Bruno',
      email: 'novais.rezende@gmail.com',
      password: '123456',
    });

    const compare_hash = await bcrypt.compare('123456', user.password_hash);

    expect(compare_hash).toBe(true);
  });
});
