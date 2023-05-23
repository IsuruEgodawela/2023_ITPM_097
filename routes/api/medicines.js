const express = require('express');
const router = express.Router();

// Load Medicine model
const Medicine = require('../../models/Medicine');

// @route GET api/medicines/test
// @description tests medicines route
// @access Public
router.get('/test', (_req, res) => res.send('medicine route testing!'));

// @route GET api/medicines
// @description Get all medicines
// @access Public
router.get('/', (req, res) => {
  Medicine.find()
    .then((medicines) => res.json(medicines))
    .catch((_err) => res.status(404).json({ nomedicinesfound: 'No Medicines found' }));
});

// @route GET api/medicines/:id
// @description Get single medicine by id
// @access Public
router.get('/:id', (req, res) => {
  Medicine.findById(req.params.id)
    .then((medicine) => res.json(medicine))
    .catch((_err) => res.status(404).json({ nomedicinefound: 'No Medicine found' }));
});

// @route GET api/medicine
// @description add/save medicine
// @access Public
router.post('/', (req, res) => {
  Medicine.create(req.body)
    .then((_medicine) => res.json({ msg: 'Medicine added successfully' }))
    .catch(() => res.status(400).json({ error: 'Unable to add this medicine' }));
});

// @route GET api/medicines/:id
// @description Update medicine
// @access Public
router.put('/:id', (req, res) => {
  Medicine.findByIdAndUpdate(req.params.id, req.body)
    .then((_medicine) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/medicines/:id
// @description Delete medicine by id
// @access Public
router.delete('/:id', (req, res) => {
  Medicine.findByIdAndRemove(req.params.id, req.body)
    .then((_medicine) => res.json({ mgs: 'Medicine entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a medicine' }));
});

module.exports = router;
