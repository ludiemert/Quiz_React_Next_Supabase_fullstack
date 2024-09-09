<h2 align="center"> 💻 Quiz_React_Next_Supabase_fullstack  </h2>  <br>
<h4> A quiz project developed with React.js, Tailwind CSS, JavaScript and Supabase. </br> The aim is to create a series of questions 
  and answers where users can choose their answers and the information is stored in Supabase, including name and e-mail.</h4>

<h4 align="center"> 🥰Quiz - Company </h4>
<h3 align="center"><img src="/public/img_proj/home_quiz_front.png" heigh="70%" width="70%"></h3>

---

<h3 align="center"> ### 📋 Summary </h3>
- Prerequisites </br>
- Project configuration </br>
- Running the Project </br>
- Project Structure </br>
- Technologies used </br>
- Contribution </br>
- License </br>

---

<h3 align="center"> ### 📋 Prerequisites </h3>
- Before you start, make sure you have the following installed on your system: </br>
- Node.js (recommended LTS version) </br>
- npm or Yarn </br>
- Supabase (account and project configured) </br>

---

<h3 align="center"> ### 🚀 Project configuration </h3>

> Clone the project repository
```bash
git clone https://github.com/seu-usuario/Quiz_React_Next_Supabase_fullstack.git
```

> Go to the project folder and install the dependencies
```bash
cd Quiz_React_Next_Supabase_fullstack
npm install
OR
yarn install
```

> Configure the environment variables
> Create an .env.local file in the root of the project and add your Supabase credentials:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

> Replace your_supabase_url and your_supabase_anon_key with the values provided by Supabase.

```
---

<h3 align="center"> ### 📋 Configure Supabase </h3>

> Create a table in Supabase to store the quiz answers. Example structure:
```bash
create table responses (
  id serial primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  answers jsonb not null
);

```

<h4 align="center"> 🥰Quiz - table - SUPABASE </h4>
<h3 align="center"><img src="/public/img_proj/home__table_02_back.png" heigh="70%" width="70%"></h3>


---

<h4 align="center"> 🥰Quiz - Running the Project </h4>

> To start the development server, use the command:
```bash
npm run dev
OR
yarn dev
```
---

<h4 align="center"> 🥰Quiz - FrontEnd Project </h4>

<h3 align="center"><img src="/public/img_proj/quiz_1_front.png" heigh="70%" width="70%"></h3>

---

<h3 align="center"><img src="/public/img_proj/quiz_2_front.png" heigh="70%" width="70%"></h3>

---

<h3 align="center"><img src="/public/img_proj/quiz_3_front.png" heigh="70%" width="70%"></h3>

---

<h3 align="center"><img src="/public/img_proj/quiz_4_front.png" heigh="70%" width="70%"></h3>

---

<h4 align="center"> 🥰Quiz - BackEnd Project </h4>

---

<h3 align="center"><img src="/public/img_proj/home_01_back.png" heigh="70%" width="70%"></h3>


---

<h3 align="center"><img src="/public/img_proj/home__result_03_back.png" heigh="70%" width="70%"></h3>


---

<h3 align="center"><img src="/public/img_proj/home__table_02_back.png" heigh="70%" width="70%"></h3>

---
<h3 align="center"><img src="/public/img_proj/fim.png" heigh="70%" width="70%"></h3>

---


<h3 align="center"> Project structure </h3>

 - pages/ - Contains the application pages. </br>
 - components/ - Contains reusable components.</br>
 - styles/ - Contains style files, including Tailwind CSS. </br>
 - utils/ - Contains auxiliary functions and Supabase settings. </br>
 - public/ - Contains static files, such as images. </br>

---

### 🛠️ Technologies used

- React.js => Library for building user interfaces. <br>
- Tailwind CSS  => CSS framework for fast and responsive styling. <br>
- JavaScript  => Programming language used in development. <br>
- Supabase  => Backend as a service (BaaS) for database and authentication. <br>

---

### 🚀 Requirements for use

1. NodeJS installed;
2. Package manager installed (npm, yarn or pnpm);

---

### 📦 Contributing

> If you want to contribute to this project, follow these steps:

 - Fork this repository.
 - Create a branch for your feature (git checkout -b feature/feature-name).
 - Commit your changes (git commit -am 'Add new feature').
 - Send the branch to the repository (git push origin feature/feature-name).
 - Create a Pull Request.


### 🔗 Useful links

- **Project Repository:** [https://github.com/ludiemert/Quiz_React_Next_Supabase_fullstack](https://github.com/ludiemert/Quiz_React_Next_Supabase_fullstack)
- 
#### ✒️ Authors

- #### My LinkedIn - [![Linkedin Badge](https://img.shields.io/badge/-LucianaDiemert-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucianadiemert/)](https://www.linkedin.com/in/lucianadiemert/)

#### Contact

<img align="left" src="https://www.github.com/ludiemert.png?size=150">

#### [**Luciana Diemert**](https://github.com/ludiemert)

🛠 `Front-end` `Back-end`Developer <br>
📍 São Jose dos Campos – SP - Brazil

<a href="https://www.linkedin.com/in/lucianadiemert" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;
<a href="mailto:lucianadiemert@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="25"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="LuDiem#0654" alt="Discord Badge" height="25"></a>&nbsp;
<a href="https://www.github.com/ludiemert" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="25"></a>&nbsp;

<br clear="left"/>

------------------

