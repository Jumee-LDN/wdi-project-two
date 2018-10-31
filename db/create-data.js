const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Resturant = require('../models/restaurant');

const restaurantData = [
  {
    name: 'Hozi',
    city: 'London',
    address: '25 - 27 Theobalds road, London WC1X 8SP',
    images: ['https://pbs.twimg.com/media/Cpl4qboWAAE0fON.jpg',
      'https://assets.londonist.com/uploads/2016/06/i875/hurwundeki_restaurant__.jpg']
  },
  {
    name: 'Kimchi',
    city: 'London',
    address: '71 High Holborn, London WC1V 6EA',
    images: ['https://c1.staticflickr.com/3/2076/5783557553_c60da7d2f1_b.jpg',
      'https://farm3.static.flickr.com/2381/5783557387_260cb2a450_b.jpg']
  },
  {
    name: 'On The Bab - Old Street',
    city: 'London',
    address: '305 Old St, London EC1V 9LA',
    images: ['http://onthebab.com/img/otb_main_img.jpg',
      'http://wjlondon.com/wp-content/uploads/2015/03/bg_food.jpg',
      'https://bloomzy.co.uk/wp-content/uploads/2014/10/on-the-bab-hoxton-shoreditch-where-to-eat-in-east-london-korean-spicy-pork-buns.jpg']
  },
  {
    name: 'Gaonnuri',
    city: 'New York',
    address: '1250 Broadway, New York, NY 10001, USA',
    images: ['https://s.abcnews.com/images/Travel/ht_gaonnuri_kab_150618_16x9_992.jpg', 'https://www.nycgo.com/images/venues/5029/gaonnuri-marley-white-260__x_large.jpg']
  }
];

Resturant.collection.drop();

Resturant.create(restaurantData)
  .then(resturants => {
    console.log(`Created ${resturants.length}`);
    mongoose.connection.close();
  });
