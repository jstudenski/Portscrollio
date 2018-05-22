import axios from "axios";

export default {
  // Gets all books
  getSamples: function() {
    return axios.get("/api/samples");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/samples/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/samples/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/samples", bookData);
  }
};
