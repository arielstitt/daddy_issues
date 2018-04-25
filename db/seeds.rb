# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

Issue.destroy_all
Cart.destroy_all
Merchandise.destroy_all

# ISSUES
Issue.create!({name: 'Mimi', location: 'Anywhere, USA', description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg'})


# CART

cart = Cart.create!(quantity: nil, price: nil)

# Merchandise
# CANDLES 12 in total
Merchandise.create!(title: 'The Study', price: 25.00, description: 'Fireside, Cedarwood, Amber, Musk', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Spanked Red', price: 25.00, description: 'Leather, Rose, Musk', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'California Rose Garden', price: 25.00, description: 'Parsley, Cedarwood, Rose, Tomato Leaf', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Kush', price: 25.00, description: 'Cannabis, Teakwood, Musk', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Bad Boy', price: 25.00, description: 'Lavandin, Black Pepper, Labdanum, OakMoss', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Pespsi-Cola', price: 25.00, description: 'Rum, Pepsi-Cola', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Beach House', price: 25.00, description: 'Oakmoss, Amber, Jasmine', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Carribean Holiday', price: 25.00, description: 'Mango, Lychee, Coconut, Grapefruit', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Spring Break', price: 25.00, description: 'Lemon, Tulip, Musk', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'French Kiss', price: 25.00, description: 'Lavender, Patchouli', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type:'candle', cart_id: cart.id )

Merchandise.create!(title: 'Clean Daddy', price: 25.00, description: 'Bergamot, lavender, Moss, leather', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type:'candle', cart_id: cart.id )

Merchandise.create!(title: 'Petals', price: 25.00, description: ', Gardenia, Violet, White Cashmere', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type:'candle', cart_id: cart.id )



# MERCHANDISE
# SHIRTS
# mauve

Merchandise.create!(title: 'Girl', price: 25.00, description: 'Pink Tee with Neon Girl', image: 'https://i.imgur.com/FegYq6u.png', merch_type:'Mauve
', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'https://i.imgur.com/0xJjGs9.png', merch_type:'Mauve', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: 'Lips', image: 'https://i.imgur.com/N5g3jvO.png', merch_type:'Mauve
', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'https://i.imgur.com/vAHdbbY.png', merch_type:'Mauve', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: '100% Cotton Tee with Grey Woman', image: 'https://i.imgur.com/eIhqks5.png', merch_type:'Mauve', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: '100% Cotton Tee with Grey Woman', image: 'https://i.imgur.com/DGw8FRf.png', merch_type:'Mauve', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: '100% Cotton Tee with Grey Woman', image: 'https://i.imgur.com/V2WBDOA.png', merch_type:'Mauve', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: '100% Cotton Tee with Grey Woman', image: 'https://i.imgur.com/uvLVs57.png', merch_type:'Mauve', cart_id: cart.id )
# Charcoal



Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'https://i.imgur.com/tI8sXy2.png', merch_type:'Charcoal', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: 'Lips', image: 'https://i.imgur.com/8Am8OaW.png', merch_type:'Charcoal', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'https://i.imgur.com/y84bkPU.png', merch_type:'Charcoal', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'https://i.imgur.com/dKIBR7K.pngg', merch_type:'Charcoal', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'https://i.imgur.com/vzjITc7.png', merch_type:'Charcoal', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'https://i.imgur.com/wX5AI7l.png', merch_type:'Charcoal', cart_id: cart.id )


