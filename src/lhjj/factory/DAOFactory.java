package lhjj.factory;

import lhjj.dao.impl.AdminDAOImpl;

import java.sql.Connection;

public class DAOFactory {
    public static AdminDAOImpl getAdminDAOImpl(Connection conn) throws Exception {
        return new AdminDAOImpl(conn);
    }

}
