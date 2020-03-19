const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    console.log('req.io, req.connectedUsers: ', req.io, req.connectedUsers);
    

    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    let targetDev = null

    try {
      targetDev = await Dev.findById(devId);
    } catch (error) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('deu match');
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
