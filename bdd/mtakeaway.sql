SET AUTOCOMMIT = 0;
START TRANSACTION;
-- ---------------------------------------------------------------------------------------
DROP DATABASE
    IF EXISTS mtakeaway;
CREATE DATABASE mtakeaway
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;
USE mtakeaway;

CREATE TABLE Professionnels (
    idProfessionnel INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(200) NOT NULL DEFAULT '',
    proprietaire VARCHAR(200) NOT NULL DEFAULT '',
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
    
CREATE TABLE Plats (
    idPlat INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL DEFAULT '',
    image VARCHAR(50) NOT NULL DEFAULT '',
    description VARCHAR(200) NOT NULL DEFAULT '',
    cout FLOAT UNSIGNED NOT NULL DEFAULT 0,
    extrasize INT UNSIGNED NOT NULL DEFAULT 0,
    idProfessionnel INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

    
    
 CREATE TABLE Promos (
    idPromo INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    debut DATETIME NOT NULL,
    fin DATETIME NOT NULL,
    image VARCHAR(50) NOT NULL DEFAULT '',
    titre VARCHAR(50) NOT NULL DEFAULT '',
    description VARCHAR(300) NOT NULL DEFAULT '',
    repeatDelay INT UNSIGNED NOT NULL DEFAULT 0,
    reduction INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

  
  
 CREATE TABLE PlansPlats (
    idPromo INT UNSIGNED NOT NULL ,
    idPlat INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
  
    
    
 CREATE TABLE Categories (
    idCategorie INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(50) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Categorisent (
    idCategorie INT UNSIGNED NOT NULL,
    idPlat INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

    
    
 CREATE TABLE Extras (
    idExtra INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL DEFAULT '',
    prix FLOAT UNSIGNED NOT NULL DEFAULT 0,
    idPlat INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



CREATE TABLE PlatsCommandes (
	quantite INT UNSIGNED NOT NULL DEFAULT 0,
	extraSize BOOLEAN DEFAULT FALSE,
	extraList VARCHAR(10) NOT NULL DEFAULT '',
    idCommande INT UNSIGNED NOT NULL ,
    idPlat INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE ImagesRestaurants (
    idImage INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(50) NOT NULL DEFAULT '',
    idProfessionnel INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Commandes (
    idCommande INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codeLivraison VARCHAR(20) NOT NULL DEFAULT '',
    etat VARCHAR(100) NOT NULL DEFAULT '',
    instructions VARCHAR(300) NOT NULL DEFAULT '',
    fraisLivraison INT NOT NULL DEFAULT 0,
    heureLivraison DATETIME,
    idLivreur INT UNSIGNED NOT NULL DEFAULT 0,
    idCompte INT UNSIGNED NOT NULL,
    idTransaction INT UNSIGNED NOT NULL DEFAULT 0 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



CREATE TABLE Reductions (
    idCommande INT UNSIGNED NOT NULL ,
    idRemise INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Remises (
    idRemise INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(20) NOT NULL DEFAULT '',
    reduction INT NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Livreurs (
    idLivreur INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    SIRET VARCHAR(20) NOT NULL DEFAULT '',
    extraitCasier VARCHAR(50) NOT NULL DEFAULT '',
    ID VARCHAR(50) NOT NULL DEFAULT '',
    licenceTransport VARCHAR(50) NOT NULL DEFAULT '',
    permi VARCHAR(50) NOT NULL DEFAULT '',
    idVehicule INT UNSIGNED NOT NULL DEFAULT 0,
    idCompte INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Comptes (
    idCompte INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL DEFAULT '',
    prenom VARCHAR(100) NOT NULL DEFAULT '',
    image VARCHAR(50) NOT NULL DEFAULT '',
    mail VARCHAR(50) NOT NULL DEFAULT '',
    mdp VARCHAR(250) NOT NULL DEFAULT '',
    adresse VARCHAR(150) NOT NULL DEFAULT '',
    telephone INT NOT NULL DEFAULT 1,
    conditionUtilisation BOOLEAN DEFAULT FALSE,
    idVille INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Administrateurs (
    idProfessionnel INT UNSIGNED NOT NULL,
    idCompte INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Parrainages (
    idParrain INT UNSIGNED NOT NULL ,
    idParraine INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE RGPD (
    idRGPD INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(200) NOT NULL DEFAULT '', 
    description VARCHAR(300) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Consentements (
    idCompte INT UNSIGNED NOT NULL ,
    idRGPD INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Portefeuilles (
    idPortefeuille INT UNSIGNED NOT NULL  PRIMARY KEY,
    solde INT UNSIGNED NOT NULL DEFAULT 0,
    idCompte INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE ModePaiements (
    idMode INT UNSIGNED NOT NULL  PRIMARY KEY,
    libelle VARCHAR(200) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Transactions (
    idTransaction INT UNSIGNED NOT NULL  PRIMARY KEY,
    code INT UNSIGNED NOT NULL,
    montant FLOAT UNSIGNED NOT NULL,
    dateTransaction DATE NOT NULL,
    idMode INT UNSIGNED NOT NULL,
    idPortefeuille INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Abonnements (
    idAbonnement INT UNSIGNED NOT NULL  PRIMARY KEY,
    debut DATE NOT NULL,
    fin DATE ,
    extraVisibilite BOOLEAN NOT NULL DEFAULT FALSE,
    idTransaction INT UNSIGNED NOT NULL,
    idProfessionnel INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Reviews (
    idReview INT UNSIGNED NOT NULL  PRIMARY KEY,
    dateReview DATE NOT NULL,
    libelle TEXT DEFAULT '',
    cuisine INT NOT NULL DEFAULT 0,
    prix  INT NOT NULL DEFAULT 0,
    service INT NOT NULL DEFAULT 0,
    idCompte INT UNSIGNED NOT NULL DEFAULT 0,
    idProfessionnel INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE TypeCuisines (
    idCuisine INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Vehicules (
    idVehicule INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(100) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


 CREATE TABLE Villes (
    idVille INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL DEFAULT '',
    codePostal INT NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


 CREATE TABLE Ouvertures (
    idProfessionnel INT UNSIGNED NOT NULL ,
    idHoraire INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Livraisons (
    idProfessionnel INT UNSIGNED NOT NULL ,
    idHoraire INT UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Horaires (
    idHoraire INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    jours VARCHAR(20) NOT NULL DEFAULT '',
    debut TIME NOT NULL,
    fin TIME NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE Menus (
    idMenu INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    prix FLOAT UNSIGNED NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE PlatsMenus (
    idPlat INT UNSIGNED NOT NULL ,
    idMenu INT UNSIGNED NOT NULL ,
    optionMenu INT UNSIGNED NOT NULL,
    positionMenu INT UNSIGNED NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



 CREATE TABLE MenusCommandes (
    idMenu INT UNSIGNED NOT NULL ,
    idCommande INT UNSIGNED NOT NULL ,
    optionList VARCHAR(20) NOT NULL,
    extraList VARCHAR(200) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

    
    

ALTER TABLE Professionnels
    ADD CONSTRAINT Professionnels_fk_E FOREIGN KEY (idCuisine) REFERENCES TypeCuisines (idCuisine),
    ADD CONSTRAINT Professionnels_fk_V FOREIGN KEY (idVille) REFERENCES Villes (idVille);
   
   
ALTER TABLE ImagesRestaurants
    ADD CONSTRAINT ImagesRestaurants_fk_V FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel);

   
   
ALTER TABLE Abonnements
    ADD CONSTRAINT Abonnements_fk_E FOREIGN KEY (idTransaction) REFERENCES Transactions (idTransaction),
    ADD CONSTRAINT Abonnements_fk_V FOREIGN KEY (idProfessionnel) REFERENCES Professionnels (idProfessionnel); 
  
  
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
    
   
ALTER TABLE PlatsMenus
	ADD CONSTRAINT PlatsMenus_pk PRIMARY KEY (idMenu, idPlat),
    ADD CONSTRAINT PlatsMenus_fk_P FOREIGN KEY (idPlat) REFERENCES Plats (idPlat),
    ADD CONSTRAINT PlatsMenus_fk_M FOREIGN KEY (idMenu) REFERENCES Menus (idMenu); 
    
    
ALTER TABLE MenusCommandes
	ADD CONSTRAINT MenusCommandes_pk PRIMARY KEY (idMenu, idCommande),
    ADD CONSTRAINT MenusCommandes_fk_C FOREIGN KEY (idCommande) REFERENCES Commandes (idCommande),
    ADD CONSTRAINT MenusCommandes_fk_M FOREIGN KEY (idMenu) REFERENCES Menus (idMenu); 
    
    
ALTER TABLE PlatsCommandes
	ADD CONSTRAINT PlatsCommandes_pk PRIMARY KEY (idPlat, idCommande),
    ADD CONSTRAINT PlatsCommandes_fk_P FOREIGN KEY (idPlat) REFERENCES Plats (idPlat),
    ADD CONSTRAINT PlatsCommandes_fk_C FOREIGN KEY (idCommande) REFERENCES Commandes (idCommande); 
    
    
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





