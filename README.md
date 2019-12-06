# HEALTH DIARY
TKAI 2019/2020  
Fannyah Dita Cahya  
Nadhifah Hanan  
Sheila Rezkia  

Health diary merupakan aplikasi yang dapat melakukan tracking kesehatan berupa informasi berat badan, jenis makanan, dan jumlah konsumsi air mineral. Aplikasi ini dikembangkan dengan membuat empat buah microservices yaitu  weight tracker service, food tracker service, water intake service, dan client service. Framework yang digunakan untuk membangun service weight tracker, food tracker, dan water intake adalah Spring Boot. Pada ketiga service tersebut dapat dilakukan create dan view all. Untuk client service, kami membuat tampilan front-end dengan React. Diharapkan dari client service tersebut, pengguna dapat melakukan input berat badan, konsumsi makanan, dan konsumsi air mineral. Pada client service juga ditampilkan rangkuman/statistik mengenai keseluruhan data yang telah di-input pengguna.

## Tahapan Setup PostgreSQL
<b>1. Membuat Persistent Volumes dan Persistent Volume Claim</b>/
- Persistent Volumes adalah resource yang dapat digunakan untuk melakukan penyimpanan data. Untuk Membuat volume dengan menjalankan perintah : ```kubectl apply -f postgres/volume.yaml```. Untuk mendapatkan detail volume yang telah dibuat dapat menjalankan : ```kubectl get pv```
- Persistent Volume Claim adalah request yang memungkinkan  pengguna untuk menggunakan resource penyimpanan pada cluster. Untuk membuat volume claim dapat dengan menjalankan perintah : ``kubectl apply -f postgres/volume_claim.yaml``. Untuk melihat persistant volume claim yang telah dibuat, dapat dengan menjalankan perintah : ``kubectl get pvc``

<b>2. Membuat Postgres Credentials </b>  
Untuk menyimpan data-data terkait rahasia seperti username dan password menggunakan perintah :  ``echo -n "<string>" | base64`` untuk membuat encoded string dari username dan password yang diinginkan. Kemudian menambahkan berkas rahasia tersebut ke Kubernetes cluster dengan perintah : ``kubectl apply -f postgres/secret.yaml``.  
  
<b>3. Postgres Deployment </b>  
Untuk melakukan deployment postgres dapat dengan menjalankan perintah ``kubectl apply -f postgres/deployment.yaml``. Hasil dapat dilihat di dashboard minikube.  

<b>4. Postgres Service</b>  
Untuk menambahkan Postgres service ke Kubernetes cluster agar dapat diakses oleh services yang akan ditambahkan ke dalam cluster dapat menjalankan : ``kubectl apply -f postgres/postgres-service.yaml``

## Pembuatan service backend
1. Untuk service yang menggunakan Springboot perlu melakukan build berkas jar.
2. Membuat Dockerfile untuk masing-masing service.
3. Menjalankan Minikube pada terminal dengan perintah minikube start.
4. Membuat deployment script untuk setiap service agar dapat dijalankan pada Kubernetes lokal. 
5. Apabila deployment script yang sesuai telah dibuat, kemudian lakukan build Docker image setiap service pada local docker repository.
6. Melakukan deployment setiap service dengan menjalankan ``kubectl apply -f [nama service]-deployment.yaml`` sesuai dengan service (weight/water/food) yang akan di-deploy.
