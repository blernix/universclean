const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");


async function getGoogleReviews() {
  const browser = await puppeteer.launch({ headless: false }); // Laisse false pour voir ce qu'il fait
  const page = await browser.newPage();

  const googleMapsURL = "https://www.google.fr/maps/place/Univers+Clean+77+-+Nettoyage+Voiture+-+Canap%C3%A9+-+Terrasse/@48.4222362,2.7695104,17z/data=!4m8!3m7!1s0x47ef61847db368cb:0x1522ec84ea783c3!8m2!3d48.4222362!4d2.7720853!9m1!1b1!16s%2Fg%2F11hjdkz55z?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D";

  await page.goto(googleMapsURL, { waitUntil: "networkidle2" });
  console.log("✅ Page Google Maps chargée.");

  // 📌 **1. Vérifier si on est sur la page de consentement**
  if (page.url().includes("consent.google")) {
    console.log("🔍 Page de consentement détectée, tentative de clic...");

    try {
      await page.evaluate(() => {
        // Sélection des boutons "Tout accepter" et "Tout refuser"
        const buttons = [...document.querySelectorAll("button")];
        const acceptButton = buttons.find((btn) => btn.innerText.includes("Tout accepter"));
        const rejectButton = buttons.find((btn) => btn.innerText.includes("Tout refuser"));

        if (acceptButton) {
          acceptButton.click();
        } else if (rejectButton) {
          rejectButton.click();
        }
      });

      console.log("✅ Consentement accepté/refusé.");

      // 📌 **Attendre la redirection vers Google Maps**
      await page.waitForNavigation({ waitUntil: "networkidle2" });
      console.log("✅ Redirection réussie !");
    } catch (error) {
      console.log(`❌ Erreur lors du clic sur la page de consentement : ${error}`);
      await browser.close();
      return;
    }
  }

  // 📌 **2. Attendre que la section des avis apparaisse**
  try {
    await page.waitForSelector(".jftiEf", { timeout: 10000 });
    console.log("✅ Avis détectés sur la page !");
  } catch (error) {
    console.log("❌ Impossible de détecter les avis sur la page.");
    await browser.close();
    return;
  }

  // 📌 **3. Scroller pour charger plus d'avis**
  let previousHeight;
  for (let i = 0; i < 5; i++) {
    previousHeight = await page.evaluate(() => document.querySelector(".m6QErb").scrollHeight);
    await page.evaluate(() => document.querySelector(".m6QErb").scrollBy(0, 1000));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let newHeight = await page.evaluate(() => document.querySelector(".m6QErb").scrollHeight);
    if (newHeight === previousHeight) break;
  }

  // 📌 **4. Récupérer les avis**
  const reviews = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".jftiEf")).map((review) => ({
      author: review.querySelector(".d4r55")?.innerText || "Anonyme",
      rating: review.querySelector(".kvMYJc")?.ariaLabel || "Pas de note",
      text: review.querySelector(".wiI7pd")?.innerText || "Pas de commentaire",
      date: review.querySelector(".rsqaWe")?.innerText || "Date inconnue",
    }));
  });

  console.log("✅ Avis récupérés :", reviews);

  // 📌 **5. Sauvegarder les avis dans un fichier JSON**
  fs.writeFileSync("../public/avis.json", JSON.stringify(reviews, null, 2));
  console.log("✅ Avis enregistrés dans avis.json");

  await browser.close();
}

getGoogleReviews();