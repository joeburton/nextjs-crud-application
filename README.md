# Developer Details CRUD Application

## In memory CRUD application built using React.js, Next.js, Apollo and GraphQL.

<br />

> View the working app here hosted on Vercel [Developer Details CRUD App](https://nextjs-crud-application.vercel.app/)

<br />

<img width="740" alt="developer-details" src="https://user-images.githubusercontent.com/1738659/146037052-2a602b31-7bee-4233-bc91-17219ac67b69.png">
<br />
<br />

> The pipeline/ build is managed through GitHub workflows/actions .github/workflows/deploy.yml [View Action](https://github.com/joeburton/nextjs-crud-application/blob/minor-refactor/.github/workflows/deploy.yml)

<br />

### Tech tasks

- [x] Add unit tests for front-end components
- [x] Add cypress end-to-end tests
- [x] Add pipeline to deploy to staging and production using .github/workflows
- [x] Run unit tests and end-to-end tests when pushing to master or creating pull_requests pointing to master .github/workflows
- [ ] Add tests for next.js/pages
- [ ] Add tests for graphql API
- [ ] Make components/ pages accessible
- [ ] Connect to database rather than in memory data
- [ ] Add next lint - check build for details

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
