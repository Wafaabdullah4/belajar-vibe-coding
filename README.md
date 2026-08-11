# Belajar Vibe Coding - Bun + ElysiaJS + Drizzle ORM + MySQL

Project backend REST API modern yang dibangun menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## 🛠️ Stack Teknologi
- **Runtime**: Bun (v1.3+)
- **Framework**: ElysiaJS
- **ORM**: Drizzle ORM
- **Database Driver**: MySQL2

---

## 🚀 Panduan Memulai

### 1. Install Dependensi
```bash
bun install
```

### 2. Environment Variables
Buat file `.env` berdasarkan `.env.example`:
```bash
cp .env.example .env
```

### 3. Menjalankan Server Development
```bash
bun run dev
```
Server akan aktif di `http://localhost:3000`.

---

## 🗄️ Database Commands

- **Generate Migrasi**:
  ```bash
  bun run db:generate
  ```
- **Push Skema ke Database**:
  ```bash
  bun run db:push
  ```
- **Drizzle Studio (GUI)**:
  ```bash
  bun run db:studio
  ```
