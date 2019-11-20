package com.qa.selenium1;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SelEx1 {

	WebDriver driver;

	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\zakme\\OneDrive\\Documents\\QA041119\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();

	}


	//@Ignore
	@Test
	public void testAddItem() throws InterruptedException {
		System.out.println("test 001");
		driver.get("file:///C:/Users/zakme/OneDrive/Documents/individual_project/dnd-shop-interface/welcome.html");
		WebElement toItems = driver.findElement(By.xpath("/html/body/nav/div/ul/li[2]/a"));
		toItems.click();
		Thread.sleep(2000);
		WebElement toCreateItem = driver.findElement(By.xpath("/html/body/div[2]/button[2]"));
		toCreateItem.click();
		Thread.sleep(2000);
		WebElement itemName = driver.findElement(By.xpath("/html/body/form/div[1]/div[1]/input"));
		itemName.sendKeys("scythe");
		WebElement itemType = driver.findElement(By.xpath("/html/body/form/div[1]/div[2]/input"));
		itemType.sendKeys("weapon");
		WebElement itemCost = driver.findElement(By.xpath("/html/body/form/div[1]/div[3]/input"));
		itemCost.sendKeys("40");
		WebElement itemDesc = driver.findElement(By.xpath("/html/body/form/div[2]/div/input"));
		itemDesc.sendKeys("New scythe");
		Thread.sleep(2000);
		WebElement submitItem = driver.findElement(By.xpath("/html/body/button"));
		submitItem.click();
		Thread.sleep(2000);
		WebElement searchItem = driver.findElement(By.xpath("/html/body/nav/div/div/input"));
		searchItem.sendKeys("scythe");
		WebElement submitItemSearch = driver.findElement(By.xpath("/html/body/nav/div/div/button"));
		submitItemSearch.click();
		Thread.sleep(2000);
		WebElement success = driver.findElement(By.xpath("/html/body/div[1]/div/div/div/h1/u"));
		assertEquals("Unsuccessful", true, success.getText().equals("SCYTHE"));
	}

	//@Ignore
	@Test
	public void testUpdateItem() throws InterruptedException {
		System.out.println("test 002");
		driver.get("file:///C:/Users/zakme/OneDrive/Documents/individual_project/dnd-shop-interface/welcome.html");
		WebElement toItems = driver.findElement(By.xpath("/html/body/nav/div/ul/li[2]/a"));
		toItems.click();
		Thread.sleep(2000);
		WebElement toUpdateItem = driver.findElement(By.xpath("/html/body/div[2]/button[1]"));
		toUpdateItem.click();
		Thread.sleep(2000);
		WebElement itemToUpdate = driver.findElement(By.xpath("/html/body/form/div[1]/div[2]/input"));
		itemToUpdate.sendKeys("scythe");
		WebElement itemUpName = driver.findElement(By.xpath("/html/body/form/div[2]/div[1]/input"));
		itemUpName.sendKeys("scythe");
		WebElement itemUpType = driver.findElement(By.xpath("/html/body/form/div[2]/div[2]/input"));
		itemUpType.sendKeys("weapon");

		WebElement itemUpCost = driver.findElement(By.xpath("/html/body/form/div[2]/div[3]/input"));
		itemUpCost.sendKeys("27");
		WebElement itemUpDesc = driver.findElement(By.xpath("/html/body/form/div[3]/div/input"));
		itemUpDesc.sendKeys("Updated scythe");
		Thread.sleep(2000);
		WebElement submitUpItem = driver.findElement(By.xpath("/html/body/button"));
		submitUpItem.click();
		Thread.sleep(2000);

		WebElement searchUpItem = driver.findElement(By.xpath("/html/body/nav/div/div/input"));
		searchUpItem.sendKeys("scythe");
		WebElement submitItemSearch = driver.findElement(By.xpath("/html/body/nav/div/div/button"));
		submitItemSearch.click();
		Thread.sleep(2000);
		WebElement upSuccess = driver.findElement(By.xpath("/html/body/div[1]/div/div/div/p"));
		assertEquals("Unsuccessful", true, upSuccess.getText().contains("Cost: 27"));

	}

	@After
	public void teardown() {
		driver.close();
	}

}
