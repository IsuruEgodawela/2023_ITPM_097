const router = require('express').Router();
let Vet = require('../models/Vet');

http://localhost:8080/species/add

router.route('/add').post((req, res) => {
    
    const code = req.body.code;
    const name = req.body.name;
    const date = req.body.date;
    const location = req.body.location;
    const type = req.body.type;
    const severity = req.body.severity;
    const tplan = req.body.tplan;
    const recovery = req.body.recovery;
    const rplan = req.body.rplan;
    const other = req.body.other;

    const newSpecies = new Vet({
        code,
        name,
        date,
        location,
        type,
        severity,
        tplan,
        recovery,
        rplan,
        other
    })

    newSpecies.save()
    .then(() => {
      res.json({
        message: 'Species added successfully'
      });
    })
    .catch(err => {
      console.log(err);
    });
  
    }) 


http://localhost:8080/species

router.route('/').get((req, res) => {
    Vet.find()
        .then(species => res.json(species))
        .catch(err => console.log(err));
})

http://localhost:8080/species/update/

router.route('/update/:speciesCode').put(async (req, res) => {
    let SCode = req.params.speciesCode;
    const { code, name, date, location, type, severity, tplan, recovery, rplan, other } = req.body;

    const updateSpecies = {
        code,
        name,
        date,
        location,
        type,
        severity,
        tplan,
        recovery,
        rplan,
        other
    }

    const update = await Vet.findByIdAndUpdate(SCode, updateSpecies)
    .then(() => {
        res.status(200).send({
            status: 'Species updated successfully'
        }).catch(err => {
            console.log(err);
            res .status(500).send({
                message: 'Error updating species', error: err.message
            })
        })
        
    })
})

    router.route('/delete/:speciesCode').delete(async (req, res) => {
    let SCode = req.params.speciesCode;
        await Vet.findByIdAndDelete(SCode).then(() => {
            res.status(200).send({
                status: 'Species deleted successfully'
            }).catch(err => {
                console.log(err);
                res .status(500).send({
                    message: 'Error deleting species', error: err.message
                })
            })
        })
    })

    router.route("/get/:speciesCode").get(async (req, res) => {
        let SCode = req.params.speciesCode;
        const species = await Vet.findById(SCode)
          .then((species) => {
            if (species) {
              res.status(200).send({
                status: "Species fetched successfully",
                species,
              });
            } else {
              res.status(404).send({
                message: `Species with code ${SCode} not found`,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send({
              message: "Error fetching species",
              error: err.message,
            });
          });
      });
      

module.exports = router;