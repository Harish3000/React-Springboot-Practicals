package com.spring.project.service;

import com.spring.project.model.Post;
import com.spring.project.repository.PostRepository;
import com.spring.project.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    public Post addPost(Post post) {
        List<Post> posts = postRepository.findAll();

        String newPostId;
        if (posts.isEmpty()) {
            newPostId = "ID001";
        } else {

            List<String> sortedIds = posts.stream()
                    .map(Post::getPostId)
                    .sorted()
                    .collect(Collectors.toList());
            String lastId = sortedIds.get(sortedIds.size() - 1);
            int idNumber = Integer.parseInt(lastId.substring(2)) + 1;
            newPostId = String.format("ID%03d", idNumber);
        }

        post.setPostId(newPostId);
        return postRepository.save(post);
    }

    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostByPostId(String postId) {
        Optional<Post> post = postRepository.findById(postId);
        return post.orElse(null);
    }

    public long countCommentsByPostId(String postId) {
        return commentRepository.countByPostId(postId);
    }
}
