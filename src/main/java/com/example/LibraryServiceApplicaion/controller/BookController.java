package com.example.LibraryServiceApplicaion.controller;
import com.example.LibraryServiceApplicaion.model.Book;
import com.example.LibraryServiceApplicaion.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/{bookId}")
    public Book getBook(@PathVariable int bookId){

        return bookService.getBook(bookId);
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable int bookId){

        bookService.deleteBook(bookId);
    }
    @PostMapping
    public Book createBook(@RequestBody  Book book){

        return bookService.createBook(book);
    }

    @PutMapping("/{bookId}")
    public boolean updateBook(@PathVariable int bookId, @RequestBody Book book) {
        return bookService.updateBook(bookId, book);
    }
}