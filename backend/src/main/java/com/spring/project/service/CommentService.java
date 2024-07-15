package com.spring.project.service;

import com.spring.project.model.Comment;
import com.spring.project.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CommentService {

    @Autowired
    private CommentRepository repository;

    public Comment addComment(Comment comment) {
        comment.setCommentId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(comment);
    }

    public List<Comment> findAllComments() {
        return repository.findAll();
    }

    public Comment getCommentByCommentId(String CommentId) {
        Optional<Comment> Comment = repository.findById(CommentId);
        return Comment.orElse(null);
    }



}
