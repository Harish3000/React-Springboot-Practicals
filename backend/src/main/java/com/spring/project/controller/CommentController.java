package com.spring.project.controller;

import com.spring.project.model.Comment;
import com.spring.project.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comment createComment(@RequestBody Comment comment){
        return service.addComment(comment);
    }

    @GetMapping
    public List<Comment> getComments() {
        return service.findAllComments();
    }


    @GetMapping("/{CommentId}")
    public Comment getComment(@PathVariable String CommentId){
        return service.getCommentByCommentId(CommentId);
    }

}