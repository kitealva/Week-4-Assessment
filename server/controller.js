const girls = ['bob', 'carl', 'tasha']

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getGirls: (req, res) => {
        res.status(200).send(girls)
    },

    addGirl: (req, res) => {
        let {item} = req.body
        girls.push(item)

        res.status(200).send(girls)

    },

    deleteGirl: ( req, res) => {
        let index = req.params.index
        
        girls.splice(index, 1)

        res.status(200).send(girls)

    },

    editGirl: (req, res) => {
        let index = req.params.id
        let {item} = req.body

        girls.splice(index, 1, item)

        res.status(200).send(girls)
    }
}