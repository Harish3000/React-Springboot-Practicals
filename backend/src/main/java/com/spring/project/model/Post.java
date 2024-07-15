package com.spring.project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "post")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    private String postId;
    private String title;
    private String description;
    private String color;
}