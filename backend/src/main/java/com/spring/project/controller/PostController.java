package com.spring.project.controller;

import com.spring.project.model.Post;
import com.spring.project.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post createPost(@RequestBody Post post) {
        return service.addPost(post);
    }

    @GetMapping
    public List<Post> getPosts() {
        return service.findAllPosts();
    }

    @GetMapping("/{PostId}")
    public Post getPost(@PathVariable String PostId) {
        return service.getPostByPostId(PostId);
    }

    @GetMapping("/{PostId}/comments/count")
    public long getCommentCount(@PathVariable String PostId) {
        return service.countCommentsByPostId(PostId);
    }
}
