package com.spring.project.repository;

import com.spring.project.model.Comment;
import com.spring.project.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepository extends MongoRepository<Comment,String> {
    long countByPostId(String postId);
}