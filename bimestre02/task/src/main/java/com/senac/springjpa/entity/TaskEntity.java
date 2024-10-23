package com.senac.springjpa.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "task")
public class TaskEntity {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    private String title;
    private String description;

    @CreationTimestamp
    private Date creationDate;
    @CreationTimestamp
    private Date completionDate;
}