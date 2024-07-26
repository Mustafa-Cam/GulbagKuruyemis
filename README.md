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
![Ekran Görüntüsü (70)](https://github.com/user-attachments/assets/889859cd-6657-49d6-b762-afd0b1643f66)
![Ekran görüntüsü 2024-07-26 163831](https://github.com/user-attachments/assets/ea0308cd-480b-481d-99c0-da055d343d93)
![Ekran görüntüsü 2024-07-26 163944](https://github.com/user-attachments/assets/7c3ada45-63ea-459e-ae1e-51295756c11f)
![Ekran görüntüsü 2024-07-26 165914](https://github.com/user-attachments/assets/366e799d-69df-430c-bdd0-6c7743073b2a)

## Kayıt olalım.
![Ekran görüntüsü 2024-07-26 172121](https://github.com/user-attachments/assets/50d99591-b7ff-4100-bf48-5358d713bf39)
![Ekran Görüntüsü (71)](https://github.com/user-attachments/assets/c85fdf2b-305d-40e1-8e4c-eef7da8fbd79)

## Giriş Yapalım (Giriş yapmadan satın alınamaz. Login Sayfasına yönlendirilir.)
![Ekran görüntüsü 2024-07-26 172931](https://github.com/user-attachments/assets/2437b9a8-5a11-4984-bd6c-2fa89c8cb7ba)
Eğer Admin ise kullanıcı Türünü admin seçmeliyiz biliyorum bu şekilde olmaması lazım. Ama passport ile kimlik doğrulama da yapabileceğimi öğrendim bunu denemek istedim çünkü jwt ile yapmıştım. Bu şekilde yapmaktansa eğer giriş yapan kullanıcı admin ise admin sayfasına gidecek. Ama şuanlık passport ile auth işlemi yapıyorum. Zaten Admin olarak veritabanından işaretlenmeyen kullanıcı Admin'i seçse bile giremez.

## Giriş yaptıktan sonra Ana sayfa 
![Ekran görüntüsü 2024-07-26 173612](https://github.com/user-attachments/assets/19dbdabf-e9b6-47a2-b6d3-674e34d92024)


## Profile
![Ekran görüntüsü 2024-07-26 173744](https://github.com/user-attachments/assets/96774371-2e19-45e5-a04c-1700e53be672)
Burda gerekli güncellemeleri yapabiliriz.
![image](https://github.com/user-attachments/assets/56cb32fb-57f7-448d-ae58-8cd392aee92a)
![image](https://github.com/user-attachments/assets/6f605f0c-8d66-47c1-99c6-34a4d40f6529)
![image](https://github.com/user-attachments/assets/d90ef22d-d42f-4cfc-be0d-79369aa760f7)
![image](https://github.com/user-attachments/assets/91987ba1-4e7a-4811-9bdd-945f442edb38)


## Ürünler
![Ekran görüntüsü 2024-07-26 173849](https://github.com/user-attachments/assets/61d2efe2-0ad6-4193-9a9c-23d00e8f85fe)
![Ekran görüntüsü 2024-07-26 173922](https://github.com/user-attachments/assets/5f0b504f-0bb7-4e57-8c65-e1d745348a75)


## Satın Alma işlemi Yapalım.(Fiyatlar 2023 içindir.)
![Ekran görüntüsü 2024-07-26 174053](https://github.com/user-attachments/assets/ade5512a-d1ee-4c66-9652-93fa7fec6384)
Burda hem fiyatı girebilir hem de gramajı girebiliriz. 2 şekilde de hesaplama yapacaktır.

### 50 TL'den düşük sipariş verilmez.
![Ekran görüntüsü 2024-07-26 174053](https://github.com/user-attachments/assets/3f317df8-1f3e-4855-9013-9e811a813ac1)

## Sepet
![Ekran görüntüsü 2024-07-26 174744](https://github.com/user-attachments/assets/3223b864-9cd0-4503-84a7-6978dd168af7)


## Biraz da Fındık alalım.
![Ekran görüntüsü 2024-07-26 174922](https://github.com/user-attachments/assets/f025993d-553a-489f-8600-9f18f56f1b7a)

## Yeni Sepet
![Ekran görüntüsü 2024-07-26 175024](https://github.com/user-attachments/assets/4fc569c6-7f0e-4291-8413-2b45bc93f3ea)


## Sepetten silme
![Ekran görüntüsü 2024-07-26 175253](https://github.com/user-attachments/assets/617e69c0-494c-452f-842b-47607b111f94)
![Ekran görüntüsü 2024-07-26 175423](https://github.com/user-attachments/assets/dcc2c840-7d93-40cd-a723-0b6c0acaa0ef)

## Admin AnaSayfa
![image](https://github.com/user-attachments/assets/01233dbb-5f40-4ee8-9ada-1e89ac36a5cd)

## Ürünleri Yönet Sayfası
![image](https://github.com/user-attachments/assets/ce57f0e1-fe1c-4d0f-a145-183631c6b8c0)

Pirince indirim yapalım
![image](https://github.com/user-attachments/assets/c507ae0c-0567-468e-891a-11bd72f7b23d)
![image](https://github.com/user-attachments/assets/73c47fa8-8cd4-4ec7-834f-20083ab574ab)

Kırmızı Mercimeğe zam yapalım.
![image](https://github.com/user-attachments/assets/201bc339-0873-4b1d-8213-37dffab0c0ff)
![image](https://github.com/user-attachments/assets/62ba7cc4-32db-49da-b10f-5ffee1f507ec)
![image](https://github.com/user-attachments/assets/4c5f0d25-3a1d-4499-b343-e4c4454d735e)
![image](https://github.com/user-attachments/assets/eaa20ba0-476a-4ab6-8463-579717dd082d)


## User Güncelleme
![image](https://github.com/user-attachments/assets/c529ce39-4eed-417a-ad55-c3e09f7c62f1)
![image](https://github.com/user-attachments/assets/c2c3cf09-86f4-485b-b777-11cc665f33d3)
![image](https://github.com/user-attachments/assets/e804bed7-8f91-4956-8c1f-620f3bc870e7)
Burda admin de var görüldüğü gibi admin ilk olarak user kaydediliyor(o sebeple şuan user tablosundan silmediğimiz içiin gözüküyor.) Sonrasında veritabanına erişimi olan kişi burda bu user'ın rolünü admin yapıyor. sonrasında bunu admin tablosuna taşıyor. Admin belirleme database de yapılıyor yani. 


# Not:  !! Silme işlemini yapmıyoruz aktif pasif yapıyoruz. 



Projem Bu şekildeydi. Bütün controller kodunu App.js de yapmışım hiç etik değil clean code ve solid kızdı. Bu hatamı düzelteceğim. Kendimi Node.js ve Javascript'de geliştirmek için bu projeyi gerçekleştirmiştim. Kendi uğraşım ile yaptığım ilk projeydi Readme.md dosyasını 26.07.2024 tarihinde yazdım. Ama uygulamayı 2023 de oluşturmuştum. (Nest.js ile CMS projesi için gerçek bir backend uygulamasını monolit olarak gerçekleştirdim.(https://github.com/Mustafa-Cam/Nest.js-CMS-Api))).  Bu projeyi daha ilerletmeyi düşünmüyorum. Çünkü artık projelerimde mikroservis mimarisi ile devam edeceğim. İyi çalışmalar dilerim. Herkese Mutlu hayatlar. Heroku artık ücretli Render.com'da da mysql için bir configirasyon gerekiyordu. clever-cloud.com  ile Bu işlemi de gerçekleştirdim. Burda da passport için gerekli modül(import edilen kütüphane)'de hata aldım. Deploy etti ama login kısmında hata verdi(local'de sorun yok). Ama dediğim şekilde mysql de size yüklü ise env dosyasını oluşturup rahatlıkla uygulamayı çalıştırabilirsiniz. MongoDb'nin atlas'ını kullansaydım rahatlıkla deploy edecektim.
