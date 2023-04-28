CREATE DATABASE grocerystore;

use grocerystore;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
product_id INT(5) unsigned NOT NULL,
product_name VARCHAR(20),
product_category VARCHAR(20),
product_subcategory VARCHAR(20),
unit_price DOUBLE(8,2),
unit_measurement VARCHAR(15),
unit_stock INT(10),
image_name VARCHAR(20),
CONSTRAINT products_pk PRIMARY KEY (product_id)
);

BEGIN;

INSERT INTO products VALUES (10000, 'Apples', 'Fresh Produce', 'Fruit', 10.99, '1 kilogram', 600, 'apples');
INSERT INTO products VALUES (10001, 'Oranges', 'Fresh Produce', 'Fruit', 12.99, '1 kilogram', 450, 'oranges');
INSERT INTO products VALUES (10002, 'Bananas', 'Fresh Produce', 'Fruit', 9.50, '1 kilogram', 0, 'bananas');
INSERT INTO products VALUES (10003, 'Pears', 'Fresh Produce', 'Fruit', 14.75, '1 kilogram', 550, 'pears');
INSERT INTO products VALUES (10004, 'Grapes', 'Fresh Produce', 'Fruit', 16.99, '1 kilogram', 700, 'grapes');

INSERT INTO products VALUES (10010, 'Tomatoes', 'Fresh Produce', 'Vegetables', 12.50, '1 kilogram', 200, 'tomatoes');
INSERT INTO products VALUES (10011, 'Cucumbers', 'Fresh Produce', 'Vegetables', 11.50, '1 kilogram', 440, 'cucumbers');
INSERT INTO products VALUES (10012, 'Zucchinis', 'Fresh Produce', 'Vegetables', 5.99, '1 kilogram', 590, 'zucchinis');
INSERT INTO products VALUES (10013, 'Potatoes', 'Fresh Produce', 'Vegetables', 8.75, '1 kilogram', 0, 'potatoes');
INSERT INTO products VALUES (10014, 'Carrots', 'Fresh Produce', 'Vegetables', 9.50, '1 kilogram', 460, 'carrots');

INSERT INTO products VALUES (10020, 'Cos Lettuce', 'Fresh Produce', 'Salad', 9.45, '500 grams', 320, 'cos_lettuce');
INSERT INTO products VALUES (10021, 'Rocket', 'Fresh Produce', 'Salad', 6.89, '500 grams', 400, 'rocket');
INSERT INTO products VALUES (10022, 'Mustard Lettuce', 'Fresh Produce', 'Salad', 11.55, '500 grams', 0, 'mustard_lettuce');
INSERT INTO products VALUES (10023, 'Spinach', 'Fresh Produce', 'Salad', 13.50, '500 grams', 560, 'spinach');
INSERT INTO products VALUES (10024, 'Iceberg Lettuce', 'Fresh Produce', 'Salad', 14.99, '500 grams', 230, 'iceberg_lettuce');

INSERT INTO products VALUES (10030, 'Thyme', 'Fresh Produce', 'Herbs', 4.50, '200 grams', 540, 'thyme');
INSERT INTO products VALUES (10031, 'Rosemary', 'Fresh Produce', 'Herbs', 6.99, '200 grams', 245, 'rosemary');
INSERT INTO products VALUES (10032, 'Mint', 'Fresh Produce', 'Herbs', 7.45, '200 grams', 390, 'mint');
INSERT INTO products VALUES (10033, 'Parsley', 'Fresh Produce', 'Herbs',10.25, '200 grams', 620, 'parsley');
INSERT INTO products VALUES (10034, 'Basil', 'Fresh Produce', 'Herbs', 9.75, '200 grams', 0, 'basil');

INSERT INTO products VALUES (20000, 'Hawaiian Pizza', 'Frozen', 'Frozen Meals', 16.75, '1 Serving', 460, 'hawaiian_pizza');
INSERT INTO products VALUES (20002, 'Spaghetti Carbonara', 'Frozen', 'Frozen Meals', 14.99, '1 Serving', 0, 'spaghetti');
INSERT INTO products VALUES (20003, 'Chicken Kiev', 'Frozen', 'Frozen Meals', 12.50, '1 Serving', 530, 'kiev');
INSERT INTO products VALUES (20004, 'Fusilli Arribiata', 'Frozen', 'Frozen Meals', 16.00, '1 Serving', 180, 'fusilli');
INSERT INTO products VALUES (20005, 'Pepperoni Pizza', 'Frozen', 'Frozen Meals', 13.25, '1 Serving', 270, 'pepperoni_pizza');

INSERT INTO products VALUES (20020, 'Neapolitan Ice Cream', 'Frozen', 'Ice Cream', 22.75, '500 grams', 0, 'neapolitan_ice');
INSERT INTO products VALUES (20021, 'Strawberry Ice Cream', 'Frozen', 'Ice Cream', 25.99, '500 grams', 340, 'strawberry_ice');
INSERT INTO products VALUES (20022, 'Vanilla Ice Cream', 'Frozen', 'Ice Cream', 23.45, '500 grams', 560, 'vanilla_ice');
INSERT INTO products VALUES (20023, 'Chocolate', 'Frozen', 'Ice Cream', 24.25, '500 grams', 420, 'chocolate_ice');
INSERT INTO products VALUES (20024, 'Boysenberry Ice Cream', 'Frozen', 'Ice Cream', 19.99, '500 grams', 210, 'boysenberry_ice');

INSERT INTO products VALUES (20030, 'Fish Fingers', 'Frozen', 'Party Food', 16.75, '20 Pieces', 450, 'fish_fingers');
INSERT INTO products VALUES (20031, 'Chicken Tenders', 'Frozen', 'Party Food', 16.75, '20 Pieces', 610, 'chicken_tenders');
INSERT INTO products VALUES (20032, 'Sausage Rolls', 'Frozen', 'Party Food', 16.75, '20 Pieces', 700, 'sausage_rolls');
INSERT INTO products VALUES (20033, 'Party Pies', 'Frozen', 'Party Food', 16.75, '20 Pieces', 0, 'party_pies');
INSERT INTO products VALUES (20034, 'Spinach and Feta Triangles', 'Frozen', 'Party Food', 16.75, '20 Pieces', 310, 'spinach_feta_tri');

INSERT INTO products VALUES (30000, 'Tasty Cheese', 'Fridge', 'Dairy', 15.60, '500 grams', 400, 'tasty_cheese');
INSERT INTO products VALUES (30001, 'Milk', 'Fridge', 'Dairy', 8.50, '750 millilitres', 590, 'milk');
INSERT INTO products VALUES (30002, 'Butter', 'Fridge', 'Dairy', 9.90, '500 grams', 0, 'butter');
INSERT INTO products VALUES (30003, 'Yoghurt', 'Fridge', 'Dairy', 13.45, '500 millilitres', 605, 'yoghurt');
INSERT INTO products VALUES (30004, 'Cream', 'Fridge', 'Dairy', 11.99, '250 millilitres', 720, 'cream');

INSERT INTO products VALUES (30010, 'Regular Eggs', 'Fridge', 'Eggs', 14.99, '1 Dozen', 0, 'egg_dozen');
INSERT INTO products VALUES (30011, 'Regular Eggs', 'Fridge', 'Eggs', 21.99, '2 Dozen', 340, 'egg_double');
INSERT INTO products VALUES (30012, 'Regular Eggs', 'Fridge', 'Eggs', 8.99, '1/2 Dozen', 500, 'egg_half');
INSERT INTO products VALUES (30013, 'Extra Large Eggs', 'Fridge', 'Eggs', 16.99, '1 Dozen', 210, 'xl_egg');
INSERT INTO products VALUES (30014, 'Small Eggs', 'Fridge', 'Eggs', 12.99, '1 Dozen', 780, 'sml_egg');

INSERT INTO products VALUES (40000, 'Chicken Breasts', 'Meat', 'Poultry', 16.75, '500 grams', 0, 'chicken_breast');
INSERT INTO products VALUES (40001, 'Chicken Thighs', 'Meat', 'Poultry', 17.99, '500 grams', 560, 'chicken_thigh');
INSERT INTO products VALUES (40002, 'Chicken Sausages', 'Meat', 'Poultry', 19.50, '1 kilogram', 340, 'chicken_sausage');
INSERT INTO products VALUES (40003, 'Turkey Legs', 'Meat', 'Poultry', 16.45, '750 grams', 455, 'turkey_leg');
INSERT INTO products VALUES (40004, 'Turkey Breasts', 'Meat', 'Poultry', 15.99, '600 grams', 125, 'turkey_breast');

INSERT INTO products VALUES (40010, 'Beef Mince', 'Meat', 'Red Meat', 24.45, '1 kilogram', 350, 'beef_mince');
INSERT INTO products VALUES (40011, 'Lamb Chops', 'Meat', 'Red Meat', 22.75, '500 grams', 480, 'lamb_chop');
INSERT INTO products VALUES (40012, 'Rump Steak', 'Meat', 'Red Meat', 20.99, '650 grams', 900, 'rump_steak');
INSERT INTO products VALUES (40013, 'Beef Sausages', 'Meat', 'Red Meat', 25.50, '500 grams', 0, 'beef_sausage');
INSERT INTO products VALUES (40014, 'Scotch Fillet Steak', 'Meat', 'Red Meat', 21.20, '650 grams', 620, 'fillet_steak');

INSERT INTO products VALUES (40020, 'Prawns', 'Meat', 'Seafood', 38.15, '1 kilogram', 1000, 'prawns');
INSERT INTO products VALUES (40021, 'Oysters', 'Meat', 'Seafood', 24.50, '500 grams', 2500, 'oysters');
INSERT INTO products VALUES (40022, 'Mussels', 'Meat', 'Seafood', 21.20, '500 grams', 1250, 'mussels');
INSERT INTO products VALUES (40023, 'Scallops', 'Meat', 'Seafood', 23.05, '500 grams', 2000, 'scallops');
INSERT INTO products VALUES (40024, 'Salmon', 'Meat', 'Seafood', 31.99, '1 kilogram', 1900, 'salmon');

INSERT INTO products VALUES (50000, 'Cola', 'Drinks', 'Soda', 5.99, '1 Litre', 0, 'cola');
INSERT INTO products VALUES (50001, 'Lemonade', 'Drinks', 'Soda', 3.75, '1 Litre', 150, 'lemonade');
INSERT INTO products VALUES (50002, 'Orange Mineral Water', 'Drinks', 'Soda', 4.50, '1 Litre', 90, 'orange_mineral');
INSERT INTO products VALUES (50003, 'Lemon Lime Bitters', 'Drinks', 'Soda', 4.45, '1 Litre', 75, 'lemon_lime');
INSERT INTO products VALUES (50004, 'Passionfruit', 'Drinks', 'Soda', 5.25, '1 Litre', 105, 'passionfruit');

INSERT INTO products VALUES (50010, 'Orange Juice', 'Drinks', 'Juice', 3.90, '1 Litre', 145, 'orange_juice');
INSERT INTO products VALUES (50011, 'Apple Juice', 'Drinks', 'Juice', 4.10, '1 Litre', 250, 'apple_juice');
INSERT INTO products VALUES (50012, 'Pineapple Juice', 'Drinks', 'Juice', 4.25, '1 Litre', 0, 'pineapple_juice');
INSERT INTO products VALUES (50013, 'Tropical Juice', 'Drinks', 'Juice', 4.50, '1 Litre', 190, 'tropical_juice');
INSERT INTO products VALUES (50014, 'Breakfast Juice', 'Drinks', 'Juice', 3.99, '1 Litre', 100, 'breakfast_juice');

COMMIT;
