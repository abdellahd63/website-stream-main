const Panne = require('../models/PannesModel');
const Dashboard = require('../models/DashboardModel');
const StatisticsCentre = require('../models/StatisticsCentreModel');
const validator = require('validator');

class PanneController {
  static async index(req, res) {
    // Handle request to get all Pannes
    try {
      const Pannes = await Panne.findAll();
      if (Pannes.length > 0) {
        res.json(Pannes);
      }else{
        res.json({message: 'No pannes found'});
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting panne');
    }
  }
  static async GetByID(req, res) {
    // Handle request to get all Pannes whred by ID
    const { id } = req.params;
    try {
      const Pannes = await Panne.findAll({
        where: {
          id: id,
        }
      });
      if (Pannes.length > 0) {
        res.json(Pannes);
      }else{
        res.json({message: 'No panne found'});
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting panne whred by ID');
    }
  }
  static async GetBySAV(req, res) {
    // Handle request to get all Pannes whred by SAV
    const { CentreDepot } = req.body;
    try {
      const Pannes = await Panne.findAll({
        where: {
            CentreDepot: CentreDepot,
        }
      });
      if (Pannes.length > 0) {
        res.json(Pannes);
      }else{
        res.json({message: 'No panne found'});
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting panne whred by SAV');
    }
  }
  static async Create(req, res) {
    // Handle request to create a new Panne
    const { Nom, Prenom, Email, Telephone, 
        ReferanceProduit, TypePanne, Wilaya, 
        CentreDepot, DateDepot} = req.body;
    try {
        // validation
        if(!Nom || !Prenom || !Email || !Telephone || !ReferanceProduit 
          || !TypePanne || !Wilaya || !CentreDepot || !DateDepot 
          || validator.isEmpty(Nom) || validator.isEmpty(Prenom) || validator.isEmpty(Email) 
          || validator.isEmpty(Telephone) || validator.isEmpty(ReferanceProduit) || validator.isEmpty(TypePanne) 
          || validator.isEmpty(Wilaya) || validator.isEmpty(CentreDepot) || validator.isEmpty(DateDepot)){
          return res
            .status(400)
            .json({ message: "Tous les champs doivent être remplis" });
        }
        if(!validator.isEmail(Email)){
            return res.status(400).json({message: "L'email n'est pas valide"});
        }
        const newPanne = await Panne.create({ Nom, Prenom, Email, Telephone, 
          ReferanceProduit, TypePanne, Wilaya, 
          CentreDepot, DateDepot }).then(async () => {
            const dashboard = await Dashboard.findOne({
              where: {
                createdAt : new Date().toISOString().slice(0, 10),
              }
            });
            const statistics = await StatisticsCentre.findOne({
              where: {
                Centre: CentreDepot,
                createdAt : new Date().toISOString().slice(0, 10),
              }
            });
            // check if dashboard and statistics exist for today
            if (!dashboard && !statistics) {
              // create dashboard
              const newDashboard = await Dashboard.create({
                ProduitEnAttente: 1,
              });
              await newDashboard.save().then(async () => {
                // create statistics
                const newStatistics = await StatisticsCentre.create({
                  Centre: CentreDepot,
                  ProduitEnAttente: 1,
                });
                await newStatistics.save();
                return res.status(200).json({message: 'Panne created successfully'});
              }).catch((err) => {
                console.log("Error while creating dashboard", err);
              });
            }
            if(dashboard && !statistics){
              // create statistics
              const newStatistics = await StatisticsCentre.create({
                Centre: CentreDepot,
                ProduitEnAttente: 1,
              });
              await newStatistics.save().then(async () => {
                // update dashboard
                dashboard.ProduitEnAttente += 1;          
                await dashboard.save();
                console.log("Dashboard updated successfully");
                return res.status(200).json({message: 'Panne created successfully'});         
              }).catch((err) => {
                console.log("Error while creating statistics", err);
              });
            }
            if(dashboard && statistics){
              // update dashboard
              dashboard.ProduitEnAttente += 1;          
              await dashboard.save().then(async () => {
                // update statistics where centre = CentreDepot
                await StatisticsCentre.update(
                  {
                    ProduitEnAttente:  statistics.ProduitEnAttente + 1,
                  },
                  {
                    where: {
                      Centre: CentreDepot,
                    },
                  }
                );
                console.log("Dashboard updated successfully");
                // response
                return res.status(200).json({message: 'Panne created successfully'});
              }).catch((err) => {
                console.log("Error while updating dashboard", err);
              });            
            }
          }).catch((err) => {
              console.log("Error while creating panne", err);
          });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating panne');
    }
  }

  static async Update(req, res) {
    // Handle request to update a Panne
  }

  static async Remove(req, res) {
    // Handle request to delete a Panne
    const { id } = req.params;
    try {
      const panne = await Panne.findByPk(id);

      if (!panne) {
        return res.status(404).json({ error: 'Panne not found' });
      }

      await panne.destroy();
      res.json({ message: 'Panne deleted successfully' });

    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting panne');
    }
  }
}

module.exports = PanneController;
