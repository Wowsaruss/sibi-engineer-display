module.exports = {
    retrieve_data: (req, res) => {
        req.app.get('db').data_retrieve().then(data => {
            res.status(200).send(data);
        }).catch((err) => {console.log(err)})
    },
    user_details: (req, res) => {
        req.app.get('db').detailed_user([req.params.id]).then(data => {
            res.status(200).send(data[0]);
        }).catch((err) => {console.log(err)})
    }
}