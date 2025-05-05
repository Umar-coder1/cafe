const History = require("../schema/history");

module.exports.getHistory =async function (req, res) {

  let history= await History.find({})
  if(history){
    res.render("history.hbs",{
      historyAll:history
    });
  }
 
};


module.exports.setHistory= async function (req, res) {
  const condidate = new History({
    name: req.body.dish,
    cost: req.body.price,
  });

  let a=await condidate.save();
  
    res.json({
      message:"Заказ завершен!"
    })

};
module.exports.historyDelete= async function (req, res) {
  const result = await History.findByIdAndDelete(req.params.id);
  if(result){
    res.redirect("/history")
  }
};