INSERT INTO Villes(idVille, nom, codePostal) VALUES 
(1, '', 0),
(2, 'Blois', 41000),
(3, 'Paris', 75003),
(4, 'Paris', 75009),
(5, 'Strasbourg', 67000),
(6, 'Toulon', 83000);

INSERT INTO TypeCuisines(idCuisine, libelle) VALUES 
(0, 'Française'),
(1, 'Pizzeria'),
(2, 'Auto-entrepreneur'),
(3, 'Thaïlandais'),
(4, 'Winstub'),
(5, 'Japonais'),
(6, 'Italien')

INSERT INTO Professionnels (idProfessionnel, nom, proprietaire, description, adresse, telephone, mail, logo, SIRET, idVille, idCuisine, latitude, longitude) VALUES 
(1, 'La Scaleta', 'Makoul Mak', '<b></b><b>La Scaleta</b> est un restaurant qui vous invite à vivre une expérience culinaire authentique et raffinée. Situé dans un cadre chaleureux et accueillant, ce restaurant offre une atmosphère conviviale et élégante, parfaite pour savourer des moments inoubliables.<br>', '6 Rue des Minimes', 664552975, 'lascaleta@gmail.com', '64a6180314743.jpg', '000022311', 2, 1, 47.5887, 1.33101),
(2, 'Burger Time', 'Serge Gaet', '<div><p><b>\\\"Burger Time"</b> est un restaurant charmant et convivial, qui vous accueille avec chaleur et simplicité. Situé dans un cadre chaleureux et rustique, ce restaurant offre une atmosphère accueillante et familiale, parfaite pour partager un repas délicieux et réconfortant.</p><p>', '9 Rue Henri Drussy', 765432288, 'burgertime@gmail.com', '64a61a12d44a7.jpg', '07777437437', 2, 2, 47.5868, 1.3362),
(3, 'Le Marais', 'François Legrand', 'Steaks haut de gamme, burgers, salades, desserts, bières et vins proposés dans un restaurant à l\'ambiance détendue doté d\'une cour.', '47 rue de Turbigo', 987360913, 'lemarais@gmail.com', '64a5fc8a33ced.jpg', '90021847000012', 3, 1, 48.8651, 2.354),
(4, 'Moom Mam', 'Aoi Suksutthi', 'Découvrez le MOOM MAM, le restaurant thai ... Moom Mam, est le restaurant thai paris à ne pas manquer, un nom qui évoque un voyage à l autre bout du monde.', '19 Rue de Mogador', 153385873, 'moommam@gmail.com', '65f45deb2e000078.jpg', '51304829800022', 4, 4, 48.8748, 2.33121),
(5, 'Le Clou', 'Jeanine Meyer', 'Le Clou est plus qu\'un restaurant c\'est une Winstub, véritable art de vivre à l alsacienne', '3 Rue du Chaudron', 388321167, 'leclou@gmail.com', '1620635576283.jpg', '31881133800017', 5, 5, 48.5827, 7.74904),
(6, 'Yonako', 'Ryuji Yamada', 'Le restaurant Yonako vous transporte loin, très loin… vers le pays du Soleil Levant. Un restaurant japonais typique qui vous accueille d’un intérieur zen au son d’une musique asiatique.', '28 Rue Thomann', 388325402, 'yonako@gmail.com', '8cc3dfd7c63a5.jpg', '75268046200013', 5, 6, 48.5847, 7.74568),
(7, 'O Bistro des Artistes', 'Gérard Molinard', 'O Bistro Des Artistes de Toulon est populaire pour ses savoureux hamburgers, accompagnés de craquantes frites, salades et autres accompagnements offerts, régale-toi avec la typique savoureuse cuisine française.', '10 Rue Dumont d\'Urville\'', 489290323, 'obistrodesartistes@gmail.com', '94327.jpg', '49305635200021', 6, 1, 43.127, 5.93047),
(8, 'Casa Mia', 'Antony Verone', 'Un petit restaurant italien très bien placé sur le quai du vieux port de Toulon, avec un patron accueillant et très professionnel.', '45 Quai Cronstadt', 617498431, 'casamia@gmail.com', '64a5fc8a33ced.jpg', '49790867300013', 6, 7, 43.1242, 5.928);

INSERT INTO Categories(idCategorie, libelle) VALUES 
(1, 'Boisson'),
(2, 'Entrée'),
(3, 'Plat principal'),
(4, 'Dessert');

INSERT INTO Plats(idPLat, nom, image, description, cout, extrasize, idProfessionnel) VALUES 
(0, 'Paella Valenciana', '64a6085735d12.jpg', `Une délicieuse paella espagnole préparée avec des fruits de mer frais, du riz safrané et une variété d'épices.`, '15.99', '25', 0),
(1, `Gambas à l'ail`, '64a6086784ae8.jpg', `Gambas juteuses et tendres, sautées à l'ail et accompagnées de pain grillé.`, '12.50', "21", 0),
(2, 'Tiramisu maison', '64a60881198e7.jpg', 'Un dessert italien classique avec des couches de biscuits imbibés de café, de mascarpone crémeux et de cacao.', '7.99', '', 0),
(3, 'Burger Time Signature', '64a609533806f.jpg', 'Notre burger signature avec un steak de bœuf grillé, du fromage cheddar fondu, des tomates fraîches, de la laitue croustillante et notre sauce secrète.', '13.99', '19', 1), 
(4, 'Ailes de poulet croustillantes', '64a609a9ea39a.jpg', 'Des ailes de poulet croustillantes servies avec une sauce barbecue maison.', '9.99', '14', 1),
(5, 'Cheesecake New Yorkais', '64a609f573866.jpg', 'Un cheesecake crémeux et décadent avec une croûte de biscuits graham, accompagné de sauce aux fruits de la passion.', '8.50', '', 1), 
(6, 'Steak au poivre', '64a60a2d48c0f.jpg', 'Un steak de bœuf juteux et tendre, grillé à la perfection et assaisonné avec une sauce au poivre aromatique.', '19.99', '28', 2), 
(7, 'Salade César', '64a60a6dbe82a.jpg', 'Une salade fraîche et croustillante avec des feuilles de laitue romaine, du parmesan râpé, des croûtons et une vinaigrette crémeuse.', '12.50', '15', 2), 
(8, 'Crème brûlée', '64a60ab2b2977.jpg', `Un dessert classique français avec une couche de sucre caramélisé sur le dessus d'une crème vanille onctueuse.`, '7.99', '', 2),
(9, 'Pad Thai', '64a60ab2b3377.jpg', 'Un plat thaïlandais classique avec des nouilles de riz sautées, des crevettes, du tofu, des cacahuètes hachées et une sauce aigre-douce.', '14.99', '21', 3),
(10, 'Tom Yum', '64a609f573997.jpg', 'Une soupe thaïlandaise épicée avec des crevettes, des champignons, de la citronnelle, de la coriandre et du piment.', '9.50', '16', 3),
(11, 'Mango Sticky Rice', '64a609a9ea39a8.jpg', 'Un dessert thaïlandais sucré et délicieux avec du riz gluant cuit à la vapeur, du lait de coco et des tranches de mangue fraîche.', '8.99', '', 3),
(12, 'Choucroute Garnie', '64a608811987e9.jpg', 'Un plat traditionnel alsacien composé de choucroute fermentée, de pommes de terre, de saucisses, de lard et de viande de porc fumée.', '18.99', '27', 4), 
(13, 'Flammekueche', '64a6095338886f.jpg', `Une tarte flambée alsacienne avec une base de pâte fine garnie de crème fraîche, de lardons, d'oignons et de fromage.`, '11.50', '16', 4),
(14, 'Kouglof', '64a6086784aef3.jpg', `Un gâteau traditionnel alsacien à base de pâte levée, d'amandes et de raisins secs, cuit dans un moule spécial en forme de couronne.`, '7.99', '', 4),
(15, 'Sushi Assortiment', '64a609a9ea41a.jpg', 'Assortiment de sushis traditionnels japonais comprenant des nigiri, des sashimis et des makis.', '21.99', '32', 5),
(16, 'Tempura de Légumes', '64a6085735d15.jpg', `Légumes frais trempés dans une pâte légère et croustillante, puis frits jusqu'à ce qu'ils soient dorés et croustillants.`, '12.50', '18.50', 5),
(17, 'Asahi', '64a609f573868.jpg', `Bonne bière pour se rafraîchir ou pour accompagner une viande, robe ambrée. Plus goûtue (légère amertume) qu'une Heineken, également autrement plus originale.`, '3.50', '6', 5),
(18, 'Burger Classique', '64a6084026678.jpg', `Notre burger classique avec un steak de bœuf juteux, du fromage fondu, de la laitue croustillante, des tranches de tomate et de l'oignon.`, '15.99', '19.50', 6),
(19, 'Escargots de Bourgogne', '64a607a637444.jpg', `Des escargots de Bourgogne cuits dans un beurre à l'ail, accompagnés de pain baguette croustillant.`, '13.50', '22', 6), 
(20, 'Dame blanche', '64a607047848d.jpg', 'Avec sa glace vanille, sa sauce au chocolat noir et sa chantilly, la dame blanche est la coupe glacée gourmande par excellence ! ', '8.99', '13.50', 6);
(21, 'Pizza Margherita', '64a6084826670.jpg', 'Pizza classique italienne avec une base de sauce tomate, de mozzarella fraîche et de basilic frais.', '12.99', '17.50', 7),
(22, 'Carpaccio di Manzo', '64a699533886f.jpg', `Fines tranches de bœuf cru mariné avec de l'huile d'olive, du jus de citron, des copeaux de parmesan et des câpres.`, '14.50', '19.50', 7), 
(23, 'Lambrusco', '64a6088888ae8.jpg', 'Lambrusco - un nom qui fait battre le cœur des amateurs de vin. Ce vin italien pétillant est devenu synonyme de plaisir à la fois rafraîchissant et sophistiqué.', '7.99', '15', 7); 
(24, 'Pizza 4 fromages', '64a6084826678.jpg', 'Quels fromages dans la pizza quatre fromages ? Du gruyère, du bleu, de la mozzarella, du chèvre... et au four !', '13.99', '19', 7)

INSERT INTO Categorisent(idCategorie, idPlat) VALUES 
(2, 0),
(1, 1),
(3, 2),
(2, 3),
(0, 4),
(3, 5),
(2, 6),
(1, 7),
(3, 8),
(2, 9),
(1, 10),
(3, 11),
(2, 12),
(1, 13),
(3, 14),
(2, 15),
(1, 16),
(0, 17),
(2, 18),
(1, 19),
(3, 20),
(2, 21),
(1, 22),
(0, 23),
(2, 24)

INSERT INTO Promos(idPromo, debut, fin, image, titre, description, repeatDelay, reduction) VALUES 
(0, '2024-04-06', '2024-05-30', '64a60b2f401e5.jpeg', 'Le Burger à 2€', `Ce bon plan Burger Time sera accessible sans autre obligation d'achat, sur place ou à emporter, et hors livraison à domicile. Si vous êtes un inconditionnel de ce burger, vous savez quel jour vous rendre chez votre McDonald's le plus proche ;-) `, '0', '75%'),
(1, '2024-04-18', '2024-06-12', '64a9960b42c30', 'Une pizza achetée, une pizza offerte', `1 pizza achetée 1 pizza offerte ça vous tente? des pizzas avec des ingrédients de première qualité. Commandez maintenant.`, '0', '50%'),
(2, '2024-01-01', '2024-12-31', '64a99673034886.jpg', 'Happy Hour Asahi', 'La bière Asahi 50cl au prix de la 25cl, tous les jours de 18h à 20h', '365', '50%' )

INSERT INTO PlansPlats(idPromo, idPlat) VALUES 
(0, 3),
(1, 21),
(1, 24),
(2, 17)

INSERT INTO Extras(idExtra, nom, prix, idPlat) VALUES 
(0, 'Frites', '3', 18),
(1, 'Sauce barbecue', '0.50', 3),
(2, 'Salade verte', '4.50', 6),
(3, 'Cheddar', '1.50', 18),
(4, 'Chocolat', '1.50', 14)

INSERT INTO `Comptes` (`idCompte`, `nom`, `prenom`, `image`, `mail`, `mdp`, `adresse`, `telephone`, `conditionUtilisation`, `idVille`) VALUES
(1, 'Lockart', 'Gilles', '612e75dd6c63ec27632cadb066c77bed.jpg', 'gilles.lockart@gmail.com', '$2a$10$eoTZw3h5MtoWihryQHePOOIy9Lsqoscork3T92IPfk/kD8JBaF22C', '4 rue Paul Dubois', 606558879, 1, 4),
(2, 'Tobbs', 'Tilly', '44cc0423dc03f42f71e336da4f279137.jpg', 'tobbstilly@gmail.com', '$2a$10$zrRi3iHyEIaHonKwMxYS8esbQQM15vVE0DptOr2NWvhupOEzKvYIO', '27 rue de la Michaodière', 708095624, 1, 4),
(3, 'Muller', 'Christophe', '250a5f0443294b5e860a5443511e1da5.jpg', 'chris.muller@gmail.com', '$2a$10$MIbkKw/W7cv31NCRyoZUxOc0rTLQNgDe6vPixfl3etcGrECcv6L2G', '9 rue Sébastopol', 723565541, 1, 5),
(4, 'El Mekki', 'Daoud', 'a4f0e08eee538bf71a28f6d274ffbd55.jpg', 'daoudelmekki@gmail.com', '$2a$10$WiHVEmB.B9qcG9h1mR.IUeZoQuBnUzSlFzSbw.8mKxbcyd2PKRTg.', '34 rue de Turbigo', 623235879, 1, 3),
(5, 'Gaet', 'Serge', 'b732dafd2df04e904ecaf2c22.jpg', 'serge.gaet@gmail.com', '$2a$10$GaqeyseYpsl.j8qIY.4C1eku0XKjasLAYnyNl7b11lzBh7PqH5dRW', '25 avenue Gambetta', 625648535, 1, 2),
(6, 'Donnar', 'Honoré', 'a30d4202829698246e58be.jpg', 'donnar.honore@gmail.com', '$2a$10$pmTdZtFb1tTWWf0.6GOBwOMhLJABqTl6R41E.7uN0VvereHV073u2', '8 rue de la première armée', 655782512, 1, 5),
(7, 'Mak', 'Makoul', 'defaultAvatar.jpg', 'makmahoul@gmail.com', '$2a$10$KZqi7uITKg0h5rMobnUnH.vLeyTAbLN5b0HyRTl5ezjsTXKVX48zK', '9 rue Beauvoir', 606060688, 1, 2),
(8, 'Legrand', 'François', 'defaultAvatar.jpg', 'legrandfrancois@gmail.com', '$2a$10$i3q4wXD70y0goxkqjWjXoeCGVkntKHNrzLYX54i/HEU/Q71WaX.y6', '101 rue Auffan', 706070656, 1, 6),
(9, 'Moody', 'Toto', 'defaultAvatar.jpg', 'moody1299@gmail.com', '$2a$10$WJFPH/u4fYllBFbUUBa7QOKyLPFekw30nzGktVHrK8jL.Phz0ic5W', '13 rue Auber', 70608998, 1, 4),
(10, 'Muller', 'Jonathan', 'defaultAvatar.jpg', 'jojomuller@gmail.com', '$2a$10$NTOFK5hZGHAV8eugHCzrJuuuM2O5qlamFtbs3hnjzkM7tSuZy2ofS', '21 rue Théophile Schuler', 656894169, 1, 5),
(11, 'Yamada', 'Ryuji', 'defaultAvatar.jpg', 'ryujiyamada@gmail.com', '$2a$10$wESpJSxLJW0cabOwtGrE6eerp/kcGhO5o6PuE6nP.4CR6Yzbo4G1O', '32 rue de Londres', 388265489, 1, 5),
(12, 'Molinard', 'Gérard', 'defaultAvatar.jpg', 'gerardnumber1@gmail.com', '$2a$10$79wB/anWGLsFxrckVUFDWunYdLNu0lM4IEEvunjvskdm4g43cpZm6', '90 impasse des jardins', 657892045, 1, 6),
(13, 'Verone', 'Franca', 'defaultAvatar.jpg', 'francaverone@gmail.com', '$2a$10$oqE2ESthlKmbP9sKGdZBhOZTP9gzGt12N0D2YrVlQElAQALRIQY7S', '62 rue de la Louisiane', 658742658, 1, 6);

INSERT INTO Parrainages(idParrain, idParraine) VALUES 
(1, 3),
(7, 12);

INSERT INTO Administrateurs(idProfessionnel, idCompte) VALUES 
(0, 6),
(1, 4),
(2, 7),
(3, 8),
(4, 9),
(5, 10),
(6, 11),
(7, 12);

INSERT INTO Portefeuilles (idPortefeuille, solde, idCompte) VALUES 
(0, 15, 0),
(1, 115, 1),
(2, 60, 2),
(3, 55, 4),
(4, 0, 3);
(5, 10, 12);

INSERT INTO RGPD(idRGDP, libelle, description) VALUES 
(0, 'Conditions générales de ventes CGV', ``),
(1, `Conditions d'utilisation auto-entrepreneurs`, ``),
(2, `Données à caractère personnel courantes`, `Etat civil, vie personnelle, vie professionnelle, informations d'ordre économique et financier, données de connexion, données  de localisation`)

INSERT INTO Consentements(idCompte, idRGDP) VALUES 
(0, 0),
(0, 2),
(1, 0),
(1, 2),
(2, 0),
(2, 2),
(3, 0),
(3, 2),
(4, 0),
(4, 2),
(5, 0),
(5, 2),
(6, 0),
(6, 2),
(7, 0),
(7, 2),
(8, 0),
(8, 2),
(9, 0),
(9, 2),
(10, 0),
(10, 2),
(11, 0),
(11, 2),
(12, 0),
(12, 2),

INSERT INTO ModePaiements(idMode, libelle) VALUES 
(0, 'Visa'),
(1, 'Mastercard')
(2, 'Paypal'),
(3, 'Portefeuille');

INSERT INTO Transactions(idTransaction, code, montant, dateTransaction, idMode, idPortefeuille) VALUES 
(0, '612321', '48,49', '2024-04-12', 1, 1),
(1, '745598', '38.99', '2024-04-15', 2, 2),
(2, '856230', '31.49', '2024-04-18', 3, 0),
(3, '556842', '499', '2024-04-18', 0, 3),
(4, '568974', '13.50', '2024-04-19', 3, 1),
(5, '125635', '25', '2024-04-19', 2, 4),
(6, '145896', '21', '2024-04-20', 0, 5)


INSERT INTO Vehicules (idVehicule, libelle) VALUES 
(0, 'Vélo'),
(1, 'Scooter'),
(2, 'Moto')
(3, 'Trotinette')

INSERT INTO Livreurs (idLivreur, SIRET, extraitCasier, ID, licenceTransport, permi, idVehicule, idCompte) VALUES 
(0, '422475533', '1387808ab200e.jpg', '96b088c42b60a60df4dee3d.jpg', '8cc3dfd7c63a5c52ffbc42f57a.jpg', '8cc3dfd7c63a5c52ffbc42f57b.jpg', 1, 3),
(1, '922575673', '1387808ab200e.jpg', '96b088c42b60a60df4dee3d.jpg', null, null, 0, 1),
(2, '723577233', '1387808ab200e.jpg', '96b088c42b60a60df4dee3d.jpg', null, null, 0, 10),
(3, '883579215', '1387808ab200e.jpg', '96b088c42b60a60df4dee3d.jpg', '8cc3dfd7c63a5c52ffbc42f57a.jpg', '8cc3dfd7c63a5c52ffbc42f57b.jpg', 3, 12),

INSERT INTO Commandes (idCommande, codeLivraison, etat, instructions, fraisLivreur, heureLivraison, idLivreur, idCompte, idTransaction) VALUES 
(0, '068974', 'Delivered', `code interphone: 1234`, '3', '20:35', 1, 0, 0),
(1, '558935', 'In the process of delivery', '','5', '12:13', 0, 1, 2),
(2, '001256', 'Delivered', `Dans la cour, immeuble au fond à gauche`, '4.25', '19:51', 4, 2, 1),
(3, '556845', 'Delivered', '', '1.99', '19:45', 3, 1, 4),
(4, '265387', 'In progress', '','2.5', '13:08', 1, 3, 5),
(5, '236998', 'Delivered', '','3', '19:22', 4, 11, 6)

INSERT INTO PlatsCommandes(quantite, extraSize, extraList, idCommande,idPlat) VALUES
(0, "1", true, '', 0, 6),
(1, "1", false, '', 0, 7),
(2, "1", false, '', 0, 8),
(3, "1", false, '2', 1, 15),
(6, "1", false, '', 1, 16),
(7, "1", true, '4', 2, 9),
(8, "1", false, '', 2, 11)

INSERT INTO ImagesRestaurants (idImage, images, idProfessionnel) VALUES 
(0, '193888865a811795519540690ef.jpg', 0),
(1, '193888865a811795519540691ef.jpg', 0),
(2, '193888865a811795519540692ef.jpg', 0),
(3, '193888865a811795519540610ef.jpg', 1),
(4, '193888865a81179551954061e1f.jpg', 1),
(5, '6307b80592f6491f971a7616179c7500.jpg', 2),
(6, '6307b80592f6491f971a7616179c7501.jpg', 2),
(7, '6307b80592f6491f971a7510.jpg', 3),
(8, '6307b80592f6491f971a7511.jpg', 3),
(8, '6307b80592f6491f971a7512.jpg', 3),
(9, '6307b80592f6491f971a7520.jpg', 4),
(10, '6307b80592f6491f971a7521.jpg', 4),
(11, '6307b80592f6491f971a7522.jpg', 4),
(12, '6307b80592f6491f971a7530.jpg', 5),
(13, '6307b80592f6491f971a7531.jpg', 5),
(14, '6307b80592f6491f971a7540.jpg', 6),
(15, '6307b80592f6491f971a7541.jpg', 6),
(16, '6307b80592f6491f971a7542.jpg', 6),
(17, '6307b80592f6491f971a7550.jpg', 7),
(18, '6307b80592f6491f971a7551.jpg', 7),
(19, '6307b80592f6491f971a7552.jpg', 7)

INSERT INTO Remises (idRemise, code, reduction) VALUES
(0, 'R223685', '5'),
(1, 'R325587', '10'),
(2, 'R365898', 5)

INSERT INTO Reductions(idCommande, idRemise) VALUES
(1, 0)

INSERT INTO Abonnements(idAbonnement, debut, fin, extraVisibilite, idTransaction, idProfessionnel) VALUES 
(0, '2024-04-01', '2025-03-31', false, 3, 1)

INSERT INTO Reviews (idReviews, dateReview, libelle, cuisine, prix, service, idCompte, idProfessionnel) VALUES 
(0, '2024-03-25', `Dîner japonais d'excellente qualité. Nourriture fraîchement préparée et très fraîche. Recommandé aux amateurs de sushis `, '9', '9', '7', 2, 5),
(1, '2024-04-02', `Petit restaurant avec une ambiance paisible. Le repas était de qualité à un prix raisonnable. A faire sans soucis.`, '7', '8', '5', 3, 2),
(2, '2024-04-12', `Accueil très sympathique, plats savoureux mais il ne faut pas être pressé.`, '9', '7', '7', 11, 7)

INSERT INTO Horaires(idHoraire, jours, debut, fin) VALUES
(0, 'Lundi', '11:00', '15:00'),
(1, 'Lundi', '18:00', '23:00'),
(2, 'Mardi', '11:00', '15:00'),
(3, 'Mardi', '18:00', '23:00'),
(4, 'Mercredi', '11:00', '15:00'),
(5, 'Mercredi', '18:00', '23:00'),
(6, 'Jeudi', '11:00', '15:00'),
(7, 'Jeudi', '18:00', '23:00'),
(8, 'Vendredi', '11:00', '15:00'),
(9, 'Vendredi', '18:00', '23:00'),
(10, 'Samedi', '11:00', '15:00'),
(11, 'Samedi', '18:00', '23:00')

INSERT INTO Livraisons(idProfessionnel, idHoraire) VALUES 
(0, 2),
(0, 3),
(0, 4),
(0, 5),
(0, 6),
(0, 8),
(0, 9),
(0, 10),
(1, 0),
(1, 1),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(2, 0),
(2, 1),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(3, 0),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(4, 0),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(5, 0),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(6, 0),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(7, 0),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 6),
(7, 7),
(7, 8),
(7, 9),
(7, 10),
(7, 11);

INSERT INTO Ouvertures(idRestaurant, idHoraire) VALUES
(0, 2),
(0, 3),
(0, 4),
(0, 5),
(0, 6),
(0, 8),
(0, 9),
(0, 10),
(1, 0),
(1, 1),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(2, 0),
(2, 1),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(3, 0),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(4, 0),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(5, 0),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(6, 0),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(7, 0),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 6),
(7, 7),
(7, 8),
(7, 9),
(7, 10),
(7, 11);

INSERT INTO Menus(idMenu, prix) VALUES 
(0, '12'),
(1, '25'),
(2, '21')

INSERT INTO PlatsMenus(idPlat, idMenu, optionMenu, positionMenu) VALUES 
(10, 0, 1, 0),
(11, 0, 0, 1),
(7, 1, 0, 0),
(6, 1, 1, 1),
(18, 2, 1, 0),
(20, 2, 1, 0)

INSERT INTO MenusCommandes(idMenu, idCommande, optionList, extraList) VALUES
(0, 3, '1', '4'),
(1, 4, '1', '')
(2, 5, '1,1', '')
