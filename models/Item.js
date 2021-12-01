export default class Item {
  constructor(data, details) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.picture = data.pictures ? data.pictures[0].secure_url : null;
    this.thumbnail = data.secure_thumbnail || data.thumbnail;
    this.condition = data.condition;
    this.free_shipping = data.shipping?.free_shipping || false;
    this.sold_quantity = data.sold_quantity;
    this.author = data.seller_address
    this.description = details ? details.plain_text : '';
  }
}


