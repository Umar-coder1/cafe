const Order = require("../schema/order");
const Category = require("../schema/category");
const Asortiment = require("../schema/asort");
module.exports.getOrder=async function (req, res) {
  let orders= await Category.find({})
  if(orders){
    res.render("order.hbs",{
        cateoryAll:orders
    });
  }
 
};
module.exports.getOrderAsort=async function (req, res) {
      
      let orders= await Asortiment.find({id_category:req.params.id})
      
      if(orders){
        res.render("orderPositions.hbs",{
          asortAll:orders
        });
      }
     
    };
    


module.exports.setOrder= async function (req, res) {

  const condidate = new Order({
    name: req.body.order,
  });

  let a=await condidate.save();
  if(a){
    res.redirect("/order")
  }
};
module.exports.orderAdd= async function (req, res) {
  console.log(req.body)
  const condidate = new Order({
    name: req.body.dish,
    total_price: req.body.price
  });

  let a=await condidate.save();
  if(a){
    res.json({
      message:"Заказ обработан!"
    })
  }
  // const result = await Order.findByIdAndDelete(req.params.id);
  // if(result){
  //   res.redirect("/order/asort/:id")
  // }
};