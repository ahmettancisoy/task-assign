// To-Do Planning, Açıklama :
// 2 ayrı provider'dan gelecek to-do iş bilgilerini çekerek development ekibine haftalık olarak paylaştıracak ve ekrana çıktısını verecek bir web uygulama geliştirme.
// Her provider servisinde task ismi, süre (saat olarak), zorluk derecesi vermektedir. Toplam 5 developer var ve her developer’ın 1 saatte yapabildiği iş büyüklüğü aşağıda verildiği gibidir:
// Developer Süre Zorluk
// DEV1 1h
// DEV2 1h
// DEV3 1h
// DEV4 1h
// DEV5 1h
// 1x 2x 3x 4x 5x
//                Developer’ların haftalık 45 saat çalıştığı varsayılarak, en kısa sürede işlerin bitmesini sağlayan bir algoritma ile haftalık developer bazında iş yapma programını ve işin minimum toplam kaç haftada biteceğini ekrana basacak bir ara yüz hazırlanmalı.
// Koşullar :
// · Programlama dili olarak PHP ve Framework olarak Symfony 4 tercih edilmeli. (Yetkin olduğun farklı bir framework tercih edebilirsin.)
// · 2 ayrı to-do iş listesi veren API'lerden (aşağıda mock server yanıtlarını bulabilirsin.) iş listesi çekilecek.

// Burada iş listesini veren servisler Design Pattern ile geliştirilmeli ki daha sonra 3. bir iş listesi veren API'nin eklenmesi gerekirse (Provider 3) bu sadece API tanıtımı ile yapılabilsin.
// · Bu verileri API’lerden çekmek için command (console) yazılacak ve veri tabanına kaydedecek. Ana sayfada veri tabanından okuduğu verilerle planlama sonucunu çıkartıp verileri gösterecek. İhtiyaç halinde ön yüzde Bootstrap ve Jquery vb. kullanılabilir.
// · Backend servisinde Facade, Factory, Proxy, Strategy veya Adapter vb. gibi patternleri ile geliştirme yapılması tercih edilir.

// http://www.mocky.io/v2/5d47f24c330000623fa3ebfa
// http://www.mocky.io/v2/5d47f235330000623fa3ebf7

const ejs = require("ejs");
const express = require("express");
const connectDB = require("./config/dbConn");
const Dev = require("./models/Developer");
const dbSeedCheck = require("./database/dbSeedCheck");
const taskRoutes = require("./routes/taskRoutes");
const rootRoutes = require("./routes/root");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", rootRoutes);
app.use("/add-provider", taskRoutes);

connectDB();

dbSeedCheck();

app.listen(3000, () => {
  console.log("Server started listening on port 3000");
});
