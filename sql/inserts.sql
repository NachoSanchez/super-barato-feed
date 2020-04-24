-- Initial database set-up (commerce_types and Categories feed ) run comands after db.sql
INSERT INTO commerce_types( name )
VALUES  ('Almacén'), --1
        ( 'Mercado'), --2
        ('Supermercado'), --3 
        ('Hipermercado'), --4
        ('Kiosco'); --5

INSERT INTO categories ( name )
VALUES  ('Congelados'), --1
        ('Almacén'), --2
        ('Bebidas sin Alcohol'), --3
        ('Bebidas con Alcohol'), --4
        ('Bebés'), --5
        ('Frescos'), --6
        ('Limpieza'), --7
        ('Mascotas'), --8
        ('Perfumería y Cuidado Personal'); --9

INSERT INTO sub_categories (name, cat_id)
VALUES  ('Alimentos de Soja', 1); --1
        ('Empanadas y Tartas', 1), --2
        ('Hamburguesas', 1), --3
        ('Helados', 1),  --4
        ('Pescados y Mariscos', 1), --5
        ('Pizzas', 1), --6
        ('Rebosados', 1), --7
        ('Vegetales', 1), --8
        ('Otros Congelados', 1); --9

INSERT INTO sub_categories (name, cat_id)
VALUES  ('Aceites', 2 ), --10
        ('Aceitunas y Encurtidos', 2), --11
        ('Aderezos y Especias', 2), --12
        ('Arroz, Legumbres y Semillas', 2), --13
        ('Conservas', 2), --14
        ('Desayuno y Merienda', 2), --15
        ('Frutas Secas', 2), --16
        ('Golosinas y Chocolates', 2), --17
        ('Harinas y Pastas', 2), --18
        ('Panificados', 2), --19
        ('Para Preparar', 2), --20
        ('Snacks', 2), --21
        ('Sopas, Caldos y Puré', 2), --22
        ('Suplemento Nutricional', 2); --23

INSERT INTO sub_categories (name, cat_id)
VALUES  ('Carnicería / Pollería', 6), --24
        ('Pescadería', 6), --25
        ('Fiambrería', 6), --26
        ('Frutas', 6), --27
        ('Huevos', 6), --28
        ('Lácteos', 6), --29
        ('Levaduras y Grasas', 6), --30
        ('Pastas y Tapas', 6), --31
        ('Verduras', 6), --32
        ('Accesorios de Limpieza', 7), --33
        ('Desodorantes y Desinfectantes de Ambientes', 7), --34
        ('Insecticidas', 7), --35
        ('Lavandinas', 7), --36
        ('Limpieza de Cocina', 7), --37
        ('Limpieza de Ropa', 7), --38
        ('Limpieza de Baño', 7), --39
        ('Limpieza de Calzado', 7), --40
        ('Limpieza de Pisos y Muebles', 7), --41
        ('Papeles', 7), --42
        ('Productos para Mascotas', 8), --43
        ('Cuidado Capilar', 9), --44
        ('Cuidado Corporal', 9), --45
        ('Cuidado Facial', 9), --46
        ('Cuidado Oral', 9), --47
        ('Productos Farmaceuticos', 9), --48
        ('Productos para Adultos Mayores', 9); --49

INSERT INTO sub_categories (name, cat_id)
VALUES  ('Alimentación', 5), --50
        ('Pañales, Higiene y Accesorios', 5), --51
        ('Aperitivos', 4), --52
        ('Bebidas Blancas, Licores y Whisky', 4), --53
        ('Cervezas', 4), --54
        ('Espumantes', 4), --55
        ('Vinos', 4), --56
        ('Sidras y Otros', 4), --57
        ('A base de Hierbas', 3), --58
        ('Aguas', 3), --59
        ('Aguas Saborizadas', 3), --60
        ('Cervezas y Sidras sin Alcohol', 3), --61
        ('Gaseosas',3), --62
        ('Isotónicas y Energizantes', 3), --63
        ('Jugos', 3), --64
        ('Soda', 3); --65

INSERT INTO product_types (name, subcat_id)
VALUES  ('Alimentos de Soja', 1),
        ('Empanadas y Tartas', 2),
        ('Hamburguesas', 3),
        ('Helados', 4),
        ('Pescados y Mariscos(Congelados)', 5),
        ('Pizzas', 6),
        ('De Pollo / Pescado', 7),
        ('Vegetales', 8),
        ('Otros Alimentos Congelados', 9),
        ('Aerosol', 10),
        ('Girasol', 10),
        ('Maíz', 10),
        ('Mezcla', 10), 
        ('Oliva', 10),
        ('Otros Aceites', 10),
        ('Aceitunas Negras', 11),
        ('Aceitunas Rellenas', 11),
        ('Aceitunas Verdes', 11),
        ('Encurtidos', 11),
        ('Aceto', 12),
        ('Especias', 12),
        ('Mayonesa', 12),
        ('Mostaza', 12),
        ('Saborizadores', 12),
        ('Sal y Pimienta', 12),
        ('Ketchup / Salsa Golf', 12),
        ('Salsas', 12),
        ('Vinagre', 12),
        ('Jugo de Limón y Otros', 12);


INSERT INTO product_types (name, subcat_id)
VALUES  ('Arroz Blanco', 13),
        ('Arroz Integral', 13),
        ('Arroz Preparado', 13),
        ('Legumbres', 13),
        ('Maíz Pisingallo', 13),
        ('Semillas', 13),
        ('Otros', 13),
        ('Anchoas', 14),
        ('Atún', 14),
        ('Caballa', 14),
        ('Frutas', 14),
        ('Paté / Picadillo', 14),
        ('Sardinas', 14),
        ('Tomates / Salsas', 14),
        ('Verduras', 14),
        ('Otras Conservas', 14),
        ('Azúcar', 15),
        ('Cacao en Polvo / Chocolate para Taza', 15),
        ('Café en Cápsulas', 15),
        ('Café Instantáneo', 15),
        ('Café Molido', 15),
        ('Cereales / Avena', 15),
        ('Dulce de Leche', 15),
        ('Edulcorante', 15),
        ('Filtros de Café', 15),
        ('Galletitas de Arroz', 15),
        ('Galletitas Dulces', 15),
        ('Galletitas Saladas', 15),
        ('Leche en Polvo', 15),
        ('Mate Cocido', 15),
        ('Mermeladas y Jaleas', 15),
        ('Miel', 15),
        ('Té', 15),
        ('Yerba', 15),
        ('Frutas Secas y Disecadas', 16),
        ('Alfajores', 17),
        ('Barras de Cereal', 17),
        ('Bocaditos y Bombones', 17),
        ('Caramelos, Chupetines y Chicles', 17),
        ('Chocolates y Tabletas', 17),
        ('Turrones y Confituras', 17),
        ('Otras Golosinas', 17),
        ('Almidón de Maíz', 18),
        ('Fideos Guiseros y de Sopa', 18),
        ('Fideos Largos', 18),
        ('Harina de Maíz', 18),
        ('Harina de Trigo', 18),
        ('Pastas Rellenas', 18),
        ('Sémola', 18),
        ('Otras Pastas / Harinas', 18),
        ('Budines / Bizcochuelos / Pionos', 19),
        ('Hamburguesas y Panchos', 19),
        ('Pan de Molde', 19),
        ('Pan Francés', 19),
        ('Pan Rallado y Rebozadores', 19),
        ('Tostadas', 19),
        ('Otros Panificados' 19),
        ('Bizcochuelos, Brownies y Tortas', 20),
        ('Gelatinas', 20),
        ('Mousse y Helados', 20),
        ('Postres y Flanes', 20),
        ('Premezclas', 20),
        ('Repostería', 20),
        ('Chizitos', 21), ('Maní', 21), ('Palitos', 21), ('Papas fritas', 21),
        ('Otros Snacks', 21);

INSERT INTO product_types (name, subcat_id)
VALUES  ('Puré Instantáneo', 22),
        ('Sopas, Caldos y Saborizadores', 22),
        ('Suplemento Nutricional', 23),
        ('Carne de Cerdo', 24),
        ('Carne Vacuna', 24),
        ('Higado y Achuras', 24),
        ('Pollo', 24),
        ('Otras Carnes', 24),
        ('Pescados y Mariscos(Frescos)', 25),
        ('Dulce Batata / Membrillo', 26),
        ('Fiambres', 26),
        ('Salchichas / Embutidos', 26),
        ('Otros Productos de Fiambrería', 26),
        ('Ananá', 27), ('Banana', 27),
        ('Ciruela', 27), ('Durazno', 27),
        ('Kiwi', 27), ('Limón', 27), ('Mandarina', 27),
        ('Manzana', 27), ('Naranja', 27), ('Pomelo', 27),
        ('Uvas', 27), ('Otras Frutas', 27), ('Huevos', 28),
        ('Crema de Leche', 29), ('Leche Chocolatada', 29),
        ('Leche Condensada', 29), ('Leche Fluida Descremada', 29),
        ('Leche Fluida Entera', 29), ('Manteca y Margarina', 29),
        ('Postres y Flanes', 29), ('Quesos Blandos', 29),
        ('Quesos Duros', 29), ('Quesos Semiduros', 29),
        ('Quesos Untables', 29), ('Ricota', 29), ('Yogurt Bebible', 29),
        ('Yogurt con Cereales / Frutas', 29),
        ('Yogurt Firme / Batido', 29), ('Otras Leches Fluidas', 29),
        ('Otros Quesos', 29);

INSERT INTO product_types (name, subcat_id)
VALUES  ('Levaduras y Grasas', 30), ('Fideos', 31),
        ('Ñoquis', 31), ('Pastas Rellenas', 31),
        ('Tapas para Empanadas', 31), ('Tapas para Tartas', 31),
        ('Acelga', 32), ('Ají', 32), ('Ajo', 32), ('Apio', 32),
        ('Hinojo', 32), ('Batata', 32), ('Berenjenas', 32),
        ('Cebolla Común', 32), ('Cebolla de Verdeo, puerro', 32),
        ('Coliflor, Brócoli', 32), ('Lechuga', 32), ('Palta', 32),
        ('Papa Blanca', 32), ('Papa Negra', 32), ('Radicheta, Rúcula', 32),
        ('Repollo', 32), ('Tomate Redondo', 32), ('Zanahoria', 32),
        ('Zapallitos Frescos', 32), ('Zapallo', 32), ('Otras Verduras', 32),
        ('Baldes', 33), ('Broches y Ganchos', 33),
        ('Escobas / Escobillones / Palos / Cabos', 33),
        ('Secadores y Cepillos', 33), ('Esponjas y Guantes', 33),
        ('Pañños Multiuso / Trapos', 33), ('Otros Accesorios de  Limpieza', 33),
        ('Absorbe Humedad', 34),('Aromatizantes', 34), ('Desinfectantes', 34),
        ('Desodorantes', 34), ('Cucarachas y Hormigas', 35),
        ('Moscas Y Mosquitos', 35), ('Pollillas, Pulgas y Garrapatas', 35),
        ('Repelentes', 35), ('Roedores', 35),('Lavandina en gel', 36),
        ('Lavandina Líquida', 36), ('Bolsas', 37),
        ('Detergentes y Lavavahillas', 37), ('Escarbadientes', 37),
        ('Fósforos y Encendedores', 37), ('Limpiadores', 37),
        ('Limpiavidrios', 37), ('Velas', 37),
        ('Apresto y Blanqueadores', 38), ('Cepillos para la Ropa', 38),
        ('Jabón en Pan', 38), ('Jabón en Polvo', 38), ('Jabón Líquido', 38),
        ('Quitamanchas', 38), ('Suavizantes', 38),
        ('Limpiadores / Desinfectantes Cremosos', 39),
        ('Limpiadores / Desinfectantes en Aerosol', 39),
        ('Limpiadores / Desinfectantes en Gel', 39),
        ('Limpiadores / Desinfectantes Líquidos',39),
        ('Pastillas y Bloques', 39), ('Limpiadores', 40),
        ('Brillos y Revividores', 40), ('Pomadas para el Calzado', 40),
        ('Ceras y Autobrillos', 41), ('Limpiadores de Pisos', 41),
        ('Lustramuebles', 41),
        ('Otros Productos para Limpiar Pisos y Muebles', 41),
        ('Films', 42), ('Pañuelos Descartables', 42),
        ('Papel Aluminio', 42), ('Papel Higiénico', 42),
        ('Rollos de Cocina', 42), ('Servilletas', 42);

INSERT INTO product_types (name, subcat_id)
VALUES  ('Alimentos para Gatos', 43),
        ('Alimentos para Perros', 43),
        ('Productos de Higiene para Mascotas', 43),
        ('Otros Productos para Mascotas', 43),
        ('Acondicionadores', 44), ('Fijadores', 44),
        ('Productos para Combatir la Pediculosis', 44),
        ('Reparación y Tratamiento', 44),
        ('Shampoo', 44), ('Tintura', 44),
        ('Algodones e Hisopos', 45),
        ('Cepillos y Esponjas', 45),
        ('Cremas de Manos y Corporales', 45),
        ('Desodorantes Infantiles', 45),
        ('Desodorantes para Hombre', 45),
        ('Desodorantes para Mujer', 45),
        ('Jabón de Tocador / Glicerina', 45),
        ('Jabón Líquido', 45), ('Perfume', 45),
        ('Productos de Depilación', 45),
        ('Protectores Diarios', 45),
        ('Protectores Solares y Post Solares', 45),
        ('Quitaesmaltes', 45), ('Talcos', 45), ('Tampones', 45),
        ('Toallas Higiénicas', 45),
        ('Otros Productos para el Cuidado Corporal', 45),
        ('Cremas Antiacné', 46), ('Cremas Antiarrugas', 46),
        ('Cremas Hidratantes / Humectantes', 46),
        ('Productos de Afeitar / para después de Afeitarse', 46),
        ('Desmaquillantes', 46),
        ('Otros Productos para el Cuidado Facial', 46),
        ('Accesorios Dentales', 47), ('Cepillos Dentales', 47),
        ('Enjuagues Bucales', 47), ('Pastas Dentales', 47),
        ('Alcohol', 48), ('Antisépticos', 48), 
        ('Apósitos Protectores', 48), ('Preservativos', 48),
        ('Protectores Mamarios', 48), ('Otros Productos Farmaceuticos', 48),
        ('Pañales para Adultos', 49);



INSERT INTO product_types (name, subcat_id)
VALUES  ('Leche Infantil', 50), 
        ('Otros Productos para la Alimentación del Bebé', 50),
        ('Aceites / Cremas / Jabones', 51),
        ('Chupetes y Mamaderas', 51), ('Pañales', 51),
        ('Talco / Oléo Calcáreo', 51),
        ('Toallitas Húmedas', 51), ('Americano', 52),
        ('Fernet', 52), ('Otros Aperitivos', 52),
        ('Bebidas Blancas', 53), ('Licores', 53),
        ('Whisky', 53), ('Botella', 54), ('Lata', 54),
        ('Champagne', 55), ('Frizantes', 55),
        ('Vino Blanco', 56), ('Vino Rosado', 56),('Vino Tinto', 56),
        ('Sidras', 57), ('Otras Bebidas Alcoholicas', 57),
        ('Amargos', 58), ('Gasificadas', 59), ('Sin Gas', 59),
        ('Cervezas y Sidras sin Alcohol', 60), ('Gasificadas', 61), ('Sin Gas', 61),
        ('Cola', 62), ('Lima Limón', 62), ('Naranja', 62),
        ('Pomelo', 62), ('Tónica', 62),('Otras', 62),
        ('Isotónicas y Energizantes', 63),('Concentrados', 64),
        ('en Polvo', 64), ('Listos', 64),('Soda', 65);

