package com.senac.springjpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.springjpa.entity.TaskEntity;

/**
 * TaskRepository
 */
@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long>{
    
}