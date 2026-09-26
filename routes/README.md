# Manajemen Data Siswa

## 1. Nama Aplikasi

**Manajemen Data Siswa**

---

## 2. Deskripsi Aplikasi

Manajemen Data Siswa adalah aplikasi web yang digunakan untuk mengelola data siswa. Aplikasi ini dibuat dengan menerapkan konsep **REST API** yang menghubungkan frontend dengan backend.

Aplikasi dapat digunakan untuk menampilkan, menambahkan, mengubah, dan menghapus data siswa. Data yang dikelola meliputi **NIS, nama, kelas, jurusan, dan alamat**.

Frontend menggunakan **JavaScript Fetch API** untuk berkomunikasi dengan REST API, sedangkan backend menggunakan **Node.js dan Express.js**. Data siswa disimpan dalam database **MySQL**.

Selain fitur CRUD, aplikasi juga memiliki fitur pencarian berdasarkan nama, NIS, kelas, atau jurusan serta filter berdasarkan kelas.

---

## 3. Teknologi yang Digunakan

Teknologi yang digunakan dalam aplikasi ini adalah:

* **Node.js** — digunakan untuk menjalankan backend.
* **Express.js** — digunakan untuk membuat server dan REST API.
* **MySQL** — digunakan sebagai database untuk menyimpan data siswa.
* **HTML** — digunakan untuk membuat struktur halaman frontend.
* **CSS** — digunakan untuk mengatur tampilan aplikasi.
* **JavaScript** — digunakan untuk membuat interaksi dan menghubungkan frontend dengan API.
* **Fetch API** — digunakan untuk melakukan request dari frontend ke REST API.
* **Tailwind CSS** — digunakan untuk membantu membuat tampilan antarmuka aplikasi.
* **Git** — digunakan untuk version control.
* **GitHub** — digunakan untuk menyimpan repository project.
* **Postman** — digunakan untuk melakukan pengujian API.

---

## 4. Cara Menjalankan Backend

### Persyaratan

Pastikan sudah menginstall:

* Node.js
* npm
* MySQL

### Langkah-langkah

1. Clone repository project dari GitHub.

```bash
git clone https://github.com/nonopcintakucing/student-management-rest-api.git
```

2. Masuk ke folder project.

```bash
cd student-management-rest-api
```

3. Install dependency yang dibutuhkan.

```bash
npm install
```

4. Pastikan MySQL sudah berjalan dan database yang digunakan adalah:

```text
db_student
```

5. Jalankan backend menggunakan Nodemon dengan perintah:

```bash
npm run dev
```

6. Jika berhasil, server akan berjalan pada:

```text
http://localhost:3000
```

---

## 5. Cara Menjalankan Frontend

Frontend terdapat di dalam folder `frontend`.

Setelah backend berhasil dijalankan, frontend dapat dibuka melalui browser dengan alamat:

```text
http://localhost:3000
```

Frontend akan ditampilkan melalui Express.js dan menggunakan **Fetch API** untuk mengambil serta mengirim data ke REST API.

Pengguna dapat melakukan:

* Melihat data siswa.
* Menambahkan data siswa.
* Mengubah data siswa.
* Menghapus data siswa.
* Mencari data siswa.
* Memfilter data berdasarkan kelas.

---

## 6. Daftar Endpoint API

Base URL:

```text
http://localhost:3000/api
```

| Method | Endpoint           | Fungsi                                |
| ------ | ------------------ | ------------------------------------- |
| GET    | `/api/siswa`     | Menampilkan seluruh data siswa        |
| GET    | `/api/siswa/:id` | Menampilkan data siswa berdasarkan ID |
| POST   | `/api/siswa`     | Menambahkan data siswa                |
| PUT    | `/api/siswa/:id` | Mengubah data siswa berdasarkan ID    |
| DELETE | `/api/siswa/:id` | Menghapus data siswa berdasarkan ID   |

### GET Semua Data Siswa

```text
GET /api/siswa
```

Digunakan untuk mengambil seluruh data siswa dari database.

### GET Data Berdasarkan ID

```text
GET /api/siswa/:id
```

Digunakan untuk mengambil satu data siswa berdasarkan ID.

### POST Data Siswa

```text
POST /api/siswa
```

Digunakan untuk menambahkan data siswa baru.

Contoh data:

```json
{
  "nis": "12345678",
  "nama": "Budi Santoso",
  "kelas": "XII RPL",
  "jurusan": "RPL",
  "alamat": "Tangerang Selatan"
}
```

### PUT Data Siswa

```text
PUT /api/siswa/:id
```

Digunakan untuk mengubah data siswa berdasarkan ID.

### DELETE Data Siswa

```text
DELETE /api/siswa/:id
```

Digunakan untuk menghapus data siswa berdasarkan ID.

---

## 7. Screenshot Aplikasi

### Tampilan Aplikasi

Masukkan screenshot tampilan utama aplikasi Manajemen Data Siswa di bawah ini.

**Screenshot Frontend:**

![Tampilan Aplikasi](screenshots/frontend.png)

### Pengujian REST API

Masukkan screenshot hasil pengujian endpoint REST API menggunakan Postman atau Thunder Client.

**Screenshot Pengujian API:**

![Pengujian REST API](screenshots/api-testing.png)

> Nama dan lokasi file screenshot dapat disesuaikan dengan file gambar yang dimasukkan ke repository GitHub.

---

## 8. Identitas Pembuat

**Nama:** Novita Damayanti

**Mata Pelajaran:** Pemrograman Web

**Nama Project:** Manajemen Data Siswa

**Repository GitHub:**
https://github.com/nonopcintakucing/student-management-rest-api
