

const db = require('../util/database')

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title,description,price,imageurl) VALUES (?,?,?,?)',
    [this.title, this.description, this.price, this.imageUrl]
  )
    
  }

  static fetchAll() {
   return db.execute('SELECT * FROM products')
  }
  static findById (id){
    return db.execute('SELECT * FROM products WHERE id = ?', [id])
  }
  
};
