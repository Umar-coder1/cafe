const Asort = require("../schema/asort");

let id_cat;

module.exports.getAsort =async function (req, res) {
  id_cat=req.params.id
  let asortiments= await Asort.find({id_category:req.params.id})
  if(asortiments){
    res.render("asort.hbs",{
      asortAll:asortiments,
      id_category:req.params.id
    });
  }
};


module.exports.setAsort= async function (req, res) {
  const condidate = new Asort({
    dish: req.body.dish,
    cost: req.body.cost,
    id_category: req.body.id_category,
  });

  let a=await condidate.save();
  if(a){
    res.redirect("/asort/category/"+req.body.id_category)
  }
};

module.exports.recAsort= async function (req, res) {
  
};

module.exports.asortDelete= async function (req, res) {
  const result = await Asort.findByIdAndDelete(req.params.id);
  if(result){
    res.redirect("/asort/category/"+id_cat)
  }
};