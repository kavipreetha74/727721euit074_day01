package com.example.controller;

import com.example.model.CarSales;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CarSalesDAO {
    private Connection connection;

    public CarSalesDAO(Connection connection) {
        this.connection = connection;
    }

    public void addCarSales(CarSales carSales) throws SQLException {
        String query = "INSERT INTO CarSales (salesId, customerName, customerNumber, carId, brandName, modelName, carType, dateOfPurchase, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, carSales.getSalesId());
            statement.setString(2, carSales.getCustomerName());
            statement.setString(3, carSales.getCustomerNumber());
            statement.setInt(4, carSales.getCarId());
            statement.setString(5, carSales.getBrandName());
            statement.setString(6, carSales.getModelName());
            statement.setString(7, carSales.getCarType());
            statement.setString(8, carSales.getDateOfPurchase());
            statement.setDouble(9, carSales.getPrice());
            statement.executeUpdate();
        }
    }

    public List<CarSales> getAllCarSales() throws SQLException {
        List<CarSales> carSalesList = new ArrayList<>();
        String query = "SELECT * FROM CarSales";
        try (PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                int salesId = resultSet.getInt("salesId");
                String customerName = resultSet.getString("customerName");
                String customerNumber = resultSet.getString("customerNumber");
                int carId = resultSet.getInt("carId");
                String brandName = resultSet.getString("brandName");
                String modelName = resultSet.getString("modelName");
                String carType = resultSet.getString("carType");
                String dateOfPurchase = resultSet.getString("dateOfPurchase");
                double price = resultSet.getDouble("price");
                carSalesList.add(new CarSales(salesId, customerName, customerNumber, carId, brandName, modelName, carType, dateOfPurchase, price));
            }
        }
        return carSalesList;
    }

    public CarSales getCarSalesById(int salesId) throws SQLException {
        String query = "SELECT * FROM CarSales WHERE salesId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, salesId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    String customerName = resultSet.getString("customerName");
                    String customerNumber = resultSet.getString("customerNumber");
                    int carId = resultSet.getInt("carId");
                    String brandName = resultSet.getString("brandName");
                    String modelName = resultSet.getString("modelName");
                    String carType = resultSet.getString("carType");
                    String dateOfPurchase = resultSet.getString("dateOfPurchase");
                    double price = resultSet.getDouble("price");
                    return new CarSales(salesId, customerName, customerNumber, carId, brandName, modelName, carType, dateOfPurchase, price);
                }
            }
        }
        return null;
    }

    public void updateCarSales(CarSales carSales) throws SQLException {
        String query = "UPDATE CarSales SET customerName = ?, customerNumber = ?, carId = ?, brandName = ?, modelName = ?, carType = ?, dateOfPurchase = ?, price = ? WHERE salesId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, carSales.getCustomerName());
            statement.setString(2, carSales.getCustomerNumber());
            statement.setInt(3, carSales.getCarId());
            statement.setString(4, carSales.getBrandName());
            statement.setString(5, carSales.getModelName());
            statement.setString(6, carSales.getCarType());
            statement.setString(7, carSales.getDateOfPurchase());
            statement.setDouble(8, carSales.getPrice());
            statement.setInt(9, carSales.getSalesId());
            statement.executeUpdate();
        }
    }

    public void deleteCarSales(int salesId) throws SQLException {
        String query = "DELETE FROM CarSales WHERE salesId = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, salesId);
            statement.executeUpdate();
        }
    }
}
