# Developer Details CRUD Application

## Basic in memory CRUD application built using React.js, Next.js, Apollo and GraphQL, it's not a work of art.

<br />

> View the working app here hosted on Vercel [Developer Details CRUD App](https://nextjs-crud-application.vercel.app/)

<br />

<img width="558" alt="developer-details" src="https://user-images.githubusercontent.com/1738659/146010984-6c7fb191-8fb5-486b-8fb4-cf9097363122.png">

<br />

### Built With

- [Next.js](https://nextjs.org)
- [React.js](https://reactjs.org)
- [Apollo Client](https://www.apollographql.com/docs/react)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- [apollo-server-micro](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-micro)

### Deployed to Vercel

- [Vercel.com](https://vercel.com)

---

### **_GraphQL Queries_**

> [GraphQL Studio](https://studio.apollographql.com/sandbox/explorer)

```
query GetDevelopers {
  developers {
    id
    name
    skills
  }
}
```

```
mutation AddDeveloper($id: String, $name: String, $skills: String) {
  addDeveloper(id: $id, name: $name, skills: $skills) {
    id
    name
    skills
  }
}

// variables
{ "id": 'fd66e955-10e9-4762-8847-14fbdc80e38a', "name": "James Brown", "skills": "Jazz"}
```

```
mutation EditDeveloper($id: String, $name: String, $skills: String) {
  editDeveloper(id: $id, name: $name, skills: $skills) {
    id
    name
    skills
  }
}

// variables
{ "id": 'fd66e955-10e9-4762-8847-14fbdc80e38a', "name": "James Brown", "skills": "Jazz"}
```

```
mutation DeleteDeveloper($id: String) {
  deleteDeveloper(id: $id) {
    id
    name
    skills
  }
}

// variables
{ "id": "fd66e955-10e9-4762-8847-14fbdc80e38a"}
```
