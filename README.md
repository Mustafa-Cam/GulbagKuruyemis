Gülbağ Kuruyemiş'e Hoşgeldiniz.
Projede Express.js ve frontend kısmı için template engine olarak ejs kullanıldı. Kendimi backend'de geliştirmek istediğim için gerçek bir frontend teknoloji kullanmadım. (ilk projem de baya eksikler var :D)

## ilk olarak .env dosyası oluşturup aşşağdaki bilgileri doldurmalısınız.

SESSION_SECRET=
DATABASE_SIFRE=
ADMIN_PASSWORD=

## Ardından terminale --- npm install --- yazarak  gerekli paketleri yükleyiniz.

## Ardından aşşağdaki gibi projenin dizinine gelip nodemon app.js yazınız.
![Ekran görüntüsü 2024-07-26 150440](https://github.com/user-attachments/assets/9a35c555-bfa4-4113-850f-f69cbe076223)

## http://localhost:3000/  adresine gelelim.
![Ekran Görüntüsü (70)](https://github.com/user-attachments/assets/bc3f262d-9711-4138-a62f-70db18f7e97a)
![image](https://github.com/user-attachments/assets/a9845974-fba9-453e-be44-3c724febb430)
![image](https://github.com/user-attachments/assets/2d467158-39b4-47cb-82a3-1a5bde5560b5)
![image](https://github.com/user-attachments/assets/12c20789-5012-4f2c-ae9d-dedf4b0befb1)


## Kayıt olalım.
![image](https://github.com/user-attachments/assets/cc1819e4-d32b-4296-9d5d-2c6f81a1cd07)
![Ekran Görüntüsü (71)](https://github.com/user-attachments/assets/d1fdc207-9806-49d6-85d7-53dfc1949bbd)

## Giriş Yapalım (Giriş yapmadan satın alınamaz. Login Sayfasına yönlendirilir.)
![image](https://github.com/user-attachments/assets/8d93050e-dcc4-4790-8676-a3bd3243c58b)
Eğer Admin ise kullanıcı Türünü admin seçmeliyiz biliyorum bu şekilde olmaması lazım. Ama passport ile kimlik doğrulama da yapabileceğimi öğrendim bunu denemek istedim çünkü jwt ile yapmıştım. Bu şekilde yapmaktansa eğer giriş yapan kullanıcı admin ise admin sayfasına gidecek. Ama şuanlık passport ile auth işlemi yapıyorum. Zaten Admin olarak veritabanından işaretlenmeyen kullanıcı Admin'i seçse bile giremez.

## Giriş yaptıktan sonra Ana sayfa 
![image](https://github.com/user-attachments/assets/502a525c-571e-4c5c-8757-4ea365b4f7aa)


## Profile
![image](https://github.com/user-attachments/assets/12301431-dab7-4b3b-9d6b-464698ed8f1d)
Burda gerekli güncellemeleri yapabiliriz.

## Ürünler
![image](https://github.com/user-attachments/assets/8fb8bfd3-85d6-4899-814e-7c0c1bb365ba)
![image](https://github.com/user-attachments/assets/6bbc1732-051e-45ac-8f0c-046a909fde44)


## Satın Alma işlemi Yapalım.(Fiyatlar 2023 içindir.)
![image](https://github.com/user-attachments/assets/1317459f-eae4-4ea2-b869-200f19eb2306)
Burda hem fiyatı girebilir hem de gramajı girebiliriz. 2 şekilde de hesaplama yapacaktır.

### 50 TL'den düşük sipariş verilmez.
![image](https://github.com/user-attachments/assets/e144c3f6-2d7c-42fc-8b75-5f63195ad998)

## Sepet
![image](https://github.com/user-attachments/assets/8fb7fd94-0ffc-4a72-8462-15410d71a1aa)


## Biraz da Fındık alalım.
![image](https://github.com/user-attachments/assets/0e6351db-f08d-484c-be99-fc7d4add4a9f)

## Yeni Sepet
![image](https://github.com/user-attachments/assets/f70e2f19-46da-46f6-816e-d50788db15cb)


## Sepetten silme
![image](https://github.com/user-attachments/assets/f7a1f262-05a0-4a28-a4a2-2174aa847718)
![image](https://github.com/user-attachments/assets/815262bf-20fa-430e-9013-ac2e9427fe94)


Projem Bu şekildeydi. Kendi uğraşım ile yaptığım ilk projeydi Readme.md dosyasını 26.07.2024 tarihinde yazdım. Ama uygulamayı 2023 de oluşturmuştum. Controller yok (çünkü frontend tarafı yok(Nest.js ile CMS projesi için gerçek bir backend uygulamasını monolit olarak gerçekleştirdim.(https://github.com/Mustafa-Cam/Nest.js-CMS-Api))).  Bu projeyi daha ilerletmeyi düşünmüyorum. Çünkü artık projelerimde mikroservis mimarisi ile devam edeceğim. İyi çalışmalar dilerim. Herkese Mutlu hayatlar.
"# GulbagKuruyemis" 
