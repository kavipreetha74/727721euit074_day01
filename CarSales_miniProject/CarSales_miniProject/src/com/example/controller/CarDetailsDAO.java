package com.example.controller;

import com.example.model.CarDetails;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CarDetailsDAO {
    private Connection connection;

    public CarDetailsDAO(Connection connection) {
        this.connection = connection;
    }

    public void addCarDetails(CarDetails carDetails) throws SQLException {
        String query = "INSERT INTO CarDetails (carId, managerId, brandName, modelName, carType, milage, fuelType, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carDetails.getCarId());
            statement.setInt(2, carDetails.getManagerId());
            statement.setString(3, carDetails.getBrandName());
            statement.setString(4, carDetails.getModelName());
            statement.setString(5, carDetails.getCarType());
            statement.setDouble(6, carDetails.getMilage());
            statement.setString(7, carDetails.getFuelType());
            statement.setDouble(8, carDetails.getPrice());
            statement.executeUpdate();
        }
    }

    public List<CarDetails> getAllCarDetails() throws SQLException {
        List<CarDetails> carDetailsList = new ArrayList<>();
        String query = "SELECT * FROM CarDetails";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int carId = resultSet.getInt("carId");
                int managerId = resultSet.getInt("managerId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String carType = resultSet.getString("carType");
                double milage = resultSet.getDouble("milage");
                String fuelType = resultSet.getString("fuelType");
                double price = resultSet.getDouble("price");
                carDetailsList.add(new CarDetails(carId, managerId, brandName, modelName, carType, milage, fuelType, price));
            }
        }
        return carDetailsList;
    }

    public CarDetails getCarDetailsById(int carId) throws SQLException {
        String query = "SELECT * FROM CarDetails WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    int managerId = resultSet.getInt("managerId");
                    String brandName = resultSet.getString("brandName");
                    String modelName = resultSet.getString("modelName");
                    String carType = resultSet.getString("carType");
                    double milage = resultSet.getDouble("milage");
                    String fuelType = resultSet.getString("fuelType");
                    double price = resultSet.getDouble("price");
                    return new CarDetails(carId, managerId, brandName, modelName, carType, milage, fuelType, price);
                }
            }
        }
        return null;
    }

    public void updateCarDetails(CarDetails carDetails) throws SQLException {
        String query = "UPDATE CarDetails SET managerId = ?, brandName = ?, modelName = ?, carType = ?, milage = ?, fuelType = ?, price = ? WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carDetails.getManagerId());
            statement.setString(2, carDetails.getBrandName());
            statement.setString(3, carDetails.getModelName());
            statement.setString(4, carDetails.getCarType());
            statement.setDouble(5, carDetails.getMilage());
            statement.setString(6, carDetails.getFuelType());
            statement.setDouble(7, carDetails.getPrice());
            statement.setInt(8, carDetails.getCarId());
            statement.executeUpdate();
        }
    }

    public void deleteCarDetails(int carId) throws SQLException {
        String query = "DELETE FROM CarDetails WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carId);
            statement.executeUpdate();
        }
    }
}

