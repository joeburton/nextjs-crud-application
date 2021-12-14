# NextJS Apollo App

This is a first stab at setting up GraphQL and Apollo with NextJS pages and pages/api, it's not a work of art.

### https://github.com/joeburton?tab=repositories

---

### **_GraphQL Queries_**

### https://studio.apollographql.com/sandbox/explorer

```
query Query {
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
