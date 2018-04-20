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
Issue.create!(name: 'Mimi' , location: 'Anywhere, USA' , description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg' )
Issue.create!(name: 'Mimi' , location: 'Anywhere, USA' , description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg' )
Issue.create!(name: 'Mimi' , location: 'Anywhere, USA' , description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg' )
Issue.create!(name: 'Mimi' , location: 'Anywhere, USA' , description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg' )
Issue.create!(name: 'Mimi' , location: 'Anywhere, USA' , description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg' )
Issue.create!(name: 'Mimi' , location: 'Anywhere, USA' , description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg' )
Issue.create!(name: 'Mimi' , location: 'Anywhere, USA' , description: 'All I wanted was pizza!', image: 'https://img0.etsystatic.com/162/1/5158591/il_340x270.1069850722_axhq.jpg' )

# CART

cart = Cart.create!(quantity: nil, price: nil)

Merchandise.create!(title: 'The Study', price: 25.00, description: 'FireSide, Cedarwood, Tobacco, Whiskey', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Spanked Red', price: 25.00, description: 'Leather, Rose, Musk', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'California Rose Garden', price: 25.00, description: 'Parsley, Cedarwood, Rose, Tomato Leaf', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Kush', price: 25.00, description: 'Cannabis, Teakwood, Musk', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Bad Boyfriend', price: 25.00, description: 'Lavandin, Black Pepper, Labdanum, OakMoss', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Pespsi-Cola', price: 25.00, description: 'Rum, Pepsi-Cola', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Vacation Home', price: 25.00, description: 'Oakmoss, Amber, Jasmine', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Carribean', price: 25.00, description: 'Mango, Lychee, Coconut, Grapefruit', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Spring Break', price: 25.00, description: 'Lemon, Tulip, Musk', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type: 'candle', cart_id: cart.id )

Merchandise.create!(title: 'Spa Day', price: 25.00, description: 'Lavender, Patchouli', image: 'https://images.unsplash.com/photo-1504197906860-da867658e819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53dbf408fd2031099229abb6497c70b0&auto=format&fit=crop&w=1502&q=80', merch_type:'candle', cart_id: cart.id )

# MERCHANDISE
# SHIRTS
# mauve

Merchandise.create!(title: 'Lips', price: 25.00, description: 'Lips', image: 'https://www.virginmegastore.ae/medias/sys_master/root/h38/h50/9095126745118/5349321899-main.jpg', merch_type:'Mauve
', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'http://www.diediedie.co.nz/images/large/Levis_Sale/Levi%20s%20new%20Zealand%20Store%20Women%20Levi%20s%20Sutro%20Tee%20-%20Color%20Mauve%20Chalk%20Garment%20Dyed%20Levi%20s%20Shirts%20Tops%20new%20Zealand%20Sale%20br%20Women%20Shirts%20Tops%20906_LRG.jpg', merch_type:'Mauve', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: 'Lips', image: 'https://www.virginmegastore.ae/medias/sys_master/root/h38/h50/9095126745118/5349321899-main.jpg', merch_type:'Mauve
', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'http://www.diediedie.co.nz/images/large/Levis_Sale/Levi%20s%20new%20Zealand%20Store%20Women%20Levi%20s%20Sutro%20Tee%20-%20Color%20Mauve%20Chalk%20Garment%20Dyed%20Levi%20s%20Shirts%20Tops%20new%20Zealand%20Sale%20br%20Women%20Shirts%20Tops%20906_LRG.jpg', merch_type:'Mauve', cart_id: cart.id )



# beige

Merchandise.create!(title: 'Lips', price: 25.00, description: 'Lips', image: 'http://www.diediedie.co.nz/images/large/Levis_Sale/Levi%20s%20new%20Zealand%20Store%20Women%20Levi%20s%20Sutro%20Tee%20-%20Color%20Mauve%20Chalk%20Garment%20Dyed%20Levi%20s%20Shirts%20Tops%20new%20Zealand%20Sale%20br%20Women%20Shirts%20Tops%20906_LRG.jpg', merch_type:'Beige', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'http://www.diediedie.co.nz/images/large/Levis_Sale/Levi%20s%20new%20Zealand%20Store%20Women%20Levi%20s%20Sutro%20Tee%20-%20Color%20Mauve%20Chalk%20Garment%20Dyed%20Levi%20s%20Shirts%20Tops%20new%20Zealand%20Sale%20br%20Women%20Shirts%20Tops%20906_LRG.jpg', merch_type:'Beige', cart_id: cart.id )

Merchandise.create!(title: 'Lips', price: 25.00, description: 'Lips', image: 'http://www.diediedie.co.nz/images/large/Levis_Sale/Levi%20s%20new%20Zealand%20Store%20Women%20Levi%20s%20Sutro%20Tee%20-%20Color%20Mauve%20Chalk%20Garment%20Dyed%20Levi%20s%20Shirts%20Tops%20new%20Zealand%20Sale%20br%20Women%20Shirts%20Tops%20906_LRG.jpg', merch_type:'Beige', cart_id: cart.id )

Merchandise.create!(title: 'Party', price: 25.00, description: 'Party', image: 'http://www.diediedie.co.nz/images/large/Levis_Sale/Levi%20s%20new%20Zealand%20Store%20Women%20Levi%20s%20Sutro%20Tee%20-%20Color%20Mauve%20Chalk%20Garment%20Dyed%20Levi%20s%20Shirts%20Tops%20new%20Zealand%20Sale%20br%20Women%20Shirts%20Tops%20906_LRG.jpg', merch_type:'Beige', cart_id: cart.id )



