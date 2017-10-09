package lhjj.service.impl;

import lhjj.dbc.DatabaseConnection;
import lhjj.factory.DAOFactory;
import lhjj.service.IAdminFrontService;
import lhjj.vo.Admin;

import java.sql.Connection;

public class AdminFrontServiceImpl implements IAdminFrontService {
    Connection conn=new DatabaseConnection().getConnection();

    @Override
    public boolean insert(Admin vo) throws Exception {
        try {
            return DAOFactory.getAdminDAOImpl(conn).doCreate(vo);
        } catch (Exception e) {
            throw e;
        } finally {
            conn.close();
        }
    }

    @Override
    public boolean findById(String id) throws Exception {
        try {
            if (DAOFactory.getAdminDAOImpl(conn).findById(id) != null) {
                return true;
            }
        } catch (Exception e) {
            throw e;
        } finally {
            conn.close();
        }
        return false;
    }
}
