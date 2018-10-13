exports.items = [
  {
    "id": "1",
    "vendorWallet": "0x559c7dcd5f1fd32925569f9baabc77b039df9dp2",
    "vendorName": "PCC Markets",
    "item": "Groceries for one week",
    "subInfo": "Feeds 1-2 People",
    "description": "Bread, sandwich meat, cheese, vegetables, fruit and pasta",
    "itemUrl": "https://www.midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg",
    "price": "$30",
    "quantity": "",
    "location": "Seattle, WA",
    "deliveryRadius": "",
    "deliveryFee": "",
    "requests": ["0x559c7dcd5f1fd32925569f9baabc77b039df9dcr", "0x559c7dcd5f1fd32925569f9baabc77b039df9ded"]
  },
  {
    "id": "2",
    "vendorWallet": "0x559c7dcd5f1fd32925569f9baabc77b039df9dph",
    "vendorName": "Aaron",
    "item": "Groceries for one week",
    "subInfo": "Feeds 3-5 people",
    "description": "Includes fresh, local produce, grains, and meat.",
    "itemUrl": "https://www.midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg",
    "price": "$50",
    "quantity": "43",
    "location": "Seattle, WA",
    "deliveryRadius": "",
    "deliveryFee": "",
  },
  {
    "id": "3",
    "vendorWallet": "0x559c7dcd5f1fd32925569f9baabc77b039df9dcf",
    "vendorName": "Elena",
    "item": "Vegan Groceries for one week",
    "subInfo": "feeds 1-2 people",
    "description": "Includes fresh, local produce, grains, nuts and legumes.",
    "itemUrl": "https://www.midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg",
    "price": "$20",
    "quantity": "",
    "location": "Seattle, WA",
    "deliveryRadius": "",
    "deliveryFee": ""
  },
  {
    "id": "4",
    "vendorWallet": "0x559c7dcd5f1fd32925569f9baabc77b039df9dcf",
    "vendorName": "Abby",
    "item": "Vegan Groceries for one week",
    "subInfo": "feeds 3-5",
    "description": "Vegan groceries for family of up to 5 people. Includes fresh, local produce, grains, nuts and legumes",
    "itemUrl": "https://www.midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg",
    "price": "$40",
    "quantity": "",
    "location": "Seattle, WA",
    "deliveryRadius": "",
    "deliveryFee": "",
    "requests": ["0x559c7dcd5f1fd32925569f9baabc77b039df9dcs"]
  },
  {
    "id": "5",
    "vendorWallet": "0x559c7dcd5f1fd32925569f9baabc77b039df9dcf",
    "vendorName": "John",
    "item": "Groceries for one week",
    "subInfo": "Feeds 1-2",
    "description": "Includes fresh, local produce, grains, and meat.",
    "itemUrl": "https://www.midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg",
    "price": "$35",
    "quantity": "",
    "location": "Seattle, WA",
    "deliveryRadius": "",
    "deliveryFee": ""
  }
];

exports.users = [
  {
    "id": "1",
    "wallet": '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'name': 'Alice',
    'address': '',
    'address2': '',
    'zipcode': '',
    'city': 'Seattle',
    'state': 'WA',
    'country': 'USA',
    'description': 'Single mom with one child',
    'photoUrl': '',
    'in_progress_items': ['2', '4'],
    'completed_items': ['5', '1', '3', '2', '1']
  },
  {
    "id": "2",
    "wallet": '0x559c7dcd5f1fd32925569f9baabc77b039df9ded',
    'name': 'Bob',
    'address': '432 NE Alberta ST',
    'address2': '',
    'zipcode': '',
    'city': 'Portland',
    'state': 'OR',
    'country': 'USA',
    'description': 'Single dad with two children',
    'photoUrl': ''
  },
  {
    "id": "3",
    "wallet": '0x559c7dcd5f1fd32925569f9baabc77b039df9dcr',
    'name': 'Nancy',
    'address': '834 NW Market ST',
    'address2': '',
    'zipcode': '',
    'city': 'Seattle',
    'state': 'WA',
    'country': 'USA',
    'description': '',
    'photoUrl': '',
    'in_progress_items': ['4'],
    'completed_items': ['3', '1', '5', '4', '3']
  },
  {
    'id': '4',
    'wallet': '0x559C7dcd5F1Fd32925569F9BaabC77b039dF9DCf',
    'name': 'World',
    // 'type': ['v']
  },
  {
    'id': '5',
    'wallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'name': 'Aaron',
    'type': ['v'],
    'address': '1700 E Union St',
    'zipcode': '98122',
    'city': 'Seattle',
    'state': 'WA'
  }
];

exports.orders = [
  {
    'id': '1',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcr',
    'receiver': exports.users[2],
    'deliveryKey': '',
    'status': 'init',
    'initDate': '09/04/18',
    'shippedDate': '',
    'receivedDate': '',
    'payDate': ''
  },
  {
    'id': '2',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9ded',
    'receiver': exports.users[1],
    'deliveryKey': '',
    'status': 'init',
    'initDate': '09/07/18',
    'shippedDate': '',
    'receivedDate': '',
    'payDate': ''
  },
  {
    'id': '3',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcr',
    'receiver': exports.users[2],
    'deliveryKey': '',
    'status': 'toShip',
    'initDate': '09/04/18',
    'shippedDate': '',
    'receivedDate': '',
    'payDate': ''
  },
  {
    'id': '4',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcr',
    'receiver': exports.users[2],
    'deliveryKey': '',
    'status': 'complete',
    'initDate': '08/25/18',
    'shippedDate': '08/27/18',
    'receivedDate': '08/30/18',
    'payDate': ''
  },
  {
    'id': '5',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9ded',
    'receiver': exports.users[1],
    'deliveryKey': '',
    'status': 'toShip',
    'initDate': '09/06/18',
    'shippedDate': '',
    'receivedDate': '',
    'payDate': ''
  },
  {
    'id': '6',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9ded',
    'receiver': exports.users[1],
    'deliveryKey': '',
    'status': 'shipped',
    'initDate': '09/04/18',
    'shippedDate': '09/06/18',
    'receivedDate': '',
    'payDate': ''
  },
  {
    'id': '7',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcr',
    'receiver': exports.users[2],
    'deliveryKey': '',
    'status': 'toShip',
    'initDate': '09/04/18',
    'shippedDate': '',
    'receivedDate': '',
    'payDate': ''
  },
  {
    'id': '8',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9ded',
    'receiver': exports.users[1],
    'deliveryKey': '',
    'status': 'received',
    'initDate': '09/01/18',
    'shippedDate': '09/04/18',
    'receivedDate': '09/07/18',
    'payDate': ''
  },
  {
    'id': '9',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcr',
    'receiver': exports.users[2],
    'deliveryKey': '',
    'status': 'complete',
    'initDate': '08/23/18',
    'shippedDate': '08/24/18',
    'receivedDate': '08/30/18',
    'payDate': '09/03/18'
  },
  {
    'id': '10',
    'itemId': '2',
    'item': exports.items[1],
    'vendorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dph',
    'donorWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9dcs',
    'receiverWallet': '0x559c7dcd5f1fd32925569f9baabc77b039df9ded',
    'receiver': exports.users[1],
    'deliveryKey': '',
    'status': 'received',
    'initDate': '09/01/18',
    'shippedDate': '09/04/18',
    'receivedDate': '09/07/18',
    'payDate': ''
  }
]