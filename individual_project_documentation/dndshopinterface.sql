-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: dndshopinterface
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `inventory_items`
--

DROP TABLE IF EXISTS `inventory_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `inventory_items_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory_items`
--

LOCK TABLES `inventory_items` WRITE;
/*!40000 ALTER TABLE `inventory_items` DISABLE KEYS */;
INSERT INTO `inventory_items` VALUES (45,2,1),(48,2,10),(49,2,11),(50,1,7);
/*!40000 ALTER TABLE `inventory_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` enum('weapon','adventure gear','tools') NOT NULL,
  `cost` double NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'dagger','weapon',2,'A rusty old dagger used to inflict 1d4 piercing damage to an opponent. Can also be thrown up to a range of 20 feet, or 60 feet with disadvantage.'),(2,'shortsword','weapon',10,'A short martial melee weapon used to inflict 1d6 piercing damage to an opponent.'),(3,'quarterstaff','weapon',0.2,'A versatile staff widely used amongst wizards and druids, able to deal 1d6 bludgeoning damage whilst wielded in one hand or 1d8 damage wielded in two.'),(4,'javelin','weapon',0.5,'A javelin with a throwing range of 30 feet, or 120 feet with imposed disadvantage. On a hit, a javelin deals 1d6 piercing damage.'),(5,'longbow','weapon',50,'A long ranged, two handed bow with a range of 150 feet (600 feet with imposed disadvantage). This weapon requires arrows as ammunition and deals 1d8 piercing damage on a hit.'),(6,'greataxe','weapon',30,'A giant axe that requires two hands to wield. It is able to deal 1d12 slashing damage to an opponent.'),(7,'arrow quiver','adventure gear',1,'Ammunition to be used by the longbow. A quiver contains 20 arrows.'),(8,'acid vial','adventure gear',25,'A 1lb vial of acid. Can be splashed onto a creature within 5 feet or thrown up to 20 feet, dealing 2d6 acid damage on a successful hit.'),(9,'antitoxin vial','adventure gear',50,'A creature that drinks this vial of antitoxin gains advantage on saving throws against poison for an hour.'),(10,'component pouch','adventure gear',25,'A small, watertight leather belt pouch with compartments to hold material components used in casting spells.'),(11,'healer\'s kit','adventure gear',5,'A leather pouch containing bandages, salves and splints. The kit has ten uses, and a single use can be expended to stabilise a creature with 0 hit points.'),(12,'holy water','adventure gear',25,'A flask containing a pint of holy water. The contents can be splashed or thrown onto a creature, dealing 2d6 radiant damage to fiends or undead.'),(13,'mess kit','adventure gear',0.2,'A tin box containing a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.'),(14,'healing potion','adventure gear',50,'A magical red fluid that rejuvenates 2d4 + 2 hit points upon consumption.'),(15,'torch','adventure gear',0.01,'A torch burns for 1 hour and provides bright light in a 20-foot radius and dim light for an additional 20 feet. Can be used as a melee weapon, dealing 1 fire damage.'),(16,'disguise kit','tools',25,'A pouch containing cosmetics, hair dye and small props. This kit allows a user to create disguises to change their appearance.'),(17,'forgery kit','tools',15,'This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents.'),(18,'herbalism kit','tools',5,'This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit allows for the creation of antitoxin and healing potions.'),(19,'navigator\'s tools','tools',25,'This set of instruments is used for navigation at sea. Proficiency with these tools allow an adventurer to chart a ship\'s course and follow navigation charts.'),(20,'thieves\' tools','tools',25,'This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools allow an adventurer to disarm traps and open locks.'),(90,'greatsword','weapon',256787,'eeeeeeee'),(91,'scimitar','weapon',256787,'this is an update scimitar');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_items`
--

DROP TABLE IF EXISTS `shop_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `shop_items_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_items`
--

LOCK TABLES `shop_items` WRITE;
/*!40000 ALTER TABLE `shop_items` DISABLE KEYS */;
INSERT INTO `shop_items` VALUES (2,3,1),(3,4,2),(4,2,3),(5,7,4),(6,3,5),(7,15,6),(8,9,7),(9,4,8),(10,7,9),(11,2,10),(12,3,11),(13,4,12),(14,6,13),(15,2,14),(16,6,15),(17,7,16),(18,2,18),(19,4,19),(20,5,20),(21,5,17);
/*!40000 ALTER TABLE `shop_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-19 16:52:22
