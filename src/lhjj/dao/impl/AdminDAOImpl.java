package lhjj.dao.impl;

import lhjj.dao.AbstractDAOImpl;
import lhjj.dao.IAdminDAO;
import lhjj.vo.Admin;

import java.sql.Connection;
import java.util.List;
import java.util.Set;

public class AdminDAOImpl extends AbstractDAOImpl<String, Admin> implements IAdminDAO {
    public AdminDAOImpl(Connection conn) throws Exception {
        super(conn, new Admin());
    }


}
