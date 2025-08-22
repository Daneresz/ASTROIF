
 export default class GeralController {
 
    constructor() {
        this.home = async (req, res) => {
          res.render('index')
        };

        this.teste = async (req, res) => {
          const resultado = "teste";
          res.render('index2',{teste: resultado});
        };

        this.add = async (req, res) => {
          res.render('index')
        };
        
        this.list = async (req, res) => {
          res.render('index')
        };

        this.formulario = async (req, res) => {
          res.render('index')
        };

    }
 }