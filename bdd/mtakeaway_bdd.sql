SET AUTOCOMMIT = 0;
START TRANSACTION;
-- ---------------------------------------------------------------------------------------
DROP DATABASE
    IF EXISTS mtakeaway;
CREATE DATABASE mtakeaway
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;
USE mtakeaway;

CREATE TABLE Villes (
    idVille INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL DEFAULT '',
    codePostal INT NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Villes(idVille, nom, codePostal) VALUES 
(1, '', 0),
(2, 'Blois', 41000),
(3, 'Paris', 75003),
(4, 'Paris', 75009),
(5, 'Strasbourg', 67000),
(6, 'Toulon', 83000);

 CREATE TABLE TypeCuisines (
    idCuisine INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO TypeCuisines(idCuisine, libelle) VALUES 
(1, 'Française'),
(2, 'Pizzeria'),
(3, 'Auto-entrepreneur'),
(4, 'Thaïlandais'),
(5, 'Winstub'),
(6, 'Japonais'),
(7, 'Italien');

CREATE TABLE Professionnels (
    idProfessionnel INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(200) NOT NULL DEFAULT '',
    description VARCHAR(500) NOT NULL DEFAULT '',
    adresse VARCHAR(200) NOT NULL DEFAULT '',
    telephone INT NOT NULL DEFAULT 0,
    mail VARCHAR(100) NOT NULL DEFAULT '',
    logo VARCHAR(100)NOT NULL DEFAULT '',
    SIRET VARCHAR(20)NOT NULL DEFAULT '',
    idVille INT UNSIGNED NOT NULL DEFAULT 1,
	idCuisine INT UNSIGNED NOT NULL DEFAULT 1,
    latitude FLOAT NOT NULL DEFAULT 0,
    longitude FLOAT NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4; 

INSERT INTO Professionnels (idProfessionnel, nom, description, adresse, telephone, mail, logo, SIRET, idVille, idCuisine, latitude, longitude) VALUES 
(1, 'La Scaleta', '<b></b><b>La Scaleta</b> est un restaurant qui vous invite à vivre une expérience culinaire authentique et raffinée. Situé dans un cadre chaleureux et accueillant, ce restaurant offre une atmosphère conviviale et élégante, parfaite pour savourer des moments inoubliables.<br>', '6 Rue des Minimes', 664552975, 'lascaleta@gmail.com', '64a6180314743.jpg', '000022311', 2, 1, 47.5887, 1.33101),
(2, 'Burger Time', '<div><p><b>\\\"Burger Time"</b> est un restaurant charmant et convivial, qui vous accueille avec chaleur et simplicité. Situé dans un cadre chaleureux et rustique, ce restaurant offre une atmosphère accueillante et familiale, parfaite pour partager un repas délicieux et réconfortant.</p><p>', '9 Rue Henri Drussy', 765432288, 'burgertime@gmail.com', '64a61a12d44a7.jpg', '07777437437', 2, 2, 47.5868, 1.3362),
(3, 'Le Marais', 'Steaks haut de gamme, burgers, salades, desserts, bières et vins proposés dans un restaurant à l\'ambiance détendue doté d\'une cour.', '47 rue de Turbigo', 987360913, 'lemarais@gmail.com', '64a5fc8a33ced.jpg', '90021847000012', 3, 1, 48.8651, 2.354),
(4, 'Moom Mam', 'Découvrez le MOOM MAM, le restaurant thai ... Moom Mam, est le restaurant thai paris à ne pas manquer, un nom qui évoque un voyage à l autre bout du monde.', '19 Rue de Mogador', 153385873, 'moommam@gmail.com', '65f45deb2e000078.jpg', '51304829800022', 4, 4, 48.8748, 2.33121),
(5, 'Le Clou', 'Le Clou est plus qu\'un restaurant c\'est une Winstub, véritable art de vivre à l alsacienne', '3 Rue du Chaudron', 388321167, 'leclou@gmail.com', '1620635576283.jpg', '31881133800017', 5, 5, 48.5827, 7.74904),
(6, 'Yonako', 'Le restaurant Yonako vous transporte loin, très loin… vers le pays du Soleil Levant. Un restaurant japonais typique qui vous accueille d’un intérieur zen au son d’une musique asiatique.', '28 Rue Thomann', 388325402, 'yonako@gmail.com', '8cc3dfd7c63a5.jpg', '75268046200013', 5, 6, 48.5847, 7.74568),
(7, 'O Bistro des Artistes', 'O Bistro Des Artistes de Toulon est populaire pour ses savoureux hamburgers, accompagnés de craquantes frites, salades et autres accompagnements offerts, régale-toi avec la typique savoureuse cuisine française.', '10 Rue Dumont d\'Urville\'', 489290323, 'obistrodesartistes@gmail.com', '94327.jpg', '49305635200021', 6, 1, 43.127, 5.93047),
(8, 'Casa Mia', 'Un petit restaurant italien très bien placé sur le quai du vieux port de Toulon, avec un patron accueillant et très professionnel.', '45 Quai Cronstadt', 617498431, 'casamia@gmail.com', '64a5fc8a33ced.jpg', '49790867300013', 6, 7, 43.1242, 5.928);

CREATE TABLE Categories (
    idCategorie INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Categories(idCategorie, libelle) VALUES 
(1, 'Boisson'),
(2, 'Entrée'),
(3, 'Plat principal'),
(4, 'Dessert');

CREATE TABLE Plats (
    idPlat INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(200) NOT NULL DEFAULT '',
    image VARCHAR(100) NOT NULL DEFAULT '',
    description VARCHAR(500) NOT NULL DEFAULT '',
    cout FLOAT UNSIGNED NOT NULL DEFAULT 0,
    extrasize INT UNSIGNED NOT NULL DEFAULT 0,
    idProfessionnel INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Plats(idPLat, nom, image, description, cout, extrasize, idProfessionnel) VALUES 
(1, 'Paella Valenciana', '64a6085735d12.jpg', 'Une délicieuse paella espagnole préparée avec des fruits de mer frais, du riz safrané et une variété d\'épices.', 15.99, 25, 1),
(2, 'Gambas à l\'ail', '64a6086784ae8.jpg', 'Gambas juteuses et tendres, sautées à l\'ail et accompagnées de pain grillé.', 12.5, 21, 1),
(3, 'Tiramisu maison', '64a60881198e7.jpg', 'Un dessert italien classique avec des couches de biscuits imbibés de café, de mascarpone crémeux et de cacao.', 7.99, 0, 1),
(4, 'Burger Time Signature', '64a609533806f.jpg', 'Notre burger signature avec un steak de bœuf grillé, du fromage cheddar fondu, des tomates fraîches, de la laitue croustillante et notre sauce secrète.', 13.99, 19, 2),
(5, 'Ailes de poulet croustillantes', '64a609a9ea39a.jpg', 'Des ailes de poulet croustillantes servies avec une sauce barbecue maison.', 9.99, 14, 2),
(6, 'Cheesecake New Yorkais', '64a609f573866.jpg', 'Un cheesecake crémeux et décadent avec une croûte de biscuits graham, accompagné de sauce aux fruits de la passion.', 8.5, 0, 2),
(7, 'Steak au poivre', '64a60a2d48c0f.jpg', 'Un steak de bœuf juteux et tendre, grillé à la perfection et assaisonné avec une sauce au poivre aromatique.', 19.99, 28, 3),
(8, 'Salade César', '64a60a6dbe82a.jpg', 'Une salade fraîche et croustillante avec des feuilles de laitue romaine, du parmesan râpé, des croûtons et une vinaigrette crémeuse.', 12.5, 15, 3),
(9, 'Crème brûlée', '64a60ab2b2977.jpg', 'Un dessert classique français avec une couche de sucre caramélisé sur le dessus d\'une crème vanille onctueuse.', 7.99, 0, 3),
(10, 'Pad Thai', '64a60ab2b3377.jpg', 'Un plat thaïlandais classique avec des nouilles de riz sautées, des crevettes, du tofu, des cacahuètes hachées et une sauce aigre-douce.', 14.99, 21, 4),
(11, 'Tom Yum', '64a609f573997.jpg', 'Une soupe thaïlandaise épicée avec des crevettes, des champignons, de la citronnelle, de la coriandre et du piment.', 9.5, 16, 4),
(12, 'Mango Sticky Rice', '64a609a9ea39a8.jpg', 'Un dessert thaïlandais sucré et délicieux avec du riz gluant cuit à la vapeur, du lait de coco et des tranches de mangue fraîche.', 8.99, 27, 4),
(13, 'Choucroute Garnie', '64a608811987e9.jpg', 'Un plat traditionnel alsacien composé de choucroute fermentée, de pommes de terre, de saucisses, de lard et de viande de porc fumée.', 18.99, 27, 5),
(14, 'Flammekueche', '64a6095338886f.jpg', 'Une tarte flambée alsacienne avec une base de pâte fine garnie de crème fraîche, de lardons, d\'oignons et de fromage.', 11.5, 16, 5),
(15, 'Kouglof', '64a6086784aef3.jpg', 'Un gâteau traditionnel alsacien à base de pâte levée, d\'amandes et de raisins secs, cuit dans un moule spécial en forme de couronne.', 7.99, 0, 5),
(16, 'Sushi Assortiment', '64a609a9ea41a.jpg', 'Assortiment de sushis traditionnels japonais comprenant des nigiri, des sashimis et des makis.', 21.99, 32, 6),
(17, 'Tempura de Légumes', '64a6085735d15.jpg', 'Légumes frais trempés dans une pâte légère et croustillante, puis frits jusqu\'à ce qu\'ils soient dorés et croustillants.', 12.5, 19, 6),
(18, 'Asahi', '64a609f573868.jpg', 'Bonne bière pour se rafraîchir ou pour accompagner une viande, robe ambrée. Plus goûtue (légère amertume) qu\'une Heineken, également autrement plus originale.', 3.5, 6, 6),
(19, 'Burger Classique', '64a6084026678.jpg', 'Notre burger classique avec un steak de bœuf juteux, du fromage fondu, de la laitue croustillante, des tranches de tomate et de l\'oignon.', 15.99, 20, 7),
(20, 'Escargots de Bourgogne', '64a607a637444.jpg', 'Des escargots de Bourgogne cuits dans un beurre à l ail, accompagnés de pain baguette croustillant.', 13.5, 22, 7),
(21, 'Dame blanche', '64a607047848d.jpg', 'Avec sa glace vanille, sa sauce au chocolat noir et sa chantilly, la dame blanche est la coupe glacée gourmande par excellence !', 8.99, 14, 7),
(22, 'Pizza Margherita', '64a6084826670.jpg', 'Pizza classique italienne avec une base de sauce tomate, de mozzarella fraîche et de basilic frais.', 12.99, 18, 8),
(23, 'Carpaccio di Manzo', '64a699533886f.jpg', 'Fines tranches de bœuf cru mariné avec de l\'huile d\'olive, du jus de citron, des copeaux de parmesan et des câpres.', 14.5, 20, 8),
(24, 'Lambrusco', '64a6088888ae8.jpg', 'Lambrusco - un nom qui fait battre le cœur des amateurs de vin. Ce vin italien pétillant est devenu synonyme de plaisir à la fois rafraîchissant et sophistiqué.', 7.99, 15, 8),
(25, 'Pizza 4 fromages', '64a6084826678.jpg', 'Quels fromages dans la pizza quatre fromages ? Du gruyère, du bleu, de la mozzarella, du chèvre... et au four !', 13.99, 19, 7);

 CREATE TABLE Categorisent (
    idCategorie INT UNSIGNED NOT NULL,
    idPlat INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Categorisent(idCategorie, idPlat) VALUES 
(3, 1),
(4, 3),
(3, 4),
(1, 5),
(4, 6),
(3, 7),
(2, 8),
(4, 9),
(3, 10),
(2, 11),
(2, 12),
(4, 12),
(3, 13),
(2, 14),
(4, 15),
(3, 16),
(2, 17),
(1, 18),
(3, 19),
(2, 20),
(4, 21),
(3, 22),
(2, 23),
(1, 24),
(3, 25);

CREATE TABLE Promos (
    idPromo INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    debut DATETIME NOT NULL,
    fin DATETIME NOT NULL,
    image VARCHAR(100) NOT NULL DEFAULT '',
    titre VARCHAR(100) NOT NULL DEFAULT '',
    description VARCHAR(500) NOT NULL DEFAULT '',
    repeatDelay INT UNSIGNED NOT NULL DEFAULT 0,
    reduction INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Promos(idPromo, debut, fin, image, titre, description, repeatDelay, reduction) VALUES 
(1, '2024-04-06 00:00:00', '2024-05-30 00:00:00', '64a60b2f401e5.jpeg', 'Le Burger à 2€', 'Ce bon plan Burger Time sera accessible sans autre obligation d achat, sur place ou à emporter, et hors livraison à domicile. Si vous êtes un inconditionnel de ce burger, vous savez quel jour vous rendre chez votre McDonalds le plus proche', 0, 75),
(2, '2024-04-18 00:00:00', '2024-06-12 00:00:00', '64a9960b42c30.jpg', 'Une pizza achetée, une pizza offerte', '1 pizza achetée 1 pizza offerte ça vous tente? des pizzas avec des ingrédients de première qualité. Commandez maintenant.', 0, 50),
(3, '2024-01-01 00:00:00', '2024-12-31 00:00:00', '64a99673034886.jpg', 'Happy Hour Asahi', 'La bière Asahi 50cl au prix de la 25cl, tous les jours de 18h à 20h', 365, 50);


CREATE TABLE PlansPlats (
    idPromo INT UNSIGNED NOT NULL ,
    idPlat INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO PlansPlats(idPromo, idPlat) VALUES 
(1, 4),
(2, 22),
(2, 25),
(3, 18);


CREATE TABLE Extras (
    idExtra INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(200) NOT NULL DEFAULT '',
    prix FLOAT UNSIGNED NOT NULL DEFAULT 0,
    idPlat INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Extras(idExtra, nom, prix, idPlat) VALUES 
(1, 'Frites', 3, 19),
(2, 'Sauce barbecue', 0.5, 4),
(3, 'Salade verte', 4.5, 7),
(4, 'Cheddar', 1.5, 19),
(5, 'Chocolat', 1.5, 15);


CREATE TABLE Comptes (
    idCompte INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(200) NOT NULL DEFAULT '',
    prenom VARCHAR(150) NOT NULL DEFAULT '',
    image VARCHAR(100) NOT NULL DEFAULT '',
    mail VARCHAR(100) NOT NULL DEFAULT '',
    mdp VARCHAR(255) NOT NULL DEFAULT '',
    adresse VARCHAR(200) NOT NULL DEFAULT '',
    telephone INT NOT NULL DEFAULT 0,
    conditionUtilisation tinyint(1) DEFAULT 0,
    idVille INT UNSIGNED NOT NULL DEFAULT 1,
    typeCompte INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `Comptes` (`idCompte`, `nom`, `prenom`, `image`, `mail`, `mdp`, `adresse`, `telephone`, `conditionUtilisation`, `idVille`, typeCompte) VALUES
(1, 'Lockart', 'Gilles', '612e75dd6c63ec27632cadb066c77bed.jpg', 'gilles.lockart@gmail.com', '$2y$10$eoTZw3h5MtoWihryQHePOOIy9Lsqoscork3T92IPfk/kD8JBaF22C', '4 rue Paul Dubois', 606558879, 1, 4, 0),
(2, 'Tobbs', 'Tilly', '44cc0423dc03f42f71e336da4f279137.jpg', 'tobbstilly@gmail.com', '$2y$10$zrRi3iHyEIaHonKwMxYS8esbQQM15vVE0DptOr2NWvhupOEzKvYIO', '27 rue de la Michaodière', 708095624, 1, 4, 1),
(3, 'Muller', 'Christophe', '250a5f0443294b5e860a5443511e1da5.jpg', 'chris.muller@gmail.com', '$2y$10$MIbkKw/W7cv31NCRyoZUxOc0rTLQNgDe6vPixfl3etcGrECcv6L2G', '9 rue Sébastopol', 723565541, 1, 5, 1),
(4, 'El Mekki', 'Daoud', 'a4f0e08eee538bf71a28f6d274ffbd55.jpg', 'daoudelmekki@gmail.com', '$2y$10$WiHVEmB.B9qcG9h1mR.IUeZoQuBnUzSlFzSbw.8mKxbcyd2PKRTg.', '34 rue de Turbigo', 623235879, 1, 3, 1),
(5, 'Gaet', 'Serge', 'b732dafd2df04e904ecaf2c22.jpg', 'serge.gaet@gmail.com', '$2y$10$GaqeyseYpsl.j8qIY.4C1eku0XKjasLAYnyNl7b11lzBh7PqH5dRW', '25 avenue Gambetta', 625648535, 1, 2, 2),
(6, 'Donnar', 'Honoré', 'a30d4202829698246e58be.jpg', 'donnar.honore@gmail.com', '$2y$10$pmTdZtFb1tTWWf0.6GOBwOMhLJABqTl6R41E.7uN0VvereHV073u2', '8 rue de la première armée', 655782512, 1, 5, 1),
(7, 'Mak', 'Makoul', 'defaultAvatar.jpg', 'makmahoul@gmail.com', '$2y$10$KZqi7uITKg0h5rMobnUnH.vLeyTAbLN5b0HyRTl5ezjsTXKVX48zK', '9 rue Beauvoir', 606060688, 1, 2, 2),
(8, 'Legrand', 'François', 'defaultAvatar.jpg', 'legrandfrancois@gmail.com', '$2y$10$i3q4wXD70y0goxkqjWjXoeCGVkntKHNrzLYX54i/HEU/Q71WaX.y6', '101 rue Auffan', 706070656, 1, 6, 2),
(9, 'Moody', 'Toto', 'defaultAvatar.jpg', 'moody1299@gmail.com', '$2y$10$WJFPH/u4fYllBFbUUBa7QOKyLPFekw30nzGktVHrK8jL.Phz0ic5W', '13 rue Auber', 70608998, 1, 4, 2),
(10, 'Muller', 'Jonathan', 'defaultAvatar.jpg', 'jojomuller@gmail.com', '$2y$10$NTOFK5hZGHAV8eugHCzrJuuuM2O5qlamFtbs3hnjzkM7tSuZy2ofS', '21 rue Théophile Schuler', 656894169, 1, 5, 2),
(11, 'Yamada', 'Ryuji', 'defaultAvatar.jpg', 'ryujiyamada@gmail.com', '$2y$10$wESpJSxLJW0cabOwtGrE6eerp/kcGhO5o6PuE6nP.4CR6Yzbo4G1O', '32 rue de Londres', 388265489, 1, 5, 2),
(12, 'Molinard', 'Gérard', 'defaultAvatar.jpg', 'gerardnumber1@gmail.com', '$2y$10$79wB/anWGLsFxrckVUFDWunYdLNu0lM4IEEvunjvskdm4g43cpZm6', '90 impasse des jardins', 657892045, 1, 6, 2),
(13, 'Verone', 'Franca', 'defaultAvatar.jpg', 'francaverone@gmail.com', '$2y$10$oqE2ESthlKmbP9sKGdZBhOZTP9gzGt12N0D2YrVlQElAQALRIQY7S', '62 rue de la Louisiane', 658742658, 1, 6, 2);


CREATE TABLE Parrainages (
    idParrain INT UNSIGNED NOT NULL ,
    idParraine INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Parrainages(idParrain, idParraine) VALUES 
(2, 4),
(8, 13);


CREATE TABLE Administrateurs (
    idProfessionnel INT UNSIGNED NOT NULL,
    idCompte INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Administrateurs(idProfessionnel, idCompte) VALUES 
(2, 5),
(1, 7),
(3, 8),
(4, 9),
(5, 10),
(6, 11),
(7, 12),
(8, 13);


CREATE TABLE Portefeuilles (
    idPortefeuille INT UNSIGNED NOT NULL  PRIMARY KEY,
    solde INT UNSIGNED NOT NULL DEFAULT 0,
    idCompte INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Portefeuilles (idPortefeuille, solde, idCompte) VALUES 
(1, 15, 1),
(2, 115, 2),
(3, 60, 3),
(4, 55, 5),
(5, 0, 4),
(6, 10, 13);


 CREATE TABLE RGPD (
    idRGPD INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(200) NOT NULL DEFAULT '', 
    description VARCHAR(300) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO RGPD(idRGPD, libelle, description) VALUES 
(1, 'Conditions générales de ventes CGV', ''),
(2, 'Conditions d\\\'utilisation auto-entrepreneurs', ''),
(3, 'Données à caractère personnel courantes', 'Etat civil, vie personnelle, vie professionnelle, informations d\'ordre économique et financier, données de connexion, données  de localisation');


CREATE TABLE Consentements (
    idCompte INT UNSIGNED NOT NULL ,
    idRGPD INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Consentements(idCompte, idRGPD) VALUES 
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 3),
(7, 3),
(8, 3),
(9, 3),
(10, 3),
(11, 3),
(12, 3),
(13, 3);


 CREATE TABLE ModePaiements (
    idMode INT UNSIGNED NOT NULL  PRIMARY KEY,
    libelle VARCHAR(200) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO ModePaiements(idMode, libelle) VALUES
(1, 'Visa'),
(2, 'Mastercard'),
(3, 'Paypal'),
(4, 'Portefeuille');


 CREATE TABLE Transactions (
    idTransaction INT UNSIGNED NOT NULL  PRIMARY KEY,
    code INT UNSIGNED NOT NULL,
    montant FLOAT UNSIGNED NOT NULL,
    dateTransaction DATE NOT NULL,
    idMode INT UNSIGNED NOT NULL,
    idPortefeuille INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Transactions(idTransaction, code, montant, dateTransaction, idMode, idPortefeuille) VALUES 
(1, 612321, 48.49, '2024-04-12', 2, 2),
(2, 745598, 38.99, '2024-04-15', 3, 3),
(3, 856230, 31.49, '2024-04-18', 4, 1),
(4, 556842, 499, '2024-04-18', 1, 4),
(5, 568974, 13.5, '2024-04-19', 4, 2),
(6, 125635, 25, '2024-04-19', 3, 5),
(7, 145896, 21, '2024-04-20', 1, 6);


CREATE TABLE Vehicules (
    idVehicule INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(200) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Vehicules (idVehicule, libelle) VALUES 
(1, 'Vélo'),
(2, 'Scooter'),
(3, 'Moto'),
(4, 'Trotinette');

CREATE TABLE Livreurs (
    idLivreur INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    SIRET VARCHAR(20) NOT NULL DEFAULT '',
    extraitCasier VARCHAR(100) NOT NULL DEFAULT '',
    numID INT NOT NULL DEFAULT 0,
    ID VARCHAR(100) NOT NULL DEFAULT '',
    numLicence INT NOT NULL DEFAULT 0,
    licenceTransport VARCHAR(100) NOT NULL DEFAULT '',
    numPermi INT NOT NULL DEFAULT 0,
    permi VARCHAR(100) NOT NULL DEFAULT '',
    idVehicule INT UNSIGNED NOT NULL DEFAULT 1,
    idCompte INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Livreurs (idLivreur, SIRET, extraitCasier, numID, ID, numLicence, licenceTransport, numPermi, permi, idVehicule, idCompte) VALUES 
(1, '422475533','1387808ab200e.jpg', 25, '96b088c42b60a60df4dee3d.jpg', 374852, '8cc3dfd7c63a5c52ffbc42f57a.jpg', 4738265, '8cc3dfd7c63a5c52ffbc42f57b.jpg', 2, 4),
(2, '922575673', '1387808ab200e.jpg', 42, '96b088c42b60a60df4dee3d.jpg', 382766276, '', 3388748, '', 1, 2),
(3, '723577233', '1387808ab200e.jpg', 67, '96b088c42b60a60df4dee3d.jpg', 73645, '', 3766542, '', 1, 3),
(4, '883579215', '1387808ab200e.jpg', 678453,  '96b088c42b60a60df4dee3d.jpg', 3387762, '8cc3dfd7c63a5c52ffbc42f57a.jpg', 3748625, '8cc3dfd7c63a5c52ffbc42f57b.jpg', 4, 6);


CREATE TABLE Commandes (
    idCommande INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codeLivraison VARCHAR(20) NOT NULL DEFAULT '',
    etat VARCHAR(100) NOT NULL DEFAULT '',
    instructions VARCHAR(500) NOT NULL DEFAULT '',
    fraisLivraison INT NOT NULL DEFAULT 0,
    heureLivraison DATETIME,
    idLivreur INT UNSIGNED NOT NULL,
    idCompte INT UNSIGNED NOT NULL,
    idTransaction INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Commandes (idCommande, codeLivraison, etat, instructions, fraisLivraison, heureLivraison, idLivreur, idCompte, idTransaction) VALUES 
(1, '068974', 'Delivered', 'code interphone: 1234', 3, '2024-05-07 20:35:00', 2, 1, 1),
(2, '558935', 'In the process of delivery', '', 5, '2024-05-12 12:13:00', 1, 2, 3),
(3, '001256', 'Delivered', 'Dans la cour, immeuble au fond à gauche', 4, '2024-05-12 19:51:00', 4, 3, 2),
(4, '556845', 'Delivered', '', 2, '2024-05-12 19:45:00', 1, 2, 5),
(5, '265387', 'In progress', '', 3, '2024-05-12 13:08:00', 2, 4, 5),
(6, '236998', 'Delivered', '', 3, '2024-05-12 19:22:00', 4, 12, 7);

CREATE TABLE ImagesRestaurants (
    idImage INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(100) NOT NULL DEFAULT '',
    idProfessionnel INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO ImagesRestaurants (idImage, image, idProfessionnel) VALUES 
(1, '193888865a811795519540690ef.jpg', 1),
(2, '193888865a811795519540691ef.jpg', 1),
(3, '193888865a811795519540692ef.jpg', 1),
(4, '193888865a811795519540610ef.jpg', 2),
(5, '193888865a81179551954061e1f.jpg', 2),
(6, '6307b80592f6491f971a7616179c7500.jpg', 3),
(7, '6307b80592f6491f971a7616179c7501.jpg', 3),
(8, '6307b80592f6491f971a7510.jpg', 4),
(9, '6307b80592f6491f971a7511.jpg', 4),
(10, '6307b80592f6491f971a7512.jpg', 4),
(11, '6307b80592f6491f971a7520.jpg', 5),
(12, '6307b80592f6491f971a7521.jpg', 5),
(13, '6307b80592f6491f971a7522.jpg', 5),
(14, '6307b80592f6491f971a7530.jpg', 6),
(15, '6307b80592f6491f971a7531.jpg', 6),
(16, '6307b80592f6491f971a7540.jpg', 7),
(17, '6307b80592f6491f971a7541.jpg', 7),
(18, '6307b80592f6491f971a7542.jpg', 7),
(19, '6307b80592f6491f971a7550.jpg', 8),
(20, '6307b80592f6491f971a7551.jpg', 8),
(21, '6307b80592f6491f971a7552.jpg', 8);


CREATE TABLE Remises (
    idRemise INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(20) NOT NULL DEFAULT '',
    reduction INT NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Remises (idRemise, code, reduction) VALUES
(1, 'R223685', 6),
(2, 'R325587', 11),
(3, 'R365898', 6);


CREATE TABLE Reductions (
    idCommande INT UNSIGNED NOT NULL,
    idRemise INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Reductions(idCommande, idRemise) VALUES
(2, 1);


 CREATE TABLE Abonnements (
    idAbonnement INT UNSIGNED NOT NULL  PRIMARY KEY,
    debut DATE NOT NULL,
    idTransaction INT UNSIGNED NOT NULL,
    idProfessionnel INT UNSIGNED NOT NULL,
    idTypeAbo INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Abonnements(idAbonnement, debut, idTransaction, idProfessionnel, idTypeAbo) VALUES 
(1, '2024-04-01', 4, 2, 1);

CREATE TABLE TypeAbonnements (
    idTypeAbo INT UNSIGNED NOT NULL  PRIMARY KEY,
    libelle VARCHAR(50) NOT NULL DEFAULT 'N/A',
    tarif INT UNSIGNED NOT NULL,
    dureeMonth INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO TypeAbonnements(idTypeAbo, libelle, tarif, dureeMonth) VALUES 
(1, 'Un mois', 99, 1),
(2, 'Trois mois', 199, 2),
(3, 'Six mois', 299, 6),
(4, 'Un an', 400, 12);

CREATE TABLE Reviews (
    idReview INT UNSIGNED NOT NULL  PRIMARY KEY,
    dateReview DATE NOT NULL,
    libelle TEXT DEFAULT '',
    cuisine INT NOT NULL DEFAULT 0,
    prix  INT NOT NULL DEFAULT 0,
    service INT NOT NULL DEFAULT 0,
    idCompte INT UNSIGNED NOT NULL,
    idProfessionnel INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Reviews (idReview, dateReview, libelle, cuisine, prix, service, idCompte, idProfessionnel) VALUES 
(1, '2024-03-25', 'Dîner japonais d excellente qualité. Nourriture fraîchement préparée et très fraîche. Recommandé aux amateurs de sushis', 9, 9, 7, 3, 6),
(2, '2024-04-02', 'Petit restaurant avec une ambiance paisible. Le repas était de qualité à un prix raisonnable. A faire sans soucis.', 7, 8, 5, 4, 3),
(3, '2024-04-12', 'Accueil très sympathique, plats savoureux mais il ne faut pas être pressé.', 9, 7, 7, 12, 8);


 CREATE TABLE Horaires (
    idHoraire INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    jours VARCHAR(20) NOT NULL DEFAULT '',
    debut TIME NOT NULL,
    fin TIME NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Horaires(idHoraire, jours, debut, fin) VALUES
(1, 'Lundi', '11:00:00', '15:00:00'),
(2, 'Lundi', '18:00:00', '23:00:00'),
(3, 'Mardi', '11:00:00', '15:00:00'),
(4, 'Mardi', '18:00:00', '23:00:00'),
(5, 'Mercredi', '11:00:00', '15:00:00'),
(6, 'Mercredi', '18:00:00', '23:00:00'),
(7, 'Jeudi', '11:00:00', '15:00:00'),
(8, 'Jeudi', '18:00:00', '23:00:00'),
(9, 'Vendredi', '11:00:00', '15:00:00'),
(10, 'Vendredi', '18:00:00', '23:00:00'),
(11, 'Samedi', '11:00:00', '15:00:00'),
(12, 'Samedi', '18:00:00', '23:00:00');


CREATE TABLE Livraisons (
    idProfessionnel INT UNSIGNED NOT NULL,
    idHoraire INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Livraisons(idProfessionnel, idHoraire) VALUES 
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 9),
(1, 10),
(1, 11),
(2, 1),
(2, 2),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(3, 1),
(3, 2),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
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
(4, 12),
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
(5, 12),
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
(6, 12),
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
(7, 11),
(7, 12),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(8, 9),
(8, 10),
(8, 11),
(8, 12);


CREATE TABLE Ouvertures (
    idProfessionnel INT UNSIGNED NOT NULL,
    idHoraire INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Ouvertures(idProfessionnel, idHoraire) VALUES
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 9),
(1, 10),
(1, 11),
(2, 1),
(2, 2),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(3, 1),
(3, 2),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
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
(4, 12),
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
(5, 12),
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
(6, 12),
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
(7, 11),
(7, 12),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(8, 9),
(8, 10),
(8, 11),
(8, 12);


CREATE TABLE Menus (
    idMenu INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    prix FLOAT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Menus(idMenu, prix) VALUES 
(1, 12),
(2, 25),
(3, 21);


CREATE TABLE Propose (
    idPlat INT UNSIGNED NOT NULL,
    idMenu INT UNSIGNED NOT NULL,
    positionMenu INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO Propose(idPlat, idMenu, positionMenu) VALUES 
(19, 1, 0),
(20, 1, 0),
(7, 2, 0),
(8, 2, 0),
(19, 3, 0),
(21, 3, 0);

CREATE TABLE ItemMenus (
    idItemM INT UNSIGNED NOT NULL,
    idMenu INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO ItemMenus(idItemM, idMenu) VALUES
(1,1),
(2,1);

CREATE TABLE ItemPlats (
    idItemP INT UNSIGNED NOT NULL,
    idPlat INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO ItemPlats(idItemP, idPlat) VALUES
(1,19),
(2,20),
(3,20);

CREATE TABLE ItemExtras (
    idItemE INT UNSIGNED NOT NULL,
    idExtra INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO ItemExtras(idItemE, idExtra) VALUES
(1,1),
(2,4);


CREATE TABLE PlatsCommandes (
    idCommande INT UNSIGNED NOT NULL,
    idItemP INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO PlatsCommandes(idCommande, idItemP) VALUES
(1,2);

CREATE TABLE MenusCommandes (
    idItemM INT UNSIGNED NOT NULL,
    idCommande INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO MenusCommandes(idItemM, idCommande) VALUES
(1,1),
(2,1);


CREATE TABLE PlatsMenus (
    idItemM INT UNSIGNED NOT NULL,
    idItemP INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO PlatsMenus(idItemM, idItemP) VALUES
(1,1),
(2,3);


CREATE TABLE ExtrasPlats (
    idItemP INT UNSIGNED NOT NULL,
    idItemE INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO ExtrasPlats(idItemP, idItemE) VALUES
(1,1),
(1,2);




ALTER TABLE ItemMenus
	ADD CONSTRAINT ItemMenus_pk PRIMARY KEY (idItemM),
    ADD CONSTRAINT ItemMenus_fk_C FOREIGN KEY (idMenu) REFERENCES Menus (idMenu); 
    
    
ALTER TABLE ItemPlats
	ADD CONSTRAINT ItemPlats_pk PRIMARY KEY (idItemP),
    ADD CONSTRAINT ItemPlats_fk_C FOREIGN KEY (idPlat) REFERENCES Plats (idPlat); 
    
    
ALTER TABLE ItemExtras
	ADD CONSTRAINT ItemExtras_pk PRIMARY KEY (idItemE),
    ADD CONSTRAINT ItemExtras_fk_C FOREIGN KEY (idExtra) REFERENCES Extras (idExtra); 


ALTER TABLE MenusCommandes
	ADD CONSTRAINT MenusCommandes_pk PRIMARY KEY (idItemM, idCommande),
    ADD CONSTRAINT MenusCommandes_fk_C FOREIGN KEY (idCommande) REFERENCES Commandes (idCommande),
    ADD CONSTRAINT MenusCommandes_fk_M FOREIGN KEY (idItemM) REFERENCES ItemMenus (idItemM); 
    
    
ALTER TABLE PlatsCommandes
	ADD CONSTRAINT PlatsCommandes_pk PRIMARY KEY (idItemP, idCommande),
    ADD CONSTRAINT PlatsCommandes_fk_I FOREIGN KEY (idItemP) REFERENCES ItemPlats (idItemP),
    ADD CONSTRAINT PlatsCommandes_fk_C FOREIGN KEY (idCommande) REFERENCES Commandes (idCommande); 
    
    
ALTER TABLE PlatsMenus
	ADD CONSTRAINT PlatsMenus_pk PRIMARY KEY (idItemP, idItemM),
    ADD CONSTRAINT PlatsMenus_fk_P FOREIGN KEY (idItemP) REFERENCES ItemPlats (idItemP),
    ADD CONSTRAINT PlatsMenus_fk_M FOREIGN KEY (idItemM) REFERENCES ItemMenus (idItemM); 
    
    
ALTER TABLE ExtrasPlats
	ADD CONSTRAINT ExtrasPlats_pk PRIMARY KEY (idItemP, idItemE),
    ADD CONSTRAINT ExtrasPlats_fk_P FOREIGN KEY (idItemP) REFERENCES ItemPlats (idItemP),
    ADD CONSTRAINT ExtrasPlats_fk_E FOREIGN KEY (idItemE) REFERENCES ItemExtras (idItemE); 


ALTER TABLE Professionnels
    ADD CONSTRAINT Professionnels_fk_E FOREIGN KEY (idCuisine) REFERENCES TypeCuisines (idCuisine),
    ADD CONSTRAINT Professionnels_fk_V FOREIGN KEY (idVille) REFERENCES Villes (idVille);
   
   
ALTER TABLE ImagesRestaurants
    ADD CONSTRAINT ImagesRestaurants_fk_V FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel);
   
   
ALTER TABLE Abonnements
    ADD CONSTRAINT Abonnements_fk_Tr FOREIGN KEY (idTransaction) REFERENCES Transactions (idTransaction),
    ADD CONSTRAINT Abonnements_fk_TY FOREIGN KEY (idTypeAbo) REFERENCES TypeAbonnements (idTypeAbo),
    ADD CONSTRAINT Abonnements_fk_P FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel); 
  
  
ALTER TABLE Livraisons
	ADD CONSTRAINT Livraisons_pk PRIMARY KEY (idProfessionnel, idHoraire),
    ADD CONSTRAINT Livraisons_fk_H FOREIGN KEY (idHoraire) REFERENCES Horaires (idHoraire),
    ADD CONSTRAINT Livraisons_fk_P FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel); 
    
    
ALTER TABLE Ouvertures
	ADD CONSTRAINT Ouvertures_pk PRIMARY KEY (idProfessionnel, idHoraire),
    ADD CONSTRAINT Ouvertures_fk_H FOREIGN KEY (idHoraire) REFERENCES Horaires (idHoraire),
    ADD CONSTRAINT Ouvertures_fk_P FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel); 
    

ALTER TABLE Administrateurs
	ADD CONSTRAINT Administrateurs_pk PRIMARY KEY (idCompte, idProfessionnel),
    ADD CONSTRAINT Administrateurs_fk_C FOREIGN KEY (idCompte) REFERENCES Comptes (idCompte),
    ADD CONSTRAINT Administrateurs_fk_P FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel); 


ALTER TABLE Reviews
    ADD CONSTRAINT Reviews_fk_C FOREIGN KEY (idCompte) REFERENCES Comptes (idCompte),
    ADD CONSTRAINT Reviews_fk_P FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel); 
    
    
ALTER TABLE Plats
    ADD CONSTRAINT Plats_fk_P FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel); 
    
    
ALTER TABLE Categorisent
	ADD CONSTRAINT Categorisent_pk PRIMARY KEY (idPlat, idCategorie),
    ADD CONSTRAINT Categorisent_fk_C FOREIGN KEY (idCategorie) REFERENCES Categories (idCategorie),
    ADD CONSTRAINT Categorisent_fk_P FOREIGN KEY (idPlat) REFERENCES Plats (idPlat); 
    
    
ALTER TABLE PlansPlats
	ADD CONSTRAINT PlansPlats_pk PRIMARY KEY (idPromo, idPlat),
    ADD CONSTRAINT PlansPlats_fk_PL FOREIGN KEY (idPlat) REFERENCES Plats (idPlat),
    ADD CONSTRAINT PlansPlats_fk_PR FOREIGN KEY (idPromo) REFERENCES Promos (idPromo); 
    
   
ALTER TABLE Propose
	ADD CONSTRAINT Propose_pk PRIMARY KEY (idMenu, idPlat),
    ADD CONSTRAINT Propose_fk_P FOREIGN KEY (idPlat) REFERENCES Plats (idPlat),
    ADD CONSTRAINT Propose_fk_M FOREIGN KEY (idMenu) REFERENCES Menus (idMenu); 

    
ALTER TABLE Transactions
    ADD CONSTRAINT Transactions_fk_M FOREIGN KEY (idMode) REFERENCES ModePaiements (idMode),
    ADD CONSTRAINT Transactions_fk_P FOREIGN KEY (idPortefeuille) REFERENCES Portefeuilles (idPortefeuille); 
    
    
ALTER TABLE Portefeuilles
    ADD CONSTRAINT Portefeuilles_fk_C FOREIGN KEY (idCompte) REFERENCES Comptes (idCompte); 
    
    
ALTER TABLE Comptes
    ADD CONSTRAINT Comptes_fk_V FOREIGN KEY (idVille) REFERENCES Villes (idVille);
    
    
ALTER TABLE Parrainages
	ADD CONSTRAINT Parrainages_pk PRIMARY KEY (idParrain, idParraine),
    ADD CONSTRAINT Parrainages_fk_P1 FOREIGN KEY (idParrain) REFERENCES Comptes (idCompte),
    ADD CONSTRAINT Parrainages_fk_P2 FOREIGN KEY (idParraine) REFERENCES Comptes (idCompte);
    
    
ALTER TABLE Consentements
	ADD CONSTRAINT Consentements_pk PRIMARY KEY (idRGPD, idCompte),
    ADD CONSTRAINT Consentements_fk_C FOREIGN KEY (idCompte) REFERENCES Comptes (idCompte),
    ADD CONSTRAINT Consentements_fk_R FOREIGN KEY (idRGPD) REFERENCES RGPD (idRGPD); 
    
    
ALTER TABLE Livreurs
    ADD CONSTRAINT Livreurs_fk_V FOREIGN KEY (idVehicule) REFERENCES Vehicules (idVehicule),
    ADD CONSTRAINT Livreurs_fk_C FOREIGN KEY (idCompte) REFERENCES Comptes (idCompte); 
    
    
ALTER TABLE Commandes
    ADD CONSTRAINT Commandes_fk_T FOREIGN KEY (idTransaction) REFERENCES Transactions (idTransaction),
    ADD CONSTRAINT Commandes_fk_C FOREIGN KEY (idCompte) REFERENCES Comptes (idCompte),
    ADD CONSTRAINT Commandes_fk_L FOREIGN KEY (idLivreur) REFERENCES Livreurs (idLivreur); 
    
    
ALTER TABLE Reductions
	ADD CONSTRAINT Reductions_pk PRIMARY KEY (idRemise, idCommande),
    ADD CONSTRAINT Reductions_fk_C FOREIGN KEY (idCommande) REFERENCES Commandes (idCommande),
    ADD CONSTRAINT Reductions_fk_R FOREIGN KEY (idRemise) REFERENCES Remises (idRemise); 
    
ALTER TABLE Extras
    ADD CONSTRAINT Extras_fk_C FOREIGN KEY (idPlat) REFERENCES Plats (idPlat);


    
COMMIT;
SET AUTOCOMMIT = 1;
