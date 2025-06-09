# 🐛 Issue Tracker

**Live:** [issue-tracker-production-437f.up.railway.app](https://issue-tracker-production-437f.up.railway.app)

Простий веб-застосунок для відстеження багів та задач у стилі Jira, побудований на стеку **Next.js**, **Prisma** та **Railway**. Підходить для особистих проектів або невеликих команд.

---

## 🛠️ Технології

- **Next.js 13+ (App Router)** — SSR + API Routes
- **TypeScript** — статична типізація
- **Prisma ORM** — для доступу до бази даних (MySQL)
- **Tailwind CSS / Radix UI** — UI-компоненти
- **NextAuth.js** — аутентифікація через Google
- **Railway** — хостинг backend і MySQL

---

## 🚀 Функціонал

- 🔐 Авторизація через Google (OAuth)
- 📊 Dashboard з підсумками задач (відкриті, в роботі, закриті)
- 📈 Графік статусів задач
- 🗂️ Перелік останніх задач
- 📝 CRUD-операції з задачами (створення, редагування, зміна статусу)
- 📦 Серверна рендеринг і кешування сторінок
- 🌐 Повна інтеграція з Railway (деплой, БД, змінні середовища)

---

## 🧪 Приклад задач

У БД попередньо зашито тестові задачі з різними статусами (`OPEN`, `IN_PROGRESS`, `CLOSED`), які відображаються на головній сторінці.

---

## 🧑‍💻 Розробка локально

```bash
git clone https://github.com/your-username/issue-tracker.git
cd issue-tracker

# Встановити залежності
npm install

# Запустити Prisma
npx prisma generate
npx prisma migrate dev --name init

# Запуск проекту
npm run dev


.env.example

DATABASE_URL="mysql://root:password@localhost:3306/issue-tracker"
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```
