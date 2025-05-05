const Category = require("../schema/category");

module.exports.getPageObzor = function (req, res) {
    res.render("obzor.hbs");
  };
module.exports.getCategory =async function (req, res) {

  let categories= await Category.find({})
  if(categories){
    res.render("category.hbs",{
      categoryAll:categories
    });
  }
 
};


module.exports.setCategory= async function (req, res) {

  const condidate = new Category({
    name: req.body.category,
  });

  let a=await condidate.save();
  if(a){
    res.redirect("/category")
  }
};
module.exports.categoryDelete= async function (req, res) {
  const result = await Category.findByIdAndDelete(req.params.id);
  if(result){
    res.redirect("/category")
  }
};