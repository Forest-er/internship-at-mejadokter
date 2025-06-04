# Daily Learning Log - [17/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

### HTML Table Element
- Salah satu HTML Element yang kompleks selain Form adalah Table
- HTML Table Element juga memiliki banyak sekali property, method dan event yang khusus
- [HTML Table Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)

### Apa itu Synchronous?
- Program dalam JavaScript secara default akan dieksekusi baris per baris
- Secara default, proses di JavaScript akan dieksekusi secara Synchronous, artinya baris selanjutnya akan dieksekusi setelah baris sebelumnya selesai dikerjakan
- Proses Synchronous juga biasa disebut Blocking, karena harus menunggu tiap proses selesai, baru proses selanjutnya bisa dilakukan

### Apa itu Callback?
  Callback, merupakan mekanisme untuk memanggil kembali kode yang ada di program dari proses Async
- Callback biasanya dibuat dalam bentuk function as parameter, dan parameter function tersebut akan dieksekusi saat proses Async selesai
- Dengan menggunakan Callback, program bisa menerima informasi yang dibutuhkan dari proses yang berjalan secara Async

### Apa itu AJAX?
- AJAX singkatan dari Asynchronous JavaScript and XML
- AJAX biasanya digunakan untuk mengambil atau mengirim data ke URL lain
- Untuk membuat AJAX, kita bisa menggunakan class XMLHttpRequest
- [AJAX](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

### Response Status
- AJAX adalah proses komunikasi Client dan Server
- Dalam komunikasi Client dan Server, kita tidak bisa selalu menganggap proses tersebut akan berjalan lancar.
- Akan ada banyak hal-hal yang bisa mengganggu proses AJAX yang bisa menyebabkan error, seperti; koneksi internet bermasalah, error dari server, data dari client tidak valid, dan lain-lain.
- Server biasanya akan mengirimkan HTTP Status Code yang sesuai dengan jenis response nya, seperti yang sudah dibahas di materi HTTP
- Untuk mengetahui status response dari Server, kita bisa menggunakan property status
- [ Response Status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status)

### Hookbin
- Sebelum kita melanjutkan belajar AJAX, kita perlu bantuan Server sebagai tujuan pengiriman data di AJAX
- Kita akan menggunakan salah satu website yang gratis dan lumayan populer untuk menerima data AJAX yang kita kirim, yaitu Hookbin
- Hookbin adalah aplikasi yang bisa digunakan untuk menerima request HTTP dan menyimpan datanya, dengan ini kita bisa menggunakan Hookbin untuk melihat detail dari data AJAX yang kita kirim
- [Hookbin](https://hookbin.com/)

### Mengirim Data dengan AJAX
- Saat kita menggunakan AJAX, biasanya bukan hanya untuk mengambil data dari Server
- Kadang kita juga ingin mengirim data dari Client ke Server, misalnya kita membaca semua data di Web Form, lalu mengirimkan ke Server menggunakan AJAX
- Untuk melakukan ini, kita bisa menambahkan parameter data yang akan kita kirim pada method send() milik XMLHttpRequest
- [mengirim data dengan ajax](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)

### URL Search Param
- Selain format JSON, kadang saat mengirim data menggunakan AJAX, kita hanya mengirim dalam bentuk Query Parameter
- Pada kasus ini, kita bisa saja mengubah url nya dengan menambahkan Query Parameter, namun ada cara yang lebih mudah, yaitu menggunakan object URLSearchParam
- Kita bisa memanfaatkan object URLSearchParam sebelum membuat URL
- [URL Search Param](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams )

### Upload File dengan AJAX
- Selain menggunakan JSON, Query Param, Form, kadang kita butuh mengirim file ke Server
- Untuk mengirim file ke Server, kita perlu menggunakan object Form Data, lalu kita perlu menambahkan object File ke dalam FormData tersebut
- [link](https://developer.mozilla.org/en-US/docs/Web/API/FormData )
- [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file )
- [link](https://developer.mozilla.org/en-US/docs/Web/API/File )
- [link](https://developer.mozilla.org/en-US/docs/Web/API/FileList) 

### Apa itu Promise?
- Promise merupakan proxy untuk sebuah nilai di masa depan (Future) yang belum diketahui saat pembuatan Promise tersebut.
- Biasa Promise digunakan sebagai proxy untuk proses Async.
- Penggunaan Promise sangat mudah, dan lebih mirip dengan kode Synchronous.
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )


### Fetch API
- Fetch API merupakan fitur baru sebagai alternatif AJAX
- Saat menggunakan AJAX, kita perlu menggunakan Callback untuk menerima response atau data dari Server, sedangkan Fetch API sudah menggunakan Promise, sehingga penggunaan Fetch API lebih mudah dibandingkan AJAX
- Hampir semua browser modern sekarang sudah mendukung menggunakan Fetch API
- Apa yang bisa kita lakukan di AJAX, bisa juga kita lakukan di Fetch API
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API )

### Async Await
- Async Await adalah fitur di JavaScript yang digunakan untuk mempermudah proses pembuatan kode Promise.
- Dengan menggunakan Async Await, kita bisa membuat kode Asynchronous dengan gaya Synchronous

### Thread di JavaScript
- JavaScript adalah Single Thread (Single Proses), artinya walaupun proses yang kita buat adalah Async, tapi tetap akan dijalankan dalam Thread (Proses) yang sama.
- Kemampuan satu Thread dalam mengelola beberapa pekerjaan, dinamakan Concurrent.
- Kemampuan menjalankan beberapa Thread untuk mengelola satu atau lebih pekerjaan, dinamakan Paralel. 
- Dan untuk membuat proses secara Paralel, kita bisa menggunakan Web Worker

## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)