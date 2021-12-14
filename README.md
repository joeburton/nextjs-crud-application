## Developer Details CRUD Application

Basic in memory CRUD application built using React, NextJS, Appollo and GraphQL, it's not a work of art.

---

### **_GraphQL Queries_**

### https://studio.apollographql.com/sandbox/explorer

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
{ "id": '234234-234234', "name": "James Brown", "skills": "Jazz"}
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
{ "id": '234234-234234', "name": "James Brown", "skills": "Jazz"}
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
{ "id": 3}
```
