const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    bookId: String!
    authors: String
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth{
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input BookInput{
    bookId: String!
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(input: BookInput ): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;