package com.example.controller;

import com.example.model.Manager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ManagerDAO {
    private Connection connection;

    public ManagerDAO(Connection connection) {
        this.connection = connection;
    }

    public void addManager(Manager manager) throws SQLException {
        String query = "INSERT INTO Manager (managerId, managerName, mobileNumber) VALUES (?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, manager.getManagerId());
            statement.setString(2, manager.getManagerName());
            statement.setString(3, manager.getMobileNumber());
            statement.executeUpdate();
        }
    }

    public List<Manager> getAllManagers() throws SQLException {
        List<Manager> managers = new ArrayList<>();
        String query = "SELECT * FROM Manager";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int managerId = resultSet.getInt("managerId");
                String managerName = resultSet.getString("managerName");
                String mobileNumber = resultSet.getString("mobileNumber");
                managers.add(new Manager(managerId, managerName, mobileNumber));
            }
        }
        return managers;
    }

    public Manager getManagerById(int managerId) throws SQLException {
        String query = "SELECT * FROM Manager WHERE managerId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, managerId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    String managerName = resultSet.getString("managerName");
                    String mobileNumber = resultSet.getString("mobileNumber");
                    return new Manager(managerId, managerName, mobileNumber);
                }
            }
        }
        return null;
    }

    public void updateManager(Manager manager) throws SQLException {
        String query = "UPDATE Manager SET managerName = ?, mobileNumber = ? WHERE managerId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, manager.getManagerName());
            statement.setString(2, manager.getMobileNumber());
            statement.setInt(3, manager.getManagerId());
            statement.executeUpdate();
        }
    }

    public void deleteManager(int managerId) throws SQLException {
        String query = "DELETE FROM Manager WHERE managerId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, managerId);
            statement.executeUpdate();
        }
    }
}
