package lhjj.dbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by Administrator on 2017/5/16 0016.
 */
public class DatabaseConnection {
    private static final String DBDRIVER = "com.mysql.jdbc.Driver";
    private static final String DBURL = "jdbc:mysql://localhost:3306/ajax";
    private static final String USER = "root";
    private static final String PASSWORD = "151001lhaijj13";

    private Connection conn;

    public DatabaseConnection() {
        try {
            Class.forName(DBDRIVER);
            conn = DriverManager.getConnection(DBURL, USER, PASSWORD);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Connection getConnection() {
        return this.conn;
    }

    public void close() {
        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
