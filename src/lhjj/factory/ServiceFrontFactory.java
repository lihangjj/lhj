package lhjj.factory;

import lhjj.service.impl.AdminFrontServiceImpl;

public class ServiceFrontFactory {
    public static AdminFrontServiceImpl getAdminServiceFrontImpl() {
        return new AdminFrontServiceImpl();
    }

}
