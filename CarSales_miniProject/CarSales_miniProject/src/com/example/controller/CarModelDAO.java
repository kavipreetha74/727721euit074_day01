package com.example.controller;

import com.example.model.CarModel;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CarModelDAO {
    private Connection connection;

    public CarModelDAO(Connection connection) {
        this.connection = connection;
    }

    public void addCarModel(CarModel carModel) throws SQLException {
        String query = "INSERT INTO CarModel (carId, brandName, modelName, modelNumber, yearOfModel) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carModel.getCarId());
            statement.setString(2, carModel.getBrandName());
            statement.setString(3, carModel.getModelName());
            statement.setString(4, carModel.getModelNumber());
            statement.setInt(5, carModel.getYearofModel());
            statement.executeUpdate();
        }
    }

    public List<CarModel> getAllCarModels() throws SQLException {
        List<CarModel> carModels = new ArrayList<>();
        String query = "SELECT * FROM CarModel";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int carId = resultSet.getInt("carId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String modelNumber = resultSet.getString("modelNumber");
                int yearOfModel = resultSet.getInt("yearOfModel");
                carModels.add(new CarModel(carId, brandName, modelName, modelNumber, yearOfModel));
            }
        }
        return carModels;
    }

    public CarModel getCarModelById(int carId) throws SQLException {
        String query = "SELECT * FROM CarModel WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    String brandName = resultSet.getString("brandName");
                    String modelName = resultSet.getString("modelName");
                    String modelNumber = resultSet.getString("modelNumber");
                    int yearOfModel = resultSet.getInt("yearOfModel");
                    return new CarModel(carId, brandName, modelName, modelNumber, yearOfModel);
                }
            }
        }
        return null;
    }

    public void updateCarModel(CarModel carModel) throws SQLException {
        String query = "UPDATE CarModel SET brandName = ?, modelName = ?, modelNumber = ?, yearOfModel = ? WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, carModel.getBrandName());
            statement.setString(2, carModel.getModelName());
            statement.setString(3, carModel.getModelNumber());
            statement.setInt(4, carModel.getYearofModel());
            statement.setInt(5, carModel.getCarId());
            statement.executeUpdate();
        }
    }

    public void deleteCarModel(int carId) throws SQLException {
        String query = "DELETE FROM CarModel WHERE carId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carId);
            statement.executeUpdate();
        }
    }
}
